import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import React from "react";

const whyPoints = [
  {
    title: "Science-Backed Recovery",
    description: "Every therapy we offer Ice Bath, Steam Bath, and Jacuzzi is grounded in peer-reviewed research. From reducing inflammation markers to boosting dopamine and norepinephrine, our methods are proven to accelerate recovery, enhance performance, and improve overall well-being.",
    iconColor: "text-blue-600",
  },
  {
    title: "Trained Professionals",
    description: "Our team consists of certified recovery specialists who guide you through each session. They monitor your comfort, adjust protocols to your needs, and educate you on maximizing benefits — ensuring safe, effective, and personalized experiences every time.",
    iconColor: "text-cyan-600",
  },
  {
    title: "Hygienic & Premium Setup",
    description: "We maintain clinical-level cleanliness with medical-grade sanitation between sessions. Our state-of-the-art equipment, private recovery suites, and calming ambiance create a luxury wellness environment designed for relaxation and results.",
    iconColor: "text-indigo-600",
  },
  {
    title: "Community-Driven Wellness",
    description: "You're not just a client — you're part of a motivated community of athletes, professionals, and wellness seekers. We host events, share success stories, and foster connections that inspire long-term commitment to health and peak performance.",
    iconColor: "text-sky-600",
  },
];

const WhyChillThriveSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-blue-50/30 via-white to-cyan-50/20">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Why Chill Thrive
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We don’t just offer recovery — we deliver results through expertise, science, and care.
          </p>
        </motion.div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {whyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle className={`size-12 ${point.iconColor} drop-shadow-md`} />
                    </motion.div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChillThriveSection;