import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

export type CartLine = {
  id: string;
  name: string;
  price: number;
  qty: number;
};

type CartContextValue = {
  lines: CartLine[];
  total: number;
  count: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (line: Omit<CartLine, 'qty'>) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const MAX_PER_PRODUCT = 3;
const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);

  function add(line: Omit<CartLine, 'qty'>) {
    setLines((prev) => {
      const existing = prev.find((l) => l.id === line.id);
      if (existing) {
        if (existing.qty >= MAX_PER_PRODUCT) return prev;
        return prev.map((l) =>
          l.id === line.id ? { ...l, qty: l.qty + 1 } : l
        );
      }
      return [...prev, { ...line, qty: 1 }];
    });
    setOpen(true);
  }

  function remove(id: string) {
    setLines((prev) => prev.filter((l) => l.id !== id));
  }

  function clear() {
    setLines([]);
  }

  const value = useMemo<CartContextValue>(() => {
    const total = lines.reduce((sum, l) => sum + l.price * l.qty, 0);
    const count = lines.reduce((sum, l) => sum + l.qty, 0);
    return { lines, total, count, open, setOpen, add, remove, clear };
  }, [lines, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
