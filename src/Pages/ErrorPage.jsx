import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Ghost, Map } from 'lucide-react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-[#F1F4F9] flex items-center justify-center p-6 overflow-hidden relative">
      
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-200/40 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* --- 404 ANIMATION --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="relative"
        >
          <h1 className="text-[25vw] md:text-[15vw] font-black leading-none tracking-tighter text-[#1A1C2E] opacity-5 select-none">
            404
          </h1>
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="p-8 bg-white rounded-[3rem] shadow-2xl shadow-indigo-100 border border-indigo-50 flex flex-col items-center">
              <Ghost size={80} className="text-indigo-600 mb-4 animate-bounce" />
              <h2 className="text-3xl font-black italic uppercase tracking-tighter text-[#1A1C2E]">Lost in Space?</h2>
            </div>
          </motion.div>
        </motion.div>

        {/* --- ERROR MESSAGE --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-32 space-y-6"
        >
          <p className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.5em]">
            Error Code: Page Not Found
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-[#1E2022] max-w-md mx-auto leading-relaxed">
            The page you're looking for was moved, removed, or never existed in Hanjala's Universe.
          </h3>

          {/* --- ACTION BUTTONS --- */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-8 py-4 bg-white border border-gray-100 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-gray-50 transition-all shadow-sm"
            >
              <ArrowLeft size={16} /> Go Back
            </button>
            <a 
              href="/" 
              className="flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
            >
              <Home size={16} /> Return Home
            </a>
          </div>
        </motion.div>

        {/* --- FOOTER LOGO --- */}
        <div className="mt-20">
          <p className="text-[10px] font-black text-indigo-300 uppercase tracking-[1em]">MD HANJALA</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;