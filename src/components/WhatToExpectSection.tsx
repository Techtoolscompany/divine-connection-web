import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "What are your gatherings like?",
        answer: "Our gatherings are uplifting and welcoming, filled with heartfelt worship and practical biblical teaching. Come as you are and experience a warm community focused on faith and growth."
    },
    {
        question: "What happens when I visit?",
        answer: "When you visit, you’ll be warmly greeted and welcomed into a friendly, faith-filled environment. Expect uplifting worship, practical biblical teaching, and an atmosphere where you can feel at home and connect with God and others."
    },
    {
        question: "What should I bring?",
        answer: "Come as you are! You don’t need to bring anything except an open heart and a readiness to connect with God. A Bible and notebook can be helpful, but we’ll provide everything you need during the service."
    },
    {
        question: "How should I dress?",
        answer: "You’re welcome to dress however you feel comfortable! Whether you prefer casual attire or something more formal, you’ll find a friendly and accepting environment where you can focus on connecting with God and others."
    },
    {
        question: "Can I invite people to come with?",
        answer: "Absolutely! We encourage you to invite your friends, family, and anyone seeking a welcoming church community. Sharing your faith and bringing others to experience God’s presence is a wonderful way to grow together. Everyone is welcome here!"
    },
    {
        question: "What if we didn't answer your question?",
        answer: "We’re here to help! If you have a question we didn’t cover, feel free to reach out to us directly. Contact us through email, phone, or our social media platforms—we’d love to connect with you and provide the information you need.",
        isContact: true
    }
];

export default function WhatToExpectSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] translate-y-1/3 translate-x-1/3 pointer-events-none"></div>

            <div className="max-w-[1000px] mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-black uppercase tracking-widest text-xs mb-4">
                        Common Questions
                    </p>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900">
                        What to Expect
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-3xl transition-colors duration-300 ${openIndex === index ? 'bg-slate-50 border-transparent shadow-lg' : 'bg-transparent hover:bg-slate-50 border border-slate-100'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left px-8 py-6 flex items-center justify-between gap-4 outline-none"
                            >
                                <span className={`text-xl font-bold transition-colors ${openIndex === index ? 'text-purple-700' : 'text-slate-900'}`}>
                                    {faq.question}
                                </span>
                                <span className="relative flex items-center justify-center size-8">
                                    <span className={`absolute w-full h-0.5 bg-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-purple-600' : ''}`}></span>
                                    <span className={`absolute w-0.5 h-full bg-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-90 opacity-0' : ''}`}></span>
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-8 pb-8 text-slate-600 text-lg leading-relaxed font-medium">
                                            {faq.answer}
                                            {faq.isContact && (
                                                <div className="mt-4">
                                                    <a href="/contact" className="inline-flex items-center gap-2 font-bold text-purple-600 hover:text-purple-700 uppercase tracking-widest text-sm">
                                                        Contact Us <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
