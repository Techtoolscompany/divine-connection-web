import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const events = [
    {
        title: 'Night of Worship',
        description: 'An evening of extended praise, prayer, and prophetic worship.',
        category: 'Worship',
        categoryColor: 'bg-purple-50 text-purple-600',
        date: { month: 'Oct', day: '24' },
        time: '7:00 PM',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEF6F2psbf58a_oyDQdQwEdF9YOV_Z7htVGu6Zn3Wya5I7YcYaCAupdja4wOybHutmHJ3sX10ec4c7j0KI3ucdQ_s1oyd_NaJNaqx06At12Y88jjH6FoJMUTV6mWhltgawJ2iDN_anSJ8fDMWnFYPB1_Q5gD--IAKSABLJKXW7is84IEbbArudsUaiEmqc23r3SEZ0TRqfPy6Bb64Ph5ySY37VDJnnG_B-JhmkwApRz0ZuL1mqZcUE4wrGok8EJIbYp0zsFOvv5p0'
    },
    {
        title: 'Food Drive',
        description: 'Serving local families with fresh groceries and warm meals.',
        category: 'Outreach',
        categoryColor: 'bg-blue-50 text-blue-600',
        date: { month: 'Oct', day: '28' },
        time: '10:00 AM',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDd5eDrgAntTlkLMYXJmwfDHtuztaocmFY5FhKXXq8WRsFwkhcd3Yn1eE_RJohKH1lVqVbR9TFclk5e2sjnrAu9WToMEDrPkLo-0sg71_xvxzxFXlLHA4P-IZEFKCo3_--OKaUGy1HxoVF1yY94TWDvjzpqFGXG7yybT7H2cEiSVA-30iu2lZQdWx0yLKSsfG6G7upVAJ-J9z3f0UnS73xyWj6nwvWuRY6wGUOB8oFYk-maD03IgDSaX4NENCnOi1bEO8E20iUEoKY'
    },
    {
        title: 'Young Adults',
        description: 'A casual gathering for fellowship, discussion, and connection.',
        category: 'Community',
        categoryColor: 'bg-slate-100 text-slate-600',
        date: { month: 'Nov', day: '02' },
        time: '6:30 PM',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSIphywLq5xfppO1c9M_s6QgNoWQ7-5is79nIAVNBwIyRYRXasOkGTybVDU7SthannfpRfK-vw8srJVsQyY1cUzV17V-yBLCgZYsCx2FWvsQa0XeYEXj7Yn2-qoeAWOpznZ81arSQXwByJlLajXGuVG24GLzpmXuiRUPmPCpSftuWgj6KdOwoTxfGtft6AnoSOs6y2_TnI3cUtBwMnyJTTVrUT0VyWmXDxpMCwBOl5ke86eNJWimKJdxLBUPxaPFYgFxLoNsIZf7U'
    }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3
        }
    }
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number]
        }
    }
};

export default function EventsPreviewSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    return (
        <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Header */}
                <motion.div
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
                >
                    <div className="space-y-2">
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-black uppercase tracking-widest text-xs">
                            Mark Your Calendar
                        </p>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">
                            Upcoming Events
                        </h2>
                    </div>
                    <motion.a
                        href="/events"
                        className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-purple-600 transition-colors"
                        whileHover={{ x: 5 }}
                    >
                        View Full Calendar
                        <motion.span
                            className="material-symbols-outlined text-lg"
                            initial={{ x: 0 }}
                            whileHover={{ x: 4 }}
                        >
                            arrow_forward
                        </motion.span>
                    </motion.a>
                </motion.div>

                {/* Events Grid */}
                <motion.div
                    className="grid md:grid-cols-3 gap-8 mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {events.map((event, index) => (
                        <EventCard key={event.title} event={event} index={index} />
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
                >
                    <motion.a
                        href="/events"
                        className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-black uppercase tracking-widest shadow-sm"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)',
                            borderColor: 'rgb(147, 51, 234)'
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        See All Events
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}

function EventCard({ event, index }: { event: typeof events[0]; index: number }) {
    return (
        <motion.a
            href="/events"
            className="group relative bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden"
            variants={cardVariants}
            whileHover={{
                y: -8,
                boxShadow: '0 25px 50px -12px rgba(147, 51, 234, 0.15)'
            }}
        >
            {/* Image */}
            <div className="h-48 bg-slate-100 relative overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${event.image})` }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                />

                {/* Date Badge with Pulse */}
                <motion.div
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg shadow-sm"
                    whileHover={{ scale: 1.1 }}
                    animate={{
                        boxShadow: [
                            '0 0 0 0 rgba(147, 51, 234, 0)',
                            '0 0 0 4px rgba(147, 51, 234, 0.1)',
                            '0 0 0 0 rgba(147, 51, 234, 0)'
                        ]
                    }}
                    transition={{
                        boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                    }}
                >
                    <div className="text-center leading-tight">
                        <span className="block text-xs font-bold uppercase tracking-widest text-slate-400">
                            {event.date.month}
                        </span>
                        <span className="block text-xl font-black text-slate-900">
                            {event.date.day}
                        </span>
                    </div>
                </motion.div>
            </div>

            {/* Content */}
            <div className="p-8">
                <div className={`inline-block px-3 py-1 rounded-full ${event.categoryColor} text-[10px] font-bold uppercase tracking-widest mb-4`}>
                    {event.category}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {event.title}
                </h3>
                <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                    {event.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    {event.time}
                </div>
            </div>
        </motion.a>
    );
}
