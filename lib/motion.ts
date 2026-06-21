export const springSnappy = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25,
};

export const springSoft = {
  type: "spring" as const,
  stiffness: 260,
  damping: 28,
};

export const spotlightConfig = {
  color: "rgba(225, 29, 72, 0.15)",
  size: 480,
};

export const revealVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springSoft,
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};
