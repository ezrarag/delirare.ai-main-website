'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-luxury-gold/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-luxury-silver/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x * 0.3,
            y: -mousePosition.y * 0.3,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Brand name with dramatic typography */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] leading-none tracking-tighter text-gradient mb-8"
            style={{
              fontVariationSettings: '"wght" 900, "slnt" -10',
            }}
          >
            DELIRARE
          </motion.h1>

          {/* Subtitle with luxury styling */}
          <motion.div
            variants={textVariants}
            className="max-w-4xl mx-auto mb-12"
          >
            <p className="font-sans font-light text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 tracking-wide">
              We make AI voices human.
            </p>
            <p className="font-serif text-lg md:text-xl lg:text-2xl text-white/70 italic leading-relaxed">
              In the era of AI, a brand's <span className="text-luxury-gold">voice</span> is as valuable as its <span className="text-luxury-silver">logo</span>.
            </p>
          </motion.div>

          {/* Hero description with editorial feel */}
          <motion.div
            variants={textVariants}
            className="max-w-5xl mx-auto mb-16"
          >
            <p className="font-sans font-normal text-base md:text-lg lg:text-xl text-white/80 leading-relaxed mb-8">
              We partner with world-class teams to craft voices that define products, 
              inspire trust, and leave a legacy.
            </p>
            <div className="relative">
              <motion.p
                className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-gradient-luxury italic"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
              >
                In a world of machines, the brands that win sound human.
              </motion.p>
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-luxury-gold/50"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-luxury-silver/50"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2, duration: 0.8 }}
              />
            </div>
          </motion.div>

          {/* CTA with sophisticated styling */}
          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              className="group relative px-12 py-4 bg-transparent border border-white/20 text-white font-sans font-medium tracking-wide uppercase text-sm hover:border-luxury-gold/50 transition-all duration-500 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Discover Our Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-luxury-gold/10 to-luxury-silver/10"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
              />
            </motion.button>

            <motion.button
              className="group px-12 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-sans font-medium tracking-wide uppercase text-sm hover:bg-white/10 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
