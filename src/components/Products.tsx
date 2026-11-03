import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUp, ArrowUpRight, Plus, Search, SlidersHorizontal } from 'lucide-react';
import { products, type Product } from '@/data/content';
import { useCart } from '@/context/CartContext';

const MAX_PER_PRODUCT = 3;

const categories = ['Todos', 'Objetos de casa', 'Papelería', 'Digitales', 'Accesorios', 'Adornos', 'Utensilios'];
const categoryByProduct: Record<string, string> = {
  'kra-001': 'Accesorios',
  'kra-002': 'Papelería',
  'kra-003': 'Utensilios',
  'kra-004': 'Adornos',
};

function stockStatus(stock: number) {
  if (stock <= 5) return { label: 'Stock crítico', className: 'bg-terracotta/15 text-terracotta' };
  if (stock < 10) return { label: 'Pocas piezas', className: 'bg-mustard/20 text-mustard' };
  if (stock > 20) return { label: 'Disponible', className: 'bg-teal/15 text-teal' };
  return { label: 'Stock disponible', className: 'bg-surface text-muted' };
}

const colorMap: Record<Product['color'], string> = {
  terracotta: 'bg-terracotta/15 text-terracotta border-terracotta/30',
  mustard: 'bg-mustard/15 text-mustard border-mustard/30',
  teal: 'bg-teal/15 text-teal border-teal/30',
  olive: 'bg-olive/15 text-olive border-olive/30',
};

function ProductTile({ product }: { product: Product }) {
  const [view, setView] = useState(0);
  const { add, lines } = useCart();
  const quantityInCart = lines.find((line) => line.id === product.id)?.qty ?? 0;
  const canAdd = quantityInCart < MAX_PER_PRODUCT;
  const stock = stockStatus(product.stock);

  return (
    <article className="flex min-w-0 flex-col border-t border-line/15 pt-3">
      <div className="relative w-full overflow-hidden">
        <span className={`absolute left-3 top-3 z-10 border px-2 py-1 font-mono text-[10px] uppercase tracking-label ${colorMap[product.color]}`}>{product.sku}</span>
        <img src={product.images[view]} alt={`${product.name}, vista ${view + 1}`} loading="lazy" className="aspect-[0.94/1] w-full object-cover" />
      </div>
      <div className="flex items-center justify-between py-1.5 font-mono text-xs text-muted">
        <button onClick={() => setView((v) => (v - 1 + product.images.length) % product.images.length)} aria-label={`Vista anterior de ${product.name}`}><ArrowLeft className="h-4 w-4" /></button>
        <span>{view + 1} / {product.images.length}</span>
        <button onClick={() => setView((v) => (v + 1) % product.images.length)} aria-label={`Vista siguiente de ${product.name}`}><ArrowRight className="h-4 w-4" /></button>
      </div>
      <div className="flex items-center justify-between border-t border-line/20 pt-3 text-[10px] font-mono uppercase tracking-label text-muted">
        <span>{product.category}</span>
        <span className={`px-1.5 py-1 ${stock.className}`}>{product.stock} · {stock.label}</span>
      </div>
      <h3 className="mt-3 font-display text-xl font-extrabold tracking-tightest">{product.name}</h3>
      <p className="mt-2 min-h-[48px] text-sm leading-relaxed text-muted">{product.description}</p>
      <div className="mt-5 flex items-center justify-between border-t border-line/20 pt-3">
        <strong className="font-display text-2xl font-extrabold">${product.price} <small className="font-mono text-[10px] font-normal text-muted">MXN</small></strong>
        <button
          onClick={() => add({ id: product.id, name: product.name, price: product.price })}
          disabled={!canAdd}
          title={canAdd ? `Añadir ${product.name}` : 'Máximo 3 piezas por persona'}
          aria-label={canAdd ? `Añadir ${product.name}` : 'Máximo 3 piezas por persona'}
          className="grid h-9 w-9 place-items-center border border-line transition-colors hover:bg-ink hover:text-paper disabled:cursor-not-allowed disabled:opacity-30"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}

export function Products() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [showTopBtn, setShowTopBtn] = useState(false);
  const normalizedSearch = search.trim().toLocaleLowerCase();

  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 420);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const filteredProducts = useMemo(() => products.filter((product) => {
    const matchesSearch = [product.name, product.description, product.category, product.sku].some((value) => value.toLocaleLowerCase().includes(normalizedSearch));
    const matchesCategory = selectedCategory === 'Todos' || categoryByProduct[product.id] === selectedCategory;
    return matchesSearch && matchesCategory;
  }), [normalizedSearch, selectedCategory]);

  return (
    <section id="productos" className="border-b border-line/20 bg-paper py-12 sm:py-16 lg:py-20">
      <div className="section-inner">
        <div className="section-label">
          <span>02 / Objetos en órbita</span>
          <span>Pequeñas ediciones, grandes ideas</span>
        </div>
        <div className="grid grid-cols-1 items-end gap-6 py-8 sm:py-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-label text-accent">La tienda de KORIA</p>
            <h1 className="display-heading text-5xl sm:text-7xl lg:text-[6.5rem]">Llévate<br /><span className="text-accent">un poco de KORIA.</span></h1>
          </div>
          <p className="pb-2 text-base text-ink sm:text-lg">Objetos para acompañar tus días.<br />Ilustración que sale del papel.</p>
        </div>

        <div className="sticky top-[98px] z-40 isolate -mx-5 self-start border-y border-line/20 bg-paper/95 px-5 py-5 backdrop-blur-md sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <label className="relative block w-full lg:max-w-sm">
              <span className="sr-only">Buscar productos</span>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar objetos..." className="h-11 w-full border border-line/30 bg-transparent pl-10 pr-4 text-sm outline-none transition-colors placeholder:text-muted focus:border-brand-teal" />
            </label>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <SlidersHorizontal className="h-4 w-4 shrink-0 text-muted" />
              {categories.map((category) => (
                <button key={category} onClick={() => setSelectedCategory(category)} className={`whitespace-nowrap border px-3 py-2 font-mono text-[10px] uppercase tracking-label transition-colors ${selectedCategory === category ? 'border-brand-teal bg-brand-teal text-brand-cream' : 'border-line/25 text-muted hover:border-brand-teal hover:text-brand-teal'}`}>
                  {category}
                </button>
              ))}
            </div>
          </div>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-label text-muted">{filteredProducts.length} {filteredProducts.length === 1 ? 'resultado' : 'resultados'} · Máximo {MAX_PER_PRODUCT} piezas por persona</p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-4 gap-y-10 pt-8 sm:grid-cols-2 md:grid-cols-4 md:gap-y-12 lg:gap-x-5">
            {filteredProducts.map((product) => <ProductTile key={product.id} product={product} />)}
          </div>
        ) : (
          <div className="border-b border-line/20 py-20 text-center">
            <p className="font-display text-2xl font-semibold">No encontramos ese objeto.</p>
            <p className="mt-2 text-sm text-muted">Prueba con otra palabra o categoría.</p>
          </div>
        )}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-line/20 pt-5 sm:flex-row sm:items-center">
          <span className="font-mono text-xs text-muted">* Disponibilidad por confirmar al cotizar.</span>
          <a href="#contacto" className="text-link">¿Creamos algo a tu medida? <ArrowUpRight className="h-4 w-4" /></a>
        </div>
      </div>
      {showTopBtn && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
          <p className="hidden bg-paper px-3 py-1.5 font-mono text-[10px] uppercase tracking-label text-ink shadow-md sm:block">¿Quieres regresar al buscador? da click aquí</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="grid h-12 w-12 place-items-center rounded-full border border-line bg-paper text-ink shadow-lg transition-all hover:bg-ink hover:text-paper" aria-label="Regresar al buscador" title="Regresar al buscador">
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}
