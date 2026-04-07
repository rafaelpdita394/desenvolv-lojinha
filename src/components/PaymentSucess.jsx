import { useEffect } from 'react';

function PaymentSuccess({ onClose }) {
  // Limpa o carrinho após sucesso
  useEffect(() => {
    // cartContext.clearCart();
  }, []);

  return (
    <div className="text-center py-8 space-y-4">
      {/* Animação de sucesso */}
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center
                      justify-center mx-auto animate-bounce">
        <span className="text-4xl">✅</span>
      </div>

      <h2 className="text-2xl font-bold text-gray-900">
        Pagamento aprovado!
      </h2>

      <p className="text-gray-500 text-sm">
        Seu pedido foi confirmado. Você receberá um e-mail
        com os detalhes em breve.
      </p>

      {/* Resumo do pedido */}
      <div className="bg-green-50 rounded-xl p-4 text-sm text-green-800">
        <p>📦 Pedido #SP{Date.now().toString().slice(-6)}</p>
        <p className="mt-1">Previsão de entrega: 3-7 dias úteis</p>
      </div>

      <button
        onClick={onClose}
        className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold"
      >
        Continuar comprando →
      </button>
    </div>
  );
}

export default PaymentSuccess;