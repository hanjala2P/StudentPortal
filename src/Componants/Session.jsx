import { motion } from 'framer-motion';

const Session = () => {
  const events = [
    { date: "March 15", event: "Mid-Term Examination", type: "Exam" },
    { date: "April 02", event: "Eid-ul-Fitr Holiday", type: "Holiday" },
    { date: "May 10", event: "Annual Sports Day", type: "Event" },
  ];

  const faculty = [
    { name: "Dr. Ariful Haque", sub: "Mathematics", initial: "AH" },
    { name: "Sarah Kabir", sub: "Physics", initial: "SK" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-[2.5rem] shadow-xl p-8 border border-gray-100"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-black text-gray-800 tracking-tight">Academic <span className="text-purple-600">Session</span></h2>
          <p className="text-gray-400 font-bold text-sm uppercase tracking-widest">Spring 2025-26</p>
        </div>
        <div className="flex gap-2">
          <span className="bg-green-100 text-green-600 px-4 py-2 rounded-2xl text-xs font-black uppercase">Session Active</span>
          <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-2xl text-xs font-black uppercase">Week 08</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 1. Academic Calendar */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-black text-gray-700 mb-6 flex items-center gap-2 underline decoration-purple-200 decoration-4 underline-offset-4">
            🚀 Events
          </h3>
          <div className="space-y-4">
            {events.map((item, i) => (
              <motion.div whileHover={{ x: 10 }} key={i} className="flex gap-4 items-center p-4 bg-gray-50 rounded-2xl border border-gray-100 group transition-all">
                <div className="bg-white p-3 rounded-xl shadow-sm text-center min-w-[65px] group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <p className="text-[10px] font-bold uppercase opacity-60">{item.date.split(' ')[0]}</p>
                  <p className="text-lg font-black">{item.date.split(' ')[1]}</p>
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{item.event}</p>
                  <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold uppercase ${
                    item.type === 'Exam' ? 'bg-red-100 text-red-500' : 'bg-blue-100 text-blue-500'
                  }`}>{item.type}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Quick Routine & Progress */}
        <div className="lg:col-span-1 space-y-8">
           <div>
              <h3 className="text-lg font-black text-gray-700 mb-6 flex items-center gap-2 underline decoration-blue-200 decoration-4 underline-offset-4">
                📅 Class Routine
              </h3>
              <div className="space-y-3">
                {[
                  { time: "09:00 AM", sub: "Math", room: "302", color: "border-blue-500" },
                  { time: "11:30 AM", sub: "Physics", room: "L-1", color: "border-purple-500" },
                  { time: "01:30 PM", sub: "CS", room: "ICT", color: "border-green-500" },
                ].map((r, i) => (
                  <div key={i} className={`flex justify-between items-center bg-white p-4 rounded-2xl border-l-4 shadow-sm ${r.color}`}>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase leading-none">{r.time}</p>
                      <p className="font-black text-gray-700">{r.sub}</p>
                    </div>
                    <p className="bg-gray-100 px-3 py-1 rounded-lg text-xs font-bold text-gray-500">Room {r.room}</p>
                  </div>
                ))}
              </div>
           </div>

           {/* Semester Progress */}
           <div className="bg-gray-900 p-6 rounded-[2rem] text-white shadow-xl">
              <p className="text-xs font-bold text-gray-400 uppercase mb-2">Semester Progress</p>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-4xl font-black italic">65%</span>
                <span className="text-[10px] mb-2 text-gray-400 font-bold uppercase">Completed</span>
              </div>
              <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} animate={{ width: "65%" }} transition={{ duration: 1.5 }}
                  className="h-full bg-gradient-to-r from-purple-400 to-blue-400" 
                />
              </div>
           </div>
        </div>

        {/* 3. Faculty & Quick Contact */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-black text-gray-700 mb-6 flex items-center gap-2 underline decoration-yellow-200 decoration-4 underline-offset-4">
            👨‍🏫 Faculty Info
          </h3>
          <div className="space-y-4">
            {faculty.map((t, i) => (
              <div key={i} className="flex items-center gap-4 p-4 border border-gray-100 rounded-2xl hover:bg-yellow-50/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center font-black text-yellow-700 shadow-sm">
                  {t.initial}
                </div>
                <div>
                  <p className="font-bold text-gray-800">{t.name}</p>
                  <p className="text-xs text-gray-500 font-medium italic">{t.sub} Specialist</p>
                </div>
              </div>
            ))}
            <button className="w-full mt-4 py-4 bg-gray-100 text-gray-600 rounded-2xl font-bold text-sm hover:bg-gray-200 transition active:scale-95">
              Contact Faculty Dept.
            </button>
          </div>
        </div>

      </div>

      {/* Footer Button */}
      <div className="mt-12">
        <button className="w-full py-5 bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-[1.5rem] font-black uppercase tracking-tighter shadow-2xl shadow-purple-200 hover:shadow-purple-300 transition-all active:scale-[0.98]">
           📥 Download Full Academic Calendar (PDF)
        </button>
      </div>
    </motion.div>
  );
};

export default Session;