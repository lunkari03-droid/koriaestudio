import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { X } from 'lucide-react';
import mascot from '@/components/image copy 5.png';

const PET_SIZE = 64;
const EDGE_GAP = 8;

type Position = { x: number; y: number };

function clampPosition({ x, y }: Position): Position {
  const maxX = window.innerWidth - PET_SIZE - EDGE_GAP;
  const maxY = window.innerHeight - PET_SIZE - EDGE_GAP;
  return {
    x: Math.min(Math.max(x, EDGE_GAP), Math.max(maxX, EDGE_GAP)),
    y: Math.min(Math.max(y, EDGE_GAP), Math.max(maxY, EDGE_GAP)),
  };
}

export function FloatingPet() {
  const [visible, setVisible] = useState(true);
  const [position, setPosition] = useState<Position>(() =>
    clampPosition({ x: 20, y: window.innerHeight - PET_SIZE - 20 }),
  );
  const dragOffset = useRef<Position | null>(null);

  useEffect(() => {
    const onResize = () => setPosition((current) => clampPosition(current));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragOffset.current = { x: event.clientX - position.x, y: event.clientY - position.y };
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const offset = dragOffset.current;
    if (!offset) return;
    setPosition(clampPosition({ x: event.clientX - offset.x, y: event.clientY - offset.y }));
  }

  function endDrag(event: PointerEvent<HTMLDivElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    dragOffset.current = null;
  }

  if (!visible) return null;

  return (
    <div className="fixed z-30" style={{ left: position.x, top: position.y }}>
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className="h-16 w-16 cursor-grab touch-none select-none overflow-hidden rounded-full border-2 border-brand-teal bg-brand-cream shadow-[3px_3px_0_0_var(--color-line)] active:cursor-grabbing"
        title="Arrastra la mascota"
      >
        <img src={mascot} alt="Mascota de KORIA" draggable={false} className="pointer-events-none h-full w-full object-cover animate-float-pet" />
      </div>
      <button
        onClick={() => setVisible(false)}
        aria-label="Ocultar mascota"
        className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center border border-line bg-paper text-ink/70 transition-colors hover:bg-ink hover:text-paper"
      >
        <X className="h-3 w-3" />
      </button>
    </div>
  );
}
