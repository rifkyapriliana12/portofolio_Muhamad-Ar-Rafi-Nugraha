import { useContext, useEffect, useRef, useState } from 'react'
import { ThemeContext } from '../App'

const certifications = [
  { title: 'Sertifikat Kompetensi BNSP', detail: 'Operator Perakitan Kendaraan Roda 4 Rank C', date: 'Januari 2024', issuer: 'BNSP', file: '/certificates/sertifikat-01.pdf', color: '#14b8a6' },
  { title: 'Pelatihan Berbasis Kompetensi', detail: 'Operator Perakitan Roda Empat Rank C', date: 'Desember 2023', issuer: 'PT. TMMIN', file: '/certificates/sertifikat-02.pdf', color: '#06b6d4' },
  { title: 'Pelatihan Berbasis Kompetensi', detail: 'Operator Perakitan Roda 4 Rank B', date: 'Juni 2026', issuer: 'PT. TMMIN', file: '/certificates/sertifikat-03.pdf', color: '#10b981' },
  { title: 'Pelatihan Garda Pratama', detail: 'Pelatihan 7 Hari', date: '2024', issuer: 'PT Hibar Utama Abadi', file: '/certificates/sertifikat-04.pdf', color: '#f59e0b' },
  { title: 'Dokumen Pendukung 1', detail: 'Dokumen Sertifikasi', date: '2024', issuer: 'Dokumen', file: '/certificates/sertifikat-05.pdf', color: '#8b5cf6' },
  { title: 'Dokumen Pendukung 2', detail: 'Dokumen Sertifikasi', date: '2024', issuer: 'Dokumen', file: '/certificates/sertifikat-06.pdf', color: '#ec4899' },
  { title: 'Dokumen Pendukung 3', detail: 'Dokumen Sertifikasi', date: '2024', issuer: 'Dokumen', file: '/certificates/sertifikat-07.pdf', color: '#14b8a6' },
  { title: 'Dokumen Pendukung 4', detail: 'Dokumen Sertifikasi', date: '2026', issuer: 'Dokumen', file: '/certificates/sertifikat-08.pdf', color: '#f97316' },
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

  const openPdf = () => {
    window.open(cert.file, '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#1e293b', borderRadius: 16, width: '100%', maxWidth: 420,
          overflow: 'hidden', border: `1px solid ${theme.border}`,
          boxShadow: '0 25px 80px rgba(0,0,0,0.5)', animation: 'fadeIn 0.2s ease',
        }}
      >
        {/* Top accent bar */}
        <div style={{ height: 3, background: cert.color }} />

        {/* Icon */}
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 28 }}>
          <div style={{
            width: 64, height: 64, borderRadius: 14,
            background: `${cert.color}15`, display: 'flex', alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="28" height="28" fill="none" stroke={cert.color} strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '16px 28px 0', textAlign: 'center' }}>
          <h3 style={{ fontSize: 17, fontWeight: 800, color: '#f1f5f9', marginBottom: 4 }}>{cert.title}</h3>
          <p style={{ fontSize: 12, color: '#64748b', marginBottom: 12 }}>{cert.detail}</p>
          <div style={{
            display: 'flex', justifyContent: 'center', gap: 16,
            fontSize: 11, color: '#475569',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
              {cert.date}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {cert.issuer}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div style={{ padding: '20px 28px 24px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <button
            onClick={openPdf}
            style={{
              width: '100%', padding: '12px 24px', borderRadius: 10, border: 'none', cursor: 'pointer',
              fontSize: 13, fontWeight: 700, fontFamily: 'Inter, sans-serif',
              background: cert.color, color: '#fff', transition: 'all 0.2s',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9' }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
            Buka Sertifikat
          </button>
          <div style={{ display: 'flex', gap: 8 }}>
            <a
              href={cert.file}
              download
              style={{
                flex: 1, padding: '10px 16px', borderRadius: 10, cursor: 'pointer',
                fontSize: 12, fontWeight: 600, fontFamily: 'Inter, sans-serif',
                background: `${theme.accent}12`, color: theme.accent,
                border: `1px solid ${theme.accent}25`, textDecoration: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                transition: 'all 0.2s',
              }}
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Download
            </a>
            <button
              onClick={onClose}
              style={{
                flex: 1, padding: '10px 16px', borderRadius: 10, border: `1px solid ${theme.border}`,
                background: 'transparent', color: '#64748b', cursor: 'pointer',
                fontSize: 12, fontWeight: 600, fontFamily: 'Inter, sans-serif',
                transition: 'all 0.2s',
              }}
            >
              Tutup
            </button>
          </div>
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
