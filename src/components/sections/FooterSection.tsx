'use client'

import { motion } from "framer-motion"

export function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden">
      {/* Background matching hero */}
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222,47%,6%)] via-[hsl(230,40%,8%)] to-transparent" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      {/* Top decorative cyber line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />

      {/* Animated scan line on top border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-500/30 blur-sm"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* Bottom HUD corner accents */}
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-500/20 hidden lg:block" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-500/20 hidden lg:block" />

      {/* Floating tech particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[10%] w-0.5 h-0.5 bg-cyan-500/30 rounded-full" />
        <div className="absolute top-1/2 right-[15%] w-0.5 h-0.5 bg-cyan-500/30 rounded-full" />
        <div className="absolute bottom-1/3 left-[20%] w-0.5 h-0.5 bg-cyan-500/30 rounded-full" />
      </div>

      <div className="relative z-10 section-container py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left - Copyright with terminal style */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="group relative"
          >
            {/* Terminal prompt style */}
            <div className="text-[10px] sm:text-xs font-mono text-cyan-500/60 tracking-wider uppercase flex items-center gap-2">
              <span className="text-emerald-400 text-xs">$</span>
              <span>© {currentYear} </span>
              <span className="text-cyan-400/80 font-bold hover:text-cyan-300 transition-colors">
                Wasim Akram R
              </span>
              <span className="hidden sm:inline">// ALL_RIGHTS_RESERVED</span>
              <span className="sm:hidden">// ALL_RIGHTS</span>
            </div>

            {/* Hover underline effect */}
            <motion.div
              className="absolute -bottom-1 left-0 h-[1px] bg-gradient-to-r from-cyan-400/80 to-transparent"
              initial={{ width: "0%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Center - Status indicator (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-2">
            <div className="w-[1px] h-4 bg-cyan-500/30" />
            <div className="flex items-center gap-2">
              <motion.span
                className="w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_6px_rgba(52,211,153,0.8)]"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-[8px] font-mono text-cyan-500/40 tracking-wider">SYSTEM: ONLINE</span>
            </div>
            <div className="w-[1px] h-4 bg-cyan-500/30" />
          </div>

          {/* Right - Built with tech tags */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-end gap-1"
          >
            <div className="text-[10px] sm:text-xs font-mono text-cyan-500/40 tracking-wider uppercase flex flex-wrap items-center justify-center gap-1.5">
              <span>BUILT_WITH:</span>
              <div className="flex gap-1.5">
                <span className="text-cyan-500/60 hover:text-cyan-400 transition-colors cursor-default relative group/tech">
                  Next.js
                  <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[6px] text-cyan-500/30 opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap">
                    v14
                  </span>
                </span>
                <span className="text-cyan-500/30">+</span>
                <span className="text-cyan-500/60 hover:text-cyan-400 transition-colors cursor-default relative group/tech">
                  Tailwind
                  <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[6px] text-cyan-500/30 opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap">
                    v3
                  </span>
                </span>
                <span className="text-cyan-500/30">+</span>
                <span className="text-cyan-500/60 hover:text-cyan-400 transition-colors cursor-default relative group/tech">
                  Spline
                  <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[6px] text-cyan-500/30 opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap">
                    3D
                  </span>
                </span>
              </div>
            </div>

            {/* Version indicator */}
            <div className="text-[7px] font-mono text-cyan-500/30 tracking-wider">
              v2.0.0 // last_commit: 2026
            </div>
          </motion.div>
        </div>

        {/* Bottom cyber accent bar */}
        <div className="mt-6 pt-4 border-t border-cyan-500/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            {/* Left - Terminal line */}
            <div className="text-[8px] font-mono text-cyan-500/30 tracking-wider flex items-center gap-2">
              <span className="text-cyan-500/50">[</span>
              <span>SECURE_CONNECTION</span>
              <span className="text-cyan-500/50">]</span>
              <span>ACTIVE</span>
            </div>

            {/* Center - Quick links */}
            <div className="flex items-center gap-3">
              <a href="#home" className="text-[8px] font-mono text-cyan-500/40 hover:text-cyan-400 transition-colors uppercase tracking-wider">
                Top
              </a>
              <span className="text-cyan-500/20">|</span>
              <a href="#about" className="text-[8px] font-mono text-cyan-500/40 hover:text-cyan-400 transition-colors uppercase tracking-wider">
                About
              </a>
              <span className="text-cyan-500/20">|</span>
              <a href="#projects" className="text-[8px] font-mono text-cyan-500/40 hover:text-cyan-400 transition-colors uppercase tracking-wider">
                Projects
              </a>
              <span className="text-cyan-500/20">|</span>
              <a href="#contact" className="text-[8px] font-mono text-cyan-500/40 hover:text-cyan-400 transition-colors uppercase tracking-wider">
                Contact
              </a>
            </div>

            {/* Right - Encrypted badge */}
            <div className="flex items-center gap-1">
              <svg className="w-3 h-3 text-cyan-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-[8px] font-mono text-cyan-500/30 tracking-wider">SSL_ENCRYPTED</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}