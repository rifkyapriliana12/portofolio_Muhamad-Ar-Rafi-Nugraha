import { useContext, useEffect, useRef, useState } from 'react'
import { ThemeContext } from '../App'

const certifications = [
  { title: 'Paklaring Kontrak Operator Produksi', detail: 'Kontrak Kerja Operator Produksi', date: 'Juli 2024', issuer: 'PT. TMMIN', file: '/certificates/sertifikat-01.pdf', color: '#14b8a6' },
  { title: 'Pelatihan Berbasis Kompetensi', detail: 'Assembly Operator Perangkat Roda 4 Rank C', date: 'Desember 2023', issuer: 'PT. TMMIN', file: '/certificates/sertifikat-02.pdf', color: '#06b6d4' },
  { title: 'Basic Safety Awareness', detail: 'Keselamatan dan Kesehatan Kerja', date: '2024', issuer: 'PT. TMMIN', file: '/certificates/sertifikat-03.pdf', color: '#f59e0b' },
  { title: 'Paklaring Operator Produksi Packaging', detail: 'Operator Produksi Ultra-Acting', date: 'Juni 2022', issuer: 'PT. Kaldu Sari Nabati', file: '/certificates/sertifikat-04.pdf', color: '#f97316' },
  { title: 'Sertifikat Kompetensi BNSP', detail: 'Operator Perakitan Kendaraan Roda 4 Rank C', date: 'Januari 2024', issuer: 'BNSP', file: '/certificates/sertifikat-05.pdf', color: '#ec4899' },
  { title: 'Sertifikat Magang', detail: 'Praktik Kerja Produksi', date: 'Juni 2023', issuer: 'PT. TMMIN', file: '/certificates/sertifikat-06.pdf', color: '#8b5cf6' },
  { title: 'Pelatihan Berbasis Kompetensi', detail: 'Assembly Operator Perangkat Roda 4 Rank B', date: 'Juni 2026', issuer: 'PT. TMMIN', file: '/certificates/sertifikat-07.pdf', color: '#10b981' },
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

function CertModal({ cert, onClose }) {
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#1e293b', borderRadius: 16, width: '100%', maxWidth: 800,
          maxHeight: '90vh', display: 'flex', flexDirection: 'column', overflow: 'hidden',
          border: `1px solid ${theme.border}`,
          boxShadow: '0 25px 80px rgba(0,0,0,0.5)', animation: 'fadeIn 0.2s ease',
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '12px 20px', borderBottom: `1px solid ${theme.border}`,
        }}>
          <div>
            <span style={{ fontSize: 14, fontWeight: 700, color: '#f1f5f9' }}>{cert.title}</span>
            <p style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>{cert.detail}</p>
          </div>
          <button
            onClick={onClose}
            style={{
              width: 32, height: 32, borderRadius: 8, border: 'none',
              background: 'rgba(255,255,255,0.06)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#64748b', transition: 'all 0.2s', flexShrink: 0,
            }}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* PDF Viewer */}
        <div style={{ flex: 1, padding: 16, overflow: 'auto', minHeight: 0 }}>
          <embed
            src={cert.file}
            type="application/pdf"
            style={{
              width: '100%', height: '65vh', borderRadius: 8,
              border: 'none',
            }}
          />
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '12px 20px', borderTop: `1px solid ${theme.border}`,
        }}>
          <span style={{ fontSize: 11, color: '#475569' }}>Tekan ESC atau klik luar untuk menutup</span>
          <a
            href={cert.file}
            download
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 16px',
              borderRadius: 8, background: cert.color, color: '#fff',
              fontSize: 12, fontWeight: 600, textDecoration: 'none', transition: 'all 0.2s',
            }}
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Download
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const { theme } = useContext(ThemeContext)
  const [modal, setModal] = useState(null)

  const closeModal = () => setModal(null)

  return (
    <section id="experience" className="section-snap">
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto', width: '100%' }}>
        <Reveal>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 4, color: theme.accent, textTransform: 'uppercase', marginBottom: 8 }}>Portfolio</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, marginBottom: 8, color: theme.text }}>Sertifikasi & Pelatihan</h2>
          <p style={{ fontSize: 13, color: theme.subtext, marginBottom: 28 }}>Klik kartu untuk melihat sertifikat secara lengkap</p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
          {certifications.map((cert, i) => (
            <Reveal key={i} delay={Math.min(i + 1, 4)}>
              <button
                onClick={() => setModal(cert)}
                style={{
                  textAlign: 'left', padding: 18, borderRadius: 12, cursor: 'pointer',
                  background: theme.cardBg, border: `1px solid ${theme.border}`,
                  transition: 'all 0.3s', width: '100%', fontFamily: 'Inter, sans-serif',
                  position: 'relative', overflow: 'hidden',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${cert.color}50`; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = theme.border; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                {/* Top color accent line */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                  background: cert.color,
                }} />
                <div style={{
                  width: 32, height: 32, borderRadius: 8, marginBottom: 12,
                  background: `${cert.color}15`, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: 8, fontWeight: 800, color: cert.color,
                }}>
                  {cert.issuer.slice(0, 4).toUpperCase()}
                </div>
                <h3 style={{ fontSize: 12, fontWeight: 700, color: theme.text, marginBottom: 4, lineHeight: 1.4 }}>{cert.title}</h3>
                <p style={{ fontSize: 10, color: theme.subtext, marginBottom: 6, lineHeight: 1.5 }}>{cert.detail}</p>
                <p style={{ fontSize: 9, color: theme.subtext }}>{cert.date}</p>
                <p style={{ fontSize: 9, color: theme.accent, fontWeight: 600, marginTop: 4 }}>{cert.issuer}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {modal && (
        <CertModal cert={modal} onClose={closeModal} />
      )}
    </section>
  )
}
