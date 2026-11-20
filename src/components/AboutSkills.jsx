import { portfolioData } from '../data/portfolioData'

export function AboutSkills() {
  const { profile, skills } = portfolioData

  const skillGroups = [
    { title: "LENGUAJES", items: skills.lenguajes },
    { title: "FRAMEWORKS & ENTORNOS", items: skills.frameworks },
    { title: "BASES DE DATOS", items: skills.basesDeDatos },
    { title: "HERRAMIENTAS", items: skills.herramientas },
  ]

  return (
    <section id="sobre-mi" className="border-b border-white/10 bg-[#0E0E12] px-4 py-16 sm:px-6 sm:py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Giant Red Condensed "BIO" */}
          <div className="lg:col-span-4">
            <h2 className="font-condensed select-none text-7xl leading-[0.85] tracking-wider text-brand-red sm:text-8xl md:text-9xl">
              BIO
            </h2>
            <span className="block font-mono text-xs text-neutral-400 mt-2 uppercase tracking-widest">
              // PERFIL TÉCNICO
            </span>
          </div>

          {/* Right Column: Narrative Bio & Full Tech Stack Matrix */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Bio Paragraph */}
            <div className="p-6 sm:p-8 bg-[#0B0B0D] border border-white/10">
              <span className="font-mono text-xs text-brand-red block mb-3 uppercase tracking-wider">
                DECLARACIÓN DEL DESARROLLADOR
              </span>
              <p className="text-white font-sans text-base sm:text-lg leading-relaxed font-normal">
                &ldquo;{profile.bio}&rdquo;
              </p>
            </div>

            {/* Tech Stack 4-Column / 2-Column Grid */}
            <div id="tecnologias" className="grid scroll-mt-20 grid-cols-1 gap-4 border-t border-white/10 pt-4 sm:grid-cols-2 sm:gap-6">
              {skillGroups.map((group) => (
                <div key={group.title} className="p-5 bg-[#0B0B0D] border border-white/10">
                  <h3 className="font-sans font-bold text-xs text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                    {group.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span 
                        key={item}
                        className="px-2.5 py-1 text-xs font-mono text-neutral-300 bg-white/5 border border-white/5"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
