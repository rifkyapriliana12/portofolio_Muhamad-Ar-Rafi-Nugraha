import { useContext, useEffect, useRef } from 'react'
import { ThemeContext } from '../App'

const experiences = [
  {
    period: 'Juli 2024 — Juni 2026',
    company: 'PT. Toyota Motor Manufacturing Indonesia',
    role: 'Team Member / Operator Produksi',
    division: 'Assy & Painting Production',
    details: ['Pemasangan connector kabel dan hose', 'Scanning part untuk verifikasi kualitas', 'Pengoperasian jig atau mal', 'Penerapan prinsip K3'],
    current: true,
  },
  {
    period: 'Juni 2023 — Desember 2023',
    company: 'PT. Toyota Motor Manufacturing Indonesia',
    role: 'Operator Produksi Magang',
    division: 'Assembly Production',
    details: ['Menyiapkan part untuk proses perakitan', 'Kalibrasi peralatan produksi', 'Memasang briket pada kendaraan', 'Scanning part'],
    current: false,
  },
  {
    period: 'Juni 2021 — Juni 2022',
    company: 'PT. Kaldu Sari Nabati Indonesia',
    role: 'Operator Produksi (Packaging Ultra)',
    division: 'Divisi Packaging',
    details: ['Mengoperasikan mesin produksi packaging', 'Memastikan standar output', 'Memperbaiki mesin jika terjadi masalah'],
    current: false,
  },
  {
    period: 'September 2020 — Desember 2020',
    company: 'Bengkel Sunda Motor',
    role: 'Peserta PKL',
    division: 'Praktik Kerja Lapangan',
    details: ['Membantu mekanik dalam perbaikan mobil', 'Menyiapkan peralatan bengkel'],
    current: false,
  },
]

const education = [
  { year: '2018 — 2021', school: 'SMK Negeri 3 Tasikmalaya', major: 'Teknik Kendaraan Ringan Otomotif' },
  { year: '2015 — 2018', school: 'SMP Negeri 10 Tasikmalaya', major: 'Sekolah Menengah Pertama' },
  { year: '2009 — 2015', school: 'SD Negeri Rahayu 1', major: 'Sekolah Dasar' },
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

export default function About() {
  const { theme } = useContext(ThemeContext)

  return (
    <section id="about" className="section-snap">
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto', width: '100%' }}>
        <Reveal>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 4, color: theme.accent, textTransform: 'uppercase', marginBottom: 8 }}>Tentang</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, marginBottom: 32, color: theme.text }}>Siapa Saya?</h2>
        </Reveal>

        {/* Bio Card */}
        <Reveal delay={1}>
          <div style={{
            padding: '24px 28px', borderRadius: 12,
            background: theme.cardBg, border: `1px solid ${theme.border}`,
            borderLeft: `3px solid ${theme.accent}`,
            marginBottom: 32,
          }}>
            <p style={{ fontSize: 14, color: theme.subtext, lineHeight: 1.9 }}>
              Lulusan <strong style={{ color: theme.text }}>SMK Negeri 3 Tasikmalaya</strong> jurusan
              Teknik Kendaraan Ringan Otomotif dengan pengalaman kerja di
              <strong style={{ color: theme.text }}> PT. Toyota Motor Manufacturing Indonesia (TMMIN)</strong>.
              Terampil dalam perakitan kendaraan dan penerapan prinsip K3.
            </p>
          </div>
        </Reveal>

        {/* Experience Timeline */}
        <Reveal delay={2}>
          <h3 style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: theme.accent, textTransform: 'uppercase', marginBottom: 20 }}>Pengalaman Kerja</h3>
        </Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}>
          {experiences.map((exp, i) => (
            <Reveal key={i} delay={Math.min(i + 2, 5)}>
              <div style={{
                padding: '16px 20px', borderRadius: 10,
                background: theme.cardBg, border: `1px solid ${theme.border}`,
                position: 'relative', overflow: 'hidden',
              }}>
                {exp.current && (
                  <div style={{
                    position: 'absolute', top: 0, right: 0,
                    padding: '4px 12px', borderRadius: '0 0 0 10px',
                    fontSize: 9, fontWeight: 800, color: '#fff',
                    background: '#10b981', letterSpacing: 1,
                  }}></div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: theme.text }}>{exp.role}</span>
                </div>
                <p style={{ fontSize: 12, color: theme.accent, fontWeight: 600 }}>{exp.company}</p>
                <p style={{ fontSize: 11, color: theme.subtext, marginBottom: 8 }}>{exp.division} &middot; {exp.period}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {exp.details.map((d, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ width: 4, height: 4, borderRadius: '50%', background: `${theme.accent}60`, flexShrink: 0 }} />
                      <span style={{ fontSize: 11, color: theme.subtext }}>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Education */}
        <Reveal delay={3}>
          <h3 style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: theme.accent, textTransform: 'uppercase', marginBottom: 16 }}>Pendidikan</h3>
        </Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {education.map((edu, i) => (
            <Reveal key={i} delay={Math.min(i + 3, 5)}>
              <div style={{
                padding: '14px 18px', borderRadius: 10,
                background: theme.cardBg, border: `1px solid ${theme.border}`,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: theme.text }}>{edu.school}</span>
                  <p style={{ fontSize: 11, color: theme.subtext, marginTop: 2 }}>{edu.major}</p>
                </div>
                <span style={{ fontSize: 10, color: theme.accent, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{edu.year}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
