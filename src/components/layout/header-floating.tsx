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

export default function FloatingNavDemo() {
  const navigationstyle = "h-4 w-4 text-foreground";
  const navItems = [
    {
      name: "Home",
      link: "#",
      icon: <IconHome className={navigationstyle} />,
      activeIcon: <IconHomeFilled className={navigationstyle} />,
    },
    {
      name: "Experience",
      link: "#experience",
      icon: <IconBriefcase className={navigationstyle} />,
      activeIcon: <IconBriefcaseFilled className={navigationstyle} />,
    },
    {
      name: "Education",
      link: "#education",
      icon: <PiStudentBold className={navigationstyle} />,
      activeIcon: <PiStudentFill className={navigationstyle} />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconFolder className={navigationstyle} />,
      activeIcon: <IconFolderFilled className={navigationstyle} />,
    },
    {
      name: "Tech Stack",
      link: "#tech-stack",
      icon: <IoLayersOutline className={navigationstyle} />,
      activeIcon: <IoLayers className={navigationstyle} />,
    },
    // currently readings io5 IoBookmarks io5 IoBookmarksOutline
  ];

  return (
    <div className="fixed top-6 inset-x-0 z-[5000] mx-auto flex max-w-fit items-center justify-center gap-2">
      <FloatingNav navItems={navItems} />
      <LanguageSwitch />
    </div>
  );
}