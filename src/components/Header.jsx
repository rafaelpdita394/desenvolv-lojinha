import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export default function Header({ onCartOpen }) {
  const { itemCount } = useCart();
  return (
    <header className="header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1>🛍️ Catálogo de Produtos</h1>
      </Link>
      <button className="cart-btn" onClick={onCartOpen}>
        🛒 Carrinho
        {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
      </button>
    </header>
  );
}
