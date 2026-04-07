import { useCart } from '../context/CartContext.jsx';

export default function Cart({ isOpen, onClose }) {
  const { cartItems, removeFromCart, clearCart, total, itemCount } = useCart();

  if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-panel" onClick={e => e.stopPropagation()}>
        <div className="cart-header">
          <h2>🛒 Carrinho ({itemCount} {itemCount === 1 ? 'item' : 'itens'})</h2>
          <button onClick={onClose}>✕</button>
        </div>

        {cartItems.length === 0 ? (
          <p className="cart-empty">Seu carrinho está vazio 😔</p>
        ) : (
          <>
            <ul className="cart-items" style={{ listStyle: 'none', padding: 0 }}>
              {cartItems.map(item => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} />
                  <div className="cart-item-info">
                    <p>{item.title}</p>
                    <span>Qtd: {item.quantity} &nbsp;·&nbsp; </span>
                    <strong>R$ {(item.price * item.quantity).toFixed(2)}</strong>
                    <br />
                    <button className="btn-remove" onClick={() => removeFromCart(item.id)}>
                      Remover
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-footer">
              <div className="total">
                <span>Total:</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
              <button
                className="btn-checkout"
                onClick={() => { clearCart(); onClose(); alert('Compra finalizada! Obrigado 🎉'); }}
              >
                ✅ Finalizar Compra
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
