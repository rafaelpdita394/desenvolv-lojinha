import { useState } from 'react';

function CheckoutCard({ total, isClothing, onPay }) {
  const [card, setCard] = useState({
    number: '', name: '', expiry: '', cvv: '', installments: '1'
  });

  // Formata número do cartão: 1234 5678 9012 3456
  const formatNumber = (val) =>
    val.replace(/\D/g, '').slice(0, 16)
       .replace(/(.{4})/g, '$1 ').trim();

  // Formata validade: 12/28
  const formatExpiry = (val) => {
    let v = val.replace(/\D/g, '').slice(0, 4);
    if (v.length > 2) v = v.slice(0, 2) + '/' + v.slice(2);
    return v;
  };

  return (
    <div className="space-y-4">
      {/* Aviso especial para roupas */}
      {isClothing && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-sm text-blue-700">
          🎽 Roupas: frete grátis + até <strong>12x sem juros!</strong>
        </div>
      )}

      <input
        placeholder="Número do cartão"
        value={card.number}
        onChange={e => setCard(c => ({ ...c, number: formatNumber(e.target.value) }))}
        className="w-full border rounded-xl p-3 font-mono"
      />
      <input
        placeholder="Nome no cartão"
        value={card.name}
        onChange={e => setCard(c => ({ ...c, name: e.target.value.toUpperCase() }))}
        className="w-full border rounded-xl p-3"
      />
      <div className="grid grid-cols-2 gap-3">
        <input
          placeholder="MM/AA"
          value={card.expiry}
          onChange={e => setCard(c => ({ ...c, expiry: formatExpiry(e.target.value) }))}
          className="border rounded-xl p-3"
        />
        <input
          placeholder="CVV"
          value={card.cvv}
          onChange={e => setCard(c => ({ ...c, cvv: e.target.value.replace(/\D/g,'').slice(0,4) }))}
          className="border rounded-xl p-3"
        />
      </div>

      {/* Parcelamento — só roupas têm 12x */}
      <select
        value={card.installments}
        onChange={e => setCard(c => ({ ...c, installments: e.target.value }))}
        className="w-full border rounded-xl p-3"
      >
        <option value="1">À vista — R$ {total.toFixed(2)}</option>
        <option value="2">2x de R$ {(total/2).toFixed(2)} sem juros</option>
        <option value="3">3x de R$ {(total/3).toFixed(2)} sem juros</option>
        {isClothing && (
          <>
            <option value="6">6x de R$ {(total/6).toFixed(2)} sem juros</option>
            <option value="12">12x de R$ {(total/12).toFixed(2)} sem juros</option>
          </>
        )}
      </select>

      <button
        onClick={() => onPay(card)}
        className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold"
      >
        Pagar R$ {total.toFixed(2)}
      </button>
    </div>
  );
}

export default CheckoutCard;