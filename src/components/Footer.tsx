import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Instagram, Mail, Phone } from 'lucide-react';

const email = 'hola@koria.mx';
const phone = '+52 55 0000 0000';

export function Footer() {
  const [copied, setCopied] = useState<'email' | 'phone' | null>(null);

  function copyContact(value: string, type: 'email' | 'phone') {
    navigator.clipboard?.writeText(value).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(null), 1800);
    });
  }

  return (
    <footer id="contacto" className="bg-brand-teal text-brand-cream">
      <div className="section-inner py-16 sm:py-20 lg:py-24">
        <div className="flex items-center justify-between border-b border-brand-cream/30 py-3 text-[11px] font-mono uppercase tracking-label text-brand-cream/80">
          <span>05 / Contacto</span>
          <span className="hidden sm:inline">El siguiente proyecto podría ser el tuyo</span>
        </div>

        <div className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <h2 className="display-heading max-w-3xl text-6xl text-brand-cream sm:text-8xl lg:text-9xl">
            Hagamos algo
            <br />
            <span className="text-brand-cream/75">que se mueva.</span>
          </h2>

          <a
            href={`mailto:${email}`}
            className="group flex w-fit items-center gap-3 border-b border-brand-cream pb-3 text-lg font-semibold text-brand-cream transition-colors hover:text-brand-cream sm:text-2xl"
          >
            {email}
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid gap-10 border-t border-brand-cream/30 pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="flex flex-wrap gap-3">
            <a
              href="https://instagram.com/koriastudio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-3 rounded-full border border-brand-cream/60 px-5 font-mono text-xs text-brand-cream transition-colors hover:bg-brand-cream hover:text-brand-teal"
            >
              <Instagram className="h-4 w-4" />
              @koriastudio
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <div className="inline-flex h-12 items-center gap-3 rounded-full border border-brand-cream/60 px-5 font-mono text-xs text-brand-cream">
              <Phone className="h-4 w-4" />
              {phone}
              <button
                onClick={() => copyContact(phone, 'phone')}
                aria-label="Copiar teléfono"
                title="Copiar teléfono"
                className="transition-colors hover:text-brand-cream"
              >
                {copied === 'phone' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
            <div className="inline-flex h-12 items-center gap-3 rounded-full border border-brand-cream/60 px-5 font-mono text-xs text-brand-cream">
              <Mail className="h-4 w-4" />
              {email}
              <button
                onClick={() => copyContact(email, 'email')}
                aria-label="Copiar correo"
                title="Copiar correo"
                className="transition-colors hover:text-brand-cream"
              >
                {copied === 'email' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-end gap-4 lg:flex-col lg:items-end">
            <div className="flex h-16 w-16 flex-col justify-center bg-brand-cream px-1.5 text-brand-teal">
              <span className="font-display text-[27px] font-extrabold leading-[0.75] tracking-[-0.12em]">ko</span>
              <span className="font-display text-[18px] font-extrabold leading-none tracking-[-0.1em]">ria</span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-label text-brand-cream/70">© 2026 / Hecho en CDMX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
