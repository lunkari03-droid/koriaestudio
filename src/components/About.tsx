import { ArrowUpRight } from 'lucide-react';

export function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-accent py-12 text-ink sm:py-16 lg:py-20">
      <div className="section-inner">
        
        {/* Cabecera de sección */}
        <div className="section-label border-ink/20 text-ink mb-8">
          <span>03 / El estudio</span>
          <span>Humor + Cuidado + Curiosidad</span>
        </div>

        {/* FORZAMOS LAS DOS COLUMNAS DIRECTAMENTE CON grid-cols-2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start py-4">
          
          {/* COLUMNA IZQUIERDA */}
          <div className="flex flex-col justify-between">
            <h2 className="display-heading text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none">
              KORIA
              <br />
              <span className="text-paper">Grandes</span>
              <br />
              <span className="text-paper">ideas.</span>
            </h2>
            <div className="mt-8 font-mono text-xs uppercase tracking-wider text-ink/80">
              No solo una imagen.
              <br />
              Una forma de ver las cosas.
            </div>
          </div>

          {/* COLUMNA DERECHA */}
          <div className="flex flex-col gap-6 pt-2">
            <span className="font-sans text-6xl leading-none text-paper">✳</span>
            <p className="text-xl sm:text-2xl leading-relaxed text-ink font-light">
              KORIA nace de la curiosidad por hacer las cosas de otra manera. Con humor, cuidado y una atención casi obsesiva por los detalles.
            </p>
            <a 
              href="#contacto" 
              className="mt-2 inline-flex w-fit items-center gap-2 border-b border-ink pb-1 font-mono text-xs uppercase tracking-wider transition-colors hover:border-paper hover:text-paper"
            >
              Conócenos mejor <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

        </div>
      </div>
      
      <div className="absolute -bottom-6 left-0 h-12 w-full rotate-[3deg] bg-paper" />
    </section>
  );
}