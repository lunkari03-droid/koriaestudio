import { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { faqs } from '@/data/content';
import { Questionnaire } from '@/components/Questionnaire';

export function Questions() {
  const [open, setOpen] = useState<number | null>(0);
  const [questionnaireOpen, setQuestionnaireOpen] = useState(false);

  return (
    <section id="preguntas" className="relative overflow-hidden bg-paper py-12 sm:py-16 lg:py-20">
      <div className="section-inner">
        
        {/* Cabecera de la sección */}
        <div className="section-label mb-8">
          <span>04 / El punto de partida</span>
          <span>Toda gran idea empieza con una pregunta</span>
        </div>

        {/* CONTENEDOR PRINCIPAL DE DOS COLUMNAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start py-4">
          
          {/* COLUMNA IZQUIERDA: TÍTULO Y BOTÓN DE ACCIÓN */}
          <div className="flex flex-col items-start">
            <h2 className="display-heading text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none">
              ¿Y si
              <br />
              empezamos
              <br />
              <span className="text-accent">por aquí?</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-ink">
              Si todavía no sabes qué quieres,
              <br />
              empezamos por ahí.
            </p>
            <button 
              onClick={() => setQuestionnaireOpen(true)} 
              className="sharp-button mt-6 inline-flex items-center gap-2"
            >
              Encontrar mi punto de partida <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          {/* COLUMNA DERECHA: ACORDEÓN DE PREGUNTAS FRECUENTES */}
          <div className="flex flex-col border-t border-line/25">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.number} className="border-b border-line/25">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 py-5 text-left transition-colors hover:text-accent sm:py-6"
                  >
                    <span className="font-mono text-[10px] text-accent">{faq.number}</span>
                    <strong className="flex-1 font-display text-lg font-semibold sm:text-xl">{faq.question}</strong>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <p className="animate-fade-up max-w-xl pb-5 pl-7 text-sm leading-relaxed text-muted sm:pb-6">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {questionnaireOpen && <Questionnaire onClose={() => setQuestionnaireOpen(false)} />}
    </section>
  );
}