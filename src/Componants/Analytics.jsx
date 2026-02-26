import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Star, ArrowUpRight, Activity, Zap, ShieldCheck, Clock, Bell } from 'lucide-react';

const Analytics = () => {
  const stats = [
    { label: "Class 6", value: 85, color: "bg-indigo-600" },
    { label: "Class 7", value: 65, color: "bg-blue-600" },
    { label: "Class 8", value: 90, color: "bg-indigo-500" },
    { label: "Class 9", value: 75, color: "bg-blue-500" },
    { label: "Class 10", value: 95, color: "bg-indigo-700" },
  ];

  const activities = [
    { user: "Admin", action: "Updated Grade 10 results", time: "2m ago" },
    { user: "System", action: "Automatic cloud backup sync", time: "15m ago" },
    { user: "Hanjala", action: "Configured API endpoint", time: "1h ago" },
  ];

  return (
    <div className="min-h-screen bg-[#F1F4F9] text-[#1E2022] p-6 md:p-12 selection:bg-indigo-100">
      
      {/* --- HEADER --- */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
      >
        <div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase italic text-[#1A1C2E]">
            Data <span className="text-indigo-600">Visuals.</span>
          </h1>
          <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.4em] mt-2">
            Dynamic System Monitoring Dashboard
          </p>
        </div>
        <div className="flex gap-3">
            <button className="p-4 bg-white rounded-2xl shadow-sm border border-indigo-50 hover:bg-indigo-50 transition-colors">
                <Bell size={20} className="text-indigo-600"/>
            </button>
            <div className="px-6 py-4 bg-[#1A1C2E] text-white rounded-2xl flex items-center gap-3">
                <Zap size={18} className="text-blue-400 fill-blue-400"/>
                <span className="font-black text-xs uppercase tracking-widest">Active Live</span>
            </div>
        </div>
      </motion.div>

      {/* --- STATS CARDS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: "Total Students", val: "1,240", icon: <Users size={20}/>, up: "+12%", color: "text-indigo-600" },
          { label: "Avg. GPA", val: "4.15", icon: <Star size={20}/>, up: "+0.5", color: "text-blue-600" },
          { label: "Passing Rate", val: "94%", icon: <TrendingUp size={20}/>, up: "+2%", color: "text-indigo-600" },
          { label: "System Health", val: "98%", icon: <ShieldCheck size={20}/>, up: "Stable", color: "text-blue-600" },
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white border border-indigo-50/50 p-7 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.02)] relative group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`p-4 bg-gray-50 ${item.color} rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all`}>
                {item.icon}
              </div>
              <span className="text-emerald-500 text-[10px] font-black tracking-widest bg-emerald-50 px-2 py-1 rounded-full">{item.up}</span>
            </div>
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{item.label}</p>
            <h3 className="text-4xl font-black mt-1 tracking-tighter italic">{item.val}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- PERFORMANCE CHART (Large) --- */}
        <motion.div 
          className="lg:col-span-2 bg-[#1A1C2E] text-white rounded-[3.5rem] p-10 shadow-2xl shadow-indigo-100 overflow-hidden relative"
        >
          <div className="flex justify-between items-center mb-16 relative z-10">
            <h3 className="text-xl font-black uppercase italic tracking-widest">Growth Index</h3>
            <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
            </div>
          </div>

          <div className="flex items-end justify-between gap-6 h-64 relative z-10">
            {stats.map((item, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-4 group h-full">
                <div className="w-full bg-white/5 rounded-2xl relative overflow-hidden h-full flex items-end">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${item.value}%` }}
                    transition={{ duration: 1.5, ease: "circOut", delay: i * 0.1 }}
                    className={`w-full ${item.color} rounded-t-xl group-hover:brightness-125 transition-all relative`}
                  >
                  </motion.div>
                </div>
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-tighter">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl"></div>
        </motion.div>

        {/* --- ACTIVITY FEED (New Section) --- */}
        <motion.div 
          className="bg-white border border-indigo-50 rounded-[3rem] p-10 shadow-sm flex flex-col"
        >
          <div className="flex items-center gap-2 mb-8">
              <Clock size={18} className="text-indigo-600"/>
              <h3 className="text-lg font-black uppercase italic text-[#1A1C2E]">Recent Activity</h3>
          </div>
          <div className="space-y-6 flex-1">
            {activities.map((act, i) => (
                <div key={i} className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-2xl transition-colors border-b border-gray-50 last:border-0">
                    <div className="w-2 h-2 mt-2 rounded-full bg-indigo-600"></div>
                    <div>
                        <p className="text-xs font-black uppercase tracking-tight text-gray-400">{act.user}</p>
                        <p className="text-sm font-bold text-[#1A1C2E] leading-tight mt-0.5">{act.action}</p>
                        <p className="text-[10px] text-indigo-400 font-bold mt-1 uppercase">{act.time}</p>
                    </div>
                </div>
            ))}
          </div>
          <button className="mt-6 w-full py-4 border-2 border-dashed border-gray-100 rounded-2xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:border-indigo-200 hover:text-indigo-600 transition-all">
              View All logs
          </button>
        </motion.div>

        {/* --- SYSTEM HEALTH (Blue Gradient) --- */}
        <motion.div 
          className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[3.5rem] p-12 flex flex-col justify-between overflow-hidden relative shadow-2xl shadow-blue-100"
        >
          <div className="relative z-10 text-white">
            <h3 className="text-4xl font-black leading-none uppercase italic">Cloud <br/> Sync</h3>
            <p className="mt-6 text-blue-100 text-xs font-bold uppercase tracking-widest opacity-70">Automatic encryption active.</p>
          </div>
          
          <div className="relative z-10">
             <div className="text-6xl font-black text-white italic tracking-tighter">99.9%</div>
             <div className="text-[10px] font-black uppercase tracking-widest text-blue-200 mt-2">Server Availability</div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
        </motion.div>

        {/* --- QUICK ACTIONS (New Section) --- */}
        <motion.div 
           className="lg:col-span-2 bg-white border border-indigo-50 rounded-[3.5rem] p-10 flex flex-col md:flex-row items-center gap-10"
        >
            <div className="flex-1">
                <h3 className="text-2xl font-black italic uppercase text-[#1A1C2E] mb-2">Performance Optimization</h3>
                <p className="text-sm text-gray-400 font-medium">Clear cache, optimize student databases, and generate weekly reports in one click.</p>
            </div>
            <div className="flex gap-4">
                <button className="px-8 py-5 bg-indigo-600 text-white rounded-3xl font-black uppercase text-[10px] tracking-[0.2em] shadow-lg shadow-indigo-100 hover:scale-105 transition-transform">Run Sync</button>
                <button className="px-8 py-5 bg-gray-50 text-[#1A1C2E] border border-gray-100 rounded-3xl font-black uppercase text-[10px] tracking-[0.2em] hover:bg-gray-100 transition-all">Export</button>
            </div>
        </motion.div>

      </div>

      {/* --- FOOTER BRANDING --- */}
      <div className="mt-24 text-center">
         <h2 className="text-8xl md:text-[12vw] font-black text-gray-200 select-none tracking-tighter uppercase italic opacity-50">HANJALA</h2>
      </div>

    </div>
  );
};

export default Analytics;