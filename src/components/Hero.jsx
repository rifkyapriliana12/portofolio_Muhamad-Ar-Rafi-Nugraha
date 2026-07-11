import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../App'

const typewriterTexts = [
  'OPERATOR PERAKITAN KENDARAAN RODA 4',
  'BNSP CERTIFIED RANK C',
  'EXPERIENCED AT PT. TMMIN',
  'K3 COMPLIANCE PROFESSIONAL',
]

function Typewriter() {
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = typewriterTexts[textIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCharIndex((prev) => prev + 1)
        if (charIndex === current.length) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setCharIndex((prev) => prev - 1)
        if (charIndex === 0) {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % typewriterTexts.length)
        }
      }
    }, isDeleting ? 40 : 80)
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex])

  return (
    <span>
      {typewriterTexts[textIndex].slice(0, charIndex)}
      <span style={{ animation: 'blink 1s infinite step-end', color: '#14b8a6' }}>|</span>
    </span>
  )
}

export default function Hero() {
  const { theme } = useContext(ThemeContext)

  return (
    <section id="hero" className="section-snap" style={{ position: 'relative' }}>
      {/* Corner accent lines */}
      <div style={{ position: 'absolute', top: 60, left: 40, width: 80, height: 80, borderTop: `2px solid ${theme.accent}30`, borderLeft: `2px solid ${theme.accent}30`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 60, right: 40, width: 80, height: 80, borderBottom: `2px solid ${theme.accent}30`, borderRight: `2px solid ${theme.accent}30`, pointerEvents: 'none' }} />

      {/* Background orb */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle, ${theme.accent}08 0%, transparent 70%)`, pointerEvents: 'none' }} />

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1, gap: 24 }}>
        {/* Profile Photo */}
        <div style={{ position: 'relative', marginBottom: 8 }}>
          <div style={{
            position: 'absolute', inset: -4, borderRadius: 16,
            border: `2px solid ${theme.accent}40`,
            animation: 'borderGlow 3s ease-in-out infinite',
          }} />
          <img
            src="/images/profile.jpeg"
            alt="Muhamad Ar Rafi Nugraha"
            style={{
              width: 140, height: 140, borderRadius: 16, objectFit: 'cover',
              border: `2px solid ${theme.accent}`, position: 'relative', zIndex: 1,
            }}
          />
        </div>

        {/* Name */}
        <div>
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: 4, color: theme.accent,
            textTransform: 'uppercase', marginBottom: 12,
          }}>
            Selamat Datang di Portfolio Saya
          </p>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: 4,
            color: theme.text,
          }}>
            Muhamad Ar Rafi
          </h1>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: 20,
            color: theme.subtext,
          }}>
            Nugraha
          </h1>
        </div>

        {/* Typewriter badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '8px 20px', borderRadius: 8,
          background: theme.cardBg, border: `1px solid ${theme.border}`,
          marginBottom: 8, fontSize: 11, fontWeight: 600, color: theme.subtext,
          letterSpacing: 1, fontFamily: 'Inter, monospace',
        }}>
          <Typewriter />
        </div>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#contact" style={{
            padding: '12px 28px', borderRadius: 8, border: 'none', cursor: 'pointer',
            fontSize: 13, fontWeight: 700, fontFamily: 'Inter, sans-serif',
            background: theme.accent, color: '#fff',
            textDecoration: 'none', transition: 'all 0.3s', display: 'inline-flex', alignItems: 'center', gap: 8,
          }}
          onMouseEnter={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = `0 8px 24px ${theme.accent}30` }}
          onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none' }}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
            Hubungi Saya
          </a>
          <a href="/cv-muhamad-ar-rafi-nugraha.pdf" download style={{
            padding: '12px 28px', borderRadius: 8, cursor: 'pointer',
            fontSize: 13, fontWeight: 700, fontFamily: 'Inter, sans-serif',
            background: 'transparent', color: theme.text,
            border: `1px solid ${theme.border}`, textDecoration: 'none',
            transition: 'all 0.3s', display: 'inline-flex', alignItems: 'center', gap: 8,
          }}
          onMouseEnter={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.borderColor = theme.accent; e.target.style.color = theme.accent }}
          onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.borderColor = theme.border; e.target.style.color = theme.text }}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Download CV
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
      }}>
        <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 3, color: theme.subtext, textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: 1, height: 24, background: `linear-gradient(to bottom, ${theme.subtext}, transparent)` }} />
      </div>
    </section>
  )
}
