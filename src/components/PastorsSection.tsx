import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function PastorsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    return (
        <section ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden bg-slate-50">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-100/40 to-transparent" />
                <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-100/40 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Image Column with Mask Reveal */}
                    <motion.div
                        className="relative group order-2 lg:order-1"
                        initial={{ opacity: 0, x: -60 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
                    >
                        {/* Glow Effect */}
                        <motion.div
                            className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 blur-xl"
                            animate={isInView ? { opacity: 0.2 } : { opacity: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />

                        {/* Image Container with Clip Path Reveal */}
                        <motion.div
                            className="relative rounded-2xl overflow-hidden shadow-2xl"
                            initial={{ clipPath: 'inset(0 100% 0 0)' }}
                            animate={isInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
                            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
                        >
                            <motion.img
                                src="https://www.dcpministry.org/wp-content/uploads/2023/03/home3-11.jpg"
                                alt="Pastor Rob Jones"
                                className="w-full h-full object-cover"
                                initial={{ scale: 1.2 }}
                                animate={isInView ? { scale: 1 } : {}}
                                transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                                whileHover={{ scale: 1.05 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                        </motion.div>

                        {/* Decorative Element */}
                        <motion.div
                            className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full opacity-0 blur-xl"
                            animate={isInView ? { opacity: 0.3, scale: [0.8, 1.2, 1] } : {}}
                            transition={{ duration: 1.5, delay: 0.8 }}
                        />
                    </motion.div>

                    {/* Content Column */}
                    <div className="space-y-8 order-1 lg:order-2">
                        {/* Header */}
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
                        >
                            <div className="inline-flex items-center space-x-2">
                                <motion.span
                                    className="h-px w-8 bg-purple-600"
                                    initial={{ width: 0 }}
                                    animate={isInView ? { width: 32 } : {}}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                />
                                <span className="text-purple-600 font-bold tracking-wider uppercase text-sm">Leadership</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                                Pastor <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Rob Jones</span>
                            </h2>
                            <p className="text-xl text-slate-500 font-medium">Senior Pastor</p>
                        </motion.div>

                        {/* Bio - Condensed for better impact */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
                        >
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Pastor Rob Jones is passionate about equipping you to live a purpose-filled life through faith, strong family bonds, and wise financial stewardship.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                With a vision to build a thriving community, he invites you to discover a church where you can connect, grow, and walk boldly in your God-given potential.
                            </p>
                        </motion.div>

                        {/* Quote with editorial serif */}
                        <motion.p
                            className="text-2xl md:text-3xl text-slate-900"
                            style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic' }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
                        >
                            "You will love it here!"
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}
