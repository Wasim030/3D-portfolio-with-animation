'use client'

import { SplineScene } from "@/components/ui/splite";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center p-4">
      <div className="w-full h-full max-w-[95vw] max-h-[95vh]">
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}