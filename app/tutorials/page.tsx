"use client";
import React, { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  PlayCircle,
  Video,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import AnimatedContent from "@/components/AnimatedContent";

export default function TutorialPlaylist() {
  const playlistData = {
    name: "3-in-1 Smart Toy",
    subtitle: "Master Your Educational Toy",
    steps: [
      {
        id: 1,
        title: "Getting Started - Unboxing & Overview",
        total: 5,
        description:
          "Learn what's in the box and understand the core components",
        playlist: "https://www.youtube.com/playlist?list=PLTJ5CnqshtICHtiyqywuteb9mMofDSvrk",
      },
      {
        id: 2,
        title: "Assembly Guide - Land Mode (RC Car)",
        total: 8,
        description:
          "Step-by-step assembly for the ground vehicle configuration",
        playlist: "https://youtube.com/playlist?list=...",
      },
      {
        id: 3,
        title: "Assembly Guide - Water Mode (Boat)",
        total: 7,
        description: "Transform your toy into a fully functional water vehicle",
        playlist: "https://youtube.com/playlist?list=...",
      },
      {
        id: 4,
        title: "Assembly Guide - Air Mode (Drone)",
        total: 9,
        description:
          "Build and calibrate the aerial configuration with safety tips",
        playlist: "https://youtube.com/playlist?list=...",
      },
      {
        id: 5,
        title: "Programming Basics - Block Coding",
        total: 12,
        description:
          "Learn to code movements and behaviors using visual blocks",
        playlist: "https://youtube.com/playlist?list=...",
      },
      {
        id: 6,
        title: "Advanced Programming - Arduino IDE",
        total: 15,
        description:
          "Dive deeper with Arduino code and custom sensor integration",
        playlist: "https://youtube.com/playlist?list=...",
      },
      {
        id: 7,
        title: "Science Concepts - Forces & Motion",
        total: 10,
        description: "Understand the physics behind each mode of operation",
        playlist: "https://youtube.com/playlist?list=...",
      },
      {
        id: 8,
        title: "Modifications & Upgrades",
        total: 11,
        description:
          "Learn how to customize and enhance your toy with new features",
        playlist: "https://youtube.com/playlist?list=...",
      },
      {
        id: 9,
        title: "Troubleshooting & Maintenance",
        total: 6,
        description:
          "Common issues, repairs, and keeping your toy in top shape",
        playlist: "https://youtube.com/playlist?list=...",
      },
      {
        id: 10,
        title: "Project Challenges",
        total: 8,
        description: "Fun challenges and competitions to test your skills",
        playlist: "https://youtube.com/playlist?list=...",
      },
    ],
  };

  const [steps, setSteps] = useState(
    playlistData.steps.map((step) => ({
      ...step,
      completed: 0,
      expanded: false,
    }))
  );

  const toggleStep = (stepId: number) => {
    setSteps(
      steps.map((step) =>
        step.id === stepId ? { ...step, expanded: !step.expanded } : step
      )
    );
  };

  const updateProgress = (stepId: number, value: string) => {
    setSteps(
      steps.map((step) =>
        step.id === stepId
          ? {
              ...step,
              completed: Math.min(
                Math.max(0, parseInt(value) || 0),
                step.total
              ),
            }
          : step
      )
    );
  };

  const totalVideos = steps.reduce((sum, step) => sum + step.total, 0);
  const completedVideos = steps.reduce((sum, step) => sum + step.completed, 0);
  const overallProgress =
    totalVideos > 0 ? ((completedVideos / totalVideos) * 100).toFixed(1) : "0";

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Premium Animated Background */}
      
      
      {/* Subtle Particle Effect Layer */}
      

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Hero Header Section */}
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          duration={0.8}
          ease="easeOut"
          initialOpacity={0}
          animateOpacity
          scale={0.98}
          threshold={0.1}
          delay={0}
        >
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full px-6 py-2.5 mb-8 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-500">
              <Video className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">
                Video Tutorials
              </span>
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent leading-[1.1] tracking-tight">
              {playlistData.name}
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 font-medium mb-6 max-w-3xl mx-auto">
              {playlistData.subtitle}
            </p>

            <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              A comprehensive collection of video tutorials that visually
              explain how to build, program, and master your 3-in-1 educational
              toy
            </p>
          </div>
        </AnimatedContent>

        {/* Premium Progress Card */}
        <AnimatedContent
          distance={40}
          direction="vertical"
          reverse={false}
          duration={0.9}
          ease="easeOut"
          initialOpacity={0}
          animateOpacity
          scale={0.97}
          threshold={0.15}
          delay={0.15}
        >
          <div className="mb-16 bg-gradient-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-2xl border border-cyan-500/20 rounded-[2rem] p-10 shadow-2xl shadow-cyan-500/5 relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-500">
            {/* Animated gradient top bar */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-80 group-hover:opacity-100 transition-opacity" />
            
            {/* Subtle glow effect */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/15 transition-all duration-700" />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                  Overall Learning Progress
                </h2>
                <p className="text-gray-400 text-lg">
                  Track your journey through all tutorial modules
                </p>
              </div>

              <div className="text-center lg:text-right">
                <div className="flex items-baseline justify-center lg:justify-end gap-3 mb-3">
                  <span className="text-6xl md:text-7xl font-black bg-gradient-to-br from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    {completedVideos}
                  </span>
                  <span className="text-4xl text-gray-600 font-bold">
                    / {totalVideos}
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-5 py-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-cyan-300 font-bold text-lg">
                    {overallProgress}% Complete
                  </span>
                </div>
              </div>
            </div>

            {/* Premium Progress Bar */}
            <div className="mt-8 w-full bg-gray-900/60 rounded-full h-5 overflow-hidden border border-gray-700/40 shadow-inner relative">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all duration-1000 ease-out shadow-lg shadow-cyan-500/30 relative overflow-hidden"
                style={{ width: `${overallProgress}%` }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              </div>
            </div>
          </div>
        </AnimatedContent>

        {/* Tutorial Steps - Staggered Animation */}
        <div className="space-y-5">
          {steps.map((step, index) => {
            const progressPercent =
              step.total > 0 ? (step.completed / step.total) * 100 : 0;
            const isCompleted = step.completed === step.total;

            return (
              <AnimatedContent
                key={step.id}
                distance={30}
                direction="vertical"
                reverse={false}
                duration={0.6}
                ease="easeOut"
                initialOpacity={0}
                animateOpacity
                scale={0.98}
                threshold={0.1}
                delay={0.05 * index}
              >
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/40 rounded-2xl overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 group">
                  <div
                    className="flex items-center justify-between p-6 md:p-7 cursor-pointer"
                    onClick={() => toggleStep(step.id)}
                  >
                    <div className="flex items-center gap-5 flex-1 min-w-0">
                      <button className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15 border border-cyan-500/25 group-hover:from-cyan-500/25 group-hover:to-blue-500/25 group-hover:border-cyan-500/40 transition-all duration-300 group-hover:scale-110">
                        {step.expanded ? (
                          <ChevronDown className="w-5 h-5 text-cyan-400" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-cyan-400" />
                        )}
                      </button>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 border border-cyan-500/25 rounded-lg px-3.5 py-1.5 text-xs font-bold text-cyan-300 uppercase tracking-wider">
                            <PlayCircle className="w-3.5 h-3.5" />
                            Module {index + 1}
                          </span>
                          {isCompleted && (
                            <span className="inline-flex items-center gap-1.5 bg-green-500/15 border border-green-500/30 rounded-lg px-3.5 py-1.5 text-xs font-bold text-green-400 animate-pulse">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              Completed
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-400 hidden md:block leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-5 md:gap-7 flex-shrink-0 ml-4">
                      {/* Desktop Progress Bar */}
                      <div className="hidden lg:block w-56 bg-gray-900/60 rounded-full h-3 overflow-hidden border border-gray-700/40 shadow-inner">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all duration-700 shadow-lg shadow-cyan-500/20 relative overflow-hidden"
                          style={{ width: `${progressPercent}%` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer" />
                        </div>
                      </div>

                      {/* Progress Count */}
                      <div className="text-right min-w-[90px]">
                        <div className="text-xl md:text-2xl font-black">
                          <span
                            className={
                              isCompleted ? "text-green-400" : "text-cyan-400"
                            }
                          >
                            {step.completed}
                          </span>
                          <span className="text-gray-600"> / {step.total}</span>
                        </div>
                        <div className="text-xs text-gray-500 font-medium uppercase tracking-wide hidden md:block">
                          videos
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Progress Bar */}
                  <div className="lg:hidden px-6 pb-4">
                    <div className="w-full bg-gray-900/60 rounded-full h-2.5 overflow-hidden border border-gray-700/40">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all duration-700 relative overflow-hidden"
                        style={{ width: `${progressPercent}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer" />
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {step.expanded && (
                    <div className="px-6 md:px-7 pb-7 space-y-5 border-t border-gray-700/30 pt-6 animate-fadeIn">
                      {/* Mobile Description */}
                      <p className="text-sm text-gray-400 md:hidden leading-relaxed">
                        {step.description}
                      </p>

                      {/* Progress Input */}
                      <div className="bg-gray-900/70 border border-cyan-500/15 rounded-xl p-6 backdrop-blur-sm">
                        <label className="text-sm font-bold text-cyan-300 mb-4 flex items-center gap-2.5">
                          <BookOpen className="w-4.5 h-4.5" />
                          Update Your Progress
                        </label>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                          <input
                            type="number"
                            min="0"
                            max={step.total}
                            value={step.completed}
                            onChange={(e) =>
                              updateProgress(step.id, e.target.value)
                            }
                            onClick={(e) => e.stopPropagation()}
                            className="w-full sm:w-36 bg-gray-800/80 border-2 border-cyan-500/30 rounded-xl px-5 py-3.5 text-white font-bold focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 transition-all text-lg"
                          />
                          <span className="text-gray-400 text-sm font-medium">
                            out of {step.total} videos watched
                          </span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            updateProgress(step.id, String(step.completed + 1));
                          }}
                          disabled={step.completed >= step.total}
                          className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:from-gray-700 disabled:to-gray-700 disabled:cursor-not-allowed disabled:opacity-50 text-white px-6 py-3.5 rounded-xl font-bold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
                        >
                          <PlayCircle className="w-5 h-5" />
                          Mark +1 Watched
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            updateProgress(step.id, String(step.total));
                          }}
                          className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-3.5 rounded-xl font-bold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
                        >
                          <CheckCircle2 className="w-5 h-5" />
                          Mark All Complete
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            updateProgress(step.id, "0");
                          }}
                          className="bg-gray-800/70 hover:bg-gray-700/70 border border-gray-600/40 hover:border-gray-500/60 text-white px-6 py-3.5 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          Reset
                        </button>
                      </div>

                      {/* Playlist Link */}
                      <a
                        href={step.playlist}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full bg-gradient-to-r from-gray-800/90 to-gray-700/90 hover:from-gray-750/90 hover:to-gray-650/90 border border-cyan-500/25 hover:border-cyan-500/40 text-cyan-300 px-6 py-3.5 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2.5 group/link"
                      >
                        <ExternalLink className="w-5 h-5 group-hover/link:rotate-12 transition-transform" />
                        View Playlist on YouTube
                      </a>
                    </div>
                  )}
                </div>
              </AnimatedContent>
            );
          })}
        </div>

        {/* Premium CTA Section */}
        <AnimatedContent
          distance={40}
          direction="vertical"
          reverse={false}
          duration={0.8}
          ease="easeOut"
          initialOpacity={0}
          animateOpacity
          scale={0.98}
          threshold={0.2}
          delay={0.1}
        >
          <div className="mt-20 text-center bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-2xl border border-cyan-500/20 rounded-[2rem] p-12 relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-500">
            {/* Ambient glow */}
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/15 transition-all duration-700" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/15 transition-all duration-700" />

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Keep Learning, Keep Building! 🚀
              </h3>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Stay tuned for more videos! We&apos;re constantly adding new
                tutorials, upgrades, and project challenges to help you become a
                creator, not just a player.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://youtube.com/@yourchannel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl shadow-red-500/30 hover:shadow-red-500/50"
                >
                  <Video className="w-5 h-5" />
                  Subscribe on YouTube
                </a>
                <a
                  href="/community"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50"
                >
                  <BookOpen className="w-5 h-5" />
                  Join Community
                </a>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
