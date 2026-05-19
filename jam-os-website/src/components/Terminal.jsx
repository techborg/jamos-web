import React from 'react'

const commands = [
  { cmd: 'jam init', desc: 'Scaffold a new project with your preferred stack' },
  { cmd: 'jam run <script>', desc: 'Run any script defined in jam.config.js' },
  { cmd: 'jam pkg install <name>', desc: 'Install a package from the Jam registry' },
  { cmd: 'jam env switch <profile>', desc: 'Switch between dev, staging, and prod environments' },
  { cmd: 'jam ssh <host>', desc: 'Connect to a remote machine with saved credentials' },
  { cmd: 'jam logs --tail', desc: 'Stream logs from any running service' },
]

export default function Terminal() {
  return (
    <section id="docs" style={{ padding: '6rem 2rem', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontFamily: 'var(--mono)', color: 'var(--accent2)', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
              // cli
            </p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem' }}>
              One CLI to rule your workflow
            </h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
              The <code style={{ fontFamily: 'var(--mono)', color: 'var(--accent2)', background: 'rgba(6,182,212,0.1)', padding: '2px 6px', borderRadius: '4px' }}>jam</code> CLI is the heart of Jam OS. Manage projects, packages, environments, and services without ever leaving your terminal.
            </p>
            <a href="#download" style={{
              display: 'inline-block',
              background: 'transparent', color: 'var(--accent2)',
              padding: '0.6rem 1.5rem', borderRadius: '8px',
              fontWeight: 600, fontSize: '0.9rem',
              border: '1px solid var(--accent2)',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.target.style.background = 'rgba(6,182,212,0.1)'}
              onMouseLeave={e => e.target.style.background = 'transparent'}
            >Read the Docs →</a>
          </div>

          <div style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: '14px', overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
          }}>
            <div style={{
              padding: '0.75rem 1rem', background: 'var(--bg)',
              borderBottom: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', gap: '0.5rem',
            }}>
              {['#ff5f57','#febc2e','#28c840'].map(c => (
                <span key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c, display: 'inline-block' }} />
              ))}
              <span style={{ marginLeft: '0.5rem', fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--muted)' }}>
                jam --help
              </span>
            </div>
            <div style={{ padding: '1.25rem 1.5rem' }}>
              {commands.map(({ cmd, desc }) => (
                <div key={cmd} style={{ marginBottom: '1rem', fontFamily: 'var(--mono)', fontSize: '0.82rem' }}>
                  <span style={{ color: '#06b6d4' }}>$ {cmd}</span>
                  <div style={{ color: 'var(--muted)', paddingLeft: '1rem', marginTop: '2px' }}># {desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
