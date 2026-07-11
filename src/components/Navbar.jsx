import { useState, useContext } from 'react'
import { ThemeContext } from '../App'

const navLinks = [
  { label: 'BERANDA', href: '#hero' },
  { label: 'TENTANG', href: '#about' },
  { label: 'KEAHLIAN', href: '#skills' },
  { label: 'PENGALAMAN', href: '#experience' },
  { label: 'KONTAK', href: '#contact' },
]

export default function Navbar() {
  const { theme, isDark, setIsDark } = useContext(ThemeContext)
  const [active, setActive] = useState('#hero')
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleClick = (href) => {
    setActive(href)
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Desktop: Vertical side dots on right */}
      <nav
        className="hidden md:flex"
        style={{
          position: 'fixed', right: 28, top: '50%', transform: 'translateY(-50%)',
          zIndex: 1000, flexDirection: 'column', alignItems: 'center', gap: 18,
        }}
      >
        {navLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => handleClick(link.href)}
            title={link.label}
            style={{
              width: active === link.href ? 10 : 6,
              height: active === link.href ? 10 : 6,
              borderRadius: '50%', border: 'none', cursor: 'pointer', padding: 0,
              background: active === link.href ? theme.accent : theme.subtext,
              transition: 'all 0.3s',
              boxShadow: active === link.href ? `0 0 12px ${theme.accent}60` : 'none',
            }}
          />
        ))}
        <div style={{ width: 1, height: 24, background: theme.border, marginTop: 4 }} />
        <button
          onClick={() => setIsDark(!isDark)}
          style={{
            width: 32, height: 32, borderRadius: 8, border: `1px solid ${theme.border}`,
            background: theme.cardBg, cursor: 'pointer', display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: 14, transition: 'all 0.3s',
          }}
        >
          {isDark ? '☀' : '☾'}
        </button>
      </nav>

      {/* Mobile: Top bar */}
      <nav
        className="md:hidden"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1100,
          padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: theme.navBg, backdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${theme.border}`,
        }}
      >
        <span style={{ fontSize: 13, fontWeight: 800, color: theme.accent, letterSpacing: 1 }}>AR</span>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button
            onClick={() => setIsDark(!isDark)}
            style={{
              width: 36, height: 36, borderRadius: 8, border: `1px solid ${theme.border}`,
              background: theme.cardBg, cursor: 'pointer', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: 14, transition: 'all 0.3s',
            }}
          >
            {isDark ? '☀' : '☾'}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              width: 36, height: 36, borderRadius: 8, border: `1px solid ${theme.border}`,
              background: theme.cardBg, cursor: 'pointer', display: 'flex', alignItems: 'center',
              justifyContent: 'center', transition: 'all 0.3s',
            }}
          >
            <svg width="18" height="18" fill="none" stroke={theme.text} strokeWidth="2" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            position: 'fixed', inset: 0, zIndex: 1050,
            background: isDark ? 'rgba(11,17,32,0.97)' : 'rgba(248,250,252,0.97)',
            backdropFilter: 'blur(20px)',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', gap: 20, animation: 'fadeIn 0.3s ease',
          }}
        >
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              style={{
                padding: '12px 32px', borderRadius: 8, border: 'none', cursor: 'pointer',
                fontSize: 15, fontWeight: 700, letterSpacing: 3, fontFamily: 'Inter, sans-serif',
                color: active === link.href ? theme.accent : theme.subtext,
                background: active === link.href ? `${theme.accent}15` : 'transparent',
                transition: 'all 0.3s', animation: `slideIn 0.3s ease ${i * 0.05}s both`,
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
