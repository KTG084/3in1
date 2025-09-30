import AnimatedContent from "@/components/AnimatedContent";
import DecryptedText from "@/components/DecryptedText";
import TrueFocus from "@/components/TrueFocus";
import ShinyText from "@/components/ShinyText";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-20">
        {/* Header Section - Improved mobile responsiveness */}
        <div className="w-full max-w-7xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
          <AnimatedContent
            distance={40}
            direction="vertical"
            reverse={false}
            duration={0.5}
            ease="easeOutCubic"
            initialOpacity={0}
            animateOpacity
            scale={1.03}
            threshold={0.1}
            delay={0.1}
          >
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="mb-2 sm:mb-4">
                <TrueFocus
                  sentence="3-IN-1 BOT"
                  manualMode={false}
                  glowColor="#67e8f9"
                  blurAmount={8}
                  borderColor="#67e8f9"
                  animationDuration={0.6}
                  pauseBetweenAnimations={1.2}
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl"
                />
              </div>
              <div className="px-2 sm:px-4 max-w-2xl sm:max-w-3xl mx-auto">
                <ShinyText
                  text="Build Your Own 3-in-1 Toy. Personalized Learning with STEM Starts Here."
                  disabled={false}
                  speed={4}
                  className="text-cyan-200/90 drop-shadow-[0_0_15px_#67e8f9] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium leading-relaxed"
                />
              </div>
            </div>
          </AnimatedContent>
        </div>

      
        <div className="w-full max-w-7xl mx-auto flex-grow">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
            {/* Left Side - Decrypted Text */}
            <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start order-2 lg:order-1">
              <AnimatedContent
                distance={40}
                direction="horizontal"
                reverse={true}
                duration={0.5}
                ease="easeOutCubic"
                initialOpacity={0}
                animateOpacity
                scale={1.03}
                threshold={0.1}
                delay={0.2}
              >
                <div className="space-y-6 sm:space-y-8 max-w-lg lg:max-w-none text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug sm:leading-tight">
                    <DecryptedText
                      text="We Have The Best 3-in-1 Toy"
                      speed={80}
                      maxIterations={25}
                      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!?"
                      className="revealed leading-tight bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent"
                      revealDirection="start"
                      parentClassName="all-letters"
                      animateOn="view"
                      encryptedClassName="encrypted text-cyan-400/40"
                    />
                  </div>

                  <div className="space-y-4 sm:space-y-6 text-slate-300">
                    <DecryptedText
                      text="Transform playtime into learning time with our
                      revolutionary 3-in-1 BOT that adapts to air, water, and
                      land environments. Designed for curious minds and future
                      innovators."
                      speed={80}
                      maxIterations={25}
                      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!?"
                      className="revealed text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose font-light"
                      revealDirection="start"
                      parentClassName="all-letters"
                      animateOn="view"
                      encryptedClassName="encrypted text-cyan-400/40"
                    />
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 pt-2 sm:pt-4">
                      <span className="px-3 sm:px-4 py-2 bg-cyan-500/20 border border-cyan-500/40 rounded-full text-cyan-300 text-xs sm:text-sm font-medium backdrop-blur-sm hover:bg-cyan-500/30 transition-all duration-300">
                        🚀 STEM Learning
                      </span>
                      <span className="px-3 sm:px-4 py-2 bg-blue-500/20 border border-blue-500/40 rounded-full text-blue-300 text-xs sm:text-sm font-medium backdrop-blur-sm hover:bg-blue-500/30 transition-all duration-300">
                        🌊 3 Environments
                      </span>
                      <span className="px-3 sm:px-4 py-2 bg-purple-500/20 border border-purple-500/40 rounded-full text-purple-300 text-xs sm:text-sm font-medium backdrop-blur-sm hover:bg-purple-500/30 transition-all duration-300">
                        🎯 Educational
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Ambient Background Effects - Mobile optimized */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-r from-blue-500/15 to-cyan-500/10 rounded-full blur-2xl lg:blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] bg-cyan-500/10 rounded-full blur-2xl lg:blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] bg-purple-500/8 rounded-full blur-2xl lg:blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] bg-indigo-500/5 rounded-full blur-2xl lg:blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Enhanced Grid Overlay - Mobile optimized */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.1] sm:opacity-[0.15]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(103, 232, 249, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(103, 232, 249, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(circle at center, black 20%, transparent 60%)",
          }}
        ></div>
      </div>

      {/* Floating Particles - Reduced count for mobile */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[1px] h-[1px] sm:w-[2px] sm:h-[2px] bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 20}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
