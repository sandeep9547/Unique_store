import { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function DiscountBanner() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-primary text-white py-2 px-4 relative z-[60] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 text-xs md:text-sm font-bold uppercase tracking-widest">
            <Sparkles size={16} className="animate-pulse" />
            <span>Use code <span className="bg-white text-primary px-2 py-0.5 rounded ml-1">WELCOME200</span> for ₹200 off your first order!</span>
            <Sparkles size={16} className="animate-pulse" />
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
