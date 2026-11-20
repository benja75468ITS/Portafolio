import { useState } from 'react'
import { ArrowDown, ArrowUp, ArrowUpRight, GitHubIcon } from './Icons'
import { portfolioData } from '../data/portfolioData'

export function ProjectsFaq() {
  const [openIndex, setOpenIndex] = useState(1) // Default project 02 open like in reference!
  const { projects } = portfolioData

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="proyectos" className="scroll-mt-14 border-b border-white/10 bg-[#0B0B0D] px-4 py-16 sm:px-6 sm:py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Giant Red Condensed "FAQ" */}
          <div className="lg:col-span-4">
            <h2 className="font-condensed sticky top-20 select-none text-7xl leading-[0.85] tracking-wider text-brand-red sm:text-8xl md:text-9xl">
              FAQ
            </h2>
            <span className="block font-mono text-xs text-neutral-400 mt-2 uppercase tracking-widest">
              // DETALLES DE PROYECTOS
            </span>
          </div>

          {/* Right Column: Numbered Interactive Accordion Rows */}
          <div className="lg:col-span-8 divide-y divide-white/10 border-y border-white/10 font-sans">
            {projects.map((project, index) => {
              const isOpen = openIndex === index

              return (
                <div key={project.id} className="py-5 sm:py-6">
                  
                  {/* Clickable Header Row */}
                  <button
                    id={`project-toggle-${project.id}`}
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`project-details-${project.id}`}
                    className="group flex min-h-11 w-full items-center justify-between gap-3 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
                  >
                    <div className="flex min-w-0 items-center gap-3 sm:gap-10">
                      <span className="font-mono text-xs sm:text-sm text-neutral-400 font-bold group-hover:text-brand-red transition-colors">
                        /{project.id}
                      </span>
                      <h3 className="break-words font-sans text-left text-xs font-bold uppercase tracking-wider text-white transition-colors group-hover:text-brand-red sm:text-sm md:text-base">
                        {project.title}
                      </h3>
                    </div>

                    <div className="shrink-0 pl-1 text-white transition-colors group-hover:text-brand-red sm:pl-4">
                      {isOpen ? (
                        <ArrowUp className="w-4 h-4" />
                      ) : (
                        <ArrowDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Content Drawer - Matches the open /02 row in the reference */}
                  {isOpen && (
                    <div id={`project-details-${project.id}`} role="region" aria-labelledby={`project-toggle-${project.id}`} className="min-w-0 pb-2 pl-0 pr-0 pt-6 sm:pl-16 sm:pr-2 sm:pt-8">
                      
                      {/* Project Screenshot Frame */}
                      <div className="group relative mb-6 aspect-video w-full max-w-lg overflow-hidden border border-white/10 bg-black">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      {/* Detailed Description */}
                      <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-xl font-normal mb-5">
                        {project.description}
                      </p>

                      {/* Technologies Chips */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-[11px] font-mono uppercase bg-white/5 border border-white/10 text-neutral-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <a
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-white text-black hover:bg-brand-red hover:text-white font-mono text-xs font-bold px-4 py-2 transition-colors uppercase"
                        >
                          <GitHubIcon className="w-3.5 h-3.5" />
                          <span>Ver Código</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>

                        {project.live_url && (
                          <a
                            href={project.live_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 bg-brand-red text-white hover:bg-white hover:text-black font-mono text-xs font-bold px-4 py-2 transition-colors uppercase"
                          >
                            <span>Demo en Vivo</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>

                    </div>
                  )}

                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
