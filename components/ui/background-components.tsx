"use client";

import { cn } from "@/lib/utils";

interface BackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export const SoftYellowGlow = ({ className, children }: BackgroundProps) => {
  return (
    <div className={cn("min-h-screen w-full relative bg-white", className)}>
      {/* Soft Yellow Glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, #FFF991 0%, transparent 70%)`,
          opacity: 0.6,
          mixBlendMode: "multiply",
        }}
      />
      {children}
    </div>
  );
};

export const SoftBlueGlow = ({ className, children }: BackgroundProps) => {
  return (
    <div className={cn("min-h-screen w-full bg-white relative overflow-hidden", className)}>
      {/* Light Sky Blue Glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, #93c5fd, transparent)`,
        }}
      />
      {children}
    </div>
  );
};

export const SoftGoldGlow = ({ className, children }: BackgroundProps) => {
  return (
    <div className={cn("w-full relative overflow-hidden", className)}>
      {/* Champagne Gold Glow — matches dental clinic design system */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 60% 40%, rgba(184,146,42,0.13) 0%, transparent 65%),
                            radial-gradient(circle at 20% 80%, rgba(222,200,130,0.08) 0%, transparent 55%)`,
        }}
      />
      {children}
    </div>
  );
};

export default SoftYellowGlow;
