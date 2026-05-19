import React from 'react'

const platforms = [
  { name: 'Linux x86_64', icon: '🐧', size: '420 MB', cmd: 'curl -fsSL https://jamOS.dev/install.sh | sh' },
  { name: 'macOS ARM', icon: '🍎', size: '390 MB', cmd: 'brew install --cask jam-os' },
  { name: 'Windows WSL2', icon: '🪟', size: '410 MB', cmd: 'winget install JamOS' },
]

export default function Download() {
  return (
    <section id="download" style={{ padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--mono)', color: 'var(--accent2)', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
          // download
        </p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>
          Get Jam OS
        </h2>
        <p style={{ color: 'var(--muted)', marginBottom: '3rem' }}>
          Free and open source. Always.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {platforms.map(p => (
            <div key={p.name} style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: '14px', padding: '2rem 1.5rem',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem',
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <span style={{ fontSize: '2.5rem' }}>{p.icon}</span>
              <h3 style={{ fontWeight: 700 }}>{p.name}</h3>
              <span style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>{p.size}</span>
              <div style={{
                width: '100%', background: 'var(--bg)', border: '1px solid var(--border)',
                borderRadius: '8px', padding: '0.6rem 0.75rem',
                fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--accent2)',
                textAlign: 'left', wordBreak: 'break-all',
              }}>
                {p.cmd}
              </div>
              <button style={{
                width: '100%', background: 'var(--accent)', color: '#fff',
                border: 'none', borderRadius: '8px', padding: '0.65rem',
                fontWeight: 600, fontSize: '0.9rem',
                transition: 'opacity 0.2s',
              }}
                onMouseEnter={e => e.target.style.opacity = '0.85'}
                onMouseLeave={e => e.target.style.opacity = '1'}
              >
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
