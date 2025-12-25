"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

// Therapy data
const therapies = [
  {
    name: "Ice Bath",
    benefits: [
      { title: "Rapid Muscle Recovery", description: "Extreme cold reduces inflammation and flushes lactic acid, accelerating muscle repair." },
      { title: "Natural Pain Relief", description: "Triggers endorphin release and numbs nerve endings for effective, drug-free relief." },
      { title: "Reduced Inflammation", description: "Vasoconstriction limits swelling and decreases inflammatory markers." },
      { title: "Improved Circulation", description: "Pumps oxygen-rich blood more efficiently through constriction and dilation." },
      { title: "Energy & Mood Boost", description: "Activates norepinephrine, increasing alertness and focus." },
    ],
    accentColor: "text-blue-600",
  },
  {
    name: "Steam Bath",
    benefits: [
      { title: "Deep Detoxification", description: "Induces heavy sweating, eliminating toxins and heavy metals effectively." },
      { title: "Pain & Muscle Relief", description: "Deep-penetrating heat relaxes muscles and reduces joint stiffness." },
      { title: "Cardiovascular Health", description: "Improves circulation and potentially lowers blood pressure over time." },
      { title: "Stress Reduction", description: "Promotes deep relaxation, lowers cortisol, and helps sleep patterns." },
      { title: "Skin Rejuvenation", description: "Increased blood flow and sweating clear pores for glowing skin." },
    ],
    accentColor: "text-cyan-600",
  },
  {
    name: "Jacuzzi",
    benefits: [
      { title: "Faster Recovery", description: "Warm water immersion significantly reduces delayed-onset muscle soreness (DOMS)." },
      { title: "Mental Resilience", description: "Trains your nervous system to stay calm under pressure, building toughness." },
      { title: "Mood & Focus Boost", description: "Triggers dopamine surge for improved alertness and cognitive performance." },
      { title: "Immune Support", description: "Regular exposure may increase white blood cell count and strength." },
      { title: "Enhanced Circulation", description: "Acts as a 'vascular pump' to improve overall heart health." },
    ],
    accentColor: "text-indigo-600",
  },
];

// 3D Text Animation for Therapy Name
const TherapyNameChar = ({ char, index, centerIndex, scrollYProgress }) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  // COMPLETED EARLY: Range [0, 0.25] means it finishes when the title is 75% up the screen
  const x = useTransform(scrollYProgress, [0, 0.4], [distanceFromCenter * 60, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.4], [distanceFromCenter * 40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.span
      className={cn("inline-block text-6xl md:text-7xl font-black uppercase tracking-tight", isSpace && "w-6")}
      style={{ x, rotateX, opacity }}
    >
      {char}
    </motion.span>
  );
};

// Staggered Benefit Item
const BenefitItem = ({ benefit, index, scrollYProgress, accentColor }) => {
  // Snappier delay
  const delay = index * 0.08;

  // COMPLETED EARLY: Range starts shortly after the title and finishes by 0.35
  const delayedOpacity = useTransform(scrollYProgress, [0.1 + delay, 0.3 + delay], [0, 1]);
  const delayedY = useTransform(scrollYProgress, [0.1 + delay, 0.3 + delay], [40, 0]);
  const scale = useTransform(scrollYProgress, [0.1 + delay, 0.3 + delay], [0.9, 1]);

  return (
    <motion.li
      className="flex items-start gap-4 bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-slate-100"
      style={{ opacity: delayedOpacity, y: delayedY, scale }}
    >
      <span className={cn("text-3xl mt-1 flex-shrink-0", accentColor)}>✔</span>
      <div>
        <h4 className="text-xl text-zinc-900 font-bold">{benefit.title}</h4>
        <p className="text-slate-800 font-semibold mt-2 leading-relaxed">{benefit.description}</p>
      </div>
    </motion.li>
  );
};

const ChillThriveBenefits = () => {
  const sectionRef0 = useRef(null);
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRefs = [sectionRef0, sectionRef1, sectionRef2];

  const scrollProgress0 = useScroll({ target: sectionRef0, offset: ["start end", "end start"] }).scrollYProgress;
  const scrollProgress1 = useScroll({ target: sectionRef1, offset: ["start end", "end start"] }).scrollYProgress;
  const scrollProgress2 = useScroll({ target: sectionRef2, offset: ["start end", "end start"] }).scrollYProgress;
  const scrollProgresses = [scrollProgress0, scrollProgress1, scrollProgress2];

  return (
    <ReactLenis root options={{ lerp: 0.07 }}>
      <main className="w-full">
        {therapies.map((therapy, therapyIndex) => {
          const characters = therapy.name.split("");
          const centerIndex = Math.floor(characters.length / 2);
          const scrollYProgress = scrollProgresses[therapyIndex];

          return (
            <section
              key={therapyIndex}
              ref={sectionRefs[therapyIndex]}
              className="relative min-h-screen flex flex-col items-center justify-center px-8 py-32 bg-gradient-to-br from-blue-50/30 via-white to-cyan-50/30 overflow-hidden"
            >
              {/* Therapy Name */}
              <div className="w-full max-w-5xl text-center mb-20" style={{ perspective: "1000px" }}>
                <div className="inline-block">
                  {characters.map((char, i) => (
                    <TherapyNameChar
                      key={i}
                      char={char}
                      index={i}
                      centerIndex={centerIndex}
                      scrollYProgress={scrollYProgress}
                    />
                  ))}
                </div>
              </div>

              {/* Benefits List */}
              <ul className="space-y-8 max-w-3xl w-full">
                {therapy.benefits.map((benefit, i) => (
                  <BenefitItem
                    key={i}
                    benefit={benefit}
                    index={i}
                    scrollYProgress={scrollYProgress}
                    accentColor={therapy.accentColor}
                  />
                ))}
              </ul>
            </section>
          );
        })}
      </main>
    </ReactLenis>
  );
};

export default ChillThriveBenefits;