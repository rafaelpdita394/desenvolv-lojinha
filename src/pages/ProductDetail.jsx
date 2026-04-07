import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../services/api';

function ProductDetail({ onAddToCart }) {
  // Pega o :id da URL
  const { id } = useParams();

  // Para navegar de volta
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      setLoading(true);
      const data = await fetchProductById(id);
      setProduct(data);
      setLoading(false);
    }
    loadProduct();
  }, [id]); // Roda novamente se o ID mudar

  if (loading) return <p>Carregando produto...</p>;
  if (!product) return <p>Produto não encontrado.</p>;

  return (
    <div className="product-detail">
      <button onClick={() => navigate(-1)}>
        ← Voltar
      </button>

      <div className="detail-content">
        <img src={product.image} alt={product.title} />

        <div className="detail-info">
          <span className="category">{product.category}</span>
          <h1>{product.title}</h1>
          <p className="description">{product.description}</p>
          <p className="rating">⭐ {product.rating.rate} — {product.rating.count} avaliações</p>
          <p className="price">R$ {product.price.toFixed(2)}</p>

          <button onClick={() => onAddToCart(product)}>
            🛒 Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;