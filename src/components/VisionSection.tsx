import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

export default function VisionSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(textRef, { once: true, amount: 0.3 });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    });

    // Parallax for background
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
    const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

    return (
        <section ref={sectionRef} className="py-32 lg:py-40 bg-slate-900 relative overflow-hidden">
            {/* Parallax Background Image */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center opacity-15"
                style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuATA74iDj44-PMHnJXIDfpuUpgNJN3KuvYarNhYh2RQXL_PCAenVJXPrUyjUjN1YfpInJw7Z7W1WZ37U8e5tJJYjKtUjmt1_UeTzoJ8JbAxBBU9sdM0zC8TwZyfisyUl9W3o8Gw_Z-43TXSqzhBQhl4T9S7NqfQ9bpqhp6lf_VJauc52hi0BgUTbY-0J_OztLtN3mD0xQnwQkWZfig6CVs8j3GrCIJPNgkOOdS7olq0cO9FLo7AkJg1MQNwJ8vsyrKLrGAQUyI0FxM')",
                    y: backgroundY,
                    scale: backgroundScale
                }}
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/90" />

            {/* Animated Glow Orbs */}
            <motion.div
                className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[150px]"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.15, 0.25, 0.15],
                    x: [0, 50, 0]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2
                }}
            />

            {/* Top Decorative Line */}
            <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent via-purple-500 to-transparent"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
            />

            <div ref={textRef} className="relative z-10 max-w-4xl mx-auto text-center px-6">
                {/* Badge */}
                <motion.div
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-10 text-[10px] font-bold uppercase tracking-[0.3em] text-purple-300"
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                    transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                >
                    <span className="material-symbols-outlined text-[14px]">visibility</span>
                    Our Vision
                </motion.div>

                {/* Editorial Serif Headline */}
                <motion.h2
                    className="mb-10"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3 }}
                >
                    <motion.span
                        className="block text-lg md:text-xl font-bold uppercase tracking-[0.2em] text-slate-500 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        A Church That Looks Like
                    </motion.span>
                    <motion.span
                        className="block text-5xl md:text-7xl lg:text-8xl font-editorial text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-blue-300"
                        style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic' }}
                        initial={{ opacity: 0, y: 30, rotateX: 45 }}
                        animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
                    >
                        Heaven
                    </motion.span>
                </motion.h2>

                {/* Decorative Line */}
                <motion.div
                    className="w-20 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-10 rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                />

                {/* Description with serif styling */}
                <motion.p
                    className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-14 max-w-2xl mx-auto"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                >
                    We see a future where every person in our city encounters the life-changing love of Jesus. A community defined not by walls, but by the radical hospitality we extend to our neighbors.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row justify-center gap-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                >
                    <motion.a
                        href="/connect"
                        className="group relative px-10 py-5 bg-white text-slate-900 rounded-xl font-black uppercase tracking-widest overflow-hidden"
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {/* Animated gradient border on hover */}
                        <motion.div
                            className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity"
                        />
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            Plan A Visit
                            <motion.span
                                className="material-symbols-outlined text-lg"
                                initial={{ x: 0 }}
                                whileHover={{ x: 4 }}
                            >
                                arrow_forward
                            </motion.span>
                        </span>
                    </motion.a>

                    <motion.a
                        href="/about"
                        className="px-10 py-5 border-2 border-white/20 text-white rounded-xl font-bold uppercase tracking-widest hover:bg-white/5 hover:border-white/40 transition-all"
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Learn More
                    </motion.a>
                </motion.div>
            </div>

            {/* Bottom Decorative Line */}
            <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-t from-transparent via-blue-500 to-transparent"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
            />
        </section>
    );
}

