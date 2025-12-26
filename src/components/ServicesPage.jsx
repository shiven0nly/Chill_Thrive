// ServicesSection.jsx
import React from 'react';
import { Button } from './ui/button';
import { TextEffect } from './ui/text-effect';
import { AnimatedGroup } from './ui/animated-group';
import { HeroHeader } from './header';
import Contact from './Footer';

export default function ServicesPage({ setCurrentPage }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Same subtle blue radial gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 translate-x-1/3 translate-y-1/2 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl" />
      </div>

      <HeroHeader setCurrentPage={setCurrentPage} />

      <main className="relative overflow-hidden">
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h1"
              className="text-center text-5xl font-medium tracking-tight md:text-6xl text-slate-900 mb-12"
            >
              Our Premium Recovery Services
            </TextEffect>

            <AnimatedGroup className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/80 backdrop-blur-md rounded-xl border border-slate-200 p-6 shadow-lg hover:shadow-2xl transition-shadow">
                <h2 className="text-2xl font-semibold text-cyan-700 mb-4">Ice Bath</h2>
                <p className="text-slate-600 mb-6">
                  Whole-body cold therapy to reduce stress, relieve pain, and boost recovery.
                </p>
                <ul className="text-slate-600 space-y-2">
                  <li>✔️ Rapid muscle recovery</li>
                  <li>✔️ Pain & inflammation relief</li>
                  <li>✔️ Enhanced circulation</li>
                </ul>
                 <div className='flex justify-start mt-5 border border-teal-700 px-4 rounded-2xl w-fit gap-3'>
                <span className='text-2xl font-semibold'>Just for </span>
                <span className="text-2xl font-bold text-teal-700">$50</span>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-md rounded-xl border border-slate-200 p-6 shadow-xl hover:shadow-2xl transition-shadow">
                <h2 className="text-2xl font-semibold text-cyan-700 mb-4">Steam Bath</h2>
                <p className="text-slate-600 mb-6">
                  Deep-penetrating heat for detoxification, relaxation, and skin health.
                </p>
                <ul className="text-slate-600 space-y-2">
                  <li>✔️ Deep detox sweat</li>
                  <li>✔️ Stress relief</li>
                  <li>✔️ Skin rejuvenation</li>
                </ul>
                 <div className='flex justify-start mt-5 border border-teal-700 px-4 rounded-2xl w-fit gap-3'>
                <span className='text-2xl font-semibold'>Just for </span>
                <span className="text-2xl font-bold text-teal-700">$45</span>
                </div>
              </div>

             
              <div className="bg-white/80 backdrop-blur-md rounded-xl border border-slate-200 p-6 shadow-xl hover:shadow-2xl transition-shadow">
                <h2 className="text-2xl font-semibold text-cyan-700 mb-4">Jacuzzi</h2>
                <p className="text-slate-600 mb-6">
                  Invigorating warm bath for resilience, mood boost, and faster recovery.
                </p>
                <ul className="text-slate-600 space-y-2">
                  <li>✔️ Reduced soreness</li>
                  <li>✔️ Mental toughness</li>
                  <li>✔️ Immune & mood boost</li>
                </ul>
                <div className='flex justify-start mt-5 border border-teal-700 px-4 rounded-2xl w-fit gap-3'>
                <span className='text-2xl font-semibold'>Just for </span>
                <span className="text-2xl font-bold text-teal-700">$50</span>
                </div>
              </div>
            </AnimatedGroup>

           
            <div className="mt-20">
              <h2 className="text-center text-4xl font-bold text-slate-800 mb-12">
                Combo Packages <span className="text-cyan-600">(Save More)</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-cyan-200 p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Ice Bath + Steam</h3>
                  <p className="text-slate-600 mb-6">Contrast therapy for ultimate circulation and recovery.</p>
                  <div className="text-3xl font-bold text-cyan-700 mb-2">$80</div>
                  <del className="text-slate-500">$95</del>
                  <span className="text-green-600 ml-2 font-medium">Save $15</span>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200 p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Ice Bath + Jacuzzi</h3>
                  <p className="text-slate-600 mb-6">Cold shock + warm relaxation for muscle relief and calm.</p>
                  <div className="text-3xl font-bold text-blue-700 mb-2">$85</div>
                  <del className="text-slate-500">$100</del>
                  <span className="text-green-600 ml-2 font-medium">Save $15</span>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-xl border-1 border-indigo-200 p-8 shadow-xl">
                  <div className="text-center mb-4">
                    <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">Best Value</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Full Recovery Combo</h3>
                  <p className="text-slate-600 mb-6">Ice + Steam + Jacuzzi — the ultimate recovery experience.</p>
                  <div className="text-4xl font-bold text-indigo-700 mb-2">$120</div>
                  <del className="text-slate-500">$140</del>
                  <span className="text-green-600 ml-2 font-medium text-lg">Save $20</span>
                </div>
              </div>
            </div>

            {/* Book Button */}
            <div className="mt-16 text-center">
              <Button
                size="lg"
                className="cursor-pointer transition-all bg-blue-500 text-white py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                onClick={() => setCurrentPage('Booking')}
              >
                Book a Session
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Contact />
    </div>
  );
}