'use client'

import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SplineScene } from "@/components/ui/splite"

const stats = [
  { label: 'Projects Built', value: '3+', icon: '🚀' },
  { label: 'Months Experience', value: '6+', icon: '💼' },
  { label: 'CGPA Score', value: '8.0', icon: '🎓' },
  { label: 'Technologies', value: '15+', icon: '⚡' },
]

function AnimatedCounter({ value, label, icon, index }: { value: string; label: string; icon: string; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-slate-950/60 border border-cyan-500/20 rounded-sm p-6 text-center backdrop-blur-sm group hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 hover:scale-105"
    >
      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />

      {/* Icon with pulse animation */}
      <motion.span
        className="text-3xl mb-2 block"
        animate={isInView ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
      >
        {icon}
      </motion.span>

      <div className="text-3xl md:text-4xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)] mb-1">
        {value}
      </div>

      <div className="text-[10px] font-mono text-cyan-500/60 tracking-wider uppercase">{label}</div>

      {/* Status dot */}
      <div className="absolute bottom-2 right-2 flex gap-1">
        <div className="w-1 h-1 bg-cyan-500/30 rounded-full" />
        <div className="w-1 h-1 bg-cyan-500/30 rounded-full" />
        <div className="w-1 h-1 bg-cyan-500/30 rounded-full" />
      </div>
    </motion.div>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
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

      {/* Cyber status badge */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20 hidden lg:block">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/40 border border-cyan-500/30 rounded-sm backdrop-blur-sm text-[8px] font-mono uppercase tracking-wider text-cyan-500/60">
          <motion.span
            className="w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_6px_rgba(52,211,153,0.8)]"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span>SYSTEM_STATUS: ACTIVE</span>
        </div>
      </div>

      <div className="relative z-10 section-container">
        <SectionHeading
          title="About Me"
          subtitle="A passionate developer turning ideas into digital experiences"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Bio & Stats Stacked */}
          <div className="flex flex-col gap-6 w-full">
            <AnimatedSection direction="left">
              <div className="relative">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/80 border border-cyan-500/20 border-b-0 rounded-t-sm">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                  </div>
                  <span className="text-[10px] font-mono text-cyan-500/50 tracking-wider">wasim@dev ~ bio.sys</span>
                  <div className="flex-1" />
                  <div className="flex gap-1">
                    <div className="w-3 h-3 border border-cyan-500/30 rounded-sm" />
                    <div className="w-3 h-3 border border-cyan-500/30 rounded-sm" />
                  </div>
                </div>

                {/* Terminal body */}
                <div className="border border-cyan-500/20 bg-slate-950/60 backdrop-blur-sm p-8 space-y-4 rounded-b-sm relative group hover:border-cyan-400/40 transition-all duration-300">
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />

                  {/* Command line 1 */}
                  <div>
                    <p className="text-cyan-100/80 text-sm md:text-base font-mono flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">$</span>
                      <span>cat ./summary.txt</span>
                      <motion.span
                        className="inline-block w-2 h-4 bg-cyan-400"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      />
                    </p>
                  </div>

                  {/* Output lines with typing animation */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="space-y-3 pl-5"
                  >
                    <p className="text-cyan-100/70 leading-relaxed text-sm md:text-base font-mono border-l-2 border-cyan-500/30 pl-3">
                      Motivated Full Stack Developer with hands-on experience building and deploying
                      web applications using <span className="text-cyan-400 font-bold">React.js</span>,
                      {' '}<span className="text-cyan-400 font-bold">Node.js</span>,
                      {' '}<span className="text-cyan-400 font-bold">Express.js</span>, and
                      {' '}<span className="text-cyan-400 font-bold">MongoDB</span>.
                    </p>

                    <p className="text-cyan-100/70 leading-relaxed text-sm md:text-base font-mono border-l-2 border-cyan-500/30 pl-3">
                      Skilled in developing REST APIs, implementing JWT-based authentication, and creating
                      responsive user interfaces with Tailwind CSS. Passionate about developing scalable
                      digital products and eager to contribute to collaborative engineering teams while
                      continuously learning modern technologies.
                    </p>

                    <p className="text-cyan-100/70 leading-relaxed text-sm md:text-base font-mono border-l-2 border-purple-500/30 pl-3">
                      Currently interning at <span className="text-purple-400 font-bold">Ayur.Ai Private Limited</span> as
                      a Full Stack Developer, building AI-driven healthcare solutions including smart kiosk applications
                      and doctor dashboards.
                    </p>
                  </motion.div>

                  {/* Exit code */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="pt-2"
                  >
                    <p className="text-xs font-mono text-cyan-500/50 flex items-center gap-2">
                      <span className="text-emerald-400">➜</span>
                      <span>Process completed successfully (exit code 0)</span>
                    </p>
                  </motion.div>

                  {/* Bottom scan line effect on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <AnimatedCounter key={stat.label} {...stat} index={index} />
              ))}
            </div>
          </div>

          {/* Right Column: 3D Spline Robot */}
          <AnimatedSection direction="right" className="w-full h-[50vh] min-h-[350px] lg:h-[60vh] lg:max-h-[500px] relative lg:scale-105 origin-center transition-all">
            {/* Cyber HUD Frame accents */}
            <div className="absolute inset-0 pointer-events-none z-20 hidden lg:block">
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-500/25" />
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-500/25" />
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-500/25" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-500/25" />
              <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[8px] font-mono text-cyan-500/40 tracking-[0.3em] uppercase bg-slate-950/40 px-2 py-0.5 rounded-sm border border-cyan-500/10">
                3D_ASSISTANT // SPLINE
              </div>
            </div>

            <SplineScene
              scene="https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode"
              className="w-full h-full relative z-10"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}