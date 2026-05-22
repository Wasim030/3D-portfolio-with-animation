'use client'

import { useState } from 'react'
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { motion } from "framer-motion"

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate sending email
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background matching hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222,47%,6%)] via-[hsl(230,40%,8%)] to-[hsl(260,30%,8%)]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Scan lines */}
      <motion.div
        className="absolute inset-0 opacity-[0.01] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(6,182,212,0.2) 2px, rgba(6,182,212,0.2) 4px)',
        }}
        animate={{ backgroundPosition: ["0px 0px", "100px 100px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* HUD corners */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-cyan-500/20 hidden lg:block" />
      <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-cyan-500/20 hidden lg:block" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-cyan-500/20 hidden lg:block" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-cyan-500/20 hidden lg:block" />

      {/* Horizontal scan line */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent pointer-events-none"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 section-container">
        <SectionHeading
          title="Contact Me"
          subtitle="Get in touch! Feel free to reach out for projects, collaborations, or job openings."
        />

        <div className="grid lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-4">
            <AnimatedSection direction="left" className="relative group">
              <div className="relative bg-slate-950/60 backdrop-blur-sm border border-cyan-500/20 rounded-sm overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/80 border-b border-cyan-500/20">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
                  </div>
                  <span className="text-[9px] font-mono text-cyan-500/50 tracking-wider">contact@email.terminal</span>
                </div>

                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />

                <div className="p-6 flex items-start gap-4">
                  <div className="text-3xl p-2 rounded-sm bg-cyan-950/40 border border-cyan-500/30">
                    <span>📧</span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-mono text-cyan-400 mb-1 tracking-wide">→ EMAIL</h4>
                    <a href="mailto:wasimmsd030@gmail.com" className="text-sm font-mono text-cyan-100/70 hover:text-cyan-300 transition-colors">
                      wasimmsd030@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.05} className="relative group">
              <div className="relative bg-slate-950/60 backdrop-blur-sm border border-cyan-500/20 rounded-sm overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/80 border-b border-cyan-500/20">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
                  </div>
                  <span className="text-[9px] font-mono text-cyan-500/50 tracking-wider">contact@phone.terminal</span>
                </div>

                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />

                <div className="p-6 flex items-start gap-4">
                  <div className="text-3xl p-2 rounded-sm bg-cyan-950/40 border border-cyan-500/30">
                    <span>📞</span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-mono text-cyan-400 mb-1 tracking-wide">→ PHONE</h4>
                    <a href="tel:+919597925803" className="text-sm font-mono text-cyan-100/70 hover:text-cyan-300 transition-colors">
                      +91 9597925803
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.1} className="relative group">
              <div className="relative bg-slate-950/60 backdrop-blur-sm border border-cyan-500/20 rounded-sm overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/80 border-b border-cyan-500/20">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
                  </div>
                  <span className="text-[9px] font-mono text-cyan-500/50 tracking-wider">contact@location.terminal</span>
                </div>

                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />

                <div className="p-6 flex items-start gap-4">
                  <div className="text-3xl p-2 rounded-sm bg-cyan-950/40 border border-cyan-500/30">
                    <span>📍</span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-mono text-cyan-400 mb-1 tracking-wide">→ LOCATION</h4>
                    <p className="text-sm font-mono text-cyan-100/70">Chennai, India</p>
                    <p className="text-xs font-mono text-cyan-500/50 mt-1">UTC +5:30</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <AnimatedSection direction="right" className="relative group">
              <div className="relative bg-slate-950/60 backdrop-blur-sm border border-cyan-500/20 rounded-sm overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/80 border-b border-cyan-500/20">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
                  </div>
                  <span className="text-[9px] font-mono text-cyan-500/50 tracking-wider">contact_form.sh</span>
                  <div className="flex-1" />
                  <div className="flex gap-1">
                    <div className="w-3 h-3 border border-cyan-500/30 rounded-sm" />
                    <div className="w-3 h-3 border border-cyan-500/30 rounded-sm" />
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />

                <div className="p-6 md:p-8">
                  {/* Command line */}
                  <p className="text-xs font-mono text-cyan-500/50 mb-4 flex items-center gap-2">
                    <span className="text-emerald-400">$</span>
                    <span>./send_message.sh --to=wasim</span>
                    <motion.span
                      className="inline-block w-2 h-3 bg-cyan-400"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono font-semibold mb-2 text-cyan-400/80 tracking-wide">
                        → NAME
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm bg-slate-950/80 border border-cyan-500/30 text-sm font-mono text-cyan-100/80 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono font-semibold mb-2 text-cyan-400/80 tracking-wide">
                        → EMAIL
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm bg-slate-950/80 border border-cyan-500/30 text-sm font-mono text-cyan-100/80 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all"
                        placeholder="johndoe@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-mono font-semibold mb-2 text-cyan-400/80 tracking-wide">
                        → MESSAGE
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm bg-slate-950/80 border border-cyan-500/30 text-sm font-mono text-cyan-100/80 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all resize-none"
                        placeholder="Hi Wasim, I'd like to talk about..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === 'loading'}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative w-full py-3 rounded-sm font-mono text-sm font-bold uppercase tracking-[0.15em] bg-gradient-to-r from-cyan-600/80 to-blue-600/80 border border-cyan-400/50 text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] disabled:opacity-50 transition-all duration-300 overflow-hidden group"
                    >
                      {/* Hover scan effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />

                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {status === 'loading' ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            SENDING...
                          </>
                        ) : status === 'success' ? (
                          <>
                            ✓ MESSAGE_SENT
                          </>
                        ) : (
                          <>
                            [ SEND_MESSAGE ]
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </>
                        )}
                      </span>
                    </motion.button>

                    {/* Form status message */}
                    {status === 'success' && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-xs font-mono text-emerald-400 mt-2"
                      >
                        [ SUCCESS ] Message delivered successfully!
                      </motion.p>
                    )}
                  </form>

                  {/* Bottom status bar */}
                  <div className="mt-6 pt-4 border-t border-cyan-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <motion.span
                        className="w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_6px_rgba(52,211,153,0.8)]"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <span className="text-[8px] font-mono text-cyan-500/50 tracking-wider">STATUS: READY</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-cyan-500/30 rounded-full" />
                      <div className="w-1 h-1 bg-cyan-500/30 rounded-full" />
                      <div className="w-1 h-1 bg-cyan-500/30 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}