import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

export const FrontendDesigns = () => {
  const designs = [
    {
      title: "Textura",
      description:
        "Intelligent CMS with high-end animations, insights archive, and admin dashboard.",
      tags: ["React", "CMS", "Animations"],
      github: "https://github.com/deepesh-sr/Textura",
      demo: "https://textura-sigma.vercel.app/",
    },
    {
      title: "Frexus",
      description:
        "Modern logistics company site with service tracking and responsive design.",
      tags: ["React", "Tailwind CSS", "UI/UX"],
      github: "https://github.com/deepesh-sr/frexus",
      demo: "https://frexus.vercel.app",
    },
    {
      title: "Sketostory",
      description:
        "Immersive art company site with GSAP animations and visual storytelling.",
      tags: ["TypeScript", "React", "GSAP"],
      github: "https://github.com/deepesh-sr/artmania",
      demo: "https://sketchostory.vercel.app",
    },
    {
      title: "Martians",
      description:
        "Creative frontend showcase with engaging animations and interactive elements.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/deepesh-sr/martians",
      demo: "https://deepesh-sr.github.io/martians/",
    },
  ];

  return (
    <section id="designs" className="py-24 px-6">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Frontend Designs</h2>
          <p className="text-sm text-white/40">
            UI experiments and interactive showcases.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {designs.map((design) => (
            <a
              key={design.title}
              href={design.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/8 bg-white/2 p-5 rounded-lg hover:border-white/15 transition-all group block"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-base font-semibold group-hover:text-white/90 transition-colors">
                  {design.title}
                </h3>
                <div className="flex gap-2 shrink-0">
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(design.github, "_blank");
                    }}
                    className="text-white/30 hover:text-white/70 transition-colors cursor-pointer"
                  >
                    <SiGithub className="w-3.5 h-3.5" />
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-white/70 transition-colors" />
                </div>
              </div>

              <p className="text-white/40 text-xs leading-relaxed mb-3">
                {design.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {design.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 bg-white/5 border border-white/8 rounded-full text-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
