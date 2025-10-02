import React from "react";
import MagicBento from "./DefaultBento";

const AboutTeam: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            About Our Team
          </h2>
          <p className="text-xl text-[#8b949e] max-w-3xl mx-auto">
            I craft clean, bold, and functional digital experiences. Every
            project is built to stand out, not just exist. If it looks easy,
            that’s because I did it right.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#f0f6fc]">
                Redefining Digital Experiences, One Project at a Time.
              </h3>
              <p className="text-[#8b949e] leading-relaxed">
                I bring together expertise in full-stack development, modern UI/UX design, and scalable software solutions. With a passion for clean engineering and sharp aesthetics, I turn ideas into products that perform as good as they look.
              </p>
              <p className="text-[#8b949e] leading-relaxed">
                From building seamless web applications to experimenting with AI-driven solutions, I thrive on challenges that demand both creativity and precision. Backed by real-world project experience and a drive to stay ahead of the curve, I’m here to build, break, and rebuild—until the result is undeniable.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Node.js",
                "Python",
                "ML/AI",
                "Mobile Dev",
                "UI/UX",
                "Cloud",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#161b22] border border-[#30363d] rounded-full text-sm text-[#58a6ff] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div
              className="lg:scale-125 md:scale-110 scale-105 transition-transform duration-300"
              style={{ maxWidth: "none" }}
            >
              <MagicBento
                textAutoHide={true}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={12}
                glowColor="132, 0, 255"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
