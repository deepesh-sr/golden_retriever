import { Mail, ArrowUp } from "lucide-react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="text-sm text-white/40">
            Open to new projects, ideas, and opportunities.
          </p>
        </div>

        {/* Contact Row */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <a href="mailto:rathoredeepeshsingh@gmail.com">
            <Button size="lg">
              <Mail className="w-4 h-4" />
              rathoredeepeshsingh@gmail.com
            </Button>
          </a>

          <div className="flex gap-3">
            <a
              href="https://github.com/deepesh-sr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-white/10 hover:border-[#e23636]/30 hover:bg-[#e23636]/5 transition-all rounded-lg"
              aria-label="GitHub"
            >
              <SiGithub className="w-4 h-4 text-white/50" />
            </a>
            <a
              href="https://x.com/0xdeepeshW3"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-white/10 hover:border-[#e23636]/30 hover:bg-[#e23636]/5 transition-all rounded-lg"
              aria-label="X"
            >
              <SiX className="w-4 h-4 text-white/50" />
            </a>
            <a
              href="https://linkedin.com/in/deepesh-sr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-white/10 hover:border-[#e23636]/30 hover:bg-[#e23636]/5 transition-all rounded-lg"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="w-4 h-4 text-white/50" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-12 border-t border-white/5 flex items-center justify-between">
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} Deepesh Singh Rathore
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-2 text-white/20 hover:text-white/50 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
