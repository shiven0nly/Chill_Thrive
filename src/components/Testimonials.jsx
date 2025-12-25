"use client";

import { motion } from "framer-motion";
import React from "react";
import {
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

// Testimonials data
const testimonials = [
  {
    quote: "Chill Thrive transformed my recovery routine. The cryotherapy sessions are a game-changer!",
    name: "Alex Johnson",
    role: "Professional Athlete",
  },
  {
    quote: "The infrared sauna helped me detox and relax after long days. Highly recommend!",
    name: "Sarah Lee",
    role: "Yoga Instructor",
  },
  {
    quote: "Cold plunges boosted my mental toughness and reduced soreness. Amazing service!",
    name: "Mike Chen",
    role: "Fitness Enthusiast",
  },
  {
    quote: "Premium facilities and knowledgeable staff. My go-to for recovery.",
    name: "Emma Davis",
    role: "Marathon Runner",
  },
  {
    quote: "The app makes booking seamless, and the results are immediate.",
    name: "David Kim",
    role: "Tech Entrepreneur",
  },
  {
    quote: "Science-backed therapies that actually work. Feeling stronger every day!",
    name: "Lisa Patel",
    role: "Personal Trainer",
  },
];

// Reusable carousel component (internal)
const TestimonialCarousel = ({ testimonials }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-700px flex justify-center"
    >
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1.3}
        breakpoints={{
          640: { slidesPerView: 1.8 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 2.8 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="pb-16"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="h-[380px] mx-4 rounded-3xl bg-white/95 backdrop-blur-md shadow-2xl border border-slate-200 p-8 flex flex-col justify-center items-center text-center hover:scale-105 transition-transform duration-300">
              {/* Avatar fallback */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 mb-6 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                {t.name.charAt(0)}
              </div>

              <p className="text-lg italic text-slate-700 leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div>
                <h3 className="text-xl font-bold text-slate-900">{t.name}</h3>
                <p className="text-sm text-slate-500 mt-1">{t.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

// Main component — THIS is what you import
export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/50 h-screen w-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900">
            What Our Members Say
          </h2>
          <p className="text-xl text-slate-600 mt-4 max-w-2xl mx-auto">
            Real athletes. Real recovery. Real results.
          </p>
        </motion.div>

        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}