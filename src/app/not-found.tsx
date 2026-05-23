'use client'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[hsl(222,47%,6%)] via-[hsl(230,40%,8%)] to-[hsl(260,30%,8%)]">
            <div className="text-center px-4">
                <h1 className="text-6xl font-bold text-cyan-400 mb-4 font-mono">404</h1>
                <p className="text-cyan-100/70 font-mono mb-6">PAGE_NOT_FOUND</p>
                <a
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-500/30 bg-cyan-950/40 hover:bg-cyan-900/40 hover:border-cyan-400 transition-all rounded-sm font-mono text-sm"
                >
                    [ RETURN_HOME ]
                </a>
            </div>
        </div>
    )
}