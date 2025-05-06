import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const AnimateOnScroll = ({ children, delay = 0, yOffset = 50 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1,   // Trigger when 10% of element is visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};