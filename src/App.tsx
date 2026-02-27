import { motion } from 'motion/react';
import { ArrowUpRight, Youtube, Cloud } from 'lucide-react';

// 대표 참여작 목록입니다.
// 각 항목의 'image' 속성 값에 원하시는 이미지 링크를 넣으시면 됩니다.
// 예: image: 'https://내이미지링크.com/image.jpg'
const WORKS = [
  { id: '04', title: 'Dawn Of Llight', role: '계명대학교(2026)', year: '2025', image: 'https://od.lk/s/OF8yMDI2MjEzNzZf/4.jpg' },
  { id: '02', title: 'The devil within : SATGAT', role: 'Newcore games', year: '2024', image: 'https://od.lk/s/OF8yMDI2MjEzNzVf/2.jpg' },
  { id: '01', title: '𝕸𝖆𝖈𝖌𝖚𝖋𝖋𝖎𝖓', role: '청강문화산업대학교(2024)', year: '2023', image: 'https://od.lk/s/OF8yMDI2MjEzNzhf/1.jpg' },
  { id: '03', title: 'Maplestory M : Kanna PV', role: 'NEXON games', year: '2023', image: 'https://od.lk/s/OF8yMDI2MjEzNzdf/3.jpg' },
  { id: '05', title: '아모레퍼시픽 : 북촌 조향사의 집 展 (2023)', role: 'Amore Pacific', year: '2023', image: 'https://od.lk/s/OF8yMDI2Mzk4MTRf/amorepacific.webp' },
];

export default function App() {
  return (
    <div className="min-h-screen text-[#e5e5e5] selection:bg-red-500/30 selection:text-white">
      <div className="noise-bg pointer-events-none"></div>
      
      {/* Top Right Halftone Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-bl from-[#f02222]/20 to-transparent blur-3xl"></div>
        <div className="absolute inset-0 halftone-overlay" style={{ maskImage: 'radial-gradient(circle at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)', WebkitMaskImage: 'radial-gradient(circle at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)' }}></div>
      </div>
      
      <main className="pt-24 pb-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        
        {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col justify-center relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h1 className="text-display uppercase flex flex-col items-start w-full max-w-4xl">
              <span className="text-[8vw] md:text-[4.5vw] leading-none font-bold tracking-[0.2em] scale-y-110 transform origin-left">
                CAIN
              </span>
              <span className="text-[#f02222] text-[9vw] md:text-[6.5vw] leading-none tracking-widest font-bold scale-x-100 transform origin-left mt-2 md:mt-4">
                _LITTLEDEATH
              </span>
            </h1>
          </motion.div>
          
          <motion.div 
            className="mt-8 md:mt-12 relative overflow-hidden pl-6 md:pl-8"
            initial={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          >
            {/* Avant-garde decorative line */}
            <div className="absolute left-0 top-1 bottom-1 w-[1px] bg-white/20">
              <div className="absolute top-0 left-[-2px] w-[5px] h-[5px] bg-[#f02222]"></div>
              <div className="absolute bottom-0 left-[-2px] w-[5px] h-[5px] bg-[#f02222]"></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-lg md:text-xl font-light leading-relaxed max-w-2xl break-keep space-y-4">
                <p>상상하던 것을 구현합니다.</p>
                <p>감정의 흐름을 따라, 기억에 각인되는 음악을 만듭니다. </p>
              </div>
            </div>
          </motion.div>
          
          {/* Specs / Education / Awards Section */}
          <motion.div 
            className="mt-32 md:mt-48"
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-2">
              <div className="w-1.5 h-1.5 bg-[#f02222]"></div>
              <h3 className="text-mono text-xs text-[#666] tracking-widest uppercase">Background & Awards</h3>
            </div>
            <ul className="space-y-2 text-sm font-light text-[#a0a0a0]">
              <li className="flex justify-between items-start gap-4">
                <span className="text-white">2019 국제 안토닌 드보르작 작곡콩쿨 실내악 부문 특별상</span>
                <span className="text-mono text-xs text-[#666] shrink-0">2019</span>
              </li>
              <li className="flex justify-between items-start gap-4">
                <span>한국예술종합학교 음악원 작곡과</span>
                <span className="text-mono text-xs text-[#666] shrink-0">2016 - 2020</span>
              </li>
            </ul>
          </motion.div>
        </section>

        {/* Experience Section */}
        <motion.section 
          className="mt-16"
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-2.5 h-2.5 bg-[#f02222]"></div>
              <h2 className="text-display text-3xl md:text-4xl tracking-tight uppercase">P R O J E C T S</h2>
            </div>
            <span className="text-mono text-xs text-[#666] tracking-widest hidden md:inline-block">EXPERIENCE</span>
          </div>

          <div className="flex flex-col mt-4">
            {[
              { year: '2026', title: '≪Dawn of light≫ 외 인디 애니메이션 다수', role: 'Animation' },
              { year: '2025', title: '≪The devil within - SATGAT≫', role: 'Game' },
              { year: '2025', title: 'SANDY FLOOR - ≪Great toy showdown≫', role: 'Game' },
              { year: '2024', title: '메이플스토리 M - 칸나 PV', role: 'Animation' },
              { year: '2023', title: '아모레퍼시픽 - 북촌 조향사의 집 展', role: 'Promotion' },
              { year: '2022 ~ 2024', title: '≪Macguffin≫ 외 인디 애니메이션 다수', role: 'Animation' },
            ].map((item, idx) => (
              <div key={idx} className="group flex flex-col md:flex-row md:items-center justify-between py-1 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-sm">
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-8 mb-1 md:mb-0">
                  <span className="text-mono text-sm text-[#f02222]/80">{item.year}</span>
                  <span className="text-lg font-light tracking-wide group-hover:text-white transition-colors">{item.title}</span>
                </div>
                <span className="text-mono text-xs text-[#666]">{item.role}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Portfolio Section (Thumbnails) */}
        <motion.section 
          className="mt-32"
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-end justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="w-2.5 h-2.5 bg-[#f02222]"></div>
              <h2 className="text-display text-4xl md:text-5xl tracking-tight uppercase">W O R K</h2>
            </div>
            <span className="text-mono text-xs text-[#666] tracking-widest hidden md:inline-block">참여 작업</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {WORKS.map((work, idx) => (
              <div 
                key={work.id}
                className="group"
              >
                <div className="relative overflow-hidden hardware-border aspect-[4/3] mb-4 bg-[#141414]">
                  {/* Red overlay on hover */}
                  <div className="absolute inset-0 bg-[#f02222]/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  
                  <img 
                    src={work.image} 
                    alt={work.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium tracking-wide group-hover:text-[#f02222] transition-colors">{work.title}</h3>
                    <p className="text-[#666] text-sm mt-1 font-light">{work.role}</p>
                  </div>
                  <span className="text-mono text-xs text-[#666]">{work.year}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Links Section (Replacing Sonic Arsenal) */}
        <motion.section 
          className="mt-32"
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-end justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-2.5 h-2.5 bg-[#f02222]"></div>
              <h2 className="text-display text-3xl md:text-4xl tracking-tight uppercase">S I T E</h2>
            </div>
            <span className="text-mono text-xs text-[#666] tracking-widest hidden md:inline-block">NETWORKS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* YouTube Card */}
            {/* 유튜브 링크는 아래 href="#" 의 # 대신 링크를 넣으시면 됩니다. 예: href="https://youtube.com/..." */}
            <a href="https://www.youtube.com/@cain_littledeath" target="_blank" rel="noopener noreferrer" className="group hardware-panel p-8 relative overflow-hidden flex flex-col justify-between min-h-[240px] transition-all hover:border-[#f02222]/30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#f02222]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-[#f02222]/10 transition-colors duration-500"></div>
              <div className="halftone-overlay"></div>
              <div className="flex justify-between items-start z-10">
                <Youtube size={32} strokeWidth={1.5} className="text-[#666] group-hover:text-[#f02222] transition-colors" />
                <ArrowUpRight size={20} className="text-[#666] group-hover:text-white transition-colors" />
              </div>
              
              <div className="z-10 mt-12">
                <h3 className="text-display text-2xl uppercase mb-2 group-hover:text-white transition-colors">YouTube</h3>
                <p className="text-[#666] text-sm font-light break-keep">개인 작업물</p>
              </div>

              {/* Red Matrix Accent */}
              <div className="absolute bottom-6 right-6 grid grid-cols-4 grid-rows-4 gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full ${Math.random() > 0.6 ? 'bg-[#f02222]' : 'bg-white/10'}`}></div>
                ))}
              </div>
            </a>

            {/* SoundCloud Card */}
            {/* 사운드클라우드 링크는 아래 href="#" 의 # 대신 링크를 넣으시면 됩니다. 예: href="https://soundcloud.com/..." */}
            <a href="https://soundcloud.com/cain_soundtrack" target="_blank" rel="noopener noreferrer" className="group hardware-panel p-8 relative overflow-hidden flex flex-col justify-between min-h-[240px] transition-all hover:border-[#f02222]/30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#f02222]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-[#f02222]/10 transition-colors duration-500"></div>
              <div className="halftone-overlay"></div>
              <div className="flex justify-between items-start z-10">
                <Cloud size={32} strokeWidth={1.5} className="text-[#666] group-hover:text-[#f02222] transition-colors" />
                <ArrowUpRight size={20} className="text-[#666] group-hover:text-white transition-colors" />
              </div>
              
              <div className="z-10 mt-12">
                <h3 className="text-display text-2xl uppercase mb-2 group-hover:text-white transition-colors">SoundCloud</h3>
                <p className="text-[#666] text-sm font-light break-keep">데모 및 포트폴리오</p>
              </div>

              {/* Red Matrix Accent */}
              <div className="absolute bottom-6 right-6 grid grid-cols-4 grid-rows-4 gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full ${Math.random() > 0.6 ? 'bg-[#f02222]' : 'bg-white/10'}`}></div>
                ))}
              </div>
            </a>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
          initial={{ opacity: 0, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: false, margin: "0px" }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div className="text-display text-2xl uppercase mb-4">C O N T A C T</div>
            <div className="flex flex-col gap-2">
              <a href="mailto:imee1030@naver.com" className="text-mono text-base md:text-lg text-[#a0a0a0] hover:text-red-400 transition-colors flex items-center gap-2">
                imee1030@naver.com <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          
          <div className="flex gap-8 text-mono text-xs tracking-widest text-[#666] uppercase">
            <span className="opacity-50">© {new Date().getFullYear()} CAIN_LITTLEDEATH</span>
          </div>
        </motion.footer>

      </main>
    </div>
  );
}
