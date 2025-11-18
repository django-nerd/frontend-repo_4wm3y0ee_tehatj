import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onNavigate = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" onClick={(e)=>onNavigate(e,'#home')} className="text-white font-semibold tracking-tight text-lg">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-cyan-400">AI</span> Portfolio
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={(e)=>onNavigate(e,l.href)} className="text-slate-200/80 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={(e)=>onNavigate(e,'#contact')} className="px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-500 text-white shadow-md shadow-indigo-500/30 hover:opacity-90 transition">
            Get in touch
          </a>
        </div>
        <button className="md:hidden text-white" onClick={()=>setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden px-6 pb-6 space-y-3">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={(e)=>onNavigate(e,l.href)} className="block text-slate-200/90">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={(e)=>onNavigate(e,'#contact')} className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-500 text-white">
            Get in touch
          </a>
        </div>
      )}
    </header>
  )
}
