export const About = () => {
  const skills = [
    "Rust",
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Solana",
    "Axum",
    "Tailwind CSS",
    "MongoDB",
    "WebSocket",
    "Git",
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto space-y-10">
        <h2 className="text-3xl font-bold">About</h2>

        <div className="space-y-4 text-white/50 text-[15px] leading-relaxed">
          <p>
            I'm a full-stack engineer focused on{" "}
            <span className="text-white/90">Rust</span>,{" "}
            <span className="text-white/90">Solana blockchain</span>, and{" "}
            <span className="text-white/90">modern web development</span>.
            I build systems that are fast, reliable, and well-crafted.
          </p>
          <p>
            From on-chain programs and CLI tools to polished React frontends,
            I care about writing clean code that solves real problems.
            Currently working at o8m_labs on decentralized applications.
          </p>
        </div>

        {/* Skills */}
        <div className="space-y-3">
          <h3 className="text-xs uppercase tracking-widest text-white/30 font-medium">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/60"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
