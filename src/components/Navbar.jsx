import { useState } from 'react'
import { ArrowUpRight } from './Icons'
import { portfolioData } from '../data/portfolioData'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { profile } = portfolioData

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08080A]/95 font-sans backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2 text-xl font-black tracking-tight text-white transition-colors hover:text-brand-red">
          <span>{profile.name}</span>
          <span className="font-mono text-xs font-normal text-brand-red">/ PORTAFOLIO</span>
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-5 font-mono text-xs uppercase tracking-widest text-neutral-400 md:flex">
          <a href="#sobre-mi" className="transition-colors hover:text-white">Sobre mí</a>
          <a href="#tecnologias" className="transition-colors hover:text-white">Tecnologías</a>
          <a href="#proyectos" className="transition-colors hover:text-white">Proyectos</a>
          <a href="#contacto" className="transition-colors hover:text-white">Contacto</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 border border-white/10 bg-white/5 px-3 py-1.5 font-bold text-white transition-colors hover:bg-white/10 hover:text-brand-red">
            <span>GitHub</span>
            <ArrowUpRight className="h-3 w-3 text-brand-red" />
          </a>
        </nav>

        <button
          type="button"
          className="min-h-11 border border-white/15 px-3 font-mono text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-brand-red hover:text-brand-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? 'Cerrar' : 'Menú'}
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" aria-label="Navegación móvil" className="grid gap-1 border-t border-white/10 px-4 py-3 font-mono text-sm uppercase tracking-wider text-neutral-300 md:hidden">
          <a href="#sobre-mi" onClick={() => setMenuOpen(false)} className="py-2 transition-colors hover:text-white">Sobre mí</a>
          <a href="#tecnologias" onClick={() => setMenuOpen(false)} className="py-2 transition-colors hover:text-white">Tecnologías</a>
          <a href="#proyectos" onClick={() => setMenuOpen(false)} className="py-2 transition-colors hover:text-white">Proyectos</a>
          <a href="#contacto" onClick={() => setMenuOpen(false)} className="py-2 transition-colors hover:text-white">Contacto</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-2 font-bold text-white">
            GitHub <ArrowUpRight className="h-4 w-4 text-brand-red" />
          </a>
        </nav>
      )}
    </header>
  )
}
