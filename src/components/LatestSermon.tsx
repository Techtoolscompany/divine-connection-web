import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LatestSermon() {
    const [isPlaying, setIsPlaying] = useState(false);

    // Facebook Video Integration
    // To get a video URL: Go to the video on Facebook -> Click Share -> Copy Link
    const FACEBOOK_VIDEO_URL = "https://www.facebook.com/facebook/videos/10153231379946729/"; // Placeholder (Zuckerberg generic)

    return (
        <section className="py-32 lg:py-40 px-4 bg-white relative">
            {/* Top decorative line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-transparent via-purple-300 to-transparent" />
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="space-y-2">
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-black uppercase tracking-widest text-xs">Featured Content</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-slate-900">Latest Sermon</h2>
                    </div>
                    <p className="max-w-md text-slate-500 text-sm">
                        Missed our last service? Catch up on the powerful message from our pastoral team.
                    </p>
                </div>

                <div className="relative group p-4 border border-slate-100 shadow-2xl shadow-slate-200/50 bg-white rounded-[2rem] overflow-hidden">
                    <div className="aspect-video w-full rounded-2xl bg-slate-900 flex items-center justify-center relative overflow-hidden">
                        {!isPlaying ? (
                            <div
                                className="absolute inset-0 bg-cover bg-center cursor-pointer group-hover:scale-105 transition-transform duration-700"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDCu9FgeT9Pxs_NHlwIeG6laz624F4V6E1JN3heqfL6cyhkvAc7w40OYJC6U5v0fjmWIxO-fK3Tzdnyem_nodBuWo7IFKGWl9P-ETy6PSE8XE7u1LJPvjN3Rk519vpa-AuIlymLrTRB466nFTAfNbg_h6wOVkASrX-AE-Wjz81BFUyBcOiCuR4wrgTOSDlgyrdf2anXLCLUcYHacU3AMJqS-W-7UpyEMKNdmz44w-u05IAxmkZQiDUR6UBnB4ZSg9CvFsr-WkQNARA')" }}
                                onClick={() => setIsPlaying(true)}
                            >
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>

                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative z-10 size-24 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl"
                                        onClick={() => setIsPlaying(true)}
                                    >
                                        <svg className="size-10 fill-current translate-x-1" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </motion.button>
                                </div>

                                {/* Bottom Overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col gap-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                                    <div className="flex items-center gap-4">
                                        <span className="px-2 py-1 rounded bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider">Facebook</span>
                                        <span className="text-xs font-bold text-white/80">Latest Message</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight">
                                        The Strength of Stillness
                                    </h3>
                                </div>
                            </div>
                        ) : (
                            <iframe
                                src={`https://www.facebook.com/plugins/video.php?height=314&href=${encodeURIComponent(FACEBOOK_VIDEO_URL)}&show_text=false&width=560&t=0`}
                                width="100%"
                                height="100%"
                                style={{ border: 'none', overflow: 'hidden' }}
                                scrolling="no"
                                frameBorder="0"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                className="w-full h-full rounded-xl bg-black"
                            ></iframe>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
