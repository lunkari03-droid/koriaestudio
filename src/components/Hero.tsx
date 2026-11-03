import { ArrowDown, ArrowDownRight } from 'lucide-react';
import { products } from '@/data/content';

const heroImages = [products[0].images[0], products[1].images[0], products[2].images[0]];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-line/20">
      <div className="flex items-center justify-between px-5 py-3 text-[10px] font-mono uppercase tracking-label text-muted sm:px-8 lg:px-12">
        <span>Diseño · Objetos · Experiencias</span>
        <span className="hidden sm:inline">Un poco de curiosidad. Mucho carácter.</span>
      </div>

      <div className="section-inner relative grid min-h-[620px] grid-cols-1 items-center gap-10 pb-10 pt-8 sm:pt-12 lg:min-h-[650px] lg:grid-cols-2 lg:gap-16 lg:pb-14 lg:pt-14">
        <div className="relative z-10 flex flex-col items-start">
          <span className="mb-6 rotate-[-5deg] font-mono text-[10px] uppercase tracking-label text-ink sm:text-xs">Independiente por naturaleza.</span>
          <h1 className="-rotate-[4deg] font-display text-[22vw] font-extrabold leading-[0.76] tracking-[-0.09em] text-ink sm:text-[17vw] lg:text-[8.7rem] xl:text-[10.5rem]">
            <span className="block">KORIA</span>
            <span className="relative block translate-x-8">
              STUDIO
              <span className="absolute -right-5 -top-2 rotate-[10deg] text-[0.45em] text-accent sm:-right-8">✳</span>
            </span>
          </h1>
          <p className="mt-8 max-w-sm text-base leading-relaxed text-ink sm:text-lg">
            Convertimos preguntas en identidades, objetos y experiencias con un poco más de juego.
          </p>
          <a href="#proyectos" className="sharp-button mt-7">
            Explorar el estudio <ArrowDownRight className="h-4 w-4" />
          </a>
        </div>

        <div className="relative mx-auto h-[390px] w-full max-w-[520px] sm:h-[500px] lg:h-[520px]">
          <div className="absolute left-[8%] top-[14%] h-[58%] w-[43%] rotate-[-9deg] overflow-hidden rounded-[4px] border-8 border-paper bg-surface shadow-[10px_12px_0_0_rgba(23,60,41,0.13)] transition-transform duration-500 hover:z-30 hover:rotate-[-3deg] hover:scale-105">
            <img src={heroImages[0]} alt="Objeto diseñado por KORIA" className="h-full w-full object-cover" />
          </div>
          <div className="absolute right-[4%] top-[8%] h-[46%] w-[43%] rotate-[8deg] overflow-hidden rounded-[4px] border-8 border-paper bg-surface shadow-[10px_12px_0_0_rgba(23,60,41,0.13)] transition-transform duration-500 hover:z-30 hover:rotate-[2deg] hover:scale-105">
            <img src={heroImages[1]} alt="Edición gráfica de KORIA" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-[7%] left-[38%] z-10 h-[48%] w-[39%] rotate-[7deg] overflow-hidden rounded-[4px] border-8 border-paper bg-surface shadow-[10px_12px_0_0_rgba(23,60,41,0.16)] transition-transform duration-500 hover:z-30 hover:rotate-0 hover:scale-105">
            <img src={heroImages[2]} alt="Producto de KORIA" className="h-full w-full object-cover" />
          </div>
          <span className="absolute bottom-[4%] left-[5%] rotate-[-8deg] border-2 border-accent px-3 py-2 text-left font-display text-sm font-extrabold uppercase leading-[0.9] text-accent sm:px-5 sm:py-4 sm:text-xl">
            Fuera
            <br />
            de órbita <span className="text-base">↗</span>
          </span>
        </div>

        <span className="hidden items-center gap-2 justify-self-end font-mono text-[10px] uppercase tracking-label text-muted lg:flex">
          Baja y descubre <ArrowDown className="h-3 w-3" />
        </span>
      </div>
    </section>
  );
}
