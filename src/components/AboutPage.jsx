import React from 'react'
import { HeroHeader } from '../components/header'

export default function AboutPage({ setCurrentPage }) {
    return (
        <div className="min-h-screen pt-32 px-6">
            {/* Passing the navigation prop to the header */}
            <HeroHeader setCurrentPage={setCurrentPage} />
            
            <div className="max-w-3xl mx-auto text-center">
                <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Our Mission</span>
                <h1 className="text-4xl font-bold mt-4 tracking-tight md:text-6xl">About Chill Thrive</h1>
                
                <div className="mt-10 space-y-6">
                    <p className="text-xl text-zinc-600 leading-relaxed">
                        We started Chill Thrive to help athletes optimize their recovery through cold and heat exposure tracking. 
                        In a world of constant stress, we provide the tools to reset your nervous system.
                    </p>
                    <p className="text-lg text-zinc-500 leading-relaxed">
                        Our facility combines ancient wisdom with modern technology, 
                        offering medical-grade cryotherapy and infrared heat to ensure 
                        you spend less time recovering and more time performing.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 border-t pt-12">
                    <div>
                        <div className="text-3xl font-bold text-blue-600">5k+</div>
                        <div className="text-sm text-zinc-500 uppercase font-bold">Sessions</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-blue-600">98%</div>
                        <div className="text-sm text-zinc-500 uppercase font-bold">Recovery Rate</div>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <div className="text-3xl font-bold text-blue-600">24/7</div>
                        <div className="text-sm text-zinc-500 uppercase font-bold">Support</div>
                    </div>
                </div>
            </div>
        </div>
    )
}