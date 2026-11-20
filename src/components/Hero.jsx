import { ArrowDown, ArrowUpRight, GitHubIcon } from './Icons'
import { portfolioData } from '../data/portfolioData'

export function Hero() {
  const { profile, pillars } = portfolioData

  return (
    <section id="inicio" className="relative pt-6 pb-20 border-b border-white/10 overflow-hidden bg-[#08080A]">
      
      {/* Top Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Giant Top Name - Replicating the "BALENCIAGA" Macro-Typography */}
        <div className="relative z-0 w-full select-none pb-2 pt-4 text-center">
          <h1 className="font-condensed w-full whitespace-nowrap text-[clamp(3.75rem,20vw,14rem)] leading-[0.9] tracking-tight text-white transition-all">
            {profile.name}
          </h1>
        </div>

        {/* Minimalist Navigation Line directly beneath the giant name */}
        <nav aria-label="Secciones del portafolio" className="relative z-10 flex w-full items-center justify-between gap-2 border-y border-white/10 py-3 font-mono text-[10px] uppercase tracking-wider text-neutral-400 sm:text-xs sm:tracking-widest">
          <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2 sm:gap-x-10">
            <a href="#sobre-mi" className="hover:text-white transition-colors">Sobre Mí</a>
            <a href="#tecnologias" className="hover:text-white transition-colors">Tecnologías</a>
            <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <span className="hidden sm:inline text-neutral-500">MÉXICO • {profile.year}</span>
            <a 
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brand-red font-bold flex items-center gap-1 transition-colors"
            >
              <span>GITHUB</span>
              <ArrowUpRight className="w-3 h-3 text-brand-red" />
            </a>
          </div>
        </nav>

        {/* Cinematic Center Visual: Intense Red Radial Backlight + Overlapping Character */}
        <div className="relative -mt-4 flex h-[340px] w-full items-center justify-center overflow-hidden sm:-mt-10 sm:h-[460px] md:h-[560px] lg:h-[620px]">
          
          {/* Intense Red Radial Backlight Glow (Replicating the screenshot lighting) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] md:w-[620px] h-[340px] sm:h-[500px] md:h-[620px] rounded-full bg-[radial-gradient(circle,_#FF1E1E_0%,_#A30000_40%,_rgba(163,0,0,0.15)_65%,_transparent_80%)] opacity-85 blur-2xl pointer-events-none"></div>
          
          {/* Ambient secondary glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] rounded-full bg-[#FF3B30] opacity-40 blur-xl pointer-events-none"></div>

          {/* Centered Character Avatar (Overlapping seamlessly) */}
          <div className="relative z-10 w-full h-full max-w-lg sm:max-w-xl flex items-center justify-center">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>

          {/* Bottom vignette overlay to smoothly blend with content below */}
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#08080A] via-[#08080A]/70 to-transparent pointer-events-none z-10"></div>
          
          {/* Telemetry status overlay */}
          <div className="absolute bottom-4 left-3 right-3 z-20 flex flex-col items-start gap-2 font-mono text-[10px] sm:left-4 sm:right-4 sm:flex-row sm:items-center sm:justify-between sm:text-xs">
            <span className="max-w-full break-words border border-white/10 bg-black/90 px-2 py-1.5 font-bold tracking-wider text-white sm:px-3">
              {profile.role}
            </span>
            <span className="max-w-full break-words border border-white/10 bg-black/90 px-2 py-1.5 font-bold tracking-wider text-brand-red sm:px-3">
              {profile.subtitle}
            </span>
          </div>

        </div>

        {/* CTA Triggers */}
        <div className="relative z-20 mt-8 flex flex-wrap items-center justify-center gap-3 font-mono text-xs sm:gap-4">
          <a
            href="#proyectos"
            className="inline-flex min-h-11 items-center justify-center gap-2 bg-brand-red px-5 py-3.5 text-center font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-7"
          >
            <span>Ver Proyectos</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 border border-white/15 bg-[#121215] px-5 py-3.5 text-center font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-7"
          >
            <GitHubIcon className="w-3.5 h-3.5" />
            <span>Perfil en GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-brand-red" />
          </a>
        </div>

        {/* 3 Pillars of Benjamin's Software Engineering */}
        <div id="servicios" className="mt-16 scroll-mt-20 grid grid-cols-1 gap-4 border-t border-white/10 pt-12 font-sans sm:gap-6 sm:pt-16 md:grid-cols-3 md:gap-8">
          {pillars.map((pillar) => (
            <div 
              key={pillar.code}
              className="group flex min-w-0 flex-col justify-between border border-white/10 bg-[#0E0E12] p-5 transition-colors hover:border-brand-red sm:p-6"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-mono text-xs">
                  <span className="text-brand-red font-bold">PILLAR // {pillar.code}</span>
                  <span className="text-neutral-500 font-mono text-[10px]">VERIFICADO</span>
                </div>

                <h3 className="font-sans font-bold text-base sm:text-lg text-white uppercase tracking-wider mb-2 group-hover:text-brand-red transition-colors">
                  {pillar.title}
                </h3>
                
                <span className="block font-mono text-[11px] text-neutral-400 uppercase tracking-wider mb-4">
                  {pillar.subtitle}
                </span>

                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5 font-mono text-[11px] text-white">
                {pillar.stack.map((item) => (
                  <span key={item} className="px-2 py-0.5 bg-white/5 border border-white/5 text-neutral-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}
