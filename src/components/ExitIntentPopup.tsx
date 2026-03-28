import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift, Sparkles } from 'lucide-react';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative max-w-lg w-full bg-white rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-6 right-6 p-2 hover:bg-black/5 rounded-full transition-colors z-10"
          >
            <X size={20} />
          </button>

          <div className="relative h-48 bg-primary flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              {[...Array(20)].map((_, i) => (
                <Sparkles
                  key={i}
                  className="absolute text-white"
                  size={Math.random() * 24 + 12}
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                />
              ))}
            </div>
            <Gift size={80} className="text-white relative z-10" />
          </div>

          <div className="p-10 text-center space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-display font-bold">Wait! Don't Go Empty Handed</h2>
              <p className="text-ink/60">Get <span className="text-primary font-bold">₹200 OFF</span> on your first order of ₹999 or more.</p>
            </div>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-4 bg-background border border-black/5 rounded-xl focus:outline-none focus:border-primary transition-colors text-center"
              />
              <button className="btn btn-primary w-full py-4 text-lg">
                Claim My Discount
              </button>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="text-xs font-bold uppercase tracking-widest text-ink/30 hover:text-ink transition-colors"
            >
              No thanks, I'll pay full price
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
