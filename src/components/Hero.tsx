import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import { SiGithub, SiX, SiLinkedin } from "react-icons/si";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-20 pt-24"
    >
      <div className="max-w-3xl w-full space-y-10">
        {/* Status */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-white/50 tracking-wide">
            Available for opportunities
          </span>
        </div>

        {/* Name and Title */}
        <div className="space-y-3">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Deepesh Singh
            <span className="text-white/40"> Rathore</span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 font-medium">
            Full-Stack Engineer — Solana, Rust, TypeScript
          </p>
        </div>

        {/* One-liner */}
        <p className="text-base text-white/40 max-w-xl leading-relaxed">
          I build high-performance systems and polished web experiences.
          From Rust backends to Solana programs to React frontends.
        </p>

        {/* Quick Stats */}
        <div className="flex gap-8 text-sm">
          <div>
            <span className="text-white font-semibold">2+</span>
            <span className="text-white/40 ml-1">years exp</span>
          </div>
          <div>
            <span className="text-white font-semibold">10+</span>
            <span className="text-white/40 ml-1">projects shipped</span>
          </div>
          <div>
            <span className="text-white font-semibold">Rust</span>
            <span className="text-white/40 ml-1">+ Solana + React</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          <Button
            size="lg"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-3 pt-2">
          <a
            href="https://github.com/deepesh-sr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all rounded-lg"
            aria-label="GitHub"
          >
            <SiGithub className="w-4 h-4 text-white/60" />
          </a>
          <a
            href="https://x.com/0xdeepeshW3"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all rounded-lg"
            aria-label="X (Twitter)"
          >
            <SiX className="w-4 h-4 text-white/60" />
          </a>
          <a
            href="https://linkedin.com/in/deepesh-sr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all rounded-lg"
            aria-label="LinkedIn"
          >
            <SiLinkedin className="w-4 h-4 text-white/60" />
          </a>
          <a
            href="mailto:rathoredeepeshsingh@gmail.com"
            className="p-2.5 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all rounded-lg"
            aria-label="Email"
          >
            <Mail className="w-4 h-4 text-white/60" />
          </a>
        </div>
      </div>
    </section>
  );
};
