import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative backdrop-blur-md bg-slate-950/70 border-t border-cyan-500/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">3B</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                3-IN-1 BOT
              </h3>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              Revolutionizing STEM education through innovative 3-in-1 transformable robots. 
              Building the next generation of innovators and problem solvers.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-800/60 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="mailto:contact@3in1bot.com" 
                className="p-2 bg-slate-800/60 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Competition Details */}
          <div>
            <h4 className="text-lg font-semibold text-cyan-400 mb-4">Smart India Hackathon</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-slate-400">Problem Statement ID</p>
                <p className="text-white font-medium">SIH25124</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Theme</p>
                <p className="text-white font-medium">Toys and Games</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Category</p>
                <p className="text-white font-medium">Hardware & Innovation</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-cyan-400 mb-4">Quick Links</h4>
            <div className="space-y-3">
              <Link href="/features" className="block text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                Features
              </Link>
              <Link href="/documentation" className="block text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                Documentation
              </Link>
              <Link href="/team" className="block text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                Our Team
              </Link>
              <Link href="/contact" className="block text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center md:text-left">
              <h5 className="text-cyan-400 font-semibold mb-2">Repository</h5>
              <a 
                href="https://github.com/your-username/3-in-1-bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
              >
                github.com/3-in-1-bot
              </a>
            </div>
            <div className="text-center md:text-left">
              <h5 className="text-cyan-400 font-semibold mb-2">Tech Stack</h5>
              <p className="text-slate-400 text-sm">React • Next.js • Three.js • Tailwind CSS</p>
            </div>
            <div className="text-center md:text-left">
              <h5 className="text-cyan-400 font-semibold mb-2">Documentation</h5>
              <a 
                href="/docs" 
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
              >
                View Documentation
              </a>
            </div>
            <div className="text-center md:text-left">
              <h5 className="text-cyan-400 font-semibold mb-2">Support</h5>
              <a 
                href="mailto:support@3in1bot.com" 
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
              >
                support@3in1bot.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © {currentYear} 3-IN-1 BOT. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-slate-400">Built for</span>
              <div className="flex items-center space-x-2 bg-slate-800/60 px-3 py-1 rounded-full border border-cyan-500/30 backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-cyan-400 font-medium">Smart India Hackathon 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
