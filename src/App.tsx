import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import ComboBuilder from './pages/ComboBuilder';
import About from './pages/About';
import Contact from './pages/Contact';

function Cart() {
  return (
    <div className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto text-center space-y-8">
      <h1 className="text-4xl font-display font-bold">Your Cart</h1>
      <p className="text-ink/60">Your cart is currently empty. Let's find something sweet!</p>
      <a href="/shop" className="btn btn-primary inline-flex">Go to Shop</a>
    </div>
  );
}

function NotFound() {
  return (
    <div className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto text-center space-y-8">
      <h1 className="text-6xl font-display font-bold text-primary">404</h1>
      <h2 className="text-3xl font-display font-bold">Oops! Page not found</h2>
      <p className="text-ink/60">The magical place you're looking for doesn't exist.</p>
      <a href="/" className="btn btn-primary inline-flex">Back to Home</a>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="combo-builder" element={<ComboBuilder />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

