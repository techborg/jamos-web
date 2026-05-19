import React, { useEffect, useRef } from 'react'

const LINES = [
  '$ jam init my-project',
  '✓ Workspace ready',
  '$ jam run dev',
  '⚡ Hot reload active on :3000',
  '$ jam pkg install react',
  '✓ Installed in 0.3s',
  '$ _',
]

export default function Hero() {
  const termRef = useRef(null)
  const lineIndex = useRef(0)
  const charIndex = useRef(0)
  const displayed = useRef([])

  useEffect(() => {
    const el = termRef.current
    if (!el) return

    function type() {
      const line = LINES[lineIndex.current]
      if (!line) return

      if (charIndex.current === 0) displayed.current.push('')

      displayed.current[displayed.current.length - 1] = line.slice(0, charIndex.current + 1)
      el.innerHTML = displayed.current.map((l, i) =>
        `<div style="color:${l.startsWith('$') ? '#06b6d4' : l.startsWith('✓') ? '#22c55e' : l.startsWith('⚡') ? '#f59e0b' : '#e2e8f0'}">${l}</div>`
      ).join('')

      charIndex.current++

      if (charIndex.current < line.length) {
        setTimeout(type, 40)
      } else {
        charIndex.current = 0
        lineIndex.current++
        if (lineIndex.current < LINES.length) {
          setTimeout(type, 400)
        }
      }
    }

    setTimeout(type, 800)
  }, [])

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '6rem 2rem 4rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* background glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
        background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)',
        borderRadius: '999px', padding: '0.3rem 1rem', marginBottom: '1.5rem',
        fontSize: '0.8rem', color: '#a78bfa', fontFamily: 'var(--mono)',
      }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
        v1.0 now in beta
      </div>

      <h1 style={{
        fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800,
        textAlign: 'center', lineHeight: 1.1, maxWidth: '800px',
        marginBottom: '1.5rem',
      }}>
        The OS{' '}
        <span style={{
          background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>built for developers</span>
      </h1>

      <p style={{
        fontSize: '1.15rem', color: 'var(--muted)', textAlign: 'center',
        maxWidth: '560px', marginBottom: '2.5rem',
      }}>
        Jam OS strips away the noise and gives you a fast, minimal, developer-first operating system. Ship faster. Think clearer.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '4rem' }}>
        <a href="#download" style={{
          background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
          color: '#fff', padding: '0.75rem 2rem', borderRadius: '10px',
          fontWeight: 600, fontSize: '1rem', border: 'none',
          boxShadow: '0 0 30px rgba(124,58,237,0.4)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
          onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 0 40px rgba(124,58,237,0.6)' }}
          onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 0 30px rgba(124,58,237,0.4)' }}
        >Download Free</a>
        <a href="#features" style={{
          background: 'transparent', color: 'var(--text)',
          padding: '0.75rem 2rem', borderRadius: '10px',
          fontWeight: 600, fontSize: '1rem',
          border: '1px solid var(--border)',
          transition: 'border-color 0.2s',
        }}
          onMouseEnter={e => e.target.style.borderColor = 'var(--accent)'}
          onMouseLeave={e => e.target.style.borderColor = 'var(--border)'}
        >See Features</a>
      </div>

      {/* Terminal window */}
      <div style={{
        width: '100%', maxWidth: '640px',
        background: 'var(--surface)', border: '1px solid var(--border)',
        borderRadius: '14px', overflow: 'hidden',
        boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
      }}>
        <div style={{
          padding: '0.75rem 1rem', background: 'var(--bg2)',
          borderBottom: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', gap: '0.5rem',
        }}>
          {['#ff5f57','#febc2e','#28c840'].map(c => (
            <span key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c, display: 'inline-block' }} />
          ))}
          <span style={{ marginLeft: '0.5rem', fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--muted)' }}>
            jam — bash
          </span>
        </div>
        <div ref={termRef} style={{
          padding: '1.25rem 1.5rem', fontFamily: 'var(--mono)',
          fontSize: '0.875rem', lineHeight: 2, minHeight: '180px',
        }} />
      </div>
    </section>
  )
}
