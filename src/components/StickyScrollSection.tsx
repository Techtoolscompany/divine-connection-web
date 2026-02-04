import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const pillars = [
    {
        id: 1,
        number: '01',
        title: 'Faith',
        subtitle: 'Rooted in Christ',
        description: 'Equipping you to live a purpose-filled life through the transforming power of faith.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCc4poM7BHWaRvVqHUVDEl9ZluQTvXlkhILo9EeYh8els7V_0dDozeUsMVo0FAeL1ZEkQyhItjmsQ63o24XKgqrBo2fsdaiR0SMTd4Vhy1cgSRESwr1b4ov9hPYVfL31hssvE3bSadQA8QvHNXeZch6EXMVnoTD08jjgvBYS3i3RS74ixNA0fss6dpygO-1nuq8KOST3jNyGbC-VBMex9_YGlvVVR1vnPA8PabV4IMC6VNHPngq8aMQhyYQCZLjfJMLxY_P4mvrFC4',
        color: 'from-purple-600 to-purple-400',
        icon: 'church'
    },
    {
        id: 2,
        number: '02',
        title: 'Family',
        subtitle: 'Stronger Together',
        description: 'Building God-centered homes and fostering a thriving community for all generations.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgmurGXmKVPX148DHpsAmYx5ansY2AH8SNDm2nlXldlx47ZsB133XaEhLfodJzia-Qw8S32PEeE8szukeHXNbrXJCPxtI0EjGGbG38gW3dDr6l6Cu4cfEg_aHq5nSeDozlrhF-zDZD5S-tgnuHwJoyHGWqwr9N-Ak_3VoIXS_uHUt9_M0CycrA1zb6-DD063EcFwafvWd3Z_N-_Tpl144B0cQRVWwcgFxl2cSJCQx00LQC3kWdX8eOuTaRN0hgHTRaU0iJhbQAdS0',
        color: 'from-blue-600 to-blue-400',
        icon: 'diversity_3'
    },
    {
        id: 3,
        number: '03',
        title: 'Finances',
        subtitle: 'Wise Stewardship',
        description: 'Teaching biblical principles for financial freedom and generous living.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDd5eDrgAntTlkLMYXJmwfDHtuztaocmFY5FhKXXq8WRsFwkhcd3Yn1eE_RJohKH1lVqVbR9TFclk5e2sjnrAu9WToMEDrPkLo-0sg71_xvxzxFXlLHA4P-IZEFKCo3_--OKaUGy1HxoVF1yY94TWDvjzpqFGXG7yybT7H2cEiSVA-30iu2lZQdWx0yLKSsfG6G7upVAJ-J9z3f0UnS73xyWj6nwvWuRY6wGUOB8oFYk-maD03IgDSaX4NENCnOi1bEO8E20iUEoKY',
        color: 'from-emerald-600 to-emerald-400',
        icon: 'savings'
    }
];

export default function StickyScrollSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    // Transform scroll progress to active index (0, 1, 2)
    const activeIndex = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 0, 1, 2]);

    return (
        <section ref={containerRef} className="relative bg-slate-50" style={{ height: '300vh' }}>
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left: Pinned Image Stack */}
                        <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden">
                            {pillars.map((pillar, index) => (
                                <PillarImage
                                    key={pillar.id}
                                    pillar={pillar}
                                    index={index}
                                    scrollYProgress={scrollYProgress}
                                />
                            ))}

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                            {/* Progress Indicators */}
                            <div className="absolute bottom-8 left-8 flex gap-2">
                                {pillars.map((_, index) => (
                                    <ProgressDot key={index} index={index} scrollYProgress={scrollYProgress} />
                                ))}
                            </div>
                        </div>

                        {/* Right: Scrolling Content */}
                        <div className="relative">
                            {/* Section Label */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="mb-8"
                            >
                                <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-black uppercase tracking-widest text-xs mb-4">
                                    Our Foundation
                                </p>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-slate-900">
                                    Faith, Family,<br />
                                    <span className="text-slate-300">& Finances.</span>
                                </h2>
                            </motion.div>

                            {/* Content Blocks */}
                            <div className="space-y-6">
                                {pillars.map((pillar, index) => (
                                    <PillarContent
                                        key={pillar.id}
                                        pillar={pillar}
                                        index={index}
                                        scrollYProgress={scrollYProgress}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Individual Image Layer with scroll-linked opacity
function PillarImage({ pillar, index, scrollYProgress }: {
    pillar: typeof pillars[0];
    index: number;
    scrollYProgress: any;
}) {
    // Each image fades in at its segment
    const opacity = useTransform(
        scrollYProgress,
        [
            index * 0.33 - 0.1,
            index * 0.33,
            (index + 1) * 0.33,
            (index + 1) * 0.33 + 0.1
        ],
        [0, 1, 1, index === 2 ? 1 : 0]
    );

    const scale = useTransform(
        scrollYProgress,
        [index * 0.33, (index + 1) * 0.33],
        [1.1, 1]
    );

    return (
        <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
                backgroundImage: `url(${pillar.image})`,
                opacity,
                scale,
                zIndex: index
            }}
        />
    );
}

// Progress Dot Indicator
function ProgressDot({ index, scrollYProgress }: { index: number; scrollYProgress: any }) {
    const isActive = useTransform(
        scrollYProgress,
        [index * 0.33, index * 0.33 + 0.01, (index + 1) * 0.33 - 0.01, (index + 1) * 0.33],
        [0, 1, 1, index === 2 ? 1 : 0]
    );

    const width = useTransform(isActive, [0, 1], ['12px', '32px']);
    const backgroundColor = useTransform(isActive, [0, 1], ['rgba(255,255,255,0.3)', 'rgba(255,255,255,1)']);

    return (
        <motion.div
            className="h-3 rounded-full"
            style={{ width, backgroundColor }}
        />
    );
}

// Content Block with scroll-linked animations
function PillarContent({ pillar, index, scrollYProgress }: {
    pillar: typeof pillars[0];
    index: number;
    scrollYProgress: any;
}) {
    const opacity = useTransform(
        scrollYProgress,
        [
            index * 0.33 - 0.05,
            index * 0.33 + 0.05,
            (index + 1) * 0.33 - 0.05,
            (index + 1) * 0.33 + 0.05
        ],
        [0.3, 1, 1, index === 2 ? 1 : 0.3]
    );

    const y = useTransform(
        scrollYProgress,
        [index * 0.33, (index + 1) * 0.33],
        [20, 0]
    );

    const scale = useTransform(
        scrollYProgress,
        [index * 0.33, index * 0.33 + 0.1],
        [0.95, 1]
    );

    return (
        <motion.div
            className="relative p-6 rounded-2xl border border-slate-200/50 bg-white/50 backdrop-blur-sm transition-shadow hover:shadow-lg"
            style={{ opacity, y, scale }}
        >
            <div className="flex items-start gap-5">
                {/* Number */}
                <div className={`text-5xl font-black bg-gradient-to-br ${pillar.color} bg-clip-text text-transparent opacity-20`}>
                    {pillar.number}
                </div>

                {/* Content */}
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">

                        <div>
                            <h3 className="text-xl font-black uppercase tracking-tight text-slate-900">
                                {pillar.title}
                            </h3>
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                                {pillar.subtitle}
                            </p>
                        </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                        {pillar.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
