import React from 'react'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2.5rem 2rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '1rem',
    }}>
      <span style={{ fontFamily: 'var(--mono)', fontWeight: 700, fontSize: '1rem',
        background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
      }}>Jam OS</span>

      <div style={{ display: 'flex', gap: '2rem' }}>
        {['GitHub', 'Discord', 'Twitter', 'Docs'].map(l => (
          <a key={l} href="#" style={{ color: 'var(--muted)', fontSize: '0.875rem',
            transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
          >{l}</a>
        ))}
      </div>

      <span style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>
        © 2026 Jam OS. Open source.
      </span>
    </footer>
  )
}
