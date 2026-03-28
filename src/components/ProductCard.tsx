import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';
import { cn } from '../lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={cn('card group flex flex-col h-full', className)}
    >
      <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-background">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        {product.isBestseller && (
          <span className="absolute top-3 left-3 bg-accent text-ink text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full shadow-sm">
            Bestseller
          </span>
        )}
        <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-ink hover:text-primary transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <Heart size={18} />
        </button>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-1 mb-2">
          <Star size={14} className="text-accent fill-accent" />
          <span className="text-xs font-semibold text-ink/60">{product.rating}</span>
          <span className="text-xs text-ink/40">({product.reviews})</span>
        </div>

        <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
          <h3 className="font-display font-bold text-lg leading-tight mb-2">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-sm text-ink/60 line-clamp-2 mb-4 flex-1">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-black/5">
          <span className="font-display font-bold text-xl text-primary">
            ₹{product.price}
          </span>
          <button className="w-10 h-10 bg-secondary text-white rounded-xl flex items-center justify-center hover:bg-opacity-90 transition-all active:scale-90">
            <Plus size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
