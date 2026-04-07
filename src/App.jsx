import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Header from './components/Header';


function App() {
  return (
    <CartProvider>
      // BrowserRouter habilita o sistema de rotas
      <BrowserRouter>
        {/* Header aparece em todas as páginas */}
        <Header />

      {/* Routes define as rotas disponíveis */}
      <Routes>
        {/* Rota da página inicial */}
        <Route path="/" element={<Home />} />
        {/* Rota dinâmica: :id é o ID do produto */}
        <Route path="/produto/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
</CartProvider>
  );
}

export default App;