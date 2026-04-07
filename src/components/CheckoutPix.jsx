import { useState } from 'react';

function CheckoutPix({ total, onConfirm }) {
  const [copied, setCopied] = useState(false);
  const pixKey = 'sua-loja@pix.com';

  const copyKey = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Em produção: gerar QR via API do banco/gateway
  // Ex: const { qr_code } = await mercadopago.payment.create({ method: 'pix' })

  return (
    <div className="text-center space-y-4">
      {/* QR Code — em produção vem do gateway como imagem base64 */}
      <div className="w-40 h-40 border-2 border-gray-200 rounded-xl mx-auto
                      flex items-center justify-center bg-white">
        <span className="text-5xl">📱</span>
        {/* <img src={qrCodeUrl} alt="QR Code Pix" /> */}
      </div>

      <p className="text-sm text-gray-600">
        Chave Pix: <strong>{pixKey}</strong>
      </p>

      <button onClick={copyKey} className="bg-green-500 text-white px-6 py-2 rounded-xl font-bold">
        {copied ? '✓ Copiado!' : 'Copiar chave Pix'}
      </button>

      <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-sm text-green-700">
        💚 Valor: <strong>R$ {total.toFixed(2)}</strong>
        <br />Confirmação em até 1 minuto após pagamento.
      </div>

      <button onClick={onConfirm} className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold">
        Já paguei — Confirmar →
      </button>
    </div>
  );
}

export default CheckoutPix;