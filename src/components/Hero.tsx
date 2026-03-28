import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Cake, Gamepad2 as Toy } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden px-4 md:px-8">
      {/* Background Elements */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full text-ink font-semibold text-sm border border-accent/30">
            <Sparkles size={16} className="text-primary" />
            <span>Bangalore's Favorite Family Destination</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] text-ink">
            Where <span className="text-primary serif">Sweet</span> Treats Meet <span className="text-secondary serif">Playful</span> Joy
          </h1>

          <p className="text-lg md:text-xl text-ink/70 max-w-lg leading-relaxed">
            Handcrafted cakes, artisanal pastries, and premium educational toys—all under one magical roof. Make every celebration unforgettable.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link to="/shop" className="btn btn-primary w-full sm:w-auto text-lg px-10 py-4">
              Explore Store <ArrowRight size={20} />
            </Link>
            <Link to="/combo-builder" className="btn btn-outline w-full sm:w-auto text-lg px-10 py-4">
              Build a Combo
            </Link>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-ink/60">
              <span className="text-ink font-bold">2,500+</span> Happy Families served this month
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
            <img
              src="https://picsum.photos/seed/family/800/1000"
              alt="Kids celebrating with cake and toys"
              className="w-full h-full object-cover aspect-[4/5]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Floating Badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-black/5"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <Cake size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-ink/40 uppercase tracking-wider">Freshly Baked</p>
              <p className="font-display font-bold text-ink">Artisanal Cakes</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-black/5"
          >
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
              <Toy size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-ink/40 uppercase tracking-wider">Safe & Fun</p>
              <p className="font-display font-bold text-ink">Premium Toys</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
