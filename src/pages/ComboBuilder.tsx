import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cake, Gamepad2 as Toy, Mail, ArrowRight, Check, Sparkles, Gift, Trash2 } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../types';
import { cn } from '../lib/utils';

export default function ComboBuilder() {
  const [step, setStep] = useState(1);
  const [selectedCake, setSelectedCake] = useState<Product | null>(null);
  const [selectedToy, setSelectedToy] = useState<Product | null>(null);
  const [message, setMessage] = useState('');

  const cakes = products.filter(p => p.category === 'bakery');
  const toys = products.filter(p => p.category === 'toys');

  const totalPrice = (selectedCake?.price || 0) + (selectedToy?.price || 0);
  const discount = totalPrice > 0 ? Math.round(totalPrice * 0.1) : 0;
  const finalPrice = totalPrice - discount;

  const steps = [
    { id: 1, name: 'Select Cake', icon: Cake },
    { id: 2, name: 'Select Toy', icon: Toy },
    { id: 3, name: 'Add Message', icon: Mail },
    { id: 4, name: 'Review & Order', icon: Gift },
  ];

  return (
    <div className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold">
          The <span className="text-primary serif">Ultimate</span> Birthday Combo
        </h1>
        <p className="text-ink/60 max-w-2xl mx-auto">
          Build a personalized surprise in 4 easy steps. Get a <span className="text-primary font-bold">10% Bundle Discount</span> on every combo!
        </p>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-16 max-w-3xl mx-auto relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-black/5 -translate-y-1/2 -z-10" />
        {steps.map((s) => (
          <button
            key={s.id}
            onClick={() => s.id < step && setStep(s.id)}
            className={cn(
              "flex flex-col items-center gap-2 group",
              step < s.id && "opacity-40 cursor-not-allowed"
            )}
          >
            <div className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-4",
              step === s.id ? "bg-primary text-white border-primary/20 scale-110" : 
              step > s.id ? "bg-secondary text-white border-secondary/20" : "bg-white text-ink/40 border-black/5"
            )}>
              {step > s.id ? <Check size={20} /> : <s.icon size={20} />}
            </div>
            <span className={cn(
              "text-xs font-bold uppercase tracking-widest",
              step === s.id ? "text-primary" : "text-ink/40"
            )}>{s.name}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {cakes.map((cake) => (
                  <button
                    key={cake.id}
                    onClick={() => { setSelectedCake(cake); setStep(2); }}
                    className={cn(
                      "card text-left p-4 border-2 transition-all group",
                      selectedCake?.id === cake.id ? "border-primary bg-primary/5" : "border-transparent"
                    )}
                  >
                    <div className="aspect-square rounded-xl overflow-hidden mb-4">
                      <img src={cake.image} alt={cake.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                    </div>
                    <h3 className="font-display font-bold text-lg mb-1">{cake.name}</h3>
                    <p className="text-sm text-ink/60 mb-4 line-clamp-2">{cake.description}</p>
                    <p className="font-display font-bold text-primary">₹{cake.price}</p>
                  </button>
                ))}
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {toys.map((toy) => (
                  <button
                    key={toy.id}
                    onClick={() => { setSelectedToy(toy); setStep(3); }}
                    className={cn(
                      "card text-left p-4 border-2 transition-all group",
                      selectedToy?.id === toy.id ? "border-secondary bg-secondary/5" : "border-transparent"
                    )}
                  >
                    <div className="aspect-square rounded-xl overflow-hidden mb-4">
                      <img src={toy.image} alt={toy.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                    </div>
                    <h3 className="font-display font-bold text-lg mb-1">{toy.name}</h3>
                    <p className="text-sm text-ink/60 mb-4 line-clamp-2">{toy.description}</p>
                    <p className="font-display font-bold text-secondary">₹{toy.price}</p>
                  </button>
                ))}
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="card p-8 space-y-6"
              >
                <h3 className="text-2xl font-display font-bold">Add a Personal Touch</h3>
                <p className="text-ink/60">Write a sweet message for the birthday child. We'll print it on a beautiful card for free!</p>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Happy Birthday! Hope your day is as sweet as this cake..."
                  className="w-full h-40 p-6 bg-background border border-black/5 rounded-2xl focus:outline-none focus:border-primary transition-colors resize-none text-lg"
                />
                <button
                  onClick={() => setStep(4)}
                  className="btn btn-primary w-full text-lg"
                >
                  Next: Review Order <ArrowRight size={20} />
                </button>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="card p-8 space-y-8">
                  <h3 className="text-2xl font-display font-bold">Your Custom Combo</h3>
                  
                  <div className="space-y-4">
                    {selectedCake && (
                      <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl">
                        <img src={selectedCake.image} alt="" className="w-16 h-16 rounded-lg object-cover" referrerPolicy="no-referrer" />
                        <div className="flex-1">
                          <p className="font-bold text-ink">{selectedCake.name}</p>
                          <p className="text-xs text-ink/40 uppercase tracking-widest font-bold">Bakery</p>
                        </div>
                        <p className="font-bold text-primary">₹{selectedCake.price}</p>
                      </div>
                    )}
                    {selectedToy && (
                      <div className="flex items-center gap-4 p-4 bg-secondary/5 rounded-xl">
                        <img src={selectedToy.image} alt="" className="w-16 h-16 rounded-lg object-cover" referrerPolicy="no-referrer" />
                        <div className="flex-1">
                          <p className="font-bold text-ink">{selectedToy.name}</p>
                          <p className="text-xs text-ink/40 uppercase tracking-widest font-bold">Toy</p>
                        </div>
                        <p className="font-bold text-secondary">₹{selectedToy.price}</p>
                      </div>
                    )}
                    {message && (
                      <div className="p-4 bg-accent/5 rounded-xl border border-accent/20">
                        <p className="text-xs font-bold text-ink/40 uppercase tracking-widest mb-2">Message Card</p>
                        <p className="text-sm italic text-ink/70">"{message}"</p>
                      </div>
                    )}
                  </div>

                  <div className="pt-8 border-t border-black/5 space-y-4">
                    <div className="flex justify-between text-ink/60">
                      <span>Subtotal</span>
                      <span>₹{totalPrice}</span>
                    </div>
                    <div className="flex justify-between text-secondary font-bold">
                      <span>Bundle Discount (10%)</span>
                      <span>- ₹{discount}</span>
                    </div>
                    <div className="flex justify-between text-2xl font-display font-bold text-ink pt-4 border-t border-black/5">
                      <span>Total</span>
                      <span className="text-primary">₹{finalPrice}</span>
                    </div>
                  </div>

                  <button className="btn btn-primary w-full text-xl py-5 shadow-2xl shadow-primary/40">
                    Place Order Now <Sparkles size={20} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sidebar Summary */}
        <aside className="space-y-6">
          <div className="card p-6 sticky top-32">
            <h4 className="font-display font-bold text-lg mb-6 border-b border-black/5 pb-4">Combo Summary</h4>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", selectedCake ? "bg-primary text-white" : "bg-black/5 text-ink/20")}>
                    <Cake size={20} />
                  </div>
                  <span className={cn("text-sm font-medium", !selectedCake && "text-ink/20")}>
                    {selectedCake ? selectedCake.name : 'Select a cake'}
                  </span>
                </div>
                {selectedCake && <button onClick={() => setSelectedCake(null)} className="text-ink/20 hover:text-primary"><Trash2 size={16} /></button>}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", selectedToy ? "bg-secondary text-white" : "bg-black/5 text-ink/20")}>
                    <Toy size={20} />
                  </div>
                  <span className={cn("text-sm font-medium", !selectedToy && "text-ink/20")}>
                    {selectedToy ? selectedToy.name : 'Select a toy'}
                  </span>
                </div>
                {selectedToy && <button onClick={() => setSelectedToy(null)} className="text-ink/20 hover:text-primary"><Trash2 size={16} /></button>}
              </div>

              <div className="pt-6 border-t border-black/5">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs font-bold text-ink/40 uppercase tracking-widest mb-1">Estimated Total</p>
                    <p className="text-2xl font-display font-bold text-primary">₹{finalPrice}</p>
                  </div>
                  {step < 4 && (
                    <button
                      disabled={step === 1 ? !selectedCake : step === 2 ? !selectedToy : false}
                      onClick={() => setStep(step + 1)}
                      className="btn btn-primary btn-sm px-6 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20 space-y-4">
            <div className="flex items-center gap-3 text-secondary">
              <Sparkles size={20} />
              <h5 className="font-bold">Why build a combo?</h5>
            </div>
            <ul className="space-y-3 text-sm text-ink/70">
              <li className="flex items-start gap-2">
                <Check size={14} className="mt-1 text-secondary shrink-0" />
                <span>Save 10% on the total price</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={14} className="mt-1 text-secondary shrink-0" />
                <span>Free personalized greeting card</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={14} className="mt-1 text-secondary shrink-0" />
                <span>Guaranteed same-day delivery</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
