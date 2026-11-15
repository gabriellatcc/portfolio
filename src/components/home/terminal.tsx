import { Terminal } from "@/components/ui/terminal";

export function TerminalComponent() {
  return (
    <section className="w-full">
      <Terminal
        commands={[
          "whoami",
          "cat stack.json",
          "git status",
        ]}
        outputs={{
          0: ["gabriella-correa (Full-Stack Developer @ Cruzeiro, SP)"],
          1: [
            '{',
            '  "backend": ["PHP 8.3", "Laravel", "Spring Boot"],',
            '  "frontend": ["React 19", "TypeScript", "Tailwind CSS"],',
            '  "devops": ["Docker", "Linux", "Git"]',
            '}',
          ],
          2: ["On branch main — Open to Junior Full-Stack roles & internships."],
        }}
        typingSpeed={40}
        delayBetweenCommands={1000}
      />
    </section>
  );
}