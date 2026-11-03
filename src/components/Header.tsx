import { useState } from 'react';
import { Moon, Sun, Menu, X, ShoppingBag, Mail } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '/productos', label: 'Productos' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#preguntas', label: 'Preguntas' },
];

export function Header({ onToggleTheme }: { onToggleTheme: () => void }) {
  const { count, setOpen } = useCart();
  const isProductsPage = window.location.pathname === '/productos';
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="flex items-center justify-between border-b border-ink bg-ink px-5 py-2 text-[10px] font-mono uppercase tracking-label text-paper sm:px-8 lg:px-12">
        <span>Estudio creativo independiente</span>
        <span className="truncate text-right">Horario: lunes a sábado · 9:00–17:00 h (México)</span>
      </div>

      <header className="border-b border-line/20 bg-paper/95 backdrop-blur-md">
        <div className="flex items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
          <a href="#inicio" className="flex items-center gap-2" aria-label="KORIA Studio inicio">
            <span className="flex h-10 w-14 flex-col justify-center bg-brand-cream px-1.5 text-brand-teal" aria-hidden="true">
              <span className="font-display text-[19px] font-extrabold leading-[0.75] tracking-[-0.12em]">ko</span>
              <span className="font-display text-[13px] font-extrabold leading-none tracking-[-0.1em]">ria</span>
            </span>
            <span className="font-display text-xl font-extrabold tracking-tightest text-brand-teal">
              KORIA<span className="text-[10px] font-mono uppercase tracking-label text-brand-teal/75"> STUDIO®</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={isProductsPage && link.href.startsWith('#') ? `/${link.href}` : link.href}
                className="text-sm font-medium text-ink/80 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a href="#contacto" className="inline-flex h-9 items-center gap-2 border border-brand-teal px-3 text-xs font-semibold text-brand-teal transition-colors hover:bg-brand-teal hover:text-brand-cream">
              <Mail className="h-3.5 w-3.5" />
              Contacto
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              aria-label="Cambiar modo de color"
              title="Cambiar modo de color"
              className="grid h-9 w-9 place-items-center text-ink/80 transition-colors hover:bg-surface hover:text-accent"
            >
              <Moon className="h-4 w-4 dark:hidden" />
              <Sun className="hidden h-4 w-4 dark:block" />
            </button>

            <button
              onClick={() => setOpen(true)}
              aria-label={`Abrir carrito, ${count} productos`}
              className="flex h-9 items-center gap-1.5 px-3 text-ink/80 transition-colors hover:bg-surface hover:text-accent"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="font-mono text-xs">{String(count).padStart(2, '0')}</span>
            </button>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Abrir menú"
              aria-expanded={mobileOpen}
              className="grid h-9 w-9 place-items-center text-ink/80 transition-colors hover:bg-surface md:hidden"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="flex flex-col gap-1 border-t border-line/20 bg-paper px-5 py-3 md:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={isProductsPage && link.href.startsWith('#') ? `/${link.href}` : link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-sm font-medium text-ink/80 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMobileOpen(false)}
              className="mt-1 inline-flex items-center gap-2 border-t border-line/20 py-3 text-sm font-semibold text-brand-teal"
            >
              <Mail className="h-4 w-4" />
              Medios de contacto
            </a>
          </nav>
        )}
      </header>
    </div>
  );
}
