import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 2rem',
      height: '64px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(10,10,15,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{
          fontFamily: 'var(--mono)', fontWeight: 700, fontSize: '1.2rem',
          background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>Jam OS</span>
        <span style={{
          fontSize: '0.65rem', background: 'var(--accent)', color: '#fff',
          padding: '2px 6px', borderRadius: '4px', fontFamily: 'var(--mono)',
        }}>beta</span>
      </div>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {['Features', 'Docs', 'Community', 'Blog'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{
            color: 'var(--muted)', fontSize: '0.9rem', fontWeight: 500,
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
          >{item}</a>
        ))}
        <a href="#download" style={{
          background: 'var(--accent)', color: '#fff',
          padding: '0.45rem 1.1rem', borderRadius: '8px',
          fontSize: '0.875rem', fontWeight: 600,
          transition: 'opacity 0.2s',
        }}
          onMouseEnter={e => e.target.style.opacity = '0.85'}
          onMouseLeave={e => e.target.style.opacity = '1'}
        >Download</a>
      </div>
    </nav>
  )
}
