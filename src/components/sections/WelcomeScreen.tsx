'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export function WelcomeScreen() {
    const [showWelcome, setShowWelcome] = useState(true)
    const [progress, setProgress] = useState(0)
    const [currentMessage, setCurrentMessage] = useState("Initializing system...")
    const [mounted, setMounted] = useState(false)
    const [randomHex, setRandomHex] = useState("")

    const messages = [
        "Initializing system...",
        "Loading modules...",
        "Establishing connection...",
        "Starting 3D engine...",
        "Calibrating sensors...",
        "Loading portfolio...",
        "Ready for deployment!"
    ]

    useEffect(() => {
        setMounted(true)
        setRandomHex(Math.floor(Math.random() * 16777215).toString(16).toUpperCase())

        let messageIndex = 0
        const interval = setInterval(() => {
            setProgress(prev => {
                const newProgress = prev + 1.5
                if (newProgress >= 100) {
                    clearInterval(interval)
                    setTimeout(() => setShowWelcome(false), 800)
                    return 100
                }

                if (newProgress >= 20 && messageIndex < 1) {
                    messageIndex = 1
                    setCurrentMessage(messages[1])
                } else if (newProgress >= 40 && messageIndex < 2) {
                    messageIndex = 2
                    setCurrentMessage(messages[2])
                } else if (newProgress >= 60 && messageIndex < 3) {
                    messageIndex = 3
                    setCurrentMessage(messages[3])
                } else if (newProgress >= 75 && messageIndex < 4) {
                    messageIndex = 4
                    setCurrentMessage(messages[4])
                } else if (newProgress >= 90 && messageIndex < 5) {
                    messageIndex = 5
                    setCurrentMessage(messages[5])
                } else if (newProgress >= 98 && messageIndex < 6) {
                    messageIndex = 6
                    setCurrentMessage(messages[6])
                }

                return newProgress
            })
        }, 35)

        return () => clearInterval(interval)
    }, [])

    if (!mounted) return null

    return (
        <AnimatePresence>
            {showWelcome && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] bg-gradient-to-br from-[hsl(222,47%,6%)] via-[hsl(230,40%,8%)] to-[hsl(260,30%,8%)] flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Animated circuit background */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L30 15 L45 30 L60 30 M0 30 L15 30 L30 45 L30 60' stroke='%2306b6d4' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }} />

                    {/* Scanning line */}
                    <motion.div
                        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />

                    {/* HUD corners */}
                    <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-cyan-500/30" />
                    <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-cyan-500/30" />
                    <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-cyan-500/30" />
                    <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-cyan-500/30" />

                    {/* Main content */}
                    <div className="relative z-10 text-center px-4 max-w-md w-full">
                        {/* Robot Avatar */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
                            className="mb-8 flex justify-center"
                        >
                            <div className="relative w-24 h-24">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border-2 border-cyan-500/50 backdrop-blur-sm">
                                    <motion.div
                                        className="absolute top-1/3 left-1/4 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,1)]"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    />
                                    <motion.div
                                        className="absolute top-1/3 right-1/4 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,1)]"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                                    />

                                    <div className="absolute bottom-1/4 left-1/4 right-1/4 flex justify-center gap-1">
                                        <div className="w-1 h-1 bg-cyan-400" />
                                        <div className="w-1 h-1 bg-cyan-400" />
                                        <div className="w-1 h-1 bg-cyan-400" />
                                        <div className="w-1 h-1 bg-cyan-400" />
                                    </div>

                                    <div className="absolute -top-4 left-1/2 w-0.5 h-4 bg-cyan-400" />
                                    <motion.div
                                        className="absolute -top-6 left-1/2 w-1.5 h-1.5 bg-cyan-500 rounded-full"
                                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Brand Name */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mb-6"
                        >
                            <h1 className="text-4xl sm:text-6xl font-black font-mono tracking-[0.15em]">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                                    WASIM.DEV
                                </span>
                            </h1>
                            <div className="flex items-center justify-center gap-2 mt-2">
                                <div className="w-8 h-[1px] bg-cyan-500/30" />
                                <span className="text-[8px] font-mono text-cyan-500/40 tracking-[0.2em]">ROBOTIC INTERFACE</span>
                                <div className="w-8 h-[1px] bg-cyan-500/30" />
                            </div>
                        </motion.div>

                        {/* Terminal Box */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="bg-slate-950/60 border border-cyan-500/20 rounded-sm p-4 mb-6 backdrop-blur-sm"
                        >
                            <div className="flex items-center gap-2 pb-2 mb-3 border-b border-cyan-500/20">
                                <div className="flex gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-red-500/60" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                                    <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
                                </div>
                                <span className="text-[8px] font-mono text-cyan-500/40">robot@wasim:~</span>
                            </div>

                            <div className="space-y-2 text-left">
                                <p className="text-cyan-400/80 font-mono text-xs flex items-center gap-2">
                                    <span className="text-emerald-400">$</span>
                                    <span>./boot_system.sh</span>
                                </p>
                                <div className="space-y-1 pl-4">
                                    <p className="text-cyan-500/60 font-mono text-[10px] tracking-wider">
                                        {currentMessage}
                                        <motion.span
                                            className="inline-block w-1.5 h-3 bg-cyan-400 ml-1"
                                            animate={{ opacity: [1, 0] }}
                                            transition={{ duration: 0.8, repeat: Infinity }}
                                        />
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Progress Section */}
                        <div className="space-y-3">
                            <div className="relative">
                                <div className="h-1 bg-cyan-500/20 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${progress}%` }}
                                        transition={{ duration: 0.1 }}
                                    />
                                </div>

                                <div className="absolute top-0 left-0 right-0 flex justify-between px-1">
                                    {[0, 25, 50, 75, 100].map((marker) => (
                                        <div key={marker} className="w-0.5 h-2 bg-cyan-500/30" />
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-[9px] font-mono">
                                <span className="text-cyan-500/50">PROGRESS: {Math.floor(progress)}%</span>
                                <div className="flex gap-2">
                                    <span className="text-cyan-500/30">MEM: 0x{randomHex || "000000"}</span>
                                </div>
                            </div>

                            <div className="flex justify-center gap-2 mt-4">
                                {[0, 1, 2, 3].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="w-1.5 h-1.5 rounded-full bg-cyan-500"
                                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Robot Status LEDs */}
                        <div className="flex justify-center gap-4 mt-6 pt-4 border-t border-cyan-500/20">
                            <div className="flex items-center gap-1.5">
                                <motion.div
                                    className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                                <span className="text-[6px] font-mono text-cyan-500/40">PWR</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <motion.div
                                    className="w-1.5 h-1.5 bg-cyan-500 rounded-full"
                                    animate={{ opacity: [1, 0.3, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <span className="text-[6px] font-mono text-cyan-500/40">LINK</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <motion.div
                                    className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                />
                                <span className="text-[6px] font-mono text-cyan-500/40">ACT</span>
                            </div>
                        </div>
                    </div>

                    {/* Version info */}
                    <div className="absolute bottom-4 left-4 text-[7px] font-mono text-cyan-500/30">
                        ROBOT.SYS v2.0.0
                    </div>

                    <div className="absolute bottom-4 right-4 text-[7px] font-mono text-cyan-500/30">
                        UPTIME: 00:00:00
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}