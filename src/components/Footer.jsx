import { portfolioData } from '../data/portfolioData'
import { ArrowUpRight } from './Icons'

export function Footer() {
  const { profile } = portfolioData

  return (
    <footer id="contacto" className="scroll-mt-14 overflow-hidden bg-[#0B0B0D] px-4 pb-8 pt-16 sm:px-6 sm:pt-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Footer Navigation - Matches the reference three-column footer text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-14 border-b border-white/10 text-xs font-mono uppercase text-neutral-400">
          
          <div className="flex flex-col gap-2">
            <span className="text-white font-bold">NAVEGACIÓN</span>
            <div className="flex flex-wrap gap-4 pt-1">
              <a href="#servicios" className="hover:text-white transition-colors">SERVICIOS</a>
              <a href="#galeria" className="hover:text-white transition-colors">GALERÍA</a>
              <a href="#proyectos" className="hover:text-white transition-colors">PROYECTOS</a>
              <a href="#sobre-mi" className="hover:text-white transition-colors">BIO</a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-white font-bold">¿TIENES UN PROYECTO O VACANTE?</span>
            <p className="text-neutral-400 normal-case font-sans text-xs leading-relaxed">
              Disponible para colaborar en proyectos de desarrollo web, móvil o sistemas. Contáctame directamente a través de GitHub.
            </p>
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <span className="text-white font-bold">REDES &amp; CÓDIGO</span>
            <div className="flex items-center gap-4 pt-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-red font-bold flex items-center gap-1 transition-colors"
              >
                <span>GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-brand-red" />
              </a>
            </div>
          </div>

        </div>

        {/* Giant Red Condensed Name - EXACT MATCH to "JESSI JONS" in reference! */}
        <div className="select-none overflow-hidden py-12 text-center sm:py-16 md:py-20">
          <h2 className="font-condensed w-full whitespace-nowrap text-[clamp(3.75rem,20vw,14rem)] leading-[0.86] tracking-tight text-brand-red">
            {profile.name}
          </h2>
        </div>

        {/* Bottom Credits Line */}
        <div className="flex flex-col items-start gap-3 border-t border-white/10 pt-8 font-mono text-[10px] uppercase tracking-wider text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:text-[11px] sm:tracking-widest">
          <span>© 2026 TODOS LOS DERECHOS RESERVADOS</span>
          <span className="text-neutral-400">@{profile.githubUsername}</span>
          <span>MÉXICO • LATAM</span>
        </div>

      </div>
    </footer>
  )
}
