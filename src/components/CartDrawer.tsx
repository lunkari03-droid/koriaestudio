import { Download, X, ShoppingBag } from 'lucide-react';
import { useCart, type CartLine } from '@/context/CartContext';

function escapePdfText(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[()\\]/g, '\\$&');
}

function downloadCartPdf(lines: CartLine[], total: number) {
  const rows = [
    'KORIA STUDIO',
    'RESUMEN DE CARRITO',
    `FECHA: ${new Intl.DateTimeFormat('es-MX').format(new Date())}`,
    '',
    ...lines.map((line) => `${line.qty} x ${line.name}     $${line.price * line.qty} MXN`),
    '',
    `TOTAL: $${total} MXN`,
  ];
  const commands = ['BT', '/F1 18 Tf', '50 760 Td', `(${escapePdfText(rows[0])}) Tj`, '/F1 11 Tf', ...rows.slice(1).map((row) => `0 -24 Td (${escapePdfText(row)}) Tj`), 'ET'].join('\n');
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    `<< /Length ${commands.length} >>\nstream\n${commands}\nendstream`,
  ];
  let pdf = '%PDF-1.4\n';
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });
  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => { pdf += `${String(offset).padStart(10, '0')} 00000 n \n`; });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  const url = URL.createObjectURL(new Blob([pdf], { type: 'application/pdf' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'koria-carrito.pdf';
  link.click();
  URL.revokeObjectURL(url);
}

export function CartDrawer() {
  const { lines, total, open, setOpen, remove, clear } = useCart();

  return (
    <>
      <div className={`fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`} onClick={() => setOpen(false)} />
      <aside className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-line bg-paper shadow-2xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-line/20 px-5 py-4">
          <h3 className="font-display text-lg font-extrabold tracking-tightest">Carrito</h3>
          <button onClick={() => setOpen(false)} aria-label="Cerrar carrito" className="grid h-9 w-9 place-items-center text-ink/80 transition-colors hover:bg-surface hover:text-accent"><X className="h-4 w-4" /></button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center text-muted">
            <ShoppingBag className="h-8 w-8 opacity-40" />
            <p className="text-sm">Tu carrito está vacío.</p>
            <p className="text-xs">Añade un objeto para empezar.</p>
          </div>
        ) : (
          <>
            <div className="flex-1 divide-y divide-line/15 overflow-y-auto">
              {lines.map((line) => (
                <div key={line.id} className="flex items-center justify-between gap-3 px-5 py-4">
                  <div className="flex-1"><p className="font-display text-sm font-semibold">{line.name}</p><p className="font-mono text-xs text-muted">${line.price} MXN · {line.qty}×</p></div>
                  <div className="font-display text-base font-bold">${line.price * line.qty}</div>
                  <button onClick={() => remove(line.id)} aria-label={`Quitar ${line.name}`} className="grid h-8 w-8 place-items-center text-ink/60 transition-colors hover:bg-surface hover:text-accent"><X className="h-3.5 w-3.5" /></button>
                </div>
              ))}
            </div>
            <div className="border-t border-line/20 p-5">
              <div className="flex items-center justify-between pb-4"><span className="font-mono text-xs uppercase tracking-label text-muted">Total</span><span className="font-display text-2xl font-extrabold">${total} <small className="font-mono text-xs font-normal text-muted">MXN</small></span></div>
              <button onClick={() => downloadCartPdf(lines, total)} className="sharp-button w-full"><Download className="h-4 w-4" /> Descargar resumen PDF</button>
              <button onClick={clear} className="mt-2 w-full font-mono text-[10px] uppercase tracking-label text-muted transition-colors hover:text-accent">Vaciar carrito</button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
