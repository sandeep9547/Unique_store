import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Star, ShoppingCart, Heart, ShieldCheck, Truck, RotateCcw, Plus, Minus, ArrowLeft, Sparkles, Gift } from 'lucide-react';
import { motion } from 'motion/react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { cn } from '../lib/utils';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center space-y-6">
        <h2 className="text-3xl font-display font-bold">Product not found</h2>
        <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      <Link to="/shop" className="inline-flex items-center gap-2 text-ink/60 hover:text-primary transition-colors mb-8 font-medium">
        <ArrowLeft size={18} /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        {/* Image Gallery */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-square rounded-[2rem] overflow-hidden bg-white border border-black/5 shadow-sm"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden border-2 border-transparent hover:border-primary transition-all cursor-pointer">
                <img src={product.image} alt="" className="w-full h-full object-cover opacity-60 hover:opacity-100" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full">
                {product.subCategory}
              </span>
              <div className="flex items-center gap-1">
                <Star size={18} className="text-accent fill-accent" />
                <span className="font-bold">{product.rating}</span>
                <span className="text-ink/40 text-sm">({product.reviews} reviews)</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              {product.name}
            </h1>
            <p className="text-3xl font-display font-bold text-primary">₹{product.price}</p>
          </div>

          <p className="text-lg text-ink/70 leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-4">
            <h4 className="font-bold text-ink">Why you'll love it:</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.benefits?.map((benefit, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-ink/70">
                  <Sparkles size={16} className="text-secondary" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 border-t border-black/5">
            <div className="flex items-center bg-white border border-black/5 rounded-xl p-1">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center hover:bg-black/5 rounded-lg transition-colors"
              >
                <Minus size={18} />
              </button>
              <span className="w-12 text-center font-bold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center hover:bg-black/5 rounded-lg transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>
            <button className="btn btn-primary flex-1 w-full text-lg">
              <ShoppingCart size={20} /> Add to Cart
            </button>
            <button className="p-4 border border-black/5 rounded-xl hover:bg-primary/5 hover:text-primary transition-all">
              <Heart size={24} />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-black/5">
            <div className="text-center space-y-2">
              <div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center mx-auto text-ink/60">
                <Truck size={20} />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-ink/40">Free Shipping</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center mx-auto text-ink/60">
                <ShieldCheck size={20} />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-ink/40">Secure Payment</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center mx-auto text-ink/60">
                <RotateCcw size={20} />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-ink/40">Easy Returns</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mb-24">
        <div className="flex items-center gap-8 border-b border-black/5 mb-8">
          {['description', 'reviews', 'shipping'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "pb-4 text-sm font-bold uppercase tracking-widest transition-all relative",
                activeTab === tab ? "text-primary" : "text-ink/40 hover:text-ink"
              )}
            >
              {tab}
              {activeTab === tab && (
                <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>

        <div className="min-h-[200px]">
          {activeTab === 'description' && (
            <div className="prose prose-ink max-w-none text-ink/70 leading-relaxed">
              <p>{product.description} We use only the finest ingredients and materials to ensure every product meets our high standards of quality and safety.</p>
              <h4 className="text-ink font-bold mt-6 mb-4">Perfect for:</h4>
              <div className="flex flex-wrap gap-2">
                {product.perfectFor?.map(item => (
                  <span key={item} className="px-4 py-2 bg-white border border-black/5 rounded-full text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {activeTab === 'reviews' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-display font-bold">Customer Reviews</h3>
                <button className="btn btn-outline btn-sm">Write a Review</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2].map(i => (
                  <div key={i} className="space-y-4 p-6 bg-white rounded-2xl border border-black/5">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="text-accent fill-accent" />)}
                      </div>
                      <span className="text-xs text-ink/40">2 days ago</span>
                    </div>
                    <p className="text-sm text-ink/70 italic">"Absolutely wonderful! The quality exceeded my expectations. My kids are so happy with this."</p>
                    <p className="text-xs font-bold text-ink">Verified Buyer</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <section>
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-display font-bold">You Might Also <span className="text-primary serif">Love</span></h2>
          <Link to="/shop" className="text-primary font-bold hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
