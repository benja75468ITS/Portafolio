import { portfolioData } from '../data/portfolioData'

export function ProjectStrip() {
  const { projects } = portfolioData

  return (
    <section id="galeria" className="py-16 md:py-24 border-b border-white/10 px-4 sm:px-6 bg-[#0E0E12]">
      <div className="max-w-5xl mx-auto">
        
        {/* Gallery Strip Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 font-mono text-[10px] text-neutral-400 sm:text-xs">
          <span className="text-brand-red font-bold uppercase tracking-widest">// REEL VISUAL</span>
          <span>04 ENTREGAS SELECCIONADAS</span>
        </div>

        {/* The 4 Project Screenshots in Editorial Presentation */}
        <div className="grid grid-cols-2 items-start gap-3 sm:gap-6 md:grid-cols-4">
          {projects.map((project, idx) => (
            <div 
              key={project.id}
              className={`relative overflow-hidden bg-black border border-white/10 hover:border-brand-red transition-all duration-500 group ${
                idx % 2 === 1 ? 'md:translate-y-4' : 'md:-translate-y-2'
              }`}
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-[#121215]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="p-3 bg-[#0B0B0D] border-t border-white/10">
                <span className="font-mono text-[10px] text-brand-red block">
                  /{project.id}
                </span>
                <h3 className="mt-1 break-words font-sans text-xs font-bold leading-snug text-white">
                  {project.shortTitle}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
