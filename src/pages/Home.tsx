import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, ShieldCheck, Heart, Sparkles, Gift } from 'lucide-react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
  const bestsellers = products.filter(p => p.isBestseller).slice(0, 4);

  return (
    <div className="space-y-24 pb-24">
      <Hero />

      {/* Value Proposition */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Clock, title: 'Freshly Baked Daily', desc: 'Our ovens never rest to bring you the freshest artisanal delights.' },
            { icon: ShieldCheck, title: 'Safe & High Quality', desc: 'Premium, non-toxic toys curated for your child\'s safety and growth.' },
            { icon: Gift, title: 'Perfect for Gifting', desc: 'Beautifully packaged combos that make every birthday magical.' },
            { icon: Sparkles, title: 'One-Stop Family Shop', desc: 'The convenience of a bakery and toy store in one delightful place.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white border border-black/5 hover:border-primary/20 transition-colors group"
            >
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <item.icon size={28} />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-ink/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Explore Our <span className="text-primary serif">Magical</span> World</h2>
            <p className="text-ink/60 max-w-xl">From decadent cakes to brain-boosting toys, discover everything you need to make their day special.</p>
          </div>
          <Link to="/shop" className="btn btn-outline">View All Products <ArrowRight size={18} /></Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Bakery Delights', img: 'https://picsum.photos/seed/bakery-cat/800/600', link: '/shop?category=bakery', color: 'bg-primary/10' },
            { name: 'Playful Toys', img: 'https://picsum.photos/seed/toy-cat/800/600', link: '/shop?category=toys', color: 'bg-secondary/10' },
            { name: 'Birthday Combos', img: 'https://picsum.photos/seed/combo-cat/800/600', link: '/combo-builder', color: 'bg-accent/10' },
          ].map((cat, i) => (
            <Link
              key={i}
              to={cat.link}
              className="group relative h-[400px] rounded-[2rem] overflow-hidden"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white font-display font-bold text-3xl mb-4">{cat.name}</h3>
                <div className="flex items-center gap-2 text-white/80 font-semibold group-hover:text-white transition-colors">
                  Shop Now <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="bg-white py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Most Loved</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold">Our <span className="text-secondary serif">Bestsellers</span></h2>
            <p className="text-ink/60 max-w-2xl mx-auto">These favorites have brought smiles to thousands of families. Grab yours before they are gone!</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Combo Builder CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative rounded-[3rem] overflow-hidden bg-ink text-white p-12 md:p-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[120px] -z-0" />
          
          <div className="relative z-10 space-y-8 lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              Create the <span className="text-accent serif">Perfect</span> Birthday Surprise
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Why settle for just a cake? Use our interactive Combo Builder to pair a delicious treat with a thoughtful toy and a personalized card. Plus, get an exclusive bundle discount!
            </p>
            <Link to="/combo-builder" className="btn btn-primary text-lg px-10 py-4 w-full sm:w-auto">
              Start Building Now
            </Link>
          </div>

          <div className="relative z-10 lg:w-1/2 grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/seed/cake-combo/400/400" alt="Cake" className="rounded-2xl shadow-2xl rotate-[-5deg]" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/toy-combo/400/400" alt="Toy" className="rounded-2xl shadow-2xl rotate-[5deg] translate-y-8" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Loved by <span className="text-primary serif">Parents</span></h2>
          <div className="flex items-center justify-center gap-1">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="text-accent fill-accent" />)}
            <span className="ml-2 font-bold">4.9/5 Average Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Priya Sharma', role: 'Mother of 2', text: 'The Rainbow Confetti cake was the star of my daughter\'s birthday! And the wooden blocks we bought are her new favorite toy. Truly a unique concept.' },
            { name: 'Rahul Verma', role: 'Father', text: 'Ordered a combo for my son\'s 5th birthday. The delivery was on time, the cake was fresh, and the toy quality was exceptional. Highly recommend!' },
            { name: 'Anjali Gupta', role: 'Gift Shopper', text: 'The easiest way to send a gift. The combo builder is so intuitive. My nephew loved the space puzzle and the red velvet cupcakes!' },
          ].map((review, i) => (
            <div key={i} className="card p-8 space-y-6">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="text-accent fill-accent" />)}
              </div>
              <p className="text-ink/70 italic leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-bold text-ink">{review.name}</p>
                  <p className="text-xs text-ink/40 uppercase tracking-wider font-bold">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="bg-accent py-4 overflow-hidden">
        <div className="flex items-center gap-12 whitespace-nowrap animate-marquee">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="flex items-center gap-4 font-display font-bold text-ink uppercase tracking-widest text-sm">
              <Sparkles size={18} className="text-primary" />
              <span>Same-day delivery available in Bangalore</span>
              <Sparkles size={18} className="text-primary" />
              <span>Order before 2 PM for today</span>
              <Sparkles size={18} className="text-primary" />
              <span>Free shipping on orders above ₹1999</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
