import React, { useState, useEffect } from 'react';
import WineMap from './WineMap';
import { wineRegionsData } from './data/regions';
import './App.css';
import { Wine, MapPin, Clock, Info, Globe, Sprout, Grape, ExternalLink, LogIn, LogOut, User, BookOpen, Save, X, ClipboardList } from 'lucide-react';

// Firebase imports
import { auth, googleProvider, db } from './firebase';
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

function App() {
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [user, setUser] = useState(null);

  const activeData = wineRegionsData;

  const currentHovered = hoveredRegion ? activeData.features.find(f => f.properties.name.split(' ')[0] === hoveredRegion.name.split(' ')[0])?.properties : null;
  const currentSelected = selectedRegion ? activeData.features.find(f => f.properties.name.split(' ')[0] === selectedRegion.name.split(' ')[0])?.properties : null;

  const activeRegion = currentSelected || currentHovered;

  const [isSATOpen, setIsSATOpen] = useState(false);
  const [activeSATTab, setActiveSATTab] = useState('methodology'); // 'methodology' or 'aroma'
  const [noteText, setNoteText] = useState("");
  const [isNotepadOpen, setIsNotepadOpen] = useState(false);
  const [isSavingNote, setIsSavingNote] = useState(false);

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
            notes: { general: "" }
          });
        } else {
          const data = docSnap.data();
          if (data.notes && data.notes.general) {
            setNoteText(data.notes.general);
          }
        }
      } else {
        setNoteText("");
        setIsNotepadOpen(false);
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

  return (
    <div className="app-container">
      {/* Top Left Floating Header */}
      <div
        className="glass-panel"
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
              <h1 style={{ fontSize: '1.8rem', lineHeight: 1.2, color: 'var(--text-primary)', margin: 0 }}>Vino Atlas</h1>
            </div>
            <span style={{
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

        <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
          <button
            onClick={() => { setIsSATOpen(true); setActiveSATTab('methodology'); }}
            style={{
              background: 'rgba(255, 255, 255, 0.5)',
              border: '1px solid var(--accent-gold)',
              color: 'var(--text-primary)',
              padding: '8px 16px',
              borderRadius: '20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'var(--accent-gold)'; e.currentTarget.style.color = '#fff'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
          >
            <ClipboardList size={18} /> WSET SAT Guide
          </button>

          <button
            onClick={() => { setIsSATOpen(true); setActiveSATTab('aroma'); }}
            style={{
              background: 'rgba(255, 255, 255, 0.5)',
              border: '1px solid var(--accent-ruby)',
              color: 'var(--text-primary)',
              padding: '8px 16px',
              borderRadius: '20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'var(--accent-ruby)'; e.currentTarget.style.color = '#fff'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
          >
            <Wine size={18} /> Aroma Guide
          </button>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '16px', lineHeight: 1.6, fontStyle: 'italic' }}>
          Welcome to the definitive digital cartography of the world's most prestigious wine regions.
          Explore the depths of history, terroir, and geography through an interactive viticultural lens.
        </p>
      </div>

      {/* Top Right Floating User Profile */}
      <div style={{ position: 'absolute', top: '24px', right: '24px', zIndex: 1000 }}>
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--glass-bg)', padding: '6px 16px 6px 6px', borderRadius: '30px', border: '1px solid var(--glass-border)', backdropFilter: 'blur(12px)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
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
            <div style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold)', marginBottom: '8px', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <MapPin size={16} />
                <span>{activeRegion.country}</span>
              </div>
              <h2 style={{ fontSize: '2.4rem', color: 'var(--accent-ruby)', marginBottom: '12px' }}>
                {activeRegion.name}
              </h2>
              <div style={{ display: 'flex', gap: '16px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Globe size={16} />
                  <span>{activeRegion.country}</span>
                </div>
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
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1rem' }}>
                {activeRegion.geography}
              </p>
            </section>

            <section>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold)', marginBottom: '12px', fontSize: '1.1rem' }}>
                <Sprout size={18} /> Terroir & Soil
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1rem' }}>
                {activeRegion.terroir}
              </p>
            </section>

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
        onRegionClick={setSelectedRegion}
        onRegionHover={setHoveredRegion}
        onEmptyClick={() => setSelectedRegion(null)}
      />

      {isSATOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
          display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
          <div className="glass-panel" style={{
            width: '95%', maxWidth: '1000px', maxHeight: '90vh', overflowY: 'auto', padding: '32px',
            animation: 'fadeIn 0.3s ease', position: 'relative', display: 'flex', flexDirection: 'column'
          }}>
            <button
              onClick={() => setIsSATOpen(false)}
              style={{ position: 'absolute', top: '24px', right: '24px', background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', zIndex: 10 }}
            >
              <X size={24} />
            </button>

            <h2 style={{ fontSize: '1.8rem', color: 'var(--accent-ruby)', marginBottom: '24px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              <ClipboardList size={28} /> WSET Tasting Resources
            </h2>

            {/* Tab Switcher */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '32px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '16px' }}>
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

      {/* Floating Notepad UI */}
      {user && (
        <>
          <button
            onClick={() => setIsNotepadOpen(!isNotepadOpen)}
            style={{ position: 'fixed', bottom: '24px', right: '24px', width: '56px', height: '56px', borderRadius: '50%', background: 'var(--accent-ruby)', color: '#fff', border: 'none', cursor: 'pointer', zIndex: 1001, boxShadow: '0 6px 16px var(--accent-ruby-glow)', display: 'flex', alignItems: 'center', justifyCenter: 'center' }}
          >
            {isNotepadOpen ? <X size={24} /> : <BookOpen size={24} />}
          </button>

          {isNotepadOpen && (
            <div className="glass-panel" style={{ position: 'fixed', bottom: '90px', right: '24px', width: '320px', padding: '20px', zIndex: 1001, borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
