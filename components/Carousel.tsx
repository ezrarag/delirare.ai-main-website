'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  description: string;
  impact: string;
  category: string;
  image: string;
  gradient: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'nike-campaign',
    title: 'Voice Architecture for Global Campaign',
    client: 'Nike',
    description: 'Crafted the vocal identity for Nike\'s international brand campaign, creating a voice that embodies athleticism, determination, and global unity.',
    impact: 'Increased brand recognition by 40% and user engagement by 65% across all touchpoints.',
    category: 'Brand Campaign',
    image: '/api/placeholder/600/400',
    gradient: 'from-red-500/20 to-orange-500/10',
  },
  {
    id: 'taco-bell-voice',
    title: 'Fast-Food Voice Strategy',
    client: 'Taco Bell',
    description: 'Developed a distinctive voice personality that captures Taco Bell\'s bold, playful, and culturally relevant brand essence.',
    impact: 'Drove 25% increase in digital engagement and 30% improvement in brand sentiment.',
    category: 'Voice Strategy',
    image: '/api/placeholder/600/400',
    gradient: 'from-purple-500/20 to-pink-500/10',
  },
  {
    id: 'kohls-retail',
    title: 'Retail Voice Transformation',
    client: 'Kohl\'s',
    description: 'Transformed Kohl\'s digital voice to create a more personalized, trustworthy, and accessible customer experience.',
    impact: 'Improved customer satisfaction scores by 35% and reduced support ticket volume by 20%.',
    category: 'Customer Experience',
    image: '/api/placeholder/600/400',
    gradient: 'from-blue-500/20 to-cyan-500/10',
  },
  {
    id: 'gaming-franchise',
    title: 'AAA Gaming Voice Design',
    client: 'Major Gaming Studio',
    description: 'Created immersive voice experiences for a major AAA gaming franchise, developing character voices that enhance narrative depth.',
    impact: 'Enhanced player immersion by 50% and received critical acclaim for voice acting quality.',
    category: 'Gaming',
    image: '/api/placeholder/600/400',
    gradient: 'from-green-500/20 to-emerald-500/10',
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 'auto',
      spacing: 32,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: {
          perView: 2,
          spacing: 32,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 3,
          spacing: 32,
        },
      },
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-black to-charcoal-950">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-gradient mb-8 tracking-tight">
            Case Studies
          </h2>
          <p className="font-sans text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Real voices, real impact. Discover how we've transformed brands through the power of voice architecture.
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-luxury-gold to-transparent mx-auto mt-8" />
        </motion.div>

        {/* Carousel container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Navigation arrows */}
          {loaded && instanceRef.current && (
            <>
              <motion.button
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
                onClick={() => instanceRef.current?.prev()}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <motion.button
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
                onClick={() => instanceRef.current?.next()}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </>
          )}

          {/* Slider */}
          <div ref={sliderRef} className="keen-slider">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                variants={itemVariants}
                className="keen-slider__slide min-w-0"
              >
                <motion.div
                  className="group relative h-96 bg-gradient-to-br from-charcoal-900/50 to-charcoal-950/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.02, rotateY: 2 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${study.gradient}`}
                    whileHover={{ opacity: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                    {/* Header */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs font-medium text-white/80 uppercase tracking-wider">
                          {study.category}
                        </span>
                        <motion.div
                          className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <span className="text-white/60">→</span>
                        </motion.div>
                      </div>

                      <h3 className="font-display font-semibold text-2xl text-white mb-2">
                        {study.title}
                      </h3>
                      <p className="font-sans text-lg font-medium text-luxury-gold mb-4">
                        {study.client}
                      </p>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <p className="font-sans text-sm text-white/80 leading-relaxed mb-4">
                        {study.description}
                      </p>
                      <div className="p-4 bg-white/5 backdrop-blur-xl rounded-lg border border-white/10">
                        <p className="font-sans text-xs text-white/60 uppercase tracking-wider mb-1">
                          Impact
                        </p>
                        <p className="font-sans text-sm text-luxury-silver">
                          {study.impact}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Floating elements on hover */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-luxury-gold/60 rounded-full"
                        style={{
                          left: `${20 + (i * 20)}%`,
                          top: `${20 + (i * 15)}%`,
                        }}
                        animate={{
                          y: [-5, -15, -5],
                          opacity: [0.6, 1, 0.6],
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Dots indicator */}
          {loaded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center mt-12 space-x-3"
            >
              {caseStudies.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-luxury-gold w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  onClick={() => instanceRef.current?.moveToIdx(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.button
            className="group relative px-12 py-4 bg-transparent border border-white/20 text-white font-sans font-medium tracking-wide uppercase text-sm hover:border-luxury-gold/50 transition-all duration-500 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View All Case Studies</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-luxury-gold/10 to-luxury-silver/10"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Carousel;
