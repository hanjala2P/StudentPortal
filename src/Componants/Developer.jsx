import React from 'react';
import { motion } from 'framer-motion';
import { Figma, Code2, ArrowUpRight, Github, Linkedin, Mail, MousePointer2, Cpu, Globe } from 'lucide-react';

const Developer = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden selection:bg-blue-600 selection:text-white">
      
      {/* 1. INTERACTIVE BACKGROUND (Subtle & Premium) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ x: [0, 80, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ x: [0, -60, 0], y: [0, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-15%] right-[-5%] w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[150px]"
        />
        {/* Grainy Noise Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 pointer-events-none"></div>
      </div>

      {/* 2. HERO SECTION - MD HANJALA BRANDING */}
      <section className="relative z-10 container mx-auto px-6 pt-32 pb-10 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for Creative Projects
          </div>
          
          <h1 className="text-[14vw] md:text-[11vw] font-black leading-[0.8] tracking-tighter uppercase italic">
            MD <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.4)" }}>HANJALA</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
             <span className="text-2xl md:text-4xl font-light text-gray-400 italic">Visual Designer</span>
             <span className="hidden md:block w-12 h-[1px] bg-gray-700"></span>
             <span className="text-2xl md:text-4xl font-black text-blue-600 italic">Frontend Dev.</span>
          </div>
        </motion.div>
      </section>

      {/* 3. MOVING TECH STRIP */}
      <div className="relative z-10 py-16 border-y border-white/5 bg-white/[0.01] backdrop-blur-sm overflow-hidden">
        <div className="flex gap-16 whitespace-nowrap animate-infinite-scroll">
          {["FIGMA MASTER", "REACT EXPERT", "UI ARCHITECT", "PIXEL PERFECT", "FRAMER MOTION"].map((text, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black text-white/10 uppercase italic tracking-tighter">
              {text} <span className="text-blue-600">/</span>
            </span>
          ))}
          {/* Loop repeat */}
          {["FIGMA MASTER", "REACT EXPERT", "UI ARCHITECT", "PIXEL PERFECT", "FRAMER MOTION"].map((text, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black text-white/10 uppercase italic tracking-tighter">
              {text} <span className="text-blue-600">/</span>
            </span>
          ))}
        </div>
      </div>

      {/* 4. CONTENT GRID (DESIGN & DEV) */}
      <section className="relative z-10 container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* designer side */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-7 bg-[#0a0a0a] rounded-[3.5rem] p-10 border border-white/5 relative group overflow-hidden"
          >
            <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <Figma size={300} strokeWidth={1}/>
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-10 shadow-xl shadow-blue-600/20">
                <MousePointer2 size={24} />
              </div>
              <h3 className="text-5xl font-black mb-6 italic uppercase tracking-tighter">Visual <br/> Identity.</h3>
              <p className="text-gray-400 text-lg max-w-sm leading-relaxed">I architect design systems that are not only beautiful but also scalable and user-centric.</p>
            </div>
          </motion.div>

          {/* dev side */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-5 bg-gradient-to-br from-blue-700 to-indigo-900 rounded-[3.5rem] p-10 flex flex-col justify-between group"
          >
            <div className="flex justify-between items-start">
               <div className="p-4 bg-black/20 rounded-2xl backdrop-blur-md border border-white/10">
                  <Code2 size={32} />
               </div>
               <ArrowUpRight size={40} className="group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div>
              <h3 className="text-4xl font-black italic uppercase leading-none mb-4">Functional <br/> Code.</h3>
              <p className="text-blue-100/70 font-medium">Turning Figma mockups into production-ready React applications with smooth animations.</p>
            </div>
          </motion.div>

          {/* Social / About Bento */}
          <div className="md:col-span-5 bg-[#0a0a0a] border border-white/5 rounded-[3rem] p-10 flex flex-col justify-center gap-6">
             <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-800 overflow-hidden border-2 border-blue-600/30">
                   <img src="https://avatars.githubusercontent.com/u/168889890?s=400&u=209dcaec4067245506bace6b8fde034ef1eff99d&v=4" alt="Md Hanjala" className="w-full h-full object-cover" />
                </div>
                <div>
                   <h4 className="font-black text-xl italic uppercase">Hanjala</h4>
                   <p className="text-xs font-bold text-gray-500 tracking-widest uppercase">Based in Bangladesh</p>
                </div>
             </div>
             <div className="flex gap-4">
                <a href="#" className="p-4 bg-white/5 rounded-2xl hover:bg-blue-600 transition-colors"><Linkedin size={20}/></a>
                <a href="#" className="p-4 bg-white/5 rounded-2xl hover:bg-blue-600 transition-colors"><Github size={20}/></a>
                <a href="#" className="p-4 bg-white/5 rounded-2xl hover:bg-blue-600 transition-colors"><Mail size={20}/></a>
             </div>
          </div>

          {/* big visual mockup card */}
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="md:col-span-7 bg-[#111] rounded-[3.5rem] overflow-hidden border border-white/5 group relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop" 
              className="w-full h-[400px] object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2s]"
              alt="Design Work"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10">
               <h3 className="text-3xl font-black italic uppercase">Digital Experience.</h3>
            </div>
          </motion.div>

        </div>
      </section>

      {/* FOOTER LARGE BRANDING */}
      <footer className="py-20 flex flex-col items-center">
        <h2 className="text-[18vw] font-black text-white/[0.02] leading-none select-none tracking-tighter uppercase italic">HANJALA</h2>
        <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.5em] mt-[-20px]">© 2026 Design & Coded by Md Hanjala</p>
      </footer>

    </div>
  );
};

export default Developer;