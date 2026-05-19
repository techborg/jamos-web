import React from 'react'

const features = [
  {
    icon: '⚡',
    title: 'Blazing Fast Boot',
    desc: 'Cold boot in under 3 seconds. No bloat, no background services you never asked for.',
  },
  {
    icon: '🧰',
    title: 'Dev Tools Built In',
    desc: 'Git, Docker, Node, Python, Rust — all pre-installed and configured out of the box.',
  },
  {
    icon: '🖥️',
    title: 'Tiling Window Manager',
    desc: 'Keyboard-driven tiling WM so you never have to touch your mouse mid-flow.',
  },
  {
    icon: '📦',
    title: 'Jam Package Manager',
    desc: 'One package manager to rule them all. Install system packages and dev dependencies in one command.',
  },
  {
    icon: '🔒',
    title: 'Security First',
    desc: 'Sandboxed apps, encrypted storage by default, and zero telemetry. Your machine, your data.',
  },
  {
    icon: '🎨',
    title: 'Fully Themeable',
    desc: 'Swap themes, fonts, and layouts with a single config file. Make it yours.',
  },
]

export default function Features() {
  return (
    <section id="features" style={{ padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ fontFamily: 'var(--mono)', color: 'var(--accent2)', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
            // features
          </p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Everything a dev needs
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: '480px', margin: '0 auto' }}>
            Jam OS is opinionated about one thing: getting out of your way.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {features.map(f => (
            <div key={f.title} style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: '14px', padding: '1.75rem',
              transition: 'border-color 0.2s, transform 0.2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{f.icon}</div>
              <h3 style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '1.05rem' }}>{f.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
