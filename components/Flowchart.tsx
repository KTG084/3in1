"use client";
import React from "react";

const Flowchart: React.FC = () => {
  return (
    <div className="relative mt-5 flex flex-col items-center justify-center min-h-screen text-white p-4 md:p-8 overflow-hidden">
      {/* Subtle background shimmer */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none -z-10"
        style={{ mixBlendMode: "screen" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/8 to-transparent opacity-80 animate-slow-pulse" />
      </div>

      {/* Title */}
      <div className="text-center mb-10 md:mb-14 z-10">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          3-IN-1 EDUCATIONAL TOY WORKFLOW
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          Modular design + GitHub documentation for customization and hands-on
          skill development
        </p>
      </div>

      {/* Flowchart shell */}
      <div className="relative w-full max-w-6xl mx-auto z-10">
        {/* Layout using grid for consistent spacing */}
        <div className="relative space-y-8 md:space-y-16">
          {/* Row 1: top three nodes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Node */}
            <Card
              title="Hardware Development"
              colorFrom="from-orange-500"
              colorTo="to-red-600"
              items={["PCB Layout", "Component Assembly", "Motor & Power"]}
            />
            <Card
              title="Website & Community"
              colorFrom="from-pink-500"
              colorTo="to-purple-600"
              items={[
                "Website Creation",
                "User Guides",
                "Open-Source Files",
                "Video Walkthroughs",
              ]}
            />
            <Card
              title="Software & Controller"
              colorFrom="from-red-500"
              colorTo="to-pink-600"
              items={["Microcontroller", "Controller App", "Wireless Comm"]}
            />
          </div>

          {/* Row 2: center node */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-6 md:p-8 rounded-2xl shadow-2xl shadow-cyan-500/30 border-2 border-cyan-300 text-center w-full max-w-[360px] transform hover:scale-[1.03] transition-transform duration-300">
                <h2 className="text-lg md:text-2xl font-bold mb-2">
                  3-in-1 Educational Toy
                </h2>
                <p className="text-cyan-100 text-sm md:text-base">
                  Workflow Integration Point
                </p>
                <div className="mt-4 space-y-2">
                  <div className="bg-cyan-400/20 rounded-lg px-3 py-2">
                    Assembly & Testing
                  </div>
                  <div className="bg-cyan-400/20 rounded-lg px-3 py-2">
                    Calibration
                  </div>
                </div>
              </div>

              {/* little down arrow block (for spacing alignment) */}
            </div>
          </div>

          {/* Row 3: bottom two nodes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-2xl mx-auto">
            <Card
              title="Final Assembly & Testing"
              colorFrom="from-purple-500"
              colorTo="to-indigo-600"
              items={[
                "Electronics Integration",
                "Calibration",
                "Quality Testing",
              ]}
            />
            <Card
              title="Launch & Support"
              colorFrom="from-blue-500"
              colorTo="to-cyan-600"
              items={[
                "Product Release",
                "Ongoing Support",
                "Community Updates",
              ]}
            />
          </div>
        </div>

        {/* SVG connectors - visible on md+ */}
        <div
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{ top: "0px", left: "0px" }}
        >
          <svg
            className="w-full h-full"
            style={{ position: "absolute", top: 0, left: 0 }}
          >
            <defs>
              <filter id="glowA" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <linearGradient
                id="cyanGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
              <linearGradient
                id="purpleGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>

            {/* Top-left (Hardware) -> Center */}
            <path
              d="M 16% 18% Q 30% 35% 50% 42%"
              stroke="url(#cyanGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{
                filter: "url(#glowA)",
                strokeDasharray: 500,
                strokeDashoffset: 500,
                animation:
                  "drawLine 1.8s ease forwards 0.2s, pulseGlow 2.6s ease-in-out infinite 2s",
              }}
            />

            {/* Top-center (Website) -> Center */}
            <path
              d="M 50% 18% L 50% 42%"
              stroke="url(#cyanGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{
                filter: "url(#glowA)",
                strokeDasharray: 300,
                strokeDashoffset: 300,
                animation:
                  "drawLine 1.2s ease forwards 0.3s, pulseGlow 2.6s ease-in-out infinite 2.2s",
              }}
            />

            {/* Top-right (Software) -> Center */}
            <path
              d="M 84% 18% Q 70% 35% 50% 42%"
              stroke="url(#cyanGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{
                filter: "url(#glowA)",
                strokeDasharray: 500,
                strokeDashoffset: 500,
                animation:
                  "drawLine 1.8s ease forwards 0.4s, pulseGlow 2.6s ease-in-out infinite 2.4s",
              }}
            />

            {/* Center -> Bottom-left (Final Assembly) */}
            <path
              d="M 50% 58% Q 42% 70% 34% 82%"
              stroke="url(#purpleGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{
                filter: "url(#glowA)",
                strokeDasharray: 350,
                strokeDashoffset: 350,
                animation:
                  "drawLine 1.5s ease forwards 0.8s, pulseGlowPurple 3s ease-in-out infinite 2.6s",
              }}
            />

            {/* Center -> Bottom-right (Launch) */}
            <path
              d="M 50% 58% Q 58% 70% 66% 82%"
              stroke="url(#cyanGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{
                filter: "url(#glowA)",
                strokeDasharray: 350,
                strokeDashoffset: 350,
                animation:
                  "drawLine 1.5s ease forwards 0.9s, pulseGlow 3s ease-in-out infinite 2.8s",
              }}
            />
          </svg>
        </div>

        {/* Innovation box */}
        <div className="mt-12 md:mt-20 text-center z-10 relative">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 md:p-6 rounded-2xl shadow-2xl shadow-green-500/20 max-w-2xl mx-auto border-2 border-green-300">
            <h3 className="text-lg md:text-xl font-bold mb-3">
              🎯 What&lsquo;s Innovative & Unique?
            </h3>
            <p className="text-green-100 text-sm md:text-base">
              <strong>Modular design</strong> and clear{" "}
              <strong>GitHub documentation</strong> let learners customize,
              iterate and build technical skills through hands-on play.
            </p>
          </div>
        </div>

      </div>

      {/* Inline styles for keyframes & small helpers */}
      <style>{`
        /* Slow subtle background pulse animation */
        @keyframes slowPulse {
          0% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.95; transform: scale(1.02); }
          100% { opacity: 0.6; transform: scale(1); }
        }
        .animate-slow-pulse {
          animation: slowPulse 6s ease-in-out infinite;
        }

        /* Draw line animation */
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }

        /* Neon pulse glow - enhanced */
        @keyframes pulseGlow {
          0% { filter: drop-shadow(0 0 8px rgba(34,211,238,0.9)) drop-shadow(0 0 12px rgba(34,211,238,0.6)); opacity: 0.95; }
          50% { filter: drop-shadow(0 0 20px rgba(34,211,238,1)) drop-shadow(0 0 30px rgba(34,211,238,0.8)); opacity: 1; }
          100% { filter: drop-shadow(0 0 8px rgba(34,211,238,0.9)) drop-shadow(0 0 12px rgba(34,211,238,0.6)); opacity: 0.95; }
        }
        @keyframes pulseGlowPurple {
          0% { filter: drop-shadow(0 0 8px rgba(167,139,250,0.9)) drop-shadow(0 0 12px rgba(167,139,250,0.6)); opacity: 0.95; }
          50% { filter: drop-shadow(0 0 20px rgba(167,139,250,1)) drop-shadow(0 0 30px rgba(167,139,250,0.8)); opacity: 1; }
          100% { filter: drop-shadow(0 0 8px rgba(167,139,250,0.9)) drop-shadow(0 0 12px rgba(167,139,250,0.6)); opacity: 0.95; }
        }

        /* small accessibility tweak for cards on hover */
        .flow-card:focus-within, .flow-card:hover {
          transform: translateY(-4px) scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default Flowchart;

/* ---------- Small Card Component ---------- */
function Card({
  title,
  items,
  colorFrom,
  colorTo,
}: {
  title: string;
  items: string[];
  colorFrom: string;
  colorTo: string;
}) {
  // combine gradient classes safely
  const gradient = `bg-gradient-to-br ${colorFrom} ${colorTo}`;

  return (
    <div className="relative group flex justify-center">
      <div
        className={`flow-card ${gradient} p-4 md:p-5 rounded-2xl shadow-2xl border-2 w-full max-w-[320px] text-center transition-transform duration-300`}
        style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.6)" }}
        tabIndex={0}
      >
        <h3 className="font-bold text-lg mb-3">{title}</h3>
        <div className="space-y-2 text-sm">
          {items.map((it) => (
            <div
              key={it}
              className="bg-white/6 backdrop-blur-sm rounded-lg px-3 py-2 text-[13px] flex items-center justify-center"
            >
              {it}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
