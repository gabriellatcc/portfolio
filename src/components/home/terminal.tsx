import { Terminal } from "@/components/ui/terminal";

export function TerminalComponent() {
  return (
    <section className="w-min md:w-full">
      <Terminal
        commands={[
          "whoami",
          "gh repo list gabriellatcc --limit 3",
          "cat stack.json",
          "git status",
        ]}
        outputs={{
          0: ["gabriella-correa (Full-Stack Developer @ Cruzeiro, SP)"],
          1: [
            "gabriellatcc/MetricNotes   Personal Informatics (Laravel + React)",
            "gabriellatcc/PokeTeamUp    Team Builder API (Next.js + Laravel)",
            "gabriellatcc/portfolio     Interactive Developer Portfolio",
          ],
          2: [
            '{',
            '  "backend": ["PHP 8.3", "Laravel", "Spring Boot", "PostgreSQL"],',
            '  "frontend": ["React 19", "TypeScript", "Tailwind CSS"],',
            '  "devops": ["Docker", "Linux", "Git"]',
            '}',
          ],
          3: ["On branch main — Open to Junior Full-Stack roles & internships."],
        }}
        typingSpeed={40}
        delayBetweenCommands={1000}
      />
    </section>
  );
}