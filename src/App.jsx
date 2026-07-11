import { useState, createContext } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'

export const ThemeContext = createContext()

const darkTheme = {
  bg: '#0b1120',
  cardBg: 'rgba(255,255,255,0.03)',
  cardBg2: 'rgba(255,255,255,0.06)',
  text: '#e2e8f0',
  subtext: '#64748b',
  navBg: 'rgba(11,17,32,0.9)',
  border: 'rgba(255,255,255,0.06)',
  accent: '#14b8a6',
  accentAlt: '#f59e0b',
}

const lightTheme = {
  bg: '#f8fafc',
  cardBg: 'rgba(255,255,255,0.8)',
  cardBg2: 'rgba(255,255,255,0.95)',
  text: '#0f172a',
  subtext: '#64748b',
  navBg: 'rgba(248,250,252,0.9)',
  border: 'rgba(0,0,0,0.06)',
  accent: '#0d9488',
  accentAlt: '#d97706',
}

function App() {
  const [isDark, setIsDark] = useState(true)
  const theme = isDark ? darkTheme : lightTheme

  return (
    <ThemeContext.Provider value={{ theme, isDark, setIsDark }}>
      <div style={{ background: theme.bg, minHeight: '100vh', color: theme.text, transition: 'all 0.4s' }}>
        {isDark && <div className="grid-bg" />}
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
