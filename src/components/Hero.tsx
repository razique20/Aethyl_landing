"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 bg-black"
    >
      {/* Hero content */}
      <div className="relative z-10 max-w-5xl w-full mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main heading */}
          <h1 className="apple-heading mb-6 text-white">
            The Global <span className="gradient-text">Operating System.</span>
          </h1>

          {/* Subtitle */}
          <motion.p
            className="text-base md:text-xl text-apple-gray max-w-2xl mx-auto mb-12 leading-relaxed font-medium px-4 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Unified Deal Architecture, Escrow APIs, and the 
            <span className="text-white"> VOID AI Neural Agency</span> for 
            autonomous, high-value global commerce.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-row items-center justify-center gap-6 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#contact"
              className="text-apple-blue hover:underline text-base md:text-xl font-medium flex items-center gap-1 group"
            >
              Get API Access <span className="text-xl">›</span>
            </a>
            <a
              href="#services"
              className="text-apple-blue hover:underline text-base md:text-xl font-medium flex items-center gap-1 group"
            >
              Explore Docs <span className="text-xl">›</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Visual Element - Cinematic Global Infrastructure */}
      <motion.div 
        className="mt-16 md:mt-24 w-full max-w-7xl px-4 md:px-12"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative aspect-[32/10] w-full overflow-hidden shadow-2xl">
          <img 
            src="/hero-visual.png" 
            alt="Aethyl Global Infrastructure" 
            className="w-full h-full object-cover object-center"
          />
          {/* Fade overlays */}
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
}


