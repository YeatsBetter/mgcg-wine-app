import React, { useState, useEffect } from 'react';
import WineMap from './WineMap';
import { wineRegionsData } from './data/regions';
import { wineProducersData } from './data/producers';
import './App.css';
import { Wine, MapPin, Clock, Info, Globe, Sprout, Grape, ExternalLink, LogIn, LogOut, User, BookOpen, Save, X, ClipboardList, Utensils, Sparkles, ChevronDown, ChevronUp, Send, Waves, Filter, Droplets, ThermometerSun, Layers, CalendarDays, Ticket, Home, CalendarCheck, Heart, Camera, ScanLine, AlertCircle } from 'lucide-react';

// Firebase imports
import { auth, googleProvider, db, geminiModel } from './firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

const satData = {
  en: {
    title: "WSET Level 3 Systematic Approach to Tasting (SAT)",
    appearance: {
      title: "Appearance",
      items: [
        "Clarity: clear - hazy",
        "Intensity: pale - medium - deep",
        "Color (White): lemon-green - lemon - gold - amber - brown",
        "Color (Rosé): pink - salmon - orange",
        "Color (Red): purple - ruby - garnet - tawny - brown",
        "Other: legs/tears, deposit, petillance"
      ]
    },
    nose: {
      title: "Nose",
      items: [
        "Condition: clean - unclean",
        "Intensity: light - medium(-) - medium - medium(+) - pronounced",
        "Aroma characteristics: Primary, Secondary, Tertiary",
        "Development: youthful - developing - fully developed - past its best"
      ]
    },
    palate: {
      title: "Palate",
      items: [
        "Sweetness: dry - off-dry - medium-dry - medium-sweet - sweet - luscious",
        "Acidity: low - medium(-) - medium - medium(+) - high",
        "Tannin: low - medium(-) - medium - medium(+) - high",
        "Alcohol: low - medium - high",
        "Body: light - medium(-) - medium - medium(+) - full",
        "Flavor intensity: light - medium(-) - medium - medium(+) - pronounced",
        "Finish: short - medium(-) - medium - medium(+) - long"
      ]
    },
    conclusion: {
      title: "Conclusion",
      items: [
        "Quality: faulty - poor - acceptable - good - very good - outstanding",
        "Readiness for drinking: too young - can drink now, but has potential for aging - drink now: not suitable for aging or further aging - too old"
      ]
    }
  }
};

const aromaData = {
  primary: [
    { category: "Floral", examples: "Blossom, rose, violet" },
    { category: "Green Fruit", examples: "Apple, pear, gooseberry, grape" },
    { category: "Citrus Fruit", examples: "Lemon, lime, grapefruit" },
    { category: "Stone Fruit", examples: "Peach, apricot, nectarine" },
    { category: "Tropical Fruit", examples: "Banana, lychee, mango, melon, passion fruit, pineapple" },
    { category: "Red Fruit", examples: "Redcurrant, cranberry, raspberry, strawberry, red cherry, red plum" },
    { category: "Black Fruit", examples: "Blackcurrant, blackberry, bramble, blueberry, black cherry, black plum" },
    { category: "Herbaceous", examples: "Bell pepper, grass, tomato leaf, asparagus" },
    { category: "Herbal", examples: "Eucalyptus, mint, medicinal, lavender, fennel, dill" },
    { category: "Spice", examples: "Black/white pepper, liquorice" },
    { category: "Fruit Ripeness", examples: "Green fruit, ripe fruit, dried fruit, cooked fruit" }
  ],
  secondary: [
    { category: "Yeast (Lees, Autolysis)", examples: "Biscuits, bread, toast, pastry, brioche, cheese, yogurt" },
    { category: "MLF", examples: "Butter, cheese, cream" },
    { category: "Oak", examples: "Vanilla, cloves, nutmeg, coconut, butterscotch, toast, cedar, charred wood, smoke, chocolate, coffee, resin" }
  ],
  tertiary: [
    { category: "Deliberate Oxidation", examples: "Almond, marzipan, hazelnut, walnut, chocolate, coffee, caramel" },
    { category: "Fruit Development (White)", examples: "Dried apricot, marmalade, dried apple, dried banana" },
    { category: "Fruit Development (Red)", examples: "Fig, prune, tar, dried blackberry, dried plum" },
    { category: "Bottle Age (White)", examples: "Petrol, kerosene, honey, wax, ginger, toast" },
    { category: "Bottle Age (Red)", examples: "Leather, forest floor, earth, mushroom, game, tobacco, vegetal, savory, cedar, pencil shavings" }
  ]
};

const foodWinePrinciples = [
  { title: "Weight & Body Matching", desc: "Match the weight of the food with the body of the wine. Light dishes pair with light-bodied wines; rich, heavy dishes pair with full-bodied wines." },
  { title: "Acidity Interaction", desc: "High-acid wines work well with fatty or oily foods (cuts through richness) and with dishes containing acidity (e.g. tomato-based sauces)." },
  { title: "Sweetness Balance", desc: "Wine should be at least as sweet as the food. Sweet food makes dry wine taste harsh and bitter." },
  { title: "Tannin & Protein", desc: "Tannic red wines pair excellently with high-protein red meats. The protein softens the tannins, making the wine feel smoother." },
  { title: "Salt & Bitterness", desc: "Salt increases the perception of body and reduces bitterness. Avoid pairing very tannic or oaky wines with salty dishes." },
  { title: "Umami Caution", desc: "Umami-rich foods (aged cheese, mushrooms, soy) can make wines taste more bitter and astringent. Counter with sweeter or fruit-forward wines." },
  { title: "Flavour Bridges", desc: "Create harmony by matching flavours: oaky Chardonnay with butter-based sauces, herbal Sauvignon Blanc with herb-crusted dishes." },
  { title: "Regional Pairing", desc: "Classic local pairings have evolved over centuries for a reason — 'What grows together, goes together.'" }
];

const localPairingCache = {};

function App() {
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [user, setUser] = useState(null);
  const [filterGrape, setFilterGrape] = useState('All');

  const filteredFeatures = filterGrape === 'All'
    ? wineRegionsData.features
    : wineRegionsData.features.filter(f =>
      f.properties.grapes.some(g => g.name.toLowerCase().includes(filterGrape.toLowerCase()))
    );

  const activeData = {
    ...wineRegionsData,
    features: filteredFeatures
  };

  const currentHovered = hoveredRegion ? activeData.features.find(f => f.properties.name.split(' ')[0] === hoveredRegion.name.split(' ')[0])?.properties : null;
  const currentSelected = selectedRegion ? activeData.features.find(f => f.properties.name.split(' ')[0] === selectedRegion.name.split(' ')[0])?.properties : null;

  const activeRegion = currentSelected || currentHovered;

  const [isSATOpen, setIsSATOpen] = useState(false);
  const [activeSATTab, setActiveSATTab] = useState('methodology'); // 'methodology' or 'aroma'
  const [noteText, setNoteText] = useState("");
  const [isNotepadOpen, setIsNotepadOpen] = useState(false);
  const [isSavingNote, setIsSavingNote] = useState(false);
  const [userFootprints, setUserFootprints] = useState({});

  // AI Food & Wine Pairing states
  const [isPairingOpen, setIsPairingOpen] = useState(false);
  const [foodInput, setFoodInput] = useState('');
  const [pairingResults, setPairingResults] = useState(null);
  const [isPairingLoading, setIsPairingLoading] = useState(false);
  const [pairingError, setPairingError] = useState(null);
  const [showPrinciples, setShowPrinciples] = useState(false);
  const [showCurrents, setShowCurrents] = useState(false);
  const [isGrapeFilterOpen, setIsGrapeFilterOpen] = useState(false);

  // AI Label Scanner states
  const [isLabelScanOpen, setIsLabelScanOpen] = useState(false);
  const [labelImageData, setLabelImageData] = useState(null);   // { base64, mimeType, preview }
  const [labelAnalysis, setLabelAnalysis] = useState(null);
  const [isLabelLoading, setIsLabelLoading] = useState(false);
  const [labelError, setLabelError] = useState(null);
  const [scannedRegionName, setScannedRegionName] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userRef = doc(db, 'users', currentUser.uid);
        const docSnap = await getDoc(userRef);
        if (!docSnap.exists()) {
          await setDoc(userRef, {
            email: currentUser.email,
            displayName: currentUser.displayName,
            createdAt: new Date(),
            favorites: [],
            notes: { general: "" },
            footprints: {}
          });
          setUserFootprints({});
        } else {
          const data = docSnap.data();
          if (data.notes && data.notes.general) {
            setNoteText(data.notes.general);
          }
          if (data.footprints) {
            setUserFootprints(data.footprints);
          } else {
            setUserFootprints({});
          }
        }
      } else {
        setNoteText("");
        setIsNotepadOpen(false);
        setUserFootprints({});
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSaveNote = async () => {
    if (!user) return;
    setIsSavingNote(true);
    try {
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, { notes: { general: noteText } }, { merge: true });
    } catch (e) {
      console.error("Error saving note: ", e);
    }
    setIsSavingNote(false);
  };

  const handleToggleFootprint = async (regionId, type) => {
    if (!user) {
      alert("Please sign in first to mark your wine trail!");
      return;
    }
    const currentStatus = userFootprints[regionId]?.[type] || false;
    const newFootprints = {
      ...userFootprints,
      [regionId]: {
        ...userFootprints[regionId],
        [type]: !currentStatus
      }
    };
    setUserFootprints(newFootprints);

    try {
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, { footprints: newFootprints }, { merge: true });
    } catch (e) {
      console.error("Error saving footprint: ", e);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Login popup failed", error);
      alert("Login Error: " + error.message);
    }
  };

  const handleLogout = () => {
    signOut(auth);
  };

  const handlePairingRequest = async () => {
    if (!foodInput.trim()) return;

    const query = foodInput.trim().toLowerCase();
    if (localPairingCache[query]) {
      setPairingResults(localPairingCache[query]);
      return;
    }

    setIsPairingLoading(true);
    setPairingError(null);
    setPairingResults(null);
    try {
      const prompt = `You are a WSET Level 3 certified sommelier and food-wine pairing expert. A user wants to pair wine with the following food: "${foodInput.trim()}"

Analyze the food's key flavour characteristics (weight, fat, acidity, sweetness, umami, protein, dominant flavours) and recommend exactly 3 wines, ranked from most recommended to least.

For each wine, provide:
- Wine name (grape variety or style)
- Region of origin
- A brief 1-2 sentence reason explaining why it pairs well

Respond ONLY in this exact JSON format, no markdown, no code fences:
[{"rank":1,"wine":"...","region":"...","reason":"..."},{"rank":2,"wine":"...","region":"...","reason":"..."},{"rank":3,"wine":"...","region":"...","reason":"..."}]`;

      const result = await geminiModel.generateContent(prompt);
      const text = result.response.text().trim();
      // Clean potential markdown fences
      const cleanText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      const parsed = JSON.parse(cleanText);

      localPairingCache[query] = parsed;
      setPairingResults(parsed);
    } catch (err) {
      console.error('AI Pairing Error:', err);
      const rawError = (err.message || '').toLowerCase();

      let friendlyError = "The AI Sommelier is currently resting. Please try again in a moment. 🍷";

      if (rawError.includes('429') || rawError.includes('quota') || rawError.includes('exceeded')) {
        friendlyError = "Whoa! The AI Sommelier is overwhelmed (API Rate Limit). Please wait 1 minute and try again! 🍷";
      } else if (rawError.includes('500') || rawError.includes('503') || rawError.includes('high demand') || rawError.includes('overloaded')) {
        friendlyError = "The cellar is packed! Google's AI servers are currently experiencing high demand. Grab a glass and try again in a few seconds! 🍇";
      } else if (rawError.includes('network') || rawError.includes('fetch')) {
        friendlyError = "Network error. Please check your connection and try again.";
      }

      setPairingError(friendlyError);
    } finally {
      setIsPairingLoading(false);
    }
  };

  const handleLabelScan = async () => {
    if (!labelImageData) return;
    setIsLabelLoading(true);
    setLabelError(null);
    setLabelAnalysis(null);
    setScannedRegionName('');
    try {
      const prompt = `You are an expert sommelier and wine analyst with encyclopedic knowledge of global wine regions.
Analyze this wine label image and provide a detailed JSON response with the following fields:
- region: the wine-producing region (e.g. "Bordeaux", "Tuscany", "Napa Valley")
- country: the country
- winery: the winery/producer name if visible
- vintage: the vintage year if visible, or null
- grape: the primary grape variety or blend
- rating: estimated quality score out of 100 (based on producer/region reputation)
- drinking_window: drinking recommendation (e.g. "Ready now – 2030")
- description: 2–3 sentences about this producer and region
- food_pairing: array of 3 food pairing suggestions
- confidence: your confidence in the identification ("High", "Medium", or "Low")

Respond ONLY with a valid JSON object, no markdown, no explanation.`;

      const result = await geminiModel.generateContent([
        { text: prompt },
        { inlineData: { mimeType: labelImageData.mimeType, data: labelImageData.base64 } }
      ]);

      const text = result.response.text().trim();
      const cleanText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      const parsed = JSON.parse(cleanText);
      setLabelAnalysis(parsed);
      if (parsed.region) setScannedRegionName(parsed.region);
    } catch (err) {
      console.error('Label Scan Error:', err);
      const rawError = (err.message || '').toLowerCase();
      let friendlyError = 'Unable to analyze this label. Please try a clearer photo.';
      if (rawError.includes('429') || rawError.includes('quota')) {
        friendlyError = 'AI rate limit reached. Please wait a moment and try again. 🍷';
      } else if (rawError.includes('500') || rawError.includes('503')) {
        friendlyError = "Google's AI servers are busy right now. Try again in a few seconds! 🍇";
      }
      setLabelError(friendlyError);
    } finally {
      setIsLabelLoading(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      const base64 = dataUrl.split(',')[1];
      setLabelImageData({ base64, mimeType: file.type, preview: dataUrl });
      setLabelAnalysis(null);
      setLabelError(null);
      setScannedRegionName('');
    };
    reader.readAsDataURL(file);
  };

  // Exclusive panel toggle — opening one closes all others
  const togglePanel = (panel) => {
    const states = { pairing: isPairingOpen, currents: showCurrents, sat: isSATOpen, grape: isGrapeFilterOpen, scanner: isLabelScanOpen };
    const wasOpen = states[panel];
    setIsPairingOpen(false);
    setShowCurrents(false);
    setIsSATOpen(false);
    setIsGrapeFilterOpen(false);
    setIsLabelScanOpen(false);
    if (!wasOpen) {
      if (panel === 'pairing') setIsPairingOpen(true);
      if (panel === 'currents') setShowCurrents(true);
      if (panel === 'sat') setIsSATOpen(true);
      if (panel === 'grape') setIsGrapeFilterOpen(true);
      if (panel === 'scanner') setIsLabelScanOpen(true);
    }
  };

  return (
    <div className="app-container">
      {/* Top Left Floating Header */}
      <div
        className="glass-panel header-panel"
        style={{
          position: 'absolute',
          top: '24px',
          left: '24px',
          width: '380px',
          padding: '24px',
          zIndex: 1000,
          pointerEvents: 'auto'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Wine size={28} color="var(--accent-ruby)" />
              <h1 className="header-title" style={{ fontSize: '1.8rem', lineHeight: 1.2, color: 'var(--text-primary)', margin: 0 }}>Vino Atlas</h1>
            </div>
            <span className="header-subtitle" style={{
              fontSize: '0.65rem',
              color: 'var(--accent-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginTop: '6px',
              fontWeight: 700,
              whiteSpace: 'nowrap'
            }}>
              A MONET GLOBAL CONSULTING GROUP PRODUCT
            </span>
          </div>
        </div>

        <p className="header-desc" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '16px', lineHeight: 1.6, fontStyle: 'italic' }}>
          Welcome to the definitive digital cartography of the world's most prestigious wine regions.
          Explore the depths of history, terroir, and geography through an interactive viticultural lens.
        </p>


      </div>

      {/* Top Right Floating User Profile */}
      <div className="user-profile-area" style={{ position: 'absolute', top: '24px', right: '24px', zIndex: 1000 }}>
        {user ? (
          <div className="user-pill" style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--glass-bg)', padding: '6px 16px 6px 6px', borderRadius: '30px', border: '1px solid var(--glass-border)', backdropFilter: 'blur(12px)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <img
              src={user.photoURL || 'https://via.placeholder.com/40'}
              alt="User"
              style={{ width: 40, height: 40, borderRadius: '50%', border: '2px solid var(--accent-ruby)', objectFit: 'cover' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)' }}>{user.displayName?.split(' ')[0]}</span>
              <button
                onClick={handleLogout}
                style={{ background: 'transparent', border: 'none', color: 'var(--accent-ruby)', cursor: 'pointer', fontSize: '0.7rem', fontWeight: 700, padding: 0, textAlign: 'left', textTransform: 'uppercase' }}
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={handleLogin}
            className="login-btn"
            style={{
              width: '48px', height: '48px', borderRadius: '50%', background: 'var(--glass-bg)', border: '1px solid var(--accent-ruby)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(12px)',
              boxShadow: '0 4px 12px var(--accent-ruby-glow)', color: 'var(--accent-ruby)', transition: 'all 0.3s ease'
            }}
            title="Sign In"
            onMouseOver={(e) => { e.currentTarget.style.background = 'var(--accent-ruby)'; e.currentTarget.style.color = '#fff'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'var(--glass-bg)'; e.currentTarget.style.color = 'var(--accent-ruby)'; }}
          >
            <LogIn size={20} />
          </button>
        )}
      </div>

      {/* Right Side Detail Panel */}
      <div
        className="glass-panel detail-panel"
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          bottom: '24px',
          width: '460px',
          padding: '32px',
          zIndex: 1000,
          transform: activeRegion ? 'translateX(0)' : 'translateX(120%)',
          opacity: activeRegion ? 1 : 0,
          transition: 'var(--transition-spring)',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          pointerEvents: activeRegion ? 'auto' : 'none'
        }}
      >
        {activeRegion && (
          <>
            <button
              className="close-btn"
              onClick={() => { setSelectedRegion(null); setHoveredRegion(null); }}
              style={{ position: 'absolute', top: '16px', right: '16px', background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', zIndex: 10, padding: '4px' }}
              title="Close"
            >
              <X size={22} />
            </button>
            <div style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold)', marginBottom: '8px', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <MapPin size={16} />
                <span>{activeRegion.country}</span>
              </div>
              <h2 className="region-title" style={{ fontSize: '2.4rem', color: 'var(--accent-ruby)', marginBottom: '12px' }}>
                {activeRegion.name}
              </h2>
              <div style={{ display: 'flex', gap: '16px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Globe size={16} />
                  <span>{activeRegion.country}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                <button
                  onClick={() => handleToggleFootprint(activeRegion.id, 'visited')}
                  style={{
                    flex: 1,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    padding: '8px 16px', borderRadius: '24px',
                    background: userFootprints[activeRegion.id]?.visited ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)',
                    color: userFootprints[activeRegion.id]?.visited ? '#fff' : 'var(--text-primary)',
                    border: `1px solid ${userFootprints[activeRegion.id]?.visited ? 'var(--accent-gold)' : 'var(--glass-border)'}`,
                    boxShadow: userFootprints[activeRegion.id]?.visited ? '0 4px 12px rgba(212, 175, 55, 0.4)' : 'none',
                    fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.3s ease'
                  }}
                >
                  <MapPin size={16} fill={userFootprints[activeRegion.id]?.visited ? 'currentColor' : 'none'} color="currentColor" />
                  {userFootprints[activeRegion.id]?.visited ? 'Visited' : 'Mark as Visited'}
                </button>
                <button
                  onClick={() => handleToggleFootprint(activeRegion.id, 'wishlist')}
                  style={{
                    flex: 1,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    padding: '8px 16px', borderRadius: '24px',
                    background: userFootprints[activeRegion.id]?.wishlist ? 'var(--accent-ruby)' : 'rgba(255,255,255,0.1)',
                    color: userFootprints[activeRegion.id]?.wishlist ? '#fff' : 'var(--text-primary)',
                    border: `1px solid ${userFootprints[activeRegion.id]?.wishlist ? 'var(--accent-ruby)' : 'var(--glass-border)'}`,
                    boxShadow: userFootprints[activeRegion.id]?.wishlist ? '0 4px 12px rgba(121, 31, 56, 0.4)' : 'none',
                    fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.3s ease'
                  }}
                >
                  <Heart size={16} fill={userFootprints[activeRegion.id]?.wishlist ? 'currentColor' : 'none'} color="currentColor" />
                  {userFootprints[activeRegion.id]?.wishlist ? 'Wishlisted' : 'Add to Wishlist'}
                </button>
              </div>
            </div>

            <section>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold)', marginBottom: '12px', fontSize: '1.1rem' }}>
                <BookOpen size={18} /> History & Background
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1rem' }}>
                {activeRegion.history}
              </p>
            </section>

            <section>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold)', marginBottom: '12px', fontSize: '1.1rem' }}>
                <Info size={18} /> Geography & Climate
              </h3>
              {activeRegion.climate && (
                <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ flex: 1, background: 'rgba(255,255,255,0.4)', padding: '12px', borderRadius: '8px', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Droplets size={24} color="#3d8bcc" />
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 600 }}>Annual Rainfall</div>
                      <div style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 700 }}>{activeRegion.climate.rainfall}</div>
                    </div>
                  </div>
                  <div style={{ flex: 1, background: 'rgba(255,255,255,0.4)', padding: '12px', borderRadius: '8px', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <ThermometerSun size={24} color="#e84057" />
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 600 }}>Heat Degree Days</div>
                      <div style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 700 }}>{activeRegion.climate.gdd}</div>
                    </div>
                  </div>
                </div>
              )}
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1rem' }}>
                {activeRegion.geography}
              </p>
            </section>

            <section>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold)', marginBottom: '12px', fontSize: '1.1rem' }}>
                <Sprout size={18} /> Terroir & Soil
              </h3>
              {activeRegion.soil && (
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  {activeRegion.soil.map((s, idx) => (
                    <div key={idx} style={{ background: 'var(--glass-bg)', border: '1px solid var(--accent-gold)', color: 'var(--accent-gold)', padding: '4px 12px', borderRadius: '16px', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Layers size={14} /> {s}
                    </div>
                  ))}
                </div>
              )}
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1rem' }}>
                {activeRegion.terroir}
              </p>
            </section>

            {activeRegion.vintages && activeRegion.vintages.length > 0 && (
              <section>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold)', marginBottom: '12px', fontSize: '1.1rem' }}>
                  <CalendarDays size={18} /> Vintage Chart (Last 10 Years)
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
                  {activeRegion.vintages.map((v, idx) => {
                    let bgColor = 'rgba(255,255,255,0.4)';
                    let color = 'var(--text-primary)';
                    if (v.score >= 95) { bgColor = 'rgba(212, 175, 55, 0.2)'; color = 'var(--accent-gold)'; }
                    else if (v.score >= 90) { bgColor = 'rgba(121, 31, 56, 0.15)'; color = 'var(--accent-ruby)'; }

                    return (
                      <div key={idx} style={{ background: bgColor, border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '2px' }}>{v.year}</div>
                        <div style={{ fontSize: '1rem', fontWeight: 800, color: color }}>{v.score}</div>
                        <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', marginTop: '4px', color: 'var(--text-secondary)', fontWeight: 600 }}>{v.readiness}</div>
                      </div>
                    )
                  })}
                </div>
              </section>
            )}

            {activeRegion.subRegions && activeRegion.subRegions.length > 0 && (
              <section>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold)', marginBottom: '12px', fontSize: '1.1rem' }}>
                  <MapPin size={18} /> Key Sub-Regions
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {activeRegion.subRegions.map((sub, idx) => (
                    <div key={idx} style={{ padding: '12px', background: 'rgba(255,255,255,0.4)', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                      <h4 style={{ color: 'var(--accent-ruby)', fontWeight: 600, marginBottom: '4px' }}>{sub.name}</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{sub.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold)', marginBottom: '12px', fontSize: '1.1rem' }}>
                <Grape size={18} /> Key Grape Varietals
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {activeRegion.grapes.map((grape, idx) => (
                  <div key={idx} className="grape-card" style={{ display: 'flex', gap: '12px', alignItems: 'center', background: 'rgba(255,255,255,0.5)', padding: '12px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0 }}>
                      <img src={grape.image} alt={grape.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 600, color: 'var(--accent-ruby)', fontSize: '0.95rem' }}>{grape.name}</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>{grape.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold)', marginBottom: '12px', fontSize: '1.1rem' }}>
                <Wine size={18} /> Notable Estates
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {activeRegion.estates.map((estate, idx) => (
                  <div key={idx} style={{ padding: '12px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px', flex: '1 1 200px' }}>
                    <h4 style={{ fontWeight: 600, marginBottom: '4px' }}>{estate.name}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>{estate.description}</p>

                    {/* Visitor Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
                      {estate.acceptsVisitors && <span style={{ background: 'rgba(74, 171, 106, 0.1)', color: '#4aab6a', fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px', border: '1px solid rgba(74, 171, 106, 0.3)', display: 'flex', alignItems: 'center', gap: '4px' }}><CalendarCheck size={10} /> Visitors Welcome</span>}
                      {estate.requiresReservation && <span style={{ background: 'rgba(232, 64, 87, 0.1)', color: '#e84057', fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px', border: '1px solid rgba(232, 64, 87, 0.3)', display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={10} /> Rsrv. Required</span>}
                      {estate.tastingFee && <span style={{ background: 'rgba(212, 175, 55, 0.1)', color: 'var(--accent-gold)', fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px', border: '1px solid rgba(212, 175, 55, 0.3)', display: 'flex', alignItems: 'center', gap: '4px' }}><Ticket size={10} /> Tasting Fee</span>}
                      {estate.hasAccommodation && <span style={{ background: 'rgba(61, 139, 204, 0.1)', color: '#3d8bcc', fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px', border: '1px solid rgba(61, 139, 204, 0.3)', display: 'flex', alignItems: 'center', gap: '4px' }}><Home size={10} /> Accommodation</span>}
                    </div>

                    {estate.wines && estate.wines.map((wine, wIdx) => (
                      <a key={wIdx} href={wine.url} target="_blank" rel="noopener noreferrer" className="vivino-link" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--accent-ruby)', textDecoration: 'none', fontWeight: 600 }}>
                        <ExternalLink size={12} /> Find on Vivino: {wine.name}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </div>

      <WineMap
        regions={activeData}
        producers={wineProducersData}
        selectedRegion={selectedRegion}
        onRegionClick={setSelectedRegion}
        onRegionHover={setHoveredRegion}
        onEmptyClick={() => { setSelectedRegion(null); setHoveredRegion(null); }}
        showCurrents={showCurrents}
        userFootprints={userFootprints}
        scannedRegionName={scannedRegionName}
      />

      {isSATOpen && (
        <div className="sat-modal-overlay" style={{
          position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
          display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
          <div className="glass-panel sat-modal-content" style={{
            width: '95%', maxWidth: '1000px', maxHeight: '90vh', overflowY: 'auto', padding: '32px',
            animation: 'fadeIn 0.3s ease', position: 'relative', display: 'flex', flexDirection: 'column'
          }}>
            <button
              className="sat-close-btn"
              onClick={() => setIsSATOpen(false)}
              style={{ position: 'absolute', top: '24px', right: '24px', background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', zIndex: 10 }}
            >
              <X size={24} />
            </button>

            <h2 style={{ fontSize: '1.8rem', color: 'var(--accent-ruby)', marginBottom: '24px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              <ClipboardList size={28} /> WSET Tasting Resources
            </h2>

            {/* Tab Switcher */}
            <div className="tab-switcher" style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '32px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '16px' }}>
              <button
                onClick={() => setActiveSATTab('methodology')}
                style={{
                  background: 'none', border: 'none', padding: '8px 16px', cursor: 'pointer',
                  color: activeSATTab === 'methodology' ? 'var(--accent-ruby)' : 'var(--text-secondary)',
                  fontWeight: 600, fontSize: '1rem', borderBottom: activeSATTab === 'methodology' ? '2px solid var(--accent-ruby)' : 'none'
                }}
              >
                SAT Methodology
              </button>
              <button
                onClick={() => setActiveSATTab('aroma')}
                style={{
                  background: 'none', border: 'none', padding: '8px 16px', cursor: 'pointer',
                  color: activeSATTab === 'aroma' ? 'var(--accent-ruby)' : 'var(--text-secondary)',
                  fontWeight: 600, fontSize: '1rem', borderBottom: activeSATTab === 'aroma' ? '2px solid var(--accent-ruby)' : 'none'
                }}
              >
                Aroma & Flavour Guide
              </button>
            </div>

            {activeSATTab === 'methodology' ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                <div style={{ background: 'rgba(255,255,255,0.6)', padding: '20px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-gold)', marginBottom: '12px' }}>{satData.en.appearance.title}</h3>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    {satData.en.appearance.items.map((item, idx) => <li key={idx}>{item}</li>)}
                  </ul>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.6)', padding: '20px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-gold)', marginBottom: '12px' }}>{satData.en.nose.title}</h3>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    {satData.en.nose.items.map((item, idx) => <li key={idx}>{item}</li>)}
                  </ul>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.6)', padding: '20px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-gold)', marginBottom: '12px' }}>{satData.en.palate.title}</h3>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    {satData.en.palate.items.map((item, idx) => <li key={idx}>{item}</li>)}
                  </ul>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.6)', padding: '20px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-gold)', marginBottom: '12px' }}>{satData.en.conclusion.title}</h3>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    {satData.en.conclusion.items.map((item, idx) => <li key={idx}>{item}</li>)}
                  </ul>
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <section>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--accent-ruby)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Sprout size={20} /> Primary Aromas & Flavours
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '12px', fontStyle: 'italic' }}>Arising from the grape variety and the environment (terroir).</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
                    {aromaData.primary.map((a, i) => (
                      <div key={i} style={{ background: 'rgba(255,255,255,0.5)', padding: '12px', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                        <strong style={{ display: 'block', color: 'var(--accent-gold)', marginBottom: '4px' }}>{a.category}</strong>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{a.examples}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--accent-ruby)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Wine size={20} /> Secondary Aromas & Flavours
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '12px', fontStyle: 'italic' }}>Arising from winemaking processes (oak, malolactic fermentation, yeast contact).</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
                    {aromaData.secondary.map((a, i) => (
                      <div key={i} style={{ background: 'rgba(255,255,255,0.5)', padding: '12px', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                        <strong style={{ display: 'block', color: 'var(--accent-gold)', marginBottom: '4px' }}>{a.category}</strong>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{a.examples}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--accent-ruby)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Clock size={20} /> Tertiary Aromas & Flavours
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '12px', fontStyle: 'italic' }}>Arising from the aging process (oxidation, development in bottle).</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
                    {aromaData.tertiary.map((a, i) => (
                      <div key={i} style={{ background: 'rgba(255,255,255,0.5)', padding: '12px', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                        <strong style={{ display: 'block', color: 'var(--accent-gold)', marginBottom: '4px' }}>{a.category}</strong>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{a.examples}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}
          </div>
        </div>
      )}

      {isLabelScanOpen && (
        <div className="glass-panel label-scanner-popup" style={{ position: 'fixed', bottom: '100px', left: '50%', transform: 'translateX(-50%)', width: '360px', maxHeight: '72vh', overflowY: 'auto', padding: '20px', zIndex: 1001, borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '14px', animation: 'fadeIn 0.2s ease' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ color: '#7c3aed', fontSize: '1rem', margin: 0, display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <Camera size={18} /> AI Label Scanner
            </h3>
            <button onClick={() => setIsLabelScanOpen(false)} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}><X size={18} /></button>
          </div>

          {/* Upload Zone */}
          <label htmlFor="wine-label-upload" style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: '8px', padding: '16px', borderRadius: '12px', cursor: 'pointer',
            border: '2px dashed #7c3aed44', background: 'rgba(124,58,237,0.05)',
            transition: 'all 0.2s ease', minHeight: '90px'
          }}>
            {labelImageData ? (
              <img src={labelImageData.preview} alt="Wine label preview" style={{ maxHeight: '130px', maxWidth: '100%', borderRadius: '8px', objectFit: 'contain', boxShadow: '0 4px 12px rgba(124,58,237,0.2)' }} />
            ) : (
              <>
                <Camera size={28} color="#7c3aed" style={{ opacity: 0.6 }} />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
                  Tap to upload label photo<br />
                  <span style={{ fontSize: '0.72rem', opacity: 0.7 }}>📱 Mobile: also supports live camera</span>
                </span>
              </>
            )}
          </label>
          <input
            id="wine-label-upload"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />

          {labelImageData && (
            <button
              onClick={handleLabelScan}
              disabled={isLabelLoading}
              style={{
                background: isLabelLoading ? 'rgba(124,58,237,0.5)' : '#7c3aed',
                color: '#fff', border: 'none', borderRadius: '10px', padding: '10px',
                cursor: isLabelLoading ? 'not-allowed' : 'pointer', fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                fontSize: '0.9rem', transition: 'all 0.2s', boxShadow: '0 4px 12px rgba(124,58,237,0.3)'
              }}
            >
              {isLabelLoading
                ? <><Sparkles size={16} style={{ animation: 'spin 1s linear infinite' }} /> Analyzing Label...</>
                : <><ScanLine size={16} /> Scan This Label</>
              }
            </button>
          )}

          {/* Error */}
          {labelError && (
            <div style={{ background: 'rgba(200,50,50,0.1)', border: '1px solid rgba(200,50,50,0.3)', borderRadius: '8px', padding: '10px', fontSize: '0.82rem', color: '#c03', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <AlertCircle size={16} style={{ flexShrink: 0 }} />
              {labelError}
            </div>
          )}

          {/* Results */}
          {labelAnalysis && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

              {/* Confidence Badge */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <span style={{
                  fontSize: '0.7rem', fontWeight: 700, padding: '3px 10px', borderRadius: '20px', textTransform: 'uppercase',
                  background: labelAnalysis.confidence === 'High' ? 'rgba(74,200,100,0.15)' : labelAnalysis.confidence === 'Medium' ? 'rgba(255,180,50,0.15)' : 'rgba(200,50,50,0.15)',
                  color: labelAnalysis.confidence === 'High' ? '#2d9' : labelAnalysis.confidence === 'Medium' ? '#d90' : '#c03',
                  border: `1px solid currentColor`
                }}>
                  {labelAnalysis.confidence} Confidence
                </span>
              </div>

              {/* Region + Country */}
              <div style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '10px', padding: '12px' }}>
                <div style={{ fontSize: '0.72rem', color: '#7c3aed', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>📍 Region Identified</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>{labelAnalysis.region}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{labelAnalysis.country} {labelAnalysis.winery && `• ${labelAnalysis.winery}`}</div>
              </div>

              {/* Grape + Vintage */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ flex: 1, background: 'rgba(255,255,255,0.5)', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '10px' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase' }}>🍇 Grape</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '2px' }}>{labelAnalysis.grape || '—'}</div>
                </div>
                <div style={{ flex: 1, background: 'rgba(255,255,255,0.5)', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '10px' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase' }}>📅 Vintage</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '2px' }}>{labelAnalysis.vintage || '—'}</div>
                </div>
              </div>

              {/* Rating + Drinking */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ flex: 1, background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase' }}>⭐ Score</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--accent-gold)', marginTop: '2px' }}>{labelAnalysis.rating}<span style={{ fontSize: '0.7rem', opacity: 0.7 }}>/100</span></div>
                </div>
                <div style={{ flex: 2, background: 'rgba(255,255,255,0.5)', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '10px' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase' }}>🕐 Drink</div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '2px' }}>{labelAnalysis.drinking_window || '—'}</div>
                </div>
              </div>

              {/* Description */}
              {labelAnalysis.description && (
                <div style={{ background: 'rgba(255,255,255,0.5)', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '12px' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>📝 About</div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>{labelAnalysis.description}</p>
                </div>
              )}

              {/* Food Pairings */}
              {labelAnalysis.food_pairing?.length > 0 && (
                <div style={{ background: 'rgba(255,255,255,0.5)', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '12px' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>🍴 Food Pairings</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {labelAnalysis.food_pairing.map((food, i) => (
                      <span key={i} style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '20px', padding: '4px 10px', fontSize: '0.78rem', color: '#7c3aed', fontWeight: 600 }}>{food}</span>
                    ))}
                  </div>
                </div>
              )}

              <button onClick={() => { setLabelImageData(null); setLabelAnalysis(null); setLabelError(null); setScannedRegionName(''); }}
                style={{ background: 'transparent', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '8px', cursor: 'pointer', color: 'var(--text-secondary)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <X size={14} /> Clear & Scan Another
              </button>
            </div>
          )}
        </div>
      )}

      {isGrapeFilterOpen && (
        <div className="glass-panel grape-filter-popup" style={{ position: 'fixed', bottom: '100px', left: '50%', transform: 'translateX(-50%)', width: '320px', padding: '20px', zIndex: 1001, borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '16px', animation: 'fadeIn 0.2s ease' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <h3 style={{ color: 'var(--accent-gold)', fontSize: '1rem', margin: 0, display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <Filter size={18} /> Filter by Grape
            </h3>
            <button onClick={() => setIsGrapeFilterOpen(false)} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}><X size={18} /></button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {['All', 'Cabernet Sauvignon', 'Pinot Noir', 'Chardonnay', 'Syrah', 'Riesling', 'Sauvignon Blanc', 'Sangiovese', 'Tempranillo', 'Merlot'].map(grape => (
              <button
                key={grape}
                onClick={() => {
                  setFilterGrape(grape);
                  setSelectedRegion(null); // Clear selection when filter changes
                }}
                style={{
                  background: filterGrape === grape ? 'var(--accent-ruby)' : 'rgba(255,255,255,0.4)',
                  color: filterGrape === grape ? '#fff' : 'var(--text-secondary)',
                  border: filterGrape === grape ? '1px solid var(--accent-ruby)' : '1px solid var(--glass-border)',
                  borderRadius: '16px',
                  padding: '6px 12px',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontWeight: filterGrape === grape ? 600 : 500,
                  boxShadow: filterGrape === grape ? '0 2px 8px rgba(121,31,56,0.3)' : 'none'
                }}
              >
                {grape}
              </button>
            ))}
          </div>
        </div>
      )}

      {isPairingOpen && (
        <div className="glass-panel pairing-popup" style={{ position: 'fixed', bottom: '100px', left: '50%', transform: 'translateX(-50%)', width: '380px', maxHeight: '70vh', overflowY: 'auto', padding: '24px', zIndex: 1001, borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.2rem', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Utensils size={20} /> AI Food & Wine Pairing
          </h3>

          {/* WSET Principles Accordion */}
          <button
            onClick={() => setShowPrinciples(!showPrinciples)}
            style={{ background: 'rgba(255,255,255,0.4)', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '10px 14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.85rem' }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><BookOpen size={14} /> WSET Pairing Principles</span>
            {showPrinciples ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {showPrinciples && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', animation: 'fadeIn 0.3s ease' }}>
              {foodWinePrinciples.map((p, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.5)', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                  <strong style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', display: 'block', marginBottom: '3px' }}>{p.title}</strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>{p.desc}</span>
                </div>
              ))}
            </div>
          )}

          {/* Food Input */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>What are you eating?</label>
            <textarea
              value={foodInput}
              onChange={(e) => setFoodInput(e.target.value)}
              placeholder="e.g. Grilled lamb chops with rosemary, roasted vegetables..."
              style={{ width: '100%', height: '70px', background: 'rgba(255,255,255,0.5)', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '10px', outline: 'none', resize: 'none', fontSize: '0.85rem', fontFamily: 'inherit' }}
              onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handlePairingRequest(); } }}
            />
            <button
              onClick={handlePairingRequest}
              disabled={isPairingLoading || !foodInput.trim()}
              style={{ background: 'var(--accent-gold)', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px', cursor: isPairingLoading || !foodInput.trim() ? 'not-allowed' : 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', opacity: isPairingLoading || !foodInput.trim() ? 0.6 : 1, transition: 'all 0.2s' }}
            >
              {isPairingLoading ? (
                <><Sparkles size={16} style={{ animation: 'spin 1s linear infinite' }} /> Analyzing...</>
              ) : (
                <><Send size={16} /> Find Perfect Pairing</>
              )}
            </button>
          </div>

          {/* Error */}
          {pairingError && (
            <div style={{ background: 'rgba(200,50,50,0.1)', border: '1px solid rgba(200,50,50,0.3)', borderRadius: '8px', padding: '10px', fontSize: '0.85rem', color: '#c03' }}>
              {pairingError}
            </div>
          )}

          {/* Results */}
          {pairingResults && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <h4 style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <Sparkles size={14} style={{ verticalAlign: 'middle', marginRight: '6px', color: 'var(--accent-gold)' }} />
                Top Recommendations
              </h4>
              {pairingResults.map((r, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.5)', padding: '14px', borderRadius: '10px', border: '1px solid var(--glass-border)', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: i === 0 ? 'var(--accent-gold)' : i === 1 ? 'var(--accent-ruby)' : 'var(--text-secondary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.8rem', flexShrink: 0 }}>
                    {r.rank}
                  </div>
                  <div style={{ flex: 1 }}>
                    <strong style={{ color: 'var(--text-primary)', fontSize: '0.95rem', display: 'block' }}>{r.wine}</strong>
                    <span style={{ color: 'var(--accent-gold)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      <MapPin size={11} style={{ verticalAlign: 'middle', marginRight: '3px' }} />{r.region}
                    </span>
                    <p style={{ margin: '6px 0 0', fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{r.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Centralized Bottom Navigation Bar */}
      <div
        className="glass-panel bottom-nav-bar"
        style={{
          position: 'fixed',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '12px 24px',
          borderRadius: '40px',
          zIndex: 1001,
          boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
          backdropFilter: 'blur(16px)',
          border: '1px solid var(--glass-border)',
        }}
      >
        <button
          className={`nav-btn ${isSATOpen ? 'active' : ''}`}
          onClick={() => togglePanel('sat')}
          style={{
            width: '48px', height: '48px', borderRadius: '50%',
            background: isSATOpen ? 'var(--accent-ruby)' : 'transparent', color: isSATOpen ? '#fff' : 'var(--text-secondary)',
            border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease',
          }}
          title="WSET Guide"
        >
          <BookOpen size={22} />
        </button>

        <button
          className={`nav-btn ${isLabelScanOpen || scannedRegionName ? 'active' : ''}`}
          onClick={() => togglePanel('scanner')}
          style={{
            width: '48px', height: '48px', borderRadius: '50%',
            background: isLabelScanOpen || scannedRegionName ? '#7c3aed' : 'transparent',
            color: isLabelScanOpen || scannedRegionName ? '#fff' : 'var(--text-secondary)',
            border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease',
          }}
          title="AI Wine Label Scanner"
        >
          <Camera size={22} />
        </button>

        <button
          className={`nav-btn ${isGrapeFilterOpen || filterGrape !== 'All' ? 'active' : ''}`}
          onClick={() => togglePanel('grape')}
          style={{
            width: '48px', height: '48px', borderRadius: '50%',
            background: isGrapeFilterOpen || filterGrape !== 'All' ? 'var(--accent-ruby)' : 'transparent',
            color: isGrapeFilterOpen || filterGrape !== 'All' ? '#fff' : 'var(--text-secondary)',
            border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease',
          }}
          title="Filter by Grape"
        >
          <Filter size={22} />
        </button>

        <button
          className={`nav-btn ${showCurrents ? 'active' : ''}`}
          onClick={() => togglePanel('currents')}
          style={{
            width: '48px', height: '48px', borderRadius: '50%',
            background: showCurrents ? '#3d8bcc' : 'transparent', color: showCurrents ? '#fff' : 'var(--text-secondary)',
            border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease',
          }}
          title="Ocean Currents"
        >
          <Waves size={22} />
        </button>

        <button
          className={`nav-btn ${isPairingOpen ? 'active' : ''}`}
          onClick={() => togglePanel('pairing')}
          style={{
            width: '48px', height: '48px', borderRadius: '50%',
            background: isPairingOpen ? 'var(--accent-gold)' : 'transparent',
            color: isPairingOpen ? '#fff' : 'var(--text-secondary)',
            border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease',
          }}
          title="AI Food & Wine Pairing"
        >
          <Utensils size={22} />
        </button>
      </div>

      {/* Floating Notepad UI */}
      {user && (
        <>
          <button
            className="btn-notepad"
            onClick={() => setIsNotepadOpen(!isNotepadOpen)}
            style={{ position: 'fixed', bottom: '24px', right: '24px', width: '56px', height: '56px', borderRadius: '50%', background: 'var(--accent-ruby)', color: '#fff', border: 'none', cursor: 'pointer', zIndex: 1001, boxShadow: '0 6px 16px var(--accent-ruby-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {isNotepadOpen ? <X size={24} /> : <BookOpen size={24} />}
          </button>

          {isNotepadOpen && (
            <div className="glass-panel notepad-popup" style={{ position: 'fixed', bottom: '90px', right: '24px', width: '320px', padding: '20px', zIndex: 1001, borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h3 style={{ color: 'var(--accent-ruby)', fontSize: '1.1rem', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BookOpen size={18} /> My Tasting Notes
              </h3>
              <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Write your wine notes here..."
                style={{ width: '100%', height: '200px', background: 'rgba(255,255,255,0.5)', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '12px', outline: 'none', resize: 'none', fontSize: '0.9rem' }}
              />
              <button
                onClick={handleSaveNote}
                disabled={isSavingNote}
                style={{ background: 'var(--accent-ruby)', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', opacity: isSavingNote ? 0.7 : 1 }}
              >
                <Save size={16} /> {isSavingNote ? 'Saving...' : 'Save'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
