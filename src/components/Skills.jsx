import { useContext, useEffect, useRef } from 'react'
import { ThemeContext } from '../App'

const skillCategories = [
  {
    category: 'Perakitan Kendaraan',
    items: [
      { name: 'Tightening', color: '#3776AB' },
      { name: 'Grommet', color: '#06B6D4' },
      { name: 'Plug Hole', color: '#F59E0B' },
      { name: 'Fitting Part', color: '#10B981' },
      { name: 'Clip Assembly', color: '#8B5CF6' },
      { name: 'Part Shopping', color: '#EC4899' },
    ],
  },
  {
    category: 'Pengoperasian',
    items: [
      { name: 'Jig / Mal', color: '#6366F1' },
      { name: 'Scanning Part', color: '#14B8A6' },
      { name: 'Kalibrasi', color: '#F97316' },
      { name: 'TPS', color: '#EF4444' },
    ],
  },
  {
    category: 'Keamanan Kerja',
    items: [
      { name: 'K3', color: '#10B981' },
      { name: 'SOP', color: '#3B82F6' },
      { name: 'Safety First', color: '#F59E0B' },
    ],
  },
  {
    category: 'Soft Skills',
    items: [
      { name: 'Kerja Tim', color: '#8B5CF6' },
      { name: 'Ketelitian', color: '#06B6D4' },
      { name: 'Disiplin', color: '#10B981' },
      { name: 'Adaptif', color: '#F97316' },
      { name: 'Komunikasi', color: '#EC4899' },
    ],
  },
]

const competency = [
  { name: 'Toyota Production System', level: 90 },
  { name: 'Assembly Line Operation', level: 88 },
  { name: 'Quality Control', level: 85 },
  { name: 'Parts Handling & Logistics', level: 82 },
]

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { entry.target.classList.add('visible') } },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={`reveal reveal-delay-${delay}`}>{children}</div>
}

export default function Skills() {
  const { theme } = useContext(ThemeContext)

  return (
    <section id="skills" className="section-snap">
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto', width: '100%' }}>
        <Reveal>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 4, color: theme.accent, textTransform: 'uppercase', marginBottom: 8 }}>Kompetensi</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, marginBottom: 32, color: theme.text }}>Keahlian Saya</h2>
        </Reveal>

        {/* Skill Category Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 14, marginBottom: 36 }}>
          {skillCategories.map((cat, ci) => (
            <Reveal key={cat.category} delay={Math.min(ci + 1, 4)}>
              <div style={{
                padding: '20px', borderRadius: 12,
                background: theme.cardBg, border: `1px solid ${theme.border}`,
                height: '100%',
              }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, color: theme.accent, textTransform: 'uppercase', marginBottom: 14 }}>{cat.category}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {cat.items.map((item) => (
                    <span key={item.name} style={{
                      padding: '5px 12px', borderRadius: 6, fontSize: 11, fontWeight: 600,
                      background: `${item.color}12`, color: item.color,
                      border: `1px solid ${item.color}25`, transition: 'all 0.3s', cursor: 'default',
                    }}
                    onMouseEnter={(e) => { e.target.style.background = `${item.color}25` }}
                    onMouseLeave={(e) => { e.target.style.background = `${item.color}12` }}
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Competency Bars */}
        <Reveal delay={2}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, color: theme.subtext, textTransform: 'uppercase', marginBottom: 16 }}>Tingkat Kompetensi</p>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 14 }}>
          {competency.map((skill, i) => (
            <Reveal key={skill.name} delay={Math.min(i + 2, 5)}>
              <div style={{
                padding: '14px 18px', borderRadius: 10,
                background: theme.cardBg, border: `1px solid ${theme.border}`,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: theme.text }}>{skill.name}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: theme.accent }}>{skill.level}%</span>
                </div>
                <div style={{ width: '100%', height: 4, borderRadius: 50, background: `${theme.border}` }}>
                  <div style={{
                    width: `${skill.level}%`, height: '100%', borderRadius: 50,
                    background: theme.accent,
                    transition: 'width 1s ease',
                  }} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Focus Areas */}
        <Reveal delay={4}>
          <div style={{
            marginTop: 24, padding: '20px 24px', borderRadius: 12,
            background: theme.cardBg, border: `1px solid ${theme.border}`,
            borderLeft: `3px solid ${theme.accent}`,
          }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, color: theme.accent, textTransform: 'uppercase', marginBottom: 12 }}>Konsentrasi Utama</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 8 }}>
              {['Perakitan kendaraan roda empat', 'Assembly & Painting Production', 'Toyota Production System', 'K3 & Keselamatan Kerja'].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 6, height: 6, borderRadius: 2, background: theme.accent, flexShrink: 0 }} />
                  <span style={{ fontSize: 12, color: theme.subtext }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
