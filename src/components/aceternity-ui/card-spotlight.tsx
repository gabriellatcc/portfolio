import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import {
  useState,
  type HTMLAttributes,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";
import { cn } from "cn";

export const CardSpotlight = ({
  children,
  radius = 350,
  className,
  ...props
}: {
  radius?: number;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  const mask = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, white, transparent 80%)`;

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn("group/spotlight relative", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 rounded-xl bg-transparent opacity-0 transition duration-300 group-hover/spotlight:opacity-100 dark:bg-transparent"
        style={{ maskImage: mask, WebkitMaskImage: mask }}
      >
        {isHovering && (
  <motion.div
    className="absolute inset-0"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.1, duration: 0.3 }}
  >
    <CanvasRevealEffect
      animationSpeed={5}
      containerClassName="bg-transparent absolute inset-0 pointer-events-none"
      colors={[
        [59, 130, 246],
        [139, 92, 246],
      ]}
      dotSize={3}
      showGradient={false}
    />
  </motion.div>
)}
      </motion.div>
      {children}
    </div>
  );
};