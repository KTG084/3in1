import Image from "next/image";
import React, { useEffect } from "react";

const Scroller = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("timeline-aos-animate");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(
      ".timeline-content, .timeline-image, .timeline-header"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const timelineData = [
    {
      label: "The Problem",
      description:
        "Most toys entertain but rarely educate. We set out to build something that sparks curiosity, blending fun with real-world STEM learning.",
      animation: "fade-right",
      image: "/images/p1.jpg",
    },
    {
      label: "The Concept",
      description:
        "A 3-in-1 Educational Toy that transforms into a Drone, Car, and Boat — teaching forces, motion, balance, and control systems interactively.",
      animation: "fade-left",
      image: "/images/p2.png",
    },
    {
      label: "The Build",
      description:
        "Integrated microcontrollers, sensors, and IoT connectivity with modular design — making coding and electronics hands-on and beginner-friendly.",
      animation: "fade-right",
      image: "/images/p3.jpg",
    },
    {
      label: "The Impact",
      description:
        "An open-source ecosystem with tutorials, GitHub guides, and upgradeable hardware — empowering kids to become creators, not just players.",
      animation: "fade-left",
      image: "/images/p4.jpg",
    },
  ];

  return (
    <>
      <style>{`
        .robotic-timeline-wrapper {
          font-size: 15px;
          line-height: 1.6;
        }

        .robotic-timeline {
          font-family: 'Courier New', monospace;
          color: #00ffff;
          overflow-x: hidden;
          position: relative;
          min-height: 100vh;
          border-radius: 8px;
          isolation: isolate;
        }

        .robotic-timeline::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
 
          pointer-events: none;
          z-index: 0;
        }

        .robotic-timeline .timeline-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 16px;
          position: relative;
          z-index: 1;
        }

        .timeline-header {
          text-align: center;
          margin-bottom: 70px;
          opacity: 0;
          transform: translateY(30px);
        }

        .timeline-header.timeline-aos-animate {
          opacity: 1;
          transform: translateY(0);
          transition: all 1s ease;
        }

      .timeline-header h1 {
  font-size: 3.2rem;
  font-weight: 800;
  letter-spacing: 4px;
  margin-bottom: 10px;
  background: linear-gradient(45deg, #00fff0, #ffae42, #ff7b00, #00fff0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 25px rgba(255, 180, 90, 0.4), 0 0 40px rgba(0, 255, 255, 0.4);
  animation: glowShift 5s ease-in-out infinite alternate;
}

@keyframes glowShift {
  0% {
    text-shadow: 0 0 20px rgba(255, 150, 60, 0.5), 0 0 30px rgba(0, 255, 255, 0.3);
  }
  100% {
    text-shadow: 0 0 25px rgba(255, 200, 120, 0.8), 0 0 45px rgba(0, 255, 255, 0.6);
  }
}


        .timeline-header p {
          font-size: 1.5rem;
          color: #88ffff;
          opacity: 0.8;
        }

        .timeline {
          position: relative;
          padding: 30px 0;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 100%;
          background: linear-gradient(180deg, transparent, #00ffff, #0099ff, transparent);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
        }

        .timeline-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 100px;
          position: relative;
        }

        .timeline-item:nth-child(even) {
          flex-direction: row-reverse;
        }

        .timeline-content {
          width: 44%;
          background: rgba(0, 255, 255, 0.06);
          border: 1px solid rgba(0, 255, 255, 0.25);
          border-radius: 16px;
          padding: 30px;
          opacity: 0;
          backdrop-filter: blur(18px);
          transition: all 0.5s ease;
        }

        .timeline-content.fade-right {
          transform: translateX(-40px);
        }

        .timeline-content.fade-left {
          transform: translateX(40px);
        }

        .timeline-content.timeline-aos-animate {
          opacity: 1;
          transform: translateX(0);
          transition: all 1s ease;
        }

        .timeline-content:hover {
          border-color: #00ffff;
          background: rgba(0, 255, 255, 0.12);
          transform: translateY(-5px);
          box-shadow: 0 0 25px rgba(0, 255, 255, 0.25);
        }

        .timeline-year {
          font-size: 2.8rem;
          font-weight: bold;
          margin-bottom: 10px;
          background: linear-gradient(45deg, #00ffff, #00ccff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .timeline-label {
          font-size: 0.85rem;
          color: #88ffff;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .timeline-description {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #aaffff;
          margin-top: 12px;
        }

        .timeline-image {
          width: 44%;
          height: 280px;
          background: rgba(0, 255, 255, 0.04);
          border-radius: 16px;
          opacity: 0;
          transition: all 0.5s ease;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(0, 255, 255, 0.2);
        }

        .timeline-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .timeline-image.fade-left {
          transform: translateX(40px);
        }

        .timeline-image.fade-right {
          transform: translateX(-40px);
        }

        .timeline-image.timeline-aos-animate {
          opacity: 1;
          transform: translateX(0);
        }

        .timeline-dot {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 18px;
          height: 18px;
          background: radial-gradient(circle, #00ffff, #0099ff);
          border: 2px solid #001122;
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.6);
          z-index: 2;
        }

        @media (max-width: 992px) {
          .timeline-item {
            margin-bottom: 80px;
          }

          .timeline-header h1 {
            font-size: 2.4rem;
          }
        }

        @media (max-width: 768px) {
          .timeline::before {
            left: 30px;
          }

          .timeline-item {
            flex-direction: column !important;
            align-items: flex-start;
            padding-left: 60px;
          }

          .timeline-content,
          .timeline-image {
            width: 100%;
          }

          .timeline-dot {
            left: 30px;
          }

          .timeline-year {
            font-size: 2rem;
          }
        }
      `}</style>

      <div className="robotic-timeline-wrapper">
        <div className="robotic-timeline">
          <div className="timeline-container">
            <div className="timeline-header">
              <h1>FROM PROBLEM TO PROTOTYPE</h1>
              <p>How We Engineered the 3-in-1 Educational Toy</p>
            </div>

            <div className="timeline">
              {timelineData.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className={`timeline-content ${item.animation}`}>
                    <div className="timeline-label">{item.label}</div>
                    {/* <div className="timeline-year">{item.year}</div> */}
                    <div className="timeline-description">
                      {item.description}
                    </div>
                  </div>
                  <div className="timeline-dot"></div>
                  <div
                    className={`timeline-image ${
                      index % 2 === 0 ? "fade-left" : "fade-right"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.label}
                      width={315}
                      height={315}
                      className="rounded-xl shadow-lg object-cover border border-cyan-500/30"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scroller;
