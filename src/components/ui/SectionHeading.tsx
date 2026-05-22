'use client'

import { AnimatedSection } from './AnimatedSection'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const [hexCode, setHexCode] = useState("0x88AF32")

  useEffect(() => {
    // Generate a new fake memory address every 2 seconds for the cyber effect
    const interval = setInterval(() => {
      setHexCode(`0x${Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(6, '0')}`)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatedSection className="text-center mb-20 relative flex flex-col items-center w-full">
      {/* Top Telemetry Data */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 text-cyan-400/80 font-mono text-[9px] sm:text-[11px] tracking-[0.2em] uppercase w-full">
        <div className="flex items-center gap-1.5">
          <motion.span 
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            className="w-1.5 h-1.5 rounded bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,1)]" 
          />
          <motion.span 
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 0.6 }}
            className="w-1.5 h-1.5 rounded bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" 
          />
        </div>
        
        <div className="flex items-center gap-3">
          <span className="bg-cyan-950/40 px-2 py-0.5 rounded-sm border border-cyan-500/30 backdrop-blur-sm">
            [ MOD: {title.substring(0, 4).toUpperCase()} ]
          </span>
          <span className="hidden sm:inline bg-purple-950/30 text-purple-300/80 px-2 py-0.5 rounded-sm border border-purple-500/20">
            // MEM: {hexCode}
          </span>
        </div>
      </div>

      {/* Main Title Area */}
      <div className="relative group inline-flex flex-col items-center">
        
        {/* Cyber corner accents */}
        <div className="absolute -top-4 -left-6 w-6 h-6 border-t-2 border-l-2 border-cyan-500/40 group-hover:border-cyan-400 transition-colors duration-500" />
        <div className="absolute -top-4 -right-6 w-6 h-6 border-t-2 border-r-2 border-cyan-500/40 group-hover:border-cyan-400 transition-colors duration-500" />
        <div className="absolute -bottom-4 -left-6 w-6 h-6 border-b-2 border-l-2 border-cyan-500/40 group-hover:border-cyan-400 transition-colors duration-500" />
        <div className="absolute -bottom-4 -right-6 w-6 h-6 border-b-2 border-r-2 border-cyan-500/40 group-hover:border-cyan-400 transition-colors duration-500" />
        
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-[0.15em] font-mono uppercase relative z-10 mx-4 py-2 overflow-hidden">
          
          {/* Main glowing text */}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-100 to-cyan-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.6)] relative z-10">
            {title}
          </span>
          
          {/* Scanning light beam that sweeps across the text */}
          <motion.div 
            className="absolute top-0 -inset-x-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent z-20 skew-x-12"
            animate={{ left: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
          />
        </h2>

        {/* High-Tech Underline Track */}
        <div className="relative w-[120%] h-[3px] mt-2 flex items-center justify-center max-w-[600px]">
          {/* Track background */}
          <div className="absolute inset-0 bg-cyan-900/30 rounded-full" />
          
          {/* Animated scanning core */}
          <motion.div 
            className="absolute h-full w-1/4 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(6,182,212,1)]"
            animate={{ left: ["0%", "75%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Tech notches */}
          <div className="absolute h-2 w-[1px] bg-cyan-500/50 left-[25%]" />
          <div className="absolute h-2 w-[1px] bg-cyan-500/50 left-[50%]" />
          <div className="absolute h-2 w-[1px] bg-cyan-500/50 left-[75%]" />
          
          {/* End nodes */}
          <div className="absolute h-2 w-2 bg-cyan-200 rounded-sm -left-1 shadow-[0_0_8px_rgba(6,182,212,0.8)] rotate-45" />
          <div className="absolute h-2 w-2 bg-cyan-200 rounded-sm -right-1 shadow-[0_0_8px_rgba(6,182,212,0.8)] rotate-45" />
        </div>
      </div>

      {/* Subtitle / Status bar */}
      {subtitle && (
        <div className="mt-8 flex justify-center items-center gap-2 sm:gap-4 w-full max-w-3xl px-4">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-cyan-500/80" />
          
          <div className="relative group">
            {/* Subtitle container with glowing border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-sm blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <p className="relative flex items-center gap-2 text-[10px] sm:text-xs font-mono text-cyan-50/90 tracking-widest uppercase bg-slate-950 px-4 py-2 rounded-sm border border-cyan-500/20 shadow-xl">
              <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              {subtitle}
            </p>
          </div>
          
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-cyan-500/30 to-cyan-500/80" />
        </div>
      )}
    </AnimatedSection>
  )
}
