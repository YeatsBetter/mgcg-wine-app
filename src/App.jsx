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

function App() {
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [user, setUser] = useState(null);

  const activeData = wineRegionsData;

  const currentHovered = hoveredRegion ? activeData.features.find(f => f.properties.name.split(' ')[0] === hoveredRegion.name.split(' ')[0])?.properties : null;
  const currentSelected = selectedRegion ? activeData.features.find(f => f.properties.name.split(' ')[0] === selectedRegion.name.split(' ')[0])?.properties : null;

  const activeRegion = currentSelected || currentHovered;

  const [isSATOpen, setIsSATOpen] = useState(false);
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
              <h1 style={{ fontSize: '1.8rem', lineHeight: 1.2, color: 'var(--text-primary)' }}>Vino Atlas 3.0</h1>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px', fontWeight: 600 }}>A Monet Global Consulting Group product</span>
          </div>

          <div>
            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {user.photoURL ? (
                  <img src={user.photoURL} alt="User" style={{ width: 32, height: 32, borderRadius: '50%', border: '2px solid var(--accent-ruby)' }} />
                ) : (
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <User size={18} color="var(--accent-ruby)" />
                  </div>
                )}
                <button
                  onClick={handleLogout}
                  style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem' }}
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                style={{
                  background: 'var(--accent-ruby)',
                  border: 'none',
                  color: '#fff',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  boxShadow: '0 4px 12px var(--accent-ruby-glow)'
                }}
              >
                <LogIn size={16} /> Login
              </button>
            )}
          </div>
        </div>

        <button
          onClick={() => setIsSATOpen(true)}
          style={{
            marginTop: '16px',
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

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '12px' }}>
          {user ? `Welcome back, ${user.displayName?.split(' ')[0] || 'Explorer'}.` : 'Discover the definitive guide to global wine regions.'}
          {' '}Hover to preview, click to dive into history, terroir, Geography, and direct Vivino links.
        </p>
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
            width: '90%', maxWidth: '800px', maxHeight: '85vh', overflowY: 'auto', padding: '32px',
            animation: 'fadeIn 0.3s ease', position: 'relative'
          }}>
            <button
              onClick={() => setIsSATOpen(false)}
              style={{ position: 'absolute', top: '24px', right: '24px', background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
            >
              <X size={24} />
            </button>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--accent-ruby)', marginBottom: '24px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              <ClipboardList size={28} /> {satData.en.title}
            </h2>
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
