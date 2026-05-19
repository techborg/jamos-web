import React, { useState } from 'react'

const posts = [
  {
    tag: 'Release',
    tagColor: '#22c55e',
    title: 'Jam OS v1.0 is here',
    excerpt: 'After 18 months of development and thousands of beta testers, we are shipping v1.0. Here is everything that changed.',
    author: 'The Jam Team',
    date: 'May 15, 2026',
    readTime: '5 min read',
    featured: true,
  },
  {
    tag: 'Tutorial',
    tagColor: '#06b6d4',
    title: 'Setting up your first Jam workspace',
    excerpt: 'A step-by-step walkthrough of jam init, environment profiles, and syncing your dotfiles across machines.',
    author: 'priya_codes',
    date: 'May 10, 2026',
    readTime: '8 min read',
    featured: false,
  },
  {
    tag: 'Deep Dive',
    tagColor: '#a78bfa',
    title: 'How Jam OS boots in under 3 seconds',
    excerpt: 'We parallelized the init system, stripped the default service tree, and wrote a custom bootloader. Here is the full story.',
    author: 'tarkovsky_dev',
    date: 'May 4, 2026',
    readTime: '12 min read',
    featured: false,
  },
  {
    tag: 'Community',
    tagColor: '#f59e0b',
    title: 'Themes showcase: April 2026',
    excerpt: 'The community shipped some incredible themes this month. Catppuccin, Tokyo Night, and a few wild custom ones.',
    author: 'nullbyte',
    date: 'Apr 28, 2026',
    readTime: '3 min read',
    featured: false,
  },
  {
    tag: 'Tutorial',
    tagColor: '#06b6d4',
    title: 'Using jam env to manage multiple projects',
    excerpt: 'Stop manually sourcing .env files. jam env profiles let you switch full dev environments in one keystroke.',
    author: 'devmiranda',
    date: 'Apr 20, 2026',
    readTime: '6 min read',
    featured: false,
  },
  {
    tag: 'Deep Dive',
    tagColor: '#a78bfa',
    title: 'Building a Jam package from scratch',
    excerpt: 'Everything you need to know to publish your first package to the Jam registry — from jam.config.js to CI.',
    author: 'rustacean99',
    date: 'Apr 12, 2026',
    readTime: '10 min read',
    featured: false,
  },
]

const tags = ['All', 'Release', 'Tutorial', 'Deep Dive', 'Community']

export default function Blog() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? posts : posts.filter(p => p.tag === active)
  const featured = filtered.find(p => p.featured) || filtered[0]
  const rest = filtered.filter(p => p !== featured)

  return (
    <section id="blog" style={{ padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* heading */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ fontFamily: 'var(--mono)', color: 'var(--accent2)', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
            // blog
          </p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>
            From the team
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: '440px', margin: '0 auto' }}>
            Releases, tutorials, and deep dives from the people building Jam OS.
          </p>
        </div>

        {/* tag filter */}
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {tags.map(t => (
            <button key={t} onClick={() => setActive(t)} style={{
              background: active === t ? 'var(--accent)' : 'var(--surface)',
              color: active === t ? '#fff' : 'var(--muted)',
              border: `1px solid ${active === t ? 'var(--accent)' : 'var(--border)'}`,
              borderRadius: '999px', padding: '0.35rem 1rem',
              fontSize: '0.82rem', fontWeight: 500,
              transition: 'all 0.2s',
            }}>
              {t}
            </button>
          ))}
        </div>

        {/* featured post */}
        {featured && (
          <a href="#" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: '16px', padding: '2.5rem',
            marginBottom: '2rem',
            transition: 'border-color 0.2s',
            textDecoration: 'none',
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            {/* placeholder image area */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.2))',
              borderRadius: '10px', minHeight: '200px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--mono)', fontSize: '3rem',
            }}>
              📰
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{
                  background: featured.tagColor + '22', color: featured.tagColor,
                  padding: '2px 10px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 600,
                }}>{featured.tag}</span>
                <span style={{ color: 'var(--muted)', fontSize: '0.75rem', fontFamily: 'var(--mono)' }}>Featured</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3 }}>{featured.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{featured.excerpt}</p>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--muted)', fontSize: '0.78rem', fontFamily: 'var(--mono)' }}>
                <span>{featured.author}</span>
                <span>·</span>
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
            </div>
          </a>
        )}

        {/* post grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}>
          {rest.map(post => (
            <a key={post.title} href="#" style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: '14px', padding: '1.75rem',
              display: 'flex', flexDirection: 'column', gap: '0.6rem',
              transition: 'border-color 0.2s, transform 0.2s',
              textDecoration: 'none',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <span style={{
                alignSelf: 'flex-start',
                background: post.tagColor + '22', color: post.tagColor,
                padding: '2px 10px', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 600,
              }}>{post.tag}</span>
              <h3 style={{ fontWeight: 700, fontSize: '1rem', lineHeight: 1.4 }}>{post.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.6, flexGrow: 1 }}>{post.excerpt}</p>
              <div style={{ display: 'flex', gap: '0.75rem', color: 'var(--muted)', fontSize: '0.75rem', fontFamily: 'var(--mono)', marginTop: '0.5rem' }}>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </a>
          ))}
        </div>

        {/* view all */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#" style={{
            display: 'inline-block',
            background: 'transparent', color: 'var(--text)',
            padding: '0.65rem 2rem', borderRadius: '10px',
            fontWeight: 600, fontSize: '0.9rem',
            border: '1px solid var(--border)',
            transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => e.target.style.borderColor = 'var(--accent)'}
            onMouseLeave={e => e.target.style.borderColor = 'var(--border)'}
          >View all posts →</a>
        </div>

      </div>
    </section>
  )
}
