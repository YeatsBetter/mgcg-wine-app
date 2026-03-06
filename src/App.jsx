import React, { useState, useEffect } from 'react';
import WineMap from './WineMap';
import { wineRegionsData } from './data/regions';
import './App.css';
import { Wine, MapPin, Clock, Info, Globe, Sprout, Grape, ExternalLink, LogIn, LogOut, User, BookOpen, Save, X } from 'lucide-react';

// Firebase imports
import { auth, googleProvider, db } from './firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

function App() {
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [user, setUser] = useState(null);

  // Fallback to hovered if no region is selected
  const activeRegion = selectedRegion || hoveredRegion;

  const [noteText, setNoteText] = useState("");
  const [isNotepadOpen, setIsNotepadOpen] = useState(false);
  const [isSavingNote, setIsSavingNote] = useState(false);

  // Listen to Auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Automatically create or verify user profile document in Firestore
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
      alert("Login Error: " + error.message + "\n\n(If this is an 'unauthorized domain' error, please add your current URL to Firebase Auth Authorized Domains).");
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

          {/* Auth Section */}
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

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          {user ? `Welcome back, ${user.displayName?.split(' ')[0] || 'Explorer'}.` : 'Discover the definitive guide to global wine regions.'} Hover to preview, click to dive into history, terroir, Geography, and direct Vivino links.
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
          width: '460px', /* wider to accommodate more details */
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
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.5, fontWeight: 500 }}>
                {activeRegion.description}
              </p>
            </div>

            {/* Categorized Info Blocks */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

              <div style={{ padding: '16px', background: 'rgba(255,255,255,0.4)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={18} color="var(--accent-ruby)" /> History
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{activeRegion.history}</p>
              </div>

              <div style={{ padding: '16px', background: 'rgba(255,255,255,0.4)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Globe size={18} color="var(--accent-ruby)" /> Geography & Climate
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{activeRegion.geography}</p>
              </div>

              {activeRegion.terroir && (
                <div style={{ padding: '16px', background: 'rgba(255,255,255,0.4)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Sprout size={18} color="var(--accent-ruby)" /> Terroir & Soil
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{activeRegion.terroir}</p>
                </div>
              )}

              <div style={{ padding: '16px', background: 'rgba(255,255,255,0.4)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '16px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Grape size={18} color="var(--accent-ruby)" /> Key Grapes
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {Array.isArray(activeRegion.grapes) ? activeRegion.grapes.map((grape, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: 'rgba(255,255,255,0.6)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(190, 18, 60, 0.1)' }}>
                      <img
                        src={grape.image}
                        alt={grape.name}
                        style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                      />
                      <div>
                        <h4 style={{ fontSize: '1.05rem', color: 'var(--accent-ruby)', marginBottom: '4px', fontWeight: 600 }}>{grape.name}</h4>
                        <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                          {grape.description.split('. ').map((point, i) => {
                            if (!point.trim()) return null;
                            return <li key={i}>{point.trim() + (point.endsWith('.') ? '' : '.')}</li>
                          })}
                        </ul>
                      </div>
                    </div>
                  )) : (
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{activeRegion.grapes}</p>
                  )}
                </div>
              </div>

              {activeRegion.subRegions && activeRegion.subRegions.length > 0 && (
                <div style={{ padding: '16px', background: 'rgba(255,255,255,0.4)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '16px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={18} color="var(--accent-ruby)" /> Key Sub-Regions
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {activeRegion.subRegions.map((sub, idx) => (
                      <div key={idx} style={{ padding: '12px', background: 'rgba(255,255,255,0.6)', borderRadius: '8px', borderLeft: '3px solid var(--accent-gold)' }}>
                        <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '6px' }}>{sub.name}</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '6px' }}>{sub.description}</p>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                          <strong>Terroir:</strong> {sub.geography}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                          <strong>Grapes:</strong> {sub.grapes}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Notable Estates with Vivino Links */}
              <div style={{ marginTop: '12px' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '16px', color: 'var(--text-primary)' }}>Notable Estates</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {activeRegion.estates.map((estate, idx) => (
                    <div key={idx} style={{ padding: '16px', background: 'rgba(255,255,255,0.6)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                      <h4 style={{ fontSize: '1.15rem', color: 'var(--accent-gold)', marginBottom: '6px' }}>{estate.name}</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '12px' }}>{estate.description}</p>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {estate.wines.map((wine, wIdx) => (
                          <a
                            key={wIdx}
                            href={wine.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              padding: '8px 12px',
                              background: 'rgba(190, 18, 60, 0.08)',
                              borderRadius: '6px',
                              color: 'var(--accent-ruby)',
                              textDecoration: 'none',
                              fontSize: '0.85rem',
                              fontWeight: 500,
                              transition: 'background 0.2s ease',
                            }}
                            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(190, 18, 60, 0.15)'}
                            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(190, 18, 60, 0.08)'}
                          >
                            <span>🍷 {wine.name}</span>
                            <ExternalLink size={14} />
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {selectedRegion && (
                <button
                  onClick={() => setSelectedRegion(null)}
                  style={{
                    marginTop: 'auto',
                    padding: '12px 24px',
                    background: 'transparent',
                    border: '1px solid var(--accent-ruby)',
                    color: 'var(--accent-ruby)',
                    borderRadius: '30px',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    transition: 'var(--transition-smooth)'
                  }}
                  onMouseOver={(e) => { e.target.style.background = 'var(--accent-ruby)'; e.target.style.color = '#fff'; }}
                  onMouseOut={(e) => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent-ruby)'; }}
                >
                  Close Details
                </button>
              )}
            </div>
          </>
        )}
      </div>

      {/* Map Background Wrapper */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {/* The map itself. Region selection handled inside WineMap */}
        <WineMap
          regions={wineRegionsData}
          onRegionHover={setHoveredRegion}
          onRegionClick={(region) => {
            setSelectedRegion(region);
          }}
          onEmptyClick={() => setSelectedRegion(null)}
        />
      </div>

      {/* Floating Notepad UI for Logged-In Users */}
      {user && (
        <div style={{ position: 'absolute', bottom: '24px', left: '24px', zIndex: 1000, display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
          {isNotepadOpen && (
            <div className="glass-panel" style={{ width: '380px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', animation: 'fadeIn 0.3s ease' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-ruby)', margin: 0, fontSize: '1.1rem' }}>
                  <BookOpen size={18} /> My Tasting Notes
                </h3>
                <button onClick={() => setIsNotepadOpen(false)} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '4px' }}>
                  <X size={18} />
                </button>
              </div>
              <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Write down your tasting notes, favorite regions, or wines to buy..."
                style={{
                  width: '100%',
                  height: '180px',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid var(--glass-border)',
                  background: 'rgba(255, 255, 255, 0.5)',
                  resize: 'none',
                  fontSize: '0.95rem',
                  fontFamily: 'inherit',
                  color: 'var(--text-primary)',
                  boxSizing: 'border-box'
                }}
              />
              <button
                onClick={handleSaveNote}
                disabled={isSavingNote}
                style={{
                  alignSelf: 'flex-end',
                  background: 'var(--accent-ruby)',
                  color: '#fff',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  cursor: isSavingNote ? 'wait' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  opacity: isSavingNote ? 0.7 : 1
                }}
              >
                <Save size={16} /> {isSavingNote ? 'Saving...' : 'Save Notes'}
              </button>
            </div>
          )}
          {!isNotepadOpen && (
            <button
              onClick={() => setIsNotepadOpen(true)}
              style={{
                background: 'var(--accent-ruby)',
                color: '#fff',
                border: 'none',
                padding: '12px 20px',
                borderRadius: '30px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 600,
                fontSize: '1rem',
                boxShadow: '0 4px 12px var(--accent-ruby-glow)'
              }}
            >
              <BookOpen size={20} /> Open Notepad
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
