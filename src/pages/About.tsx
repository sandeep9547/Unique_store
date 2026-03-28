import { motion } from 'motion/react';
import { Heart, Sparkles, ShieldCheck, Users, Cake, Gamepad2 as Toy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-32 pb-24 space-y-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm"
        >
          <Heart size={16} />
          <span>Our Story</span>
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-display font-bold max-w-4xl mx-auto leading-tight">
          Where Every <span className="text-primary serif">Bite</span> Tells a Story and Every <span className="text-secondary serif">Toy</span> Sparks a Dream
        </h1>
        <p className="text-xl text-ink/60 max-w-2xl mx-auto leading-relaxed">
          Founded in 2020, Unique was born from a simple idea: why should parents have to go to two different places for a birthday?
        </p>
      </section>

      {/* Image Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-[500px] rounded-[3rem] overflow-hidden">
          <img src="https://picsum.photos/seed/bakery-story/800/1000" alt="Bakery" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="h-[500px] rounded-[3rem] overflow-hidden translate-y-12">
          <img src="https://picsum.photos/seed/toy-story/800/1000" alt="Toys" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold">More Than Just a <span className="text-primary serif">Store</span></h2>
            <p className="text-lg text-ink/70 leading-relaxed">
              At Unique, we believe that childhood is a collection of magical moments. Our mission is to enhance those moments with high-quality, artisanal treats and toys that inspire creativity and joy.
            </p>
            <div className="space-y-6">
              {[
                { icon: ShieldCheck, title: 'Quality First', desc: 'We use only organic ingredients for our bakery and non-toxic materials for our toys.' },
                { icon: Sparkles, title: 'Handcrafted with Love', desc: 'Every cake is decorated by hand, and every toy is curated with care.' },
                { icon: Users, title: 'Community Focused', desc: 'We are a local business dedicated to serving the families of Bangalore.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xl mb-2">{item.title}</h4>
                    <p className="text-ink/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/founder/800/800" alt="Founder" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-accent p-8 rounded-[2rem] shadow-xl max-w-xs">
              <p className="font-serif italic text-xl text-ink mb-4">"We wanted to create a place where parents feel at ease and kids feel at home."</p>
              <p className="font-bold text-ink">— Sarah & David, Founders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Cakes Baked', value: '15,000+' },
            { label: 'Toys Sold', value: '25,000+' },
            { label: 'Happy Kids', value: '10,000+' },
            { label: 'Store Visits', value: '50,000+' },
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <p className="text-4xl md:text-6xl font-display font-bold text-primary">{stat.value}</p>
              <p className="text-sm font-bold uppercase tracking-widest text-ink/40">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-secondary rounded-[3rem] p-12 md:p-20 text-center text-white space-y-8">
          <h2 className="text-4xl md:text-6xl font-display font-bold">Ready to make some <span className="text-accent serif">Memories</span>?</h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">Visit our store today or order online for a sweet surprise delivered to your doorstep.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/shop" className="btn bg-white text-secondary hover:bg-accent hover:text-ink w-full sm:w-auto px-10 py-4 text-lg">
              Shop Now
            </Link>
            <Link to="/contact" className="btn border-2 border-white/30 hover:bg-white/10 w-full sm:w-auto px-10 py-4 text-lg">
              Find Our Store
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
