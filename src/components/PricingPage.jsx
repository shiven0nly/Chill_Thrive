// PricingSection.jsx
import React from 'react';
import { Button } from './ui/button';
import { TextEffect } from './ui/text-effect';
import { AnimatedGroup } from './ui/animated-group';
import { HeroHeader } from './header';
import Contact from './Footer';

export default function PricingPage({ setCurrentPage }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
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
              Transparent Pricing
            </TextEffect>

            {/* Individual Services */}
            <AnimatedGroup className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/80 backdrop-blur-md rounded-xl border border-slate-200 p-6 shadow-xl text-center">
                <h2 className="text-2xl font-semibold text-cyan-700 mb-4">Ice Bath</h2>
                <p className="text-4xl font-bold text-slate-900 mb-2">$50</p>
                <p className="text-slate-600 mb-6">per hour</p>
                <Button className="cursor-pointer transition-all bg-blue-500 text-white py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" onClick={() => setCurrentPage('Booking')}>
                  Book Now
                </Button>
              </div>

              <div className="bg-white/80 backdrop-blur-md rounded-xl border border-slate-200 p-6 shadow-xl text-center">
                <h2 className="text-2xl font-semibold text-cyan-700 mb-4">Steam Bath</h2>
                <p className="text-4xl font-bold text-slate-900 mb-2">$45</p>
                <p className="text-slate-600 mb-6">per hour</p>
                <Button className="cursor-pointer transition-all bg-blue-500 text-white py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" onClick={() => setCurrentPage('Booking')}>
                  Book Now
                </Button>
              </div>

              <div className="bg-white/80 backdrop-blur-md rounded-xl border border-slate-200 p-6 shadow-xl text-center">
                <h2 className="text-2xl font-semibold text-cyan-700 mb-4">Jacuzzi</h2>
                <p className="text-4xl font-bold text-slate-900 mb-2">$50</p>
                <p className="text-slate-600 mb-6">per hour</p>
                <Button className="cursor-pointer transition-all bg-blue-500 text-white py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" onClick={() => setCurrentPage('Booking')}>
                  Book Now
                </Button>
              </div>
            </AnimatedGroup>

            {/* Combo Packages */}
            <h2 className="text-center text-4xl font-bold text-slate-900 mb-12">
              Combo Packages <span className="text-cyan-600">(Best Value)</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-cyan-50 to-white rounded-xl border-2 border-cyan-300 p-8 shadow-xl text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ice Bath + Steam</h3>
                <p className="text-4xl font-bold text-cyan-700 mb-2">$80</p>
                <del className="text-slate-500">$95</del>
                <p className="text-green-600 font-medium mt-2">Save $15</p>
                <Button className="my-5 cursor-pointer transition-all bg-cyan-500 text-white py-2 rounded-lg
border-cyan-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" onClick={() => setCurrentPage('Booking')}>
                  Book Combo
                </Button>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl border-2 border-blue-300 p-8 shadow-xl text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ice Bath + Jacuzzi</h3>
                <p className="text-4xl font-bold text-sky-700 mb-2">$85</p>
                <del className="text-slate-500">$100</del>
                <p className="text-green-600 font-medium mt-2">Save $15</p>
                <Button className=" my-5 cursor-pointer transition-all bg-sky-500 text-white py-2 rounded-lg
border-sky-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" onClick={() => setCurrentPage('Booking')}>
                  Book Combo
                </Button>
              </div>

              <div className="bg-gradient-to-br from-indigo-100 to-cyan-50 rounded-xl border-2 border-indigo-400 p-8 shadow-2xl text-center">
                <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-[0.7rem] font-bold inline-block">MOST POPULAR</span>
                <h3 className="text-2xl font-bold text-slate-900">Full Recovery Combo</h3>
                <p>(Ice + Steam + Jacuzzi Bath)</p>
                <p className="text-4xl font-bold text-indigo-700 ">$120</p>
                <del className="text-slate-500">$140</del>
                <p className="text-green-600 font-semibold text-md mt-2">Save $20</p>
                <Button className="mt-3 cursor-pointer transition-all bg-indigo-500 text-white py-2 rounded-lg
border-indigo-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" onClick={() => setCurrentPage('Booking')}>
                  Book Full Combo
                </Button>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button size="lg" className="cursor-pointer transition-all bg-blue-500 text-white py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" onClick={() => setCurrentPage('Booking')}>
                Book Any Session
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Contact />
    </div>
  );
}