'use client';

import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import InteractiveTiles from '../components/InteractiveTiles';
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Interactive Tiles Section */}
      <InteractiveTiles />

      {/* Carousel Section */}
      <Carousel />

      {/* About Section */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-charcoal-950 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-gradient mb-8 tracking-tight">
              Who We Are
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-luxury-gold to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <p className="font-sans text-lg md:text-xl text-white/80 leading-relaxed mb-8">
                Delirare creates bespoke vocal identities for the world's most ambitious companies. 
                More than sound, we craft resonance: voices that embody brand, shape emotion, and command trust.
              </p>
              <p className="font-serif text-xl md:text-2xl text-luxury-gold italic leading-relaxed">
                Our work bridges design and infrastructure. In the new order, design is defense, and voice is power.
              </p>
            </div>

            {/* Founder section */}
            <div className="relative">
              <div className="glass rounded-2xl p-8">
                <h3 className="font-display font-semibold text-2xl text-white mb-6">
                  About the Founder
                </h3>
                <p className="font-sans text-white/80 leading-relaxed mb-6">
                  Jennalyn Ponraj is a creative visionary pioneering the field of{' '}
                  <span className="text-luxury-gold font-medium">Voice Architecture™</span>. 
                  She brings a rare combination of performance expertise and cultural insight to the rapidly evolving world of AI.
                </p>
                <p className="font-sans text-white/80 leading-relaxed">
                  Trusted by world-class brands including{' '}
                  <span className="text-luxury-gold font-medium">Nike</span>,{' '}
                  <span className="text-luxury-gold font-medium">Taco Bell</span>,{' '}
                  <span className="text-luxury-gold font-medium">Kohl's</span>, and many others 
                  to define their voice in national campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-t from-black via-charcoal-950 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gradient mb-8 tracking-tight">
              Ready to Find Your Voice?
            </h2>
            <p className="font-sans text-lg md:text-xl text-white/70 mb-12 leading-relaxed">
              To reach out about our services and find out how Delirare can give your brand the voice it deserves:
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative px-12 py-4 bg-gradient-to-r from-luxury-gold/20 to-luxury-silver/20 backdrop-blur-xl border border-luxury-gold/30 text-white font-sans font-medium tracking-wide uppercase text-sm hover:border-luxury-gold/50 transition-all duration-500 overflow-hidden">
                <span className="relative z-10">Get In Touch</span>
              </button>

              <button className="group px-12 py-4 bg-transparent border border-white/20 text-white font-sans font-medium tracking-wide uppercase text-sm hover:border-luxury-silver/50 transition-all duration-500">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo */}
            <div>
              <h3 className="font-display font-bold text-2xl text-gradient">
                DELIRARE™
              </h3>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-8">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white/60 hover:text-white transition-colors duration-300 font-sans text-sm uppercase tracking-wider"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Copyright */}
            <p className="text-white/40 font-sans text-sm">
              Copyright © 2025 <em className="text-luxury-gold">Delirare</em>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
