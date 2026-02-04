import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
    {
        title: 'Learn',
        description: 'Discover our values, history, and mission.',
        icon: 'school',
        color: 'bg-purple-600',
        shadowColor: 'shadow-purple-600/30',
        href: '/about',
        cta: 'Explore',
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop&q=60'
    },
    {
        title: 'Worship',
        description: 'Join us for service times and connection.',
        icon: 'schedule',
        color: 'bg-blue-600',
        shadowColor: 'shadow-blue-600/30',
        href: '/contact',
        cta: 'Visit Us',
        image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&auto=format&fit=crop&q=60'
    },
    {
        title: 'Get Involved',
        description: 'Serve the community and find your purpose.',
        icon: 'volunteer_activism',
        color: 'bg-indigo-600',
        shadowColor: 'shadow-indigo-600/30',
        href: '/events',
        cta: 'Join In',
        image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&auto=format&fit=crop&q=60'
    },
    {
        title: 'Give',
        description: 'Support the mission with generosity.',
        icon: 'favorite',
        color: 'bg-emerald-600',
        shadowColor: 'shadow-emerald-600/30',
        href: '/giving',
        cta: 'Donate',
        image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&auto=format&fit=crop&q=60'
    }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 60,
        rotateX: 15
    },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number]
        }
    }
};

export default function NextStepsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    return (
        <section ref={sectionRef} className="py-32 lg:py-40 bg-slate-50 relative overflow-hidden">
            {/* Decorative gradient orb */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-200/30 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-200/30 rounded-full blur-[80px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                >
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-purple-600 mb-4">Get Connected</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-slate-900 mb-6">
                        Your Next Steps
                    </h2>
                    <p className="text-lg md:text-xl text-slate-500 leading-relaxed" style={{ fontFamily: '"Playfair Display", serif' }}>
                        No matter where you are in your faith journey, there is always a next step.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-2000"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {steps.map((step, index) => (
                        <StepCard key={step.title} step={step} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
    return (
        <motion.a
            href={step.href}
            className="group relative h-[400px] rounded-3xl overflow-hidden shadow-lg preserve-3d cursor-pointer"
            variants={cardVariants}
            whileHover={{
                y: -10,
                rotateY: -5,
                rotateX: 5,
                scale: 1.02,
                transition: { duration: 0.3, ease: 'easeOut' }
            }}
            style={{ transformStyle: 'preserve-3d' }}
        >
            {/* Background Image */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${step.image})` }}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

            {/* Glow Effect on Hover */}
            <motion.div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${step.color}`}
                style={{ filter: 'blur(40px)' }}
            />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-8">


                {/* Title */}
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                    {step.title}
                </h3>

                {/* Description - reveals on hover */}
                <motion.p
                    className="text-slate-200 text-sm font-medium mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {step.description}
                </motion.p>

                {/* CTA */}
                <div className="flex items-center text-white/80 text-sm uppercase tracking-widest font-bold">
                    {step.cta}
                    <motion.span
                        className="material-symbols-outlined text-base ml-2"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                    >
                        arrow_forward
                    </motion.span>
                </div>
            </div>
        </motion.a>
    );
}
