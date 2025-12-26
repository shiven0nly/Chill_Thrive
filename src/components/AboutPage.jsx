// AboutPage.jsx
"use client";

import { motion } from "framer-motion";
import React from "react";
import { HeroHeader } from "@/components/header";

const AboutPage = ({ setCurrentPage }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Same subtle blue radial background as other pages */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 translate-x-1/3 translate-y-1/2 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl" />
      </div>

      <HeroHeader setCurrentPage={setCurrentPage} />

      <main className="relative pt-32 pb-20 px-6">
        <div className="mx-auto max-w-5xl">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
              About Chill Thrive
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
              Recovery isn’t a luxury — it’s the foundation of peak performance.
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200 shadow-2xl p-12 md:p-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
                Our Mission
              </h2>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto text-center">
                At <span className="font-semibold text-cyan-700">Chill Thrive</span>, we believe that true strength comes from intentional recovery. 
                We’re on a mission to make science-backed recovery accessible to every athlete, professional, and everyday warrior who refuses to settle for average.
              </p>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed mt-8 max-w-4xl mx-auto text-center">
                By combining cutting-edge cryotherapy, infrared therapy, and cold plunge with expert guidance and a premium environment, 
                we help you reset your nervous system, reduce inflammation, and unlock your full potential — faster and more effectively than ever before.
              </p>
            </div>
          </motion.section>

          {/* Founder's Story */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Founder Image Placeholder */}
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl aspect-square flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-xl">
                    RS
                  </div>
                  <p className="mt-6 text-2xl font-semibold text-slate-800">Ravi Shashtri</p>
                  <p className="text-lg text-slate-600">Founder & CEO</p>
                </div>
              </div>
            </div>

            {/* Story Text */}
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                The Founder's Story
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                I was a competitive athlete pushing my body to the limit every day — until burnout and chronic injuries forced me to stop. 
                Traditional recovery methods weren’t enough. That’s when I discovered the transformative power of cold therapy and contrast recovery.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                After experiencing firsthand how cryotherapy, saunas, and cold plunges reset my nervous system and brought me back stronger than ever, 
                I became obsessed with the science behind it. But elite recovery was expensive, clinical, and inaccessible.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                So I founded <span className="font-bold text-cyan-700">Chill Thrive</span> — to bring world-class, science-backed recovery to everyone who wants to thrive, 
                not just survive. A place where performance meets peace, and recovery feels like a ritual you look forward to.
              </p>
              <p className="text-xl font-medium text-slate-800 mt-8">
                — Jordan Hayes, Founder
              </p>
            </div>
          </motion.section>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-24"
          >
            <p className="text-2xl md:text-3xl font-semibold text-slate-800 max-w-4xl mx-auto">
              Join us in redefining recovery.  
              <span className="block mt-4 text-cyan-700">Chill deeper. Thrive faster.</span>
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;