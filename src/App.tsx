import { CartProvider } from '@/context/CartContext';
import { useTheme } from '@/hooks/useTheme';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Products } from '@/components/Products';
import { About } from '@/components/About';
import { Questions } from '@/components/Questions';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { FloatingPet } from '@/components/FloatingPet';

function App() {
  const { toggle } = useTheme();
  const isProductsPage = window.location.pathname === '/productos';

  return (
    <CartProvider>
      <div className="studio-shell">
        <Header onToggleTheme={toggle} />
        <main className="pt-[98px]">
          {isProductsPage ? <Products /> : (
            <>
              <Hero />
              <Projects />
              <About />
              <Questions />
            </>
          )}
        </main>
        <Footer />
        <CartDrawer />
        <FloatingPet />
      </div>
    </CartProvider>
  );
}

export default App;
