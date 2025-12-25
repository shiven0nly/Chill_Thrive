import React from "react";
import { Mail, SendHorizonal, Snowflake } from "lucide-react";
import { Button } from "./ui/button";
import { TextEffect } from "./ui/text-effect";
import { AnimatedGroup } from "./ui/animated-group";
import { HeroHeader } from "./header";
import ChillThriveBenefits from './Information';
import TestimonialsSection  from "./Testimonials";
import Contact from "./Footer";
import WhyChillThriveSection from './WhyChillThrive';

const TherapyAppComponent = () => {
  return (
    <div className="relative space-y-4 rounded-[1rem] bg-white p-5 shadow-inner">
      <div className="flex items-center gap-2 text-cyan-600">
        <Snowflake className="size-6" />
        <div className="text-lg font-semibold">Recovery</div>
      </div>

      <div className="space-y-4">
        <div className="text-center">
          <div className="text-5xl font-bold text-cyan-700">94%</div>
          <div className="text-sm text-slate-600">Recovery Score</div>
          <div className="mt-2 text-xs text-green-600 font-medium">
            +12% from last week
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Sessions this month</span>
            <span className="font-medium text-slate-900">18</span>
          </div>
          <div className="h-2 rounded-full bg-cyan-100 overflow-hidden">
            <div className="h-full w-3/4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Avg. session time</span>
            <span className="font-medium text-slate-900">3:45 min</span>
          </div>
          <div className="h-2 rounded-full bg-blue-100 overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full" />
          </div>
        </div>

        <div className="pt-4 text-center text-xs text-slate-500">
          You're in peak recovery zone
        </div>
      </div>
    </div>
  );
};

export default function HeroSection({ setCurrentPage }) {
  return (
    <>
      {/* Header now receives setCurrentPage for navigation */}
      <HeroHeader setCurrentPage={setCurrentPage} />

      {/* Subtle blue radial gradient background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 translate-x-1/3 translate-y-1/2 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl" />
      </div>

      <main className="relative overflow-hidden">
        <section>
          <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pt-48">
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="text-balance text-5xl font-bold tracking-tight md:text-6xl text-blue-950"
              >
                Chill Deeper. Thrive Faster.
              </TextEffect>

              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-slate-600"
              >
                Science-backed recovery for the modern athlete. Reset your
                nervous system and optimize performance with premium
                cryotherapy.
              </TextEffect>

              <AnimatedGroup className="mt-12">
                {/* Email Form - now navigates to Booking page on submit */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setCurrentPage("Booking");
                  }}
                  className="mx-auto max-w-sm"
                >
                  <div className="bg-white/80 backdrop-blur-md relative grid grid-cols-[1fr_auto] items-center rounded-xl border border-slate-200 pr-2 shadow-xl focus-within:ring-2 focus-within:ring-blue-500/30">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                    <input
                      placeholder="Your email address"
                      className="h-12 w-full bg-transparent pl-12 pr-4 text-sm focus:outline-none"
                      type="email"
                      required
                    />
                    <Button
                      type="submit"
                      size="sm"
                      className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                    >
                      <span className="hidden md:inline">Get Started</span>
                      <SendHorizonal
                        className="size-5 md:hidden"
                        strokeWidth={2}
                      />
                    </Button>
                  </div>
                </form>

                {/* Floating Therapy App Mockups */}
                <div className="relative mx-auto mt-32 max-w-2xl">
                  {/* Background subtle glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />

                  {/* Left background card */}
                  <div className="absolute left-1/2 top-0 w-80 -translate-x-20 -translate-y-8 rotate-[-8deg] rounded-3xl border border-slate-200/40 bg-white/70 p-3 shadow-2xl backdrop-blur-xl [mask-image:linear-gradient(to_bottom,black_60%,transparent)] sm:-translate-x-28">
                    <div className="h-96 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 opacity-50" />
                  </div>

                  {/* Main centered card */}
                  <div className="relative mx-auto w-80 rotate-[4deg] rounded-3xl border border-slate-200/60 bg-white/90 p-4 shadow-2xl backdrop-blur-2xl">
                    <div className="rounded-2xl bg-white p-1 shadow-lg">
                      <TherapyAppComponent />
                    </div>
                  </div>

                  {/* Subtle overlay grid */}
                  <div className="absolute inset-0 mix-blend-overlay [background-size:16px_16px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_50%,transparent)] [background-image:radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.2)_1px,transparent_1px)]" />
                </div>
              </AnimatedGroup>
            </div>
          </div>
        </section>
      </main>
        <ChillThriveBenefits />
        <WhyChillThriveSection />
        <TestimonialsSection />
        <Contact/>
    </>
  );
}
