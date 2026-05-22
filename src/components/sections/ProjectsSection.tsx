'use client'

import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { motion } from "framer-motion"

const projects = [
  {
    title: "AiWell Kiosk — Smart Healthcare Kiosk Platform",
    category: "Android & Full Stack",
    tags: ["Kotlin", "Jetpack Compose", "Node.js", "MongoDB", "REST APIs", "BLE"],
    highlights: [
      "Developed a smart healthcare kiosk app using Kotlin & Jetpack Compose for real-time patient wellness tracking.",
      "Integrated Bioelectrical Impedance Analysis (BCA) machines, smart rings, and smartwatches via Bluetooth Low Energy (BLE).",
      "Connected kiosk frontend to backend services for secure real-time data sync and healthcare record management.",
      "Implemented MVVM architecture and modular state management to ensure a scalable Android code structure."
    ]
  },
  {
    title: "MediConnect — AI-Powered Doctor Appointment Portal",
    category: "Full Stack Web",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe", "Tailwind CSS"],
    highlights: [
      "Created a full-stack doctor booking portal with secure, role-based dashboards for patients, doctors, and admins.",
      "Integrated Stripe Payment Gateway with secure server-side validation and webhook handlers.",
      "Implemented JWT and bcrypt authentication featuring protected routing and session persistence.",
      "Optimized database retrieval using MongoDB indexing and Mongoose lean queries to reduce API response latency."
    ]
  },
  {
    title: "ShopFlow — Full Stack E-Commerce Platform",
    category: "Full Stack Web",
    tags: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Cloudinary", "JWT"],
    highlights: [
      "Built a complete end-to-end e-commerce system featuring active shopping carts, order tracking, and inventory admin dashboard.",
      "Designed and coded a comprehensive RESTful API layer with over 18 robust endpoints.",
      "Utilized Cloudinary API for optimized multi-image product media uploads and asset management.",
      "Designed secure custom Role-Based Access Control (RBAC) middlewares to restrict dashboard endpoints."
    ]
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 overflow-hidden">
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

      <div className="relative z-10 section-container">
        <SectionHeading
          title="Featured Projects"
          subtitle="A showcase of full-stack web applications and connected Android solutions"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <AnimatedSection
              key={project.title}
              delay={idx * 0.1}
              className="relative group"
            >
              <div className="relative bg-slate-950/60 backdrop-blur-sm border border-cyan-500/20 rounded-sm overflow-hidden hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">

                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/80 border-b border-cyan-500/20">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
                  </div>
                  <span className="text-[9px] font-mono text-cyan-500/50 tracking-wider">project_{idx + 1}.dev</span>
                </div>

                {/* Corner Brackets */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-cyan-500/30 group-hover:border-cyan-400/60 transition-colors z-10" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-cyan-500/30 group-hover:border-cyan-400/60 transition-colors z-10" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-cyan-500/30 group-hover:border-cyan-400/60 transition-colors z-10" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-cyan-500/30 group-hover:border-cyan-400/60 transition-colors z-10" />

                <div className="p-5 flex-1">
                  <div className="flex justify-between items-center mb-4 pb-2 border-b border-cyan-500/10">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded-sm">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <span className="text-[8px] font-mono text-cyan-500/60 tracking-wider">
                        PRJ-00{idx + 1}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-400 tracking-wide mb-4 uppercase">
                    {project.title}
                  </h3>

                  <ul className="space-y-3 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-xs font-mono text-cyan-100/70 flex items-start gap-2.5 leading-relaxed">
                        <span className="text-emerald-400 shrink-0 select-none">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 pt-0">
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-4" />
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[9px] px-2 py-0.5 bg-slate-900 border border-cyan-500/15 text-cyan-300/70 uppercase tracking-wider rounded-sm hover:border-cyan-400/30 hover:text-cyan-300 transition-all duration-200">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover scan line effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none bg-gradient-to-b from-cyan-500/0 via-cyan-500/5 to-cyan-500/0"
                  initial={{ y: "-100%" }}
                  whileHover={{ y: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}