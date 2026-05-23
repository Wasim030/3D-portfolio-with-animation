'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')
  const [isDark, setIsDark] = useState(false)


  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'light') {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    } else if (savedTheme === 'dark') {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDark(systemDark)
      if (systemDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      setIsDark(true)
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Active section highlight logic
      const scrollPosition = window.scrollY + 100
      for (const item of navItems) {
        const section = document.querySelector(item.href)
        if (section) {
          const top = (section as HTMLElement).offsetTop
          const height = (section as HTMLElement).offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
        ? 'bg-slate-950/90 dark:bg-slate-950/90 bg-white/90 backdrop-blur-md border-b border-cyan-500/20 dark:border-cyan-500/20 border-gray-200 shadow-[0_0_20px_rgba(6,182,212,0.1)] dark:shadow-[0_0_20px_rgba(6,182,212,0.1)] py-3'
        : 'bg-transparent py-5'
        }`}
    >
      {/* Animated scanning line at top of header */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* HUD corner accents on header when scrolled */}
      {scrolled && (
        <>
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/20 dark:border-cyan-500/20 border-gray-300" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/20 dark:border-cyan-500/20 border-gray-300" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo with cyber styling */}
        <Link
          href="#home"
          className="group relative text-sm font-black tracking-[0.25em] font-mono transition-all"
        >
          <div className="absolute -inset-2 bg-cyan-500/5 dark:bg-cyan-500/5 bg-cyan-100 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 hover:drop-shadow-[0_0_12px_rgba(6,182,212,0.8)] transition-all dark:from-cyan-400 dark:via-cyan-300 dark:to-blue-500 from-cyan-600 via-cyan-500 to-blue-600">
            WASIM.DEV
          </span>
          {/* Animated dot under logo */}
          <motion.span
            className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-cyan-400 to-transparent"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item, idx) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`relative text-[10px] font-mono uppercase tracking-[0.15em] transition-all duration-300 hover:text-cyan-300 dark:hover:text-cyan-300 hover:text-cyan-600 flex items-center gap-1.5 px-1 py-2 ${activeSection === item.href
                ? 'text-cyan-400 dark:text-cyan-400 text-cyan-600 font-bold'
                : 'text-cyan-500/50 dark:text-cyan-500/50 text-gray-500'
                }`}
            >
              {activeSection === item.href && (
                <>
                  <motion.span
                    layoutId="activeDot"
                    className="w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,1)]"
                  />
                  {/* Active section underline */}
                  <motion.span
                    layoutId="activeUnderline"
                    className="absolute -bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-cyan-400 to-transparent"
                  />
                </>
              )}
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35 }}
            className="group relative p-2 border border-cyan-500/30 dark:border-cyan-500/30 border-gray-300 bg-cyan-950/40 dark:bg-cyan-950/40 bg-gray-100 hover:bg-cyan-900/40 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all rounded-sm"
            aria-label="Toggle theme"
          >
            {/* Corner accents */}
            <div className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 border-t border-l border-cyan-500/50 group-hover:border-cyan-300 transition-colors" />
            <div className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 border-b border-r border-cyan-500/50 group-hover:border-cyan-300 transition-colors" />

            {isDark ? (
              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </motion.button>

          {/* Resume Button - Desktop (Icon Only) */}
          <motion.a
            href="/resume/Wasim_FullStack_Developer_Resume.pdf"
            download="Wasim_Akram_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.38 }}
            className="group relative p-2 border border-cyan-500/30 dark:border-cyan-500/30 border-gray-300 bg-cyan-950/40 dark:bg-cyan-950/40 bg-gray-100 hover:bg-cyan-900/40 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all rounded-sm"
            aria-label="Download Resume"
          >
            {/* Corner accents */}
            <div className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 border-t border-l border-cyan-500/50 group-hover:border-cyan-300 transition-colors" />
            <div className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 border-b border-r border-cyan-500/50 group-hover:border-cyan-300 transition-colors" />
            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2h-6a2 2 0 00-2 2v10" />
            </svg>
          </motion.a>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 border border-cyan-500/30 dark:border-cyan-500/30 border-gray-300 bg-cyan-950/40 dark:bg-cyan-950/40 bg-gray-100 hover:bg-cyan-900/40 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] text-cyan-400 dark:text-cyan-400 text-cyan-600 font-mono text-[10px] uppercase tracking-[0.15em] transition-all rounded-sm overflow-hidden"
            >
              {/* Hover scan effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_6px_rgba(52,211,153,0.8)] animate-pulse" />
                CONNECT //
              </span>
              {/* Corner accents */}
              <div className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 border-t border-l border-cyan-500/50 group-hover:border-cyan-300 transition-colors" />
              <div className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 border-b border-r border-cyan-500/50 group-hover:border-cyan-300 transition-colors" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-cyan-500/70 dark:text-cyan-500/70 text-gray-600 hover:text-cyan-400 focus:outline-none cursor-pointer transition-colors relative"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 bg-cyan-500/10 dark:bg-cyan-500/10 bg-gray-200 rounded-sm opacity-0 hover:opacity-100 transition-opacity" />
            <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-slate-950/95 dark:bg-slate-950/95 bg-white/95 border-b border-cyan-500/30 dark:border-cyan-500/30 border-gray-200 py-6 px-6 shadow-2xl flex flex-col gap-4 backdrop-blur-md"
          >
            {/* Decorative scanline */}
            <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

            {/* Cyber status indicator */}
            <div className="flex items-center justify-between mb-2 px-2">
              <div className="flex items-center gap-2">
                <motion.span
                  className="w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_6px_rgba(52,211,153,0.8)]"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-[8px] font-mono text-cyan-500/50 dark:text-cyan-500/50 text-gray-500 tracking-wider">MENU_ACTIVE</span>
              </div>
              <div className="text-[8px] font-mono text-cyan-500/30 dark:text-cyan-500/30 text-gray-400">{new Date().toLocaleTimeString()}</div>
            </div>

            {navItems.map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`text-xs font-mono uppercase tracking-[0.2em] py-3 border-b border-cyan-500/10 dark:border-cyan-500/10 border-gray-100 transition-all flex items-center gap-3 ${activeSection === item.href
                  ? 'text-cyan-400 dark:text-cyan-400 text-cyan-600 pl-3 border-l-2 border-cyan-400 font-bold'
                  : 'text-cyan-500/40 dark:text-cyan-500/40 text-gray-500 hover:text-cyan-300 hover:pl-2'
                  }`}
              >
                {activeSection === item.href && (
                  <motion.span
                    layoutId="mobileActiveDot"
                    className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,1)]"
                  />
                )}
                <span className="text-cyan-500/30 dark:text-cyan-500/30 text-gray-400 text-[10px]">0{idx + 1}</span>
                {item.label}
              </motion.a>
            ))}

            {/* Resume Button in Mobile Drawer - Full Width with Text */}
            <motion.a
              href="/resume/Wasim_FullStack_Developer_Resume.pdf"
              download="Wasim_Akram_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38 }}
              className="group relative w-full text-center py-3 border border-cyan-500/30 dark:border-cyan-500/30 border-gray-300 bg-cyan-950/40 dark:bg-cyan-950/40 bg-gray-100 hover:bg-cyan-900/40 hover:border-cyan-400 transition-all rounded-sm overflow-hidden flex items-center justify-center gap-3"
            >
              <div className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 border-t border-l border-cyan-500/50 group-hover:border-cyan-300 transition-colors" />
              <div className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 border-b border-r border-cyan-500/50 group-hover:border-cyan-300 transition-colors" />
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2h-6a2 2 0 00-2 2v10" />
              </svg>
              <span className="text-cyan-400 font-mono text-[11px] uppercase tracking-[0.2em] font-bold">DOWNLOAD RESUME</span>
              <svg className="w-3 h-3 text-cyan-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </motion.a>

            {/* Theme toggle in mobile drawer */}
            <motion.button
              onClick={() => {
                toggleTheme()
                setIsOpen(false)
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="group relative w-full text-center py-3 border border-cyan-500/30 dark:border-cyan-500/30 border-gray-300 bg-cyan-950/40 dark:bg-cyan-950/40 bg-gray-100 hover:bg-cyan-900/40 hover:border-cyan-400 transition-all rounded-sm overflow-hidden flex items-center justify-center gap-2"
            >
              <div className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 border-t border-l border-cyan-500/50 group-hover:border-cyan-300 transition-colors" />
              <div className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 border-b border-r border-cyan-500/50 group-hover:border-cyan-300 transition-colors" />
              {isDark ? (
                <>
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.15em]">LIGHT MODE</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  <span className="text-amber-500 font-mono text-[10px] uppercase tracking-[0.15em]">DARK MODE</span>
                </>
              )}
            </motion.button>

            <motion.a
              href="#contact"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="group relative w-full text-center py-3 mt-2 border border-cyan-500/30 dark:border-cyan-500/30 border-gray-300 bg-cyan-950/40 dark:bg-cyan-950/40 bg-gray-100 hover:bg-cyan-900/40 hover:border-cyan-400 text-cyan-400 dark:text-cyan-400 text-cyan-600 font-mono text-[10px] uppercase tracking-[0.15em] transition-all rounded-sm overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="w-1 h-1 bg-cyan-400 rounded-full" />
                CONNECT //
              </span>
              <div className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 border-t border-l border-cyan-500/50 group-hover:border-cyan-300 transition-colors" />
              <div className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 border-b border-r border-cyan-500/50 group-hover:border-cyan-300 transition-colors" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}