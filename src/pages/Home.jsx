import { useState, useEffect } from 'react';
import { fetchProducts, fetchCategories } from '../services/api.js';
import { useCart } from '../context/CartContext.jsx';
import Header from '../components/Header.jsx';
import CategoryFilter from '../components/CategoryFilter.jsx';
import ProductCard from '../components/ProductCard.jsx';
import Cart from '../components/Cart.jsx';

function Home() {
    const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      // Busca produtos e categorias ao mesmo tempo
      const [prods, cats] = await Promise.all([
        fetchProducts(),
        fetchCategories()
      ]);
      setProducts(prods);
      setCategories(cats);
      setLoading(false);
    }
    loadData();
  }, []);

  // FILTRAGEM: se há categoria selecionada, filtra; senão mostra tudo
  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  if (loading) return <p>Carregando...</p>;

  return (
    
    <div>
      <h1>Catálogo de Produtos</h1>

      {/* Componente de filtro */}
      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {/* Grid com produtos filtrados */}
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;