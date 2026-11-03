import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, X } from 'lucide-react';

type Question = {
  title: string;
  options: string[];
};

const questions: Question[] = [
  {
    title: '¿Qué quieres poner en movimiento?',
    options: ['Una marca o identidad', 'Una sesión de fotos', 'Un cartel o campaña', 'Un objeto o producto', 'Todavía no lo sé'],
  },
  {
    title: '¿En qué momento está tu proyecto?',
    options: ['Es una idea que está naciendo', 'Ya existe y necesita una nueva dirección', 'Está por salir al mundo', 'Necesita una pieza puntual'],
  },
  {
    title: '¿Qué te gustaría que sintiera la gente?',
    options: ['Curiosidad', 'Confianza', 'Energía', 'Cercanía', 'Algo difícil de explicar'],
  },
  {
    title: '¿Qué tan cerca está tu fecha ideal?',
    options: ['Estoy explorando sin prisa', 'En los próximos 2 meses', 'En menos de un mes', 'Lo necesito cuanto antes'],
  },
];

function getRecommendation(answers: string[]) {
  const firstAnswer = answers[0];
  if (firstAnswer === 'Una marca o identidad') return 'Una identidad visual';
  if (firstAnswer === 'Una sesión de fotos') return 'Una sesión de fotos';
  if (firstAnswer === 'Un cartel o campaña') return 'Un cartel o campaña';
  if (firstAnswer === 'Un objeto o producto') return 'Diseño de objeto o producto';
  return 'Una conversación para encontrar el punto de partida';
}

export function Questionnaire({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const isComplete = step === questions.length;
  const currentQuestion = questions[step];

  function selectAnswer(answer: string) {
    setAnswers((current) => [...current.slice(0, step), answer]);
  }

  function goNext() {
    if (answers[step]) setStep((current) => current + 1);
  }

  function goBack() {
    setStep((current) => Math.max(0, current - 1));
  }

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-ink/70 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="questionnaire-title">
      <div className="relative max-h-[min(720px,calc(100vh-32px))] w-full max-w-2xl overflow-y-auto bg-paper p-6 text-ink shadow-2xl sm:p-10">
        <button onClick={onClose} aria-label="Cerrar cuestionario" className="absolute right-5 top-5 grid h-9 w-9 place-items-center border border-line/30 transition-colors hover:bg-ink hover:text-paper">
          <X className="h-4 w-4" />
        </button>

        <div className="mb-10 pr-10">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-label text-accent">Punto de partida · 15 min máximo</p>
          <h2 id="questionnaire-title" className="display-heading text-4xl sm:text-6xl">
            {isComplete ? 'Ya tenemos una pista.' : 'Cuéntanos un poco.'}
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
            {isComplete ? 'Con tus respuestas podemos recomendarte por dónde empezar. Después lo aterrizamos juntos.' : 'No necesitas tenerlo todo claro. Responde cuatro preguntas rápidas y encontraremos una dirección para tu proyecto.'}
          </p>
        </div>

        {isComplete ? (
          <div className="border-t border-line/20 pt-8">
            <p className="font-mono text-[10px] uppercase tracking-label text-accent">Te recomendamos explorar</p>
            <h3 className="mt-4 font-display text-4xl font-semibold">{getRecommendation(answers)}</h3>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">Escríbenos para contarnos qué tienes en mente y te ayudaremos a convertirlo en un siguiente paso concreto.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contacto" onClick={onClose} className="sharp-button">Hablar con KORIA <ArrowRight className="h-4 w-4" /></a>
              <button onClick={() => { setStep(0); setAnswers([]); }} className="border border-line/30 px-5 py-3 font-mono text-xs uppercase tracking-label transition-colors hover:bg-surface">Volver a empezar</button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-8 flex items-center justify-between border-y border-line/20 py-3 font-mono text-[10px] uppercase tracking-label text-muted">
              <span>Pregunta {String(step + 1).padStart(2, '0')} / {String(questions.length).padStart(2, '0')}</span>
              <span>{Math.round((step / questions.length) * 100)}% completado</span>
            </div>
            <h3 className="max-w-xl font-display text-2xl font-semibold sm:text-3xl">{currentQuestion.title}</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {currentQuestion.options.map((option) => {
                const selected = answers[step] === option;
                return (
                  <button key={option} onClick={() => selectAnswer(option)} className={`flex min-h-14 items-center justify-between border px-4 py-3 text-left text-sm transition-colors ${selected ? 'border-brand-teal bg-brand-teal text-brand-cream' : 'border-line/25 hover:border-brand-teal hover:bg-surface'}`}>
                    <span>{option}</span>
                    {selected && <Check className="h-4 w-4" />}
                  </button>
                );
              })}
            </div>
            <div className="mt-8 flex justify-between">
              <button onClick={goBack} disabled={step === 0} className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-label text-muted transition-colors hover:text-ink disabled:invisible"><ArrowLeft className="h-4 w-4" /> Atrás</button>
              <button onClick={goNext} disabled={!answers[step]} className="sharp-button disabled:cursor-not-allowed disabled:opacity-40">{step === questions.length - 1 ? 'Ver resultado' : 'Siguiente'} <ArrowRight className="h-4 w-4" /></button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
