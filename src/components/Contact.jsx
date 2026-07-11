import { useContext, useEffect, useRef } from 'react'
import { ThemeContext } from '../App'

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

export default function Contact() {
  const { theme } = useContext(ThemeContext)

  return (
    <section id="contact" className="section-snap" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 600, margin: '0 auto' }}>
        <Reveal>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 4, color: theme.accent, textTransform: 'uppercase', marginBottom: 8 }}>Kontak</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: 16, color: theme.text }}>
            Mari Bekerja Sama!
          </h2>
          <p style={{ fontSize: 14, color: theme.subtext, marginBottom: 36, lineHeight: 1.8, maxWidth: 480, margin: '0 auto 36px' }}>
            Saya terbuka untuk peluang kerja di bidang otomotif, manufaktur, dan operasional produksi. Jangan ragu untuk menghubungi saya.
          </p>
        </Reveal>

        {/* Contact Cards */}
        <Reveal delay={1}>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
            <a href="mailto:arrafinug@gmail.com" style={{
              padding: '16px 28px', borderRadius: 12, border: `1px solid ${theme.border}`,
              background: theme.cardBg, cursor: 'pointer',
              fontSize: 13, fontWeight: 700, fontFamily: 'Inter, sans-serif',
              color: theme.text, textDecoration: 'none', transition: 'all 0.3s',
              display: 'flex', alignItems: 'center', gap: 10, minWidth: 180, justifyContent: 'center',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#f43f5e50'; e.currentTarget.style.transform = 'translateY(-3px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = theme.border; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div style={{
                width: 36, height: 36, borderRadius: 8, background: '#f43f5e15',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <svg width="18" height="18" fill="none" stroke="#f43f5e" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              </div>
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontSize: 10, color: theme.subtext, fontWeight: 600, marginBottom: 2 }}>Email</p>
                <p style={{ fontSize: 12, color: theme.text }}>arrafinug@gmail.com</p>
              </div>
            </a>
            <a href="tel:0895339069503" style={{
              padding: '16px 28px', borderRadius: 12, border: `1px solid ${theme.border}`,
              background: theme.cardBg, cursor: 'pointer',
              fontSize: 13, fontWeight: 700, fontFamily: 'Inter, sans-serif',
              color: theme.text, textDecoration: 'none', transition: 'all 0.3s',
              display: 'flex', alignItems: 'center', gap: 10, minWidth: 180, justifyContent: 'center',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${theme.accent}50`; e.currentTarget.style.transform = 'translateY(-3px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = theme.border; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div style={{
                width: 36, height: 36, borderRadius: 8, background: `${theme.accent}15`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <svg width="18" height="18" fill="none" stroke={theme.accent} strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              </div>
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontSize: 10, color: theme.subtext, fontWeight: 600, marginBottom: 2 }}>Telepon</p>
                <p style={{ fontSize: 12, color: theme.text }}>0895-3390-69503</p>
              </div>
            </a>
          </div>
        </Reveal>

        {/* Download CV */}
        <Reveal delay={2}>
          <a href="/cv-muhamad-ar-rafi-nugraha.pdf" download style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '14px 32px', borderRadius: 10, cursor: 'pointer',
            fontSize: 14, fontWeight: 700, fontFamily: 'Inter, sans-serif',
            background: theme.accent, color: '#fff',
            textDecoration: 'none', transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 8px 24px ${theme.accent}30` }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Download CV
          </a>
        </Reveal>

        {/* Footer */}
        <Reveal delay={3}>
          <div style={{ borderTop: `1px solid ${theme.border}`, paddingTop: 24, marginTop: 48 }}>
            <p style={{ fontSize: 11, color: theme.subtext }}>
              &copy; {new Date().getFullYear()} Muhamad Ar Rafi Nugraha
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
