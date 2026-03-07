export const Experience = () => {
  const experiences = [
    {
      company: "o8m_labs",
      role: "Full Stack Developer",
      period: "Feb 2026 - Present",
      description:
        "Building decentralized applications and high-performance backend infrastructure. Creating seamless developer experiences with Solana, Rust, and React.",
      skills: ["Solana", "Rust", "TypeScript", "React"],
    },
    {
      company: "BSH Technologies",
      role: "Full Stack Developer",
      period: "2024 - Feb 2026",
      description:
        "Developed scalable backend systems and responsive frontend applications using modern web technologies.",
      skills: ["React", "Node.js", "TypeScript", "Backend Systems"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto space-y-10">
        <h2 className="text-3xl font-bold">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="border-l border-white/10 pl-6 space-y-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <span className="text-white/50 text-sm">{exp.company}</span>
                </div>
                <span className="text-xs text-white/30 shrink-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-white/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
