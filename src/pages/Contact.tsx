import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold">Get in <span className="text-primary serif">Touch</span></h1>
        <p className="text-ink/60 max-w-2xl mx-auto">Have a question about a custom cake or a specific toy? We'd love to hear from you!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { icon: MapPin, title: 'Visit Us', desc: '123 Playful Lane, Indiranagar, Bangalore, 560038' },
              { icon: Phone, title: 'Call Us', desc: '+91 98765 43210' },
              { icon: Mail, title: 'Email Us', desc: 'hello@unique-store.com' },
              { icon: Clock, title: 'Store Hours', desc: 'Mon - Sun: 10 AM - 9 PM' },
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
                  <item.icon size={24} />
                </div>
                <h3 className="font-display font-bold text-xl">{item.title}</h3>
                <p className="text-ink/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="font-display font-bold text-2xl">Connect with us</h3>
            <div className="flex items-center gap-4">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: MessageCircle, label: 'WhatsApp' },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-14 h-14 rounded-2xl border border-black/5 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group"
                >
                  <social.icon size={24} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="aspect-video rounded-[2rem] overflow-hidden bg-black/5 border border-black/5 relative group">
            <img 
              src="https://picsum.photos/seed/map/800/600?grayscale" 
              alt="Map" 
              className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-6 rounded-2xl shadow-2xl border border-black/5 text-center space-y-2">
                <MapPin size={32} className="text-primary mx-auto" />
                <p className="font-bold text-ink">Find us on Google Maps</p>
                <button className="text-primary font-bold text-sm hover:underline">Get Directions</button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card p-8 md:p-12 space-y-8">
          <div className="space-y-2">
            <h3 className="text-3xl font-display font-bold">Send a Message</h3>
            <p className="text-ink/60">We'll get back to you within 24 hours.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-ink/40">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-background border border-black/5 rounded-xl focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-ink/40">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 bg-background border border-black/5 rounded-xl focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-ink/40">Subject</label>
              <select className="w-full px-6 py-4 bg-background border border-black/5 rounded-xl focus:outline-none focus:border-primary transition-colors appearance-none">
                <option>General Inquiry</option>
                <option>Custom Cake Order</option>
                <option>Bulk Toy Order</option>
                <option>Feedback</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-ink/40">Your Message</label>
              <textarea
                placeholder="How can we help you?"
                className="w-full h-40 px-6 py-4 bg-background border border-black/5 rounded-xl focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            <button className="btn btn-primary w-full text-lg py-4">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
