import React, { useState, useEffect } from 'react';
import WineMap from './WineMap';
import { wineRegionsData } from './data/regions';
import './App.css';
import { Wine, MapPin, Clock, Info, Globe, Sprout, Grape, ExternalLink, LogIn, LogOut, User } from 'lucide-react';

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
            notes: {}
          });
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Login failed", error);
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Wine size={28} color="var(--accent-ruby)" />
            <h1 style={{ fontSize: '1.8rem', lineHeight: 1.2, color: 'var(--text-primary)' }}>Vino Atlas 2.0</h1>
          </div>

          {/* Auth Section */}
          <div>
            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {user.photoURL ? (
                  <img src={user.photoURL} alt="User" style={{ width: 32, height: 32, borderRadius: '50%', border: '2px solid var(--accent-ruby)' }} />
                ) : (
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <User size={18} color="var(--accent-ruby)'" />
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

              <div style={{ padding: '16px', background: 'rgba(255,255,255,0.4)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sprout size={18} color="var(--accent-ruby)" /> Terroir & Soil
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{activeRegion.terroir}</p>
              </div>

              <div style={{ padding: '16px', background: 'rgba(255,255,255,0.4)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Grape size={18} color="var(--accent-ruby)" /> Key Grapes
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{activeRegion.grapes}</p>
              </div>

            </div>

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
                  transition: 'var(--transition-smooth)',
                  ':hover': {
                    background: 'var(--accent-ruby)',
                    color: '#fff'
                  }
                }}
                onMouseOver={(e) => { e.target.style.background = 'var(--accent-ruby)'; e.target.style.color = '#fff'; }}
                onMouseOut={(e) => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent-ruby)'; }}
              >
                Close Details
              </button>
            )}
          </>
        )}
      </div>

      {/* Map Layer */}
      <WineMap
        regions={wineRegionsData}
        onRegionHover={setHoveredRegion}
        onRegionClick={setSelectedRegion}
      />
    </div>
  );
}

export default App;
