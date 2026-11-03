import { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/content';

export function Projects() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  function prev() {
    setActive((i) => (i - 1 + projects.length) % projects.length);
  }

  function next() {
    setActive((i) => (i + 1) % projects.length);
  }

  return (
    <section id="proyectos" className="relative overflow-hidden bg-[#173c29] pb-16 pt-14 text-[#fcfbf8] sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
      <div className="section-inner">
        <div className="section-label border-paper/20 text-paper/60">
          <span>01 / El trabajo</span>
          <span>Selección 2024 — 2025</span>
        </div>

        <div className="flex items-start justify-between gap-8 pb-8 pt-7 sm:pb-10 sm:pt-8">
          <h2 className="display-heading text-6xl text-paper sm:text-8xl lg:text-[7.2rem]">
            Proyectos<span className="ml-3 text-accent">✳</span>
          </h2>
          <p className="max-w-[190px] pt-2 text-sm leading-relaxed text-paper sm:pt-4">
            Hacemos que las ideas encuentren su forma.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-[minmax(190px,0.65fr)_minmax(0,1.65fr)] sm:gap-12 lg:gap-20">
          <div className="flex min-w-0 flex-col justify-center gap-4 sm:gap-5">
            <span className="font-display text-5xl font-extrabold leading-none text-accent sm:text-6xl">
              0{project.index}<small className="ml-2 align-middle font-mono text-[10px] font-normal text-paper/60">/ 0{project.total}</small>
            </span>
            <h3 className="font-display text-3xl font-extrabold tracking-tightest sm:text-4xl lg:text-5xl">{project.title}</h3>
            <span className="font-mono text-[9px] uppercase tracking-label text-paper/90">{project.discipline}</span>
            <p className="max-w-xs text-sm leading-relaxed text-paper/70 sm:text-base">{project.description}</p>
            <div className="flex items-center gap-3 pt-2">
              <button onClick={prev} aria-label="Proyecto anterior" className="grid h-9 w-9 place-items-center border border-paper text-paper transition-colors hover:bg-paper hover:text-[#173c29]"><ArrowLeft className="h-4 w-4" /></button>
              <button onClick={next} aria-label="Proyecto siguiente" className="grid h-9 w-9 place-items-center border border-paper text-paper transition-colors hover:bg-paper hover:text-[#173c29]"><ArrowRight className="h-4 w-4" /></button>
              <span className="ml-auto font-mono text-[10px] text-paper/60">{project.year}</span>
            </div>
          </div>

          <div className="group relative min-w-0 overflow-hidden">
            <img src={project.image} alt={`Proyecto ${project.title} de KORIA Studio`} className="aspect-[1.65/1] w-full rotate-[2deg] object-cover transition-transform duration-700 group-hover:rotate-0" />
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-paper/40 bg-[#173c29]/85 px-4 py-2 text-paper">
              <span className="font-mono text-[9px] uppercase tracking-label">{project.caption}</span>
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 left-0 h-10 w-full rotate-[-3deg] bg-paper" />
    </section>
  );
}
