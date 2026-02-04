import { useRef, type ReactNode } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    staggerChildren?: boolean;
    staggerDelay?: number;
    once?: boolean;
    threshold?: number;
}

const getVariants = (direction: string, duration: number): Variants => {
    const directions: Record<string, { x?: number; y?: number }> = {
        up: { y: 40 },
        down: { y: -40 },
        left: { x: 40 },
        right: { x: -40 },
        none: {}
    };

    return {
        hidden: {
            opacity: 0,
            ...directions[direction],
            filter: 'blur(10px)'
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration,
                ease: [0.25, 0.4, 0.25, 1] // Custom cubic-bezier for premium feel
            }
        }
    };
};

const containerVariants: Variants = {
    hidden: {},
    visible: (staggerDelay: number) => ({
        transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1
        }
    })
};

const childVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
        filter: 'blur(8px)'
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1]
        }
    }
};

export default function AnimatedSection({
    children,
    className = '',
    delay = 0,
    duration = 0.7,
    direction = 'up',
    staggerChildren = false,
    staggerDelay = 0.1,
    once = true,
    threshold = 0.2
}: AnimatedSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    if (staggerChildren) {
        return (
            <motion.div
                ref={ref}
                className={className}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={staggerDelay}
                variants={containerVariants}
                style={{ transitionDelay: `${delay}s` }}
            >
                {children}
            </motion.div>
        );
    }

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={getVariants(direction, duration)}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </motion.div>
    );
}

// Export child component for staggered children
export function AnimatedChild({ children, className = '' }: { children: ReactNode; className?: string }) {
    return (
        <motion.div className={className} variants={childVariants}>
            {children}
        </motion.div>
    );
}

// Text reveal animation for headlines
export function AnimatedText({
    text,
    className = '',
    as: Component = 'span',
    delay = 0
}: {
    text: string;
    className?: string;
    as?: 'span' | 'h1' | 'h2' | 'h3' | 'p';
    delay?: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const words = text.split(' ');

    return (
        <Component ref={ref} className={className}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    className="inline-block mr-[0.25em]"
                    initial={{ opacity: 0, y: 20, rotateX: 90 }}
                    animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                    transition={{
                        duration: 0.5,
                        delay: delay + i * 0.05,
                        ease: [0.25, 0.4, 0.25, 1]
                    }}
                    style={{ transformOrigin: 'bottom' }}
                >
                    {word}
                </motion.span>
            ))}
        </Component>
    );
}
