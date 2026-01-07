import { Briefcase } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      company: "BSH Technologies",
      role: "Full Stack Developer",
      period: "Present",
      description:
        "Developing scalable backend systems and responsive frontend applications. leveraging modern technologies to build efficient solutions.",
      skills: ["Full Stack Development", "React", "Node.js", "Backend Systems"],
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-white/60" />
            <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
          </div>
          <p className="text-lg text-white/60 max-w-3xl">
            My professional journey and career milestones.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="border-l-2 border-white/20 pl-8 relative before:absolute before:w-4 before:h-4 before:bg-white before:rounded-full before:-left-2.25 before:top-0"
            >
              <h3 className="text-2xl font-bold">{exp.role}</h3>
              <div className="text-xl text-white/80 mb-2">{exp.company}</div>
              <div className="text-sm text-white/50 mb-4">{exp.period}</div>
              <p className="text-white/60 max-w-2xl mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 bg-white/10 border border-white/20 rounded"
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
