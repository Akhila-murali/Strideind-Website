import React from "react";
import { motion, useReducedMotion } from "motion/react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  variant = "default",
  disabled = false,
}) {
  const reduceMotion = useReducedMotion();
  const offset = direction === "left" ? { x: -36 } : direction === "right" ? { x: 36 } : { y: 30 };
  const hidden = variant === "image"
    ? { opacity: 0.45, scale: 1.035, clipPath: "inset(0 7% 0 0)", ...offset }
    : { opacity: 0, filter: "blur(4px)", ...offset };
  const visible = variant === "image"
    ? { opacity: 1, scale: 1, clipPath: "inset(0 0 0 0%)", x: 0, y: 0 }
    : { opacity: 1, filter: "blur(0px)", x: 0, y: 0 };

  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : hidden}
      whileInView={visible}
      viewport={{ once: false, amount: 0.18 }}
      transition={{ duration: variant === "image" ? 1 : 0.88, delay, ease: [0.16, 1, 0.3, 1] }}
      style={reduceMotion ? undefined : { willChange: "transform, opacity, filter, clip-path" }}
    >
      {children}
    </motion.div>
  );
}
