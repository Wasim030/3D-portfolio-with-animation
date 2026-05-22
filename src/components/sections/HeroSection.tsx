'use client'

import { useState } from "react"
import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { motion, AnimatePresence } from "framer-motion"

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/wasim030',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/wasim-akram',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:wasimmsd030@gmail.com',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export function HeroSection() {
  const [isBarHovered, setIsBarHovered] = useState(false)

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(222,47%,6%)] via-[hsl(230,40%,8%)] to-[hsl(260,30%,8%)]" />

      {/* Animated grid pattern with perspective */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Diagonal scan lines */}
      <motion.div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(6,182,212,0.3) 2px, rgba(6,182,212,0.3) 4px)',
        }}
        animate={{ backgroundPosition: ["0px 0px", "100px 100px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating HUD corners */}
      <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-cyan-500/20 hidden lg:block" />
      <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-cyan-500/20 hidden lg:block" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-cyan-500/20 hidden lg:block" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-cyan-500/20 hidden lg:block" />

      {/* Horizontal HUD scan line */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent pointer-events-none z-30"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      {/* ── Left telemetry bar — hover zone is ONLY the narrow visible strip ── */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 z-20">

        <div
          className="flex flex-col items-center gap-3 px-[14px] py-5"
          onMouseEnter={() => setIsBarHovered(true)}
          onMouseLeave={() => setIsBarHovered(false)}
        >
          {/* Top line — grows on hover */}
          <motion.div
            className="bg-gradient-to-b from-transparent to-cyan-500/40 rounded-full"
            animate={{
              height: isBarHovered ? 120 : 80,
              width: isBarHovered ? 2 : 1,
              opacity: isBarHovered ? 1 : 0.6,
            }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          />

          {/* Center node */}
          <div className="relative flex items-center justify-center">
            {/* Outer rotating dashed ring */}
            <motion.div
              className="absolute rounded-full border border-dashed border-cyan-400/50"
              animate={{
                width: isBarHovered ? 44 : 0,
                height: isBarHovered ? 44 : 0,
                opacity: isBarHovered ? 1 : 0,
                rotate: 360,
              }}
              transition={{
                width: { type: 'spring', stiffness: 260, damping: 22 },
                height: { type: 'spring', stiffness: 260, damping: 22 },
                opacity: { duration: 0.2 },
                rotate: { duration: 3.5, repeat: Infinity, ease: 'linear' },
              }}
            />
            {/* Inner ring */}
            <motion.div
              className="absolute rounded-full border border-cyan-400/70"
              animate={{
                width: isBarHovered ? 26 : 0,
                height: isBarHovered ? 26 : 0,
                opacity: isBarHovered ? 1 : 0,
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            />
            {/* Pulsing dot — always visible */}
            <motion.div
              className="w-2 h-2 rounded-full relative z-10"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [1, 0.5, 1],
                backgroundColor: isBarHovered ? '#67e8f9' : '#22d3ee',
                boxShadow: isBarHovered
                  ? '0 0 12px 3px rgba(6,182,212,0.8)'
                  : '0 0 8px rgba(6,182,212,0.6)',
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          {/* Vertical label */}
          <motion.div
            className="text-[8px] font-mono tracking-widest [writing-mode:vertical-lr] rotate-180"
            animate={{ color: isBarHovered ? '#67e8f9' : 'rgba(6,182,212,0.45)' }}
            transition={{ duration: 0.25 }}
          >
            WASIM.DEV // v2.0
          </motion.div>

          {/* Bottom line */}
          <motion.div
            className="bg-gradient-to-t from-transparent to-cyan-500/40 rounded-full"
            animate={{
              height: isBarHovered ? 120 : 80,
              width: isBarHovered ? 2 : 1,
              opacity: isBarHovered ? 1 : 0.6,
            }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          />
        </div>

        {/* Slide-out — pointer-events-none so it never extends the hover zone */}
        <AnimatePresence>
          {isBarHovered && (
            <motion.div
              className="absolute left-full top-1/2 -translate-y-1/2 ml-5 flex flex-col gap-2 pointer-events-none"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="flex items-center gap-2 text-[10px] font-mono text-cyan-200 bg-[rgba(6,20,35,0.92)] px-3 py-1.5 border border-cyan-500/35 rounded-sm whitespace-nowrap backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.9)] animate-pulse" />
                SYS.STATUS: <span className="text-emerald-300 font-semibold">OPTIMAL</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 text-[10px] font-mono text-cyan-200 bg-[rgba(6,20,35,0.92)] px-3 py-1.5 border border-cyan-500/35 rounded-sm whitespace-nowrap backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.13 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.9)] animate-pulse" />
                NET.UPLINK: <span className="text-cyan-300 font-semibold">CONNECTED</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative z-10 w-full section-container">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-4">

          {/* Left Content */}
          <div className="flex-[0.85] w-full text-center lg:text-left space-y-6 relative">

            {/* Background tech accent line */}
            <div className="hidden lg:block absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />

            {/* Status badge */}
            <AnimatedSection delay={0.1}>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-cyan-950/50 border border-cyan-500/30 rounded-sm backdrop-blur-sm text-[10px] sm:text-xs font-mono uppercase tracking-widest text-cyan-50/80 shadow-[0_0_20px_rgba(6,182,212,0.1)] mx-auto lg:mx-0">
                <motion.span
                  className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-emerald-300 font-bold">ONLINE</span>
                <span className="text-cyan-500/40">|</span>
                <span className="text-cyan-300/70">AVAILABLE FOR HIRE</span>
              </div>
            </AnimatedSection>

            {/* Name with glitch effect */}
            <AnimatedSection delay={0.2} className="relative overflow-visible">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight font-mono tracking-wider uppercase relative overflow-visible">
                <motion.span
                  className="block text-white/90 mb-1"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Hi, I&apos;m
                </motion.span>
                <span className="relative inline-block mt-1 overflow-visible">
                  {/* Background glow behind name */}
                  <div className="absolute -inset-4 bg-cyan-500/5 blur-2xl rounded-full" />

                  <motion.span
                    className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.5)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    {/* Change this text to whatever you want */}
                    Wasim Akram
                  </motion.span>

                  {/* Animated underline */}
                  <motion.div
                    className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_15px_rgba(6,182,212,0.9)] z-20"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.2, ease: "circOut", delay: 0.8 }}
                  />

                  {/* Tech crosshairs */}
                  <div className="absolute -top-3 -left-5 text-cyan-500/40 text-xs font-mono">┌</div>
                  <div className="absolute -top-3 -right-5 text-cyan-500/40 text-xs font-mono">┐</div>
                  <div className="absolute -bottom-5 -left-5 text-cyan-500/40 text-xs font-mono">└</div>
                  <div className="absolute -bottom-5 -right-5 text-cyan-500/40 text-xs font-mono">┘</div>
                </span>
              </h1>
            </AnimatedSection>

            {/* Terminal-style description */}
            <AnimatedSection delay={0.3}>
              <div className="relative max-w-lg mx-auto lg:mx-0">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/80 border border-cyan-500/20 border-b-0 rounded-t-sm">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
                  </div>
                  <span className="text-[9px] font-mono text-cyan-500/50 tracking-wider">wasim@dev ~ profile.sys</span>
                </div>
                {/* Terminal body */}
                <div className="space-y-2 text-xs sm:text-sm font-mono text-cyan-100/70 border border-cyan-500/20 bg-slate-950/60 backdrop-blur-sm p-4 rounded-b-sm text-left">
                  <p className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">$</span>
                    <span>cat ./role.txt</span>
                  </p>
                  <p className="text-cyan-300/80 pl-5">→ Junior Full Stack Developer & Software Engineer</p>
                  <p className="flex items-start gap-2 mt-1">
                    <span className="text-emerald-400 font-bold shrink-0">$</span>
                    <span>cat ./focus.txt</span>
                  </p>
                  <p className="text-cyan-300/80 pl-5">→ Scalable web apps with modern technologies</p>
                  <motion.span
                    className="inline-block w-2 h-4 bg-cyan-400 ml-5"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Location */}
            <AnimatedSection delay={0.4}>
              <div className="flex items-center gap-3 justify-center lg:justify-start text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-cyan-400/70">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>CHENNAI, INDIA</span>
                <span className="text-cyan-500/30">|</span>
                <span className="text-cyan-500/50">UTC +5:30</span>
              </div>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection delay={0.5}>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                <a
                  href="#projects"
                  className="group relative inline-flex items-center gap-3 px-7 py-3 bg-cyan-950/60 border border-cyan-400 text-cyan-50 font-mono text-[11px] uppercase tracking-[0.15em] overflow-hidden transition-all hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] rounded-sm"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    VIEW_PROJECTS
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"
                    initial={{ y: "100%" }}
                    whileHover={{ y: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Corner accents */}
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-300/60" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-300/60" />
                </a>
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-2 px-7 py-3 border border-white/20 bg-white/5 text-white/80 font-mono text-[11px] uppercase tracking-[0.15em] hover:bg-white/10 hover:border-white/40 transition-all rounded-sm backdrop-blur-sm"
                >
                  CONTACT_ME
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-white/40 transition-colors" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-white/40 transition-colors" />
                </a>
              </div>
            </AnimatedSection>

            {/* Social Links */}
            <AnimatedSection delay={0.6}>
              <div className="flex items-center gap-3 justify-center lg:justify-start pt-6">
                <span className="text-[10px] font-mono text-cyan-500/50 uppercase tracking-[0.2em] mr-2">CONNECT //</span>
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative p-2.5 bg-cyan-950/40 border border-cyan-500/20 text-cyan-500/60 hover:text-cyan-300 hover:border-cyan-400 hover:bg-cyan-900/40 hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-all group rounded-sm backdrop-blur-sm"
                    aria-label={link.name}
                  >
                    <div className="absolute -top-[1px] -left-[1px] w-1 h-1 border-t border-l border-cyan-500/50 group-hover:border-cyan-300 transition-colors" />
                    <div className="absolute -bottom-[1px] -right-[1px] w-1 h-1 border-b border-r border-cyan-500/50 group-hover:border-cyan-300 transition-colors" />
                    {link.icon}
                  </a>
                ))}
              </div>
            </AnimatedSection>

          </div>

          {/* Right: 3D Robot */}
          <div className="flex-[1.15] w-full h-[50vh] min-h-[350px] lg:h-[70vh] lg:max-h-[550px] relative lg:scale-110 origin-center transition-transform duration-500">
            {/* Robot HUD frame */}
            <div className="absolute inset-0 pointer-events-none z-20 hidden lg:block">
              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-500/25" />
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-cyan-500/25" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-cyan-500/25" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-500/25" />
              {/* Target label */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[8px] font-mono text-cyan-500/40 tracking-[0.3em] uppercase bg-slate-950/40 px-2 py-0.5 rounded-sm border border-cyan-500/10">
                3D_RENDER // SPLINE
              </div>
            </div>

            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full relative z-10"
            />
          </div>
        </div>
      </div>

      {/* Tech Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-cyan-500/40 hover:text-cyan-400 transition-colors group">
          <span className="text-[9px] font-mono tracking-[0.3em] uppercase bg-slate-950/60 px-3 py-1 rounded-sm border border-cyan-500/15 group-hover:border-cyan-400/40 backdrop-blur-sm transition-all">
            SCROLL ↓
          </span>
          <div className="w-[1px] h-6 bg-gradient-to-b from-cyan-500/40 to-transparent" />
        </a>
      </motion.div>
    </section>
  )
}
