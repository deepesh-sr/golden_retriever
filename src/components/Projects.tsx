import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Button } from "./ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Honeybee",
      description:
        "Premium UI inspiration platform with automated color palette generation, font pairings, and reusable React components.",
      tags: ["React", "Design System", "Vite"],
      github: "https://github.com/deepesh-sr/honeybee",
      demo: "https://honeybee-seven.vercel.app/",
    },
    {
      title: "LendBNB",
      description:
        "Decentralized lending protocol on BNB Chain with autonomous liquidation bot, real-time analytics, and flash loan support.",
      tags: ["BNB Chain", "Solidity", "DeFi"],
      github: "https://github.com/deepesh-sr/LendBNB",
      demo: "https://lendchain-bnb.vercel.app/",
    },
    {
      title: "BrainMark",
      description:
        "Knowledge management and bookmarking tool with advanced organization, fast search, and a clean workflow.",
      tags: ["Next.js", "TypeScript"],
      github: "https://github.com/deepesh-sr/BrainMark",
      demo: "https://brain-mark-one.vercel.app/",
    },
    {
      title: "accel-MagicRoulette",
      description:
        "Solana on-chain roulette game integrating MagicBlock VRF for verifiable randomness in blockchain gaming.",
      tags: ["Solana", "TypeScript", "VRF"],
      github: "https://github.com/deepesh-sr/accel-MagicRoulette",
      demo: null,
    },
    {
      title: "FinBoard",
      description:
        "Financial dashboard with real-time tracking, interactive data visualizations, and secure architecture.",
      tags: ["React", "TypeScript", "Dashboard"],
      github: "https://github.com/deepesh-sr/FinBoard",
      demo: null,
    },
    {
      title: "min_axum_tracing_setup",
      description:
        "Starter template for Axum with structured logging and tracing for observable, performant Rust backends.",
      tags: ["Rust", "Axum", "Backend"],
      github: "https://github.com/deepesh-sr/min_axum_tracing_setup",
      demo: null,
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="text-sm text-white/40">
            Rust systems, Solana blockchain, and full-stack web applications.
          </p>
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-white/8 bg-white/2 p-5 rounded-lg hover:border-[#e23636]/20 transition-all group"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-base font-semibold group-hover:text-white/90 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2 shrink-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/30 hover:text-[#e23636] transition-colors"
                      aria-label="GitHub"
                    >
                      <SiGithub className="w-4 h-4" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/30 hover:text-[#1a3a8f] transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-white/40 text-sm leading-relaxed mb-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-0.5 bg-white/5 border border-white/8 rounded-full text-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/deepesh-sr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm">
              <SiGithub className="w-4 h-4" />
              More on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
