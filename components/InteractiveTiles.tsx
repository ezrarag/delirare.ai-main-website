'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  gradient: string;
}

const services: Service[] = [
  {
    id: 'voice-architecture',
    title: 'Voice Architecture™',
    shortDescription: 'Proprietary vocal identities',
    fullDescription: 'We design proprietary vocal identities that shape billion-dollar adoption decisions. Where others rely on imitation, we engineer strategies that become a brand\'s most defensible competitive advantage.',
    icon: '🎯',
    gradient: 'from-luxury-gold/20 to-luxury-gold/5',
  },
  {
    id: 'creative-direction',
    title: 'Creative Direction for AI Voice',
    shortDescription: 'A-list creative rigor',
    fullDescription: 'We bring A-list creative rigor to AI voice development, translating entertainment industry standards into training direction. Abstract brand qualities become precise vocal specifications—building voices that connect with authenticity and impact.',
    icon: '🎭',
    gradient: 'from-luxury-silver/20 to-luxury-silver/5',
  },
  {
    id: 'performance-direction',
    title: 'Performance & Vocal Direction',
    shortDescription: 'Human talent & synthetic models',
    fullDescription: 'We direct both human talent and synthetic models with creative strategies and precise techniques. From performance dynamics and tonal nuance to cross-system vocal consistency, we ensure voices are not just heard but felt—delivering clarity, authority, and emotional impact.',
    icon: '🎤',
    gradient: 'from-charcoal-800/20 to-charcoal-800/5',
  },
  {
    id: 'talent-sourcing',
    title: 'Strategic Talent Sourcing',
    shortDescription: 'World-class voice talent',
    fullDescription: 'We connect brands with world-class and celebrity voice talent. Just as logos define visual identity, we cast voices that embody brand values and resonate with target audiences—ensuring every sound is as iconic as the look.',
    icon: '⭐',
    gradient: 'from-metallic-700/20 to-metallic-700/5',
  },
  {
    id: 'cultural-intelligence',
    title: 'Cultural Intelligence',
    shortDescription: 'Generational fluency',
    fullDescription: 'We provide the generational and cultural fluency most tech companies lack. Our role is to decode what users truly value and translate it into actionable voice strategies—ensuring products resonate with real audiences, not just engineer assumptions.',
    icon: '🧠',
    gradient: 'from-luxury-platinum/20 to-luxury-platinum/5',
  },
  {
    id: 'merlin',
    title: 'Merlin',
    shortDescription: 'Coming soon',
    fullDescription: 'Our proprietary voice model trained on performance data. Voice Strategy SaaS - Software that scales our methodology globally.',
    icon: '🔮',
    gradient: 'from-purple-500/20 to-purple-500/5',
  },
];

const InteractiveTiles = () => {
  const [hoveredTile, setHoveredTile] = useState<string | null>(null);

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

  const tileVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const hoverVariants = {
    rest: { scale: 1, rotateY: 0 },
    hover: { 
      scale: 1.05, 
      rotateY: 5,
      transition: {
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99],
      }
    },
  };

  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-black via-charcoal-950 to-black">
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
            Service Suite
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-luxury-gold to-transparent mx-auto" />
        </motion.div>

        {/* Interactive tiles grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={tileVariants}
              className="group relative"
              onMouseEnter={() => setHoveredTile(service.id)}
              onMouseLeave={() => setHoveredTile(null)}
            >
              {/* Tile container */}
              <motion.div
                variants={hoverVariants}
                initial="rest"
                whileHover="hover"
                className="relative h-80 bg-gradient-to-br from-charcoal-900/50 to-charcoal-950/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredTile === service.id ? 1 : 0.3,
                    scale: hoveredTile === service.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  {/* Icon */}
                  <motion.div
                    className="text-4xl mb-4"
                    animate={{ 
                      rotate: hoveredTile === service.id ? 360 : 0,
                      scale: hoveredTile === service.id ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="font-display font-semibold text-2xl text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="font-sans text-sm text-white/70 uppercase tracking-wider">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Description */}
                  <AnimatePresence mode="wait">
                    {hoveredTile === service.id ? (
                      <motion.p
                        key="full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="font-sans text-sm text-white/90 leading-relaxed"
                      >
                        {service.fullDescription}
                      </motion.p>
                    ) : (
                      <motion.div
                        key="short"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-between"
                      >
                        <span className="text-white/50 text-sm">Hover to explore</span>
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredTile === service.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Border glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: hoveredTile === service.id 
                      ? 'linear-gradient(45deg, rgba(212, 175, 55, 0.3), rgba(192, 192, 192, 0.3))'
                      : 'transparent',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Floating particles effect */}
              {hoveredTile === service.id && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-luxury-gold/50 rounded-full"
                      style={{
                        left: `${20 + (i * 15)}%`,
                        top: `${30 + (i * 10)}%`,
                      }}
                      animate={{
                        y: [-10, -30, -10],
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-luxury-silver to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveTiles;
