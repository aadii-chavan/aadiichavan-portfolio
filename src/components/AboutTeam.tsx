import React from "react";
import ProfileCard from "./ProfileCard.tsx";

const AboutTeam: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-[#8b949e] max-w-3xl mx-auto px-4">
            I craft clean, bold, and functional digital experiences. Every
            project is built to stand out, not just exist. If it looks easy,
            that's because I did it right.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#f0f6fc]">
                Redefining Digital Experiences, One Project at a Time.
              </h3>
              <p className="text-[#8b949e] leading-relaxed text-sm sm:text-base">
                I'm Aadii, a full‑stack developer who builds end‑to‑end products across web, mobile, and AIML. I obsess over performance, developer ergonomics, and visual polish—shipping features that are reliable, scalable, and delightful to use.
              </p>
              <p className="text-[#8b949e] leading-relaxed text-sm sm:text-base">
                My toolkit spans React/Next.js, Node.js, Python, and cloud‑native services; on the AI side, I work with TensorFlow/PyTorch, vector databases, and modern inference tooling. Whether it's a production app, an API, or an ML feature, I like to ship quickly and iterate.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3">
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
                  className="px-2 sm:px-3 py-1 bg-[#161b22] border border-[#30363d] rounded-full text-xs sm:text-sm text-[#58a6ff] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative w-full max-w-xs sm:max-w-sm mx-auto">
              <ProfileCard
                name="Aditya Chavan"
                title="Software Engineer"
                handle="aadii_chavan"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/src/assets/srk.jpg"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
