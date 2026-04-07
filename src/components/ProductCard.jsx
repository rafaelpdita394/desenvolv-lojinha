import { Link } from 'react-router-dom';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card">
      {/* Clicar leva para a página de detalhes */}
      <Link to={`/produto/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="card-image"
        />
        <h3 className="card-title">{product.title}</h3>
      </Link>

      <p className="card-price">
        R$ {product.price.toFixed(2)}
      </p>

      {/* Avaliação */}
      <p className="card-rating">
        ⭐ {product.rating.rate} ({product.rating.count})
      </p>

      {/* Botão de adicionar ao carrinho */}
      <button
        onClick={() => onAddToCart(product)}
        className="btn-add-cart"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default ProductCard;