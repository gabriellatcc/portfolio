import { FloatingNav } from "@/components/aceternity-ui/floating-navbar";
import {
  IconHome,
  IconHomeFilled,
  IconBriefcase,
  IconBriefcaseFilled,
  IconFolder,
  IconFolderFilled
} from "@tabler/icons-react";
import { IoLayersOutline, IoLayers } from "react-icons/io5";
import { PiStudentBold, PiStudentFill } from "react-icons/pi";
import { LanguageSwitch } from "@/components/layout/language-switch"
import { usePortfolioData } from '@/providers/portfolio-provider'

export default function FloatingNavDemo() {
  const { navigation } = usePortfolioData();

  const navigationstyle = "h-4 w-4 text-foreground";
  const navItems = [
    {
      name: navigation.home.title,
      link: "#",
      icon: <IconHome className={navigationstyle} />,
      activeIcon: <IconHomeFilled className={navigationstyle} />,
    },
    {
      name: navigation.experience.title,
      link: "#experience",
      icon: <IconBriefcase className={navigationstyle} />,
      activeIcon: <IconBriefcaseFilled className={navigationstyle} />,
    },
    {
      name: navigation.education.title,
      link: "#education",
      icon: <PiStudentBold className={navigationstyle} />,
      activeIcon: <PiStudentFill className={navigationstyle} />,
    },
    {
      name: navigation.projects.title,
      link: "#projects",
      icon: <IconFolder className={navigationstyle} />,
      activeIcon: <IconFolderFilled className={navigationstyle} />,
    },
    {
      name: navigation.techStack.title,
      link: "#tech-stack",
      icon: <IoLayersOutline className={navigationstyle} />,
      activeIcon: <IoLayers className={navigationstyle} />,
    },
  ];

return (
    <div className="fixed top-4 inset-x-0 z-[5000] mx-auto flex w-fit max-w-[calc(100vw-0.5rem)] items-center justify-center gap-1.5 sm:top-6 sm:gap-2">
      <FloatingNav
        navItems={navItems}
        className="relative top-0 inset-x-auto mx-0 gap-0.5 px-2 py-1.5 [&_a]:px-2 sm:gap-4 sm:px-4 sm:py-2 sm:[&_a]:px-3"
      />
      <div className="shrink-0">
        <LanguageSwitch />
      </div>
    </div>
  );
}