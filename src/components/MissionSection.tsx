import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const missions = [
  {
    id: 1,
    title: "Faith",
    description: "Equipping individuals to live purpose-filled lives through faith. We believe in the power of faith to transform lives.",
    icon: "church",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCc4poM7BHWaRvVqHUVDEl9ZluQTvXlkhILo9EeYh8els7V_0dDozeUsMVo0FAeL1ZEkQyhItjmsQ63o24XKgqrBo2fsdaiR0SMTd4Vhy1cgSRESwr1b4ov9hPYVfL31hssvE3bSadQA8QvHNXeZch6EXMVnoTD08jjgvBYS3i3RS74ixNA0fss6dpygO-1nuq8KOST3jNyGbC-VBMex9_YGlvVVR1vnPA8PabV4IMC6VNHPngq8aMQhyYQCZLjfJMLxY_P4mvrFC4"
  },
  {
    id: 2,
    title: "Family",
    description: "Building strong family bonds and fostering a thriving community for all generations. We are dedicated to healthy, God-centered families.",
    icon: "diversity_3",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgmurGXmKVPX148DHpsAmYx5ansY2AH8SNDm2nlXldlx47ZsB133XaEhLfodJzia-Qw8S32PEeE8szukeHXNbrXJCPxtI0EjGGbG38gW3dDr6l6Cu4cfEg_aHq5nSeDozlrhF-zDZD5S-tgnuHwJoyHGWqwr9N-Ak_3VoIXS_uHUt9_M0CycrA1zb6-DD063EcFwafvWd3Z_N-_Tpl144B0cQRVWwcgFxl2cSJCQx00LQC3kWdX8eOuTaRN0hgHTRaU0iJhbQAdS0"
  },
  {
    id: 3,
    title: "Finances",
    description: "Teaching wise financial stewardship for every aspect of life. Empowering you to achieve financial freedom and generosity.",
    icon: "savings",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd5eDrgAntTlkLMYXJmwfDHtuztaocmFY5FhKXXq8WRsFwkhcd3Yn1eE_RJohKH1lVqVbR9TFclk5e2sjnrAu9WToMEDrPkLo-0sg71_xvxzxFXlLHA4P-IZEFKCo3_--OKaUGy1HxoVF1yY94TWDvjzpqFGXG7yybT7H2cEiSVA-30iu2lZQdWx0yLKSsfG6G7upVAJ-J9z3f0UnS73xyWj6nwvWuRY6wGUOB8oFYk-maD03IgDSaX4NENCnOi1bEO8E20iUEoKY"
  }
];

export default function MissionSection() {
  const [activeId, setActiveId] = useState<number | null>(1);

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-black uppercase tracking-widest text-xs">
            Our Mission
          </p>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-slate-900">
            Faith, Family, <br />
            <span className="text-slate-300">And Finances.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 h-[600px] lg:h-[500px]">
          {missions.map((mission) => (
            <motion.div
              key={mission.id}
              className={`relative rounded-3xl overflow-hidden cursor-pointer shadow-lg`}
              initial={false}
              animate={{
                flex: activeId === mission.id ? 3 : 1
              }}
              transition={{
                duration: 0.6,
                ease: [0.32, 0.72, 0, 1] // Custom bezier for liquid smooth feeling
              }}
              onClick={() => setActiveId(mission.id)}
              onHoverStart={() => setActiveId(mission.id)}
              layout
            >
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${mission.image})`,
                }}
                animate={{
                  scale: activeId === mission.id ? 1.05 : 1,
                  filter: activeId === mission.id ? 'brightness(1)' : 'brightness(0.9)'
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent transition-opacity duration-300 ${activeId === mission.id ? 'opacity-80' : 'opacity-60 hover:opacity-70'}`} />

              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`size-12 rounded-xl flex items-center justify-center backdrop-blur-md transition-colors duration-500 ${activeId === mission.id ? 'bg-white text-purple-600' : 'bg-white/10 text-white'}`}>
                    <span className="material-symbols-outlined text-2xl">{mission.icon}</span>
                  </div>
                  {activeId !== mission.id && (
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-xl font-bold text-white uppercase tracking-tight lg:hidden"
                    >
                      {mission.title}
                    </motion.h3>
                  )}
                </div>

                <AnimatePresence mode="popLayout">
                  {activeId === mission.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                      className="space-y-4"
                    >
                      <h3 className="text-3xl font-black text-white uppercase tracking-tight">
                        {mission.title}
                      </h3>
                      <p className="text-white/80 text-lg font-medium leading-relaxed max-w-xl">
                        {mission.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
