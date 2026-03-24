'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-full bg-black relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      {/* Centered container */}
      <div className="relative h-full">
        {/* Title at the top */}
        <div className="absolute top-8 left-0 right-0 text-center z-20">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Interactive 3D Portfolio
          </h1>
          <p className="mt-4 text-neutral-300 max-w-2xl mx-auto px-4">
            Bring your portfolio to life with beautiful 3D scenes. Create immersive experiences 
            that capture attention and showcase your work in a unique way.
          </p>
        </div>

        {/* Centered 3D Robot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full max-w-4xl max-h-[600px]">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}