import React from "react";
import MagicBento from "./DefaultBento";

const AboutTeam: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            About Me
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
                I’m Aadii, a full‑stack developer who builds end‑to‑end products across web, mobile, and AIML. I obsess over performance, developer ergonomics, and visual polish—shipping features that are reliable, scalable, and delightful to use.
              </p>
              <p className="text-[#8b949e] leading-relaxed">
                My toolkit spans React/Next.js, Node.js, Python, and cloud‑native services; on the AI side, I work with TensorFlow/PyTorch, vector databases, and modern inference tooling. Whether it’s a production app, an API, or an ML feature, I like to ship quickly and iterate.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "React / Next.js",
                "Node.js / Express",
                "TypeScript",
                "Python",
                "TensorFlow / PyTorch",
                "React Native / Flutter",
                "PostgreSQL / MongoDB",
                "AWS / Firebase",
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
