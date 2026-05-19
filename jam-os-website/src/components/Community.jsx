import React from 'react'

const channels = [
  {
    icon: '💬',
    name: 'Discord',
    desc: 'Chat with thousands of Jam OS users. Get help, share configs, and hang out.',
    stat: '12,400+ members',
    color: '#5865f2',
    link: '#',
    cta: 'Join Discord',
  },
  {
    icon: '🐙',
    name: 'GitHub',
    desc: 'Contribute to the core, report bugs, or browse community packages.',
    stat: '8.2k stars',
    color: '#e2e8f0',
    link: '#',
    cta: 'View on GitHub',
  },
  {
    icon: '🐦',
    name: 'Twitter / X',
    desc: 'Follow for release announcements, tips, and dev memes.',
    stat: '6,100 followers',
    color: '#1d9bf0',
    link: '#',
    cta: 'Follow us',
  },
  {
    icon: '📋',
    name: 'Forum',
    desc: 'Long-form discussions, RFCs, and feature proposals. Think before you type.',
    stat: '3,800+ threads',
    color: '#f59e0b',
    link: '#',
    cta: 'Browse Forum',
  },
]

const contributors = [
  { handle: 'tarkovsky_dev', commits: 312 },
  { handle: 'nullbyte', commits: 204 },
  { handle: 'priya_codes', commits: 187 },
  { handle: 'xterm_ghost', commits: 143 },
  { handle: 'rustacean99', commits: 121 },
  { handle: 'devmiranda', commits: 98 },
]

export default function Community() {
  return (
    <section id="community" style={{ padding: '6rem 2rem', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* heading */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ fontFamily: 'var(--mono)', color: 'var(--accent2)', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
            // community
          </p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Built with the community
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: '480px', margin: '0 auto' }}>
            Jam OS is open source and shaped by the people who use it every day.
          </p>
        </div>

        {/* channel cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
          marginBottom: '5rem',
        }}>
          {channels.map(c => (
            <a key={c.name} href={c.link} style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: '14px', padding: '1.75rem',
              display: 'flex', flexDirection: 'column', gap: '0.6rem',
              transition: 'border-color 0.2s, transform 0.2s',
              textDecoration: 'none',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = c.color
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <span style={{ fontSize: '2rem' }}>{c.icon}</span>
              <h3 style={{ fontWeight: 700, fontSize: '1.05rem' }}>{c.name}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.6, flexGrow: 1 }}>{c.desc}</p>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: c.color }}>{c.stat}</span>
              <span style={{
                marginTop: '0.5rem', display: 'inline-block',
                color: c.color, fontSize: '0.85rem', fontWeight: 600,
              }}>{c.cta} →</span>
            </a>
          ))}
        </div>

        {/* top contributors */}
        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: '14px', padding: '2rem',
        }}>
          <h3 style={{ fontWeight: 700, marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            Top contributors this month
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1rem',
          }}>
            {contributors.map((c, i) => (
              <div key={c.handle} style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                background: 'var(--bg)', borderRadius: '10px', padding: '0.75rem 1rem',
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: `hsl(${i * 55}, 60%, 50%)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: '0.85rem', color: '#fff', flexShrink: 0,
                }}>
                  {c.handle[0].toUpperCase()}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '0.8rem' }}>@{c.handle}</div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.72rem' }}>{c.commits} commits</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
