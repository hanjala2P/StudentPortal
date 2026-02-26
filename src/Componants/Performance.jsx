import { motion } from 'framer-motion';

const Performance = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-3xl shadow-lg p-8"
    >
      <h2 className="text-2xl font-black text-gray-800 mb-8 border-l-4 border-green-500 pl-4">Live Academic Performance</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* --- RADIAL PROGRESS SECTION --- */}
        <div className="flex flex-col items-center justify-center p-6 bg-green-50 rounded-3xl border border-green-100">
          <p className="text-green-600 font-bold mb-6 uppercase text-sm">Overall Batch GPA</p>
          <div className="relative flex items-center justify-center">
            {/* Simple Radial Progress using Tailwind */}
            <svg className="w-48 h-48 transform -rotate-90">
              <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="15" fill="transparent" className="text-gray-200" />
              <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="15" fill="transparent" 
                strokeDasharray={2 * Math.PI * 80}
                strokeDashoffset={2 * Math.PI * 80 * (1 - 4.85 / 5)} 
                className="text-green-500" 
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-4xl font-black text-gray-800">4.85</span>
              <span className="text-xs text-gray-400 font-bold">OUT OF 5.00</span>
            </div>
          </div>
          <p className="mt-6 text-gray-500 text-sm italic font-medium">92% Students Passed in Mid-term</p>
        </div>

        {/* --- TOP PERFORMERS LIST --- */}
        <div>
          <h3 className="text-lg font-bold text-gray-700 mb-4">Top Performer List</h3>
          <div className="space-y-4">
            {[
              { name: "Ariful Islam", gpa: "5.00", roll: "101" },
              { name: "Sadiya Akter", gpa: "4.98", roll: "105" },
              { name: "Rakib Hasan", gpa: "4.95", roll: "102" }
            ].map((student, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-green-300 transition-all">
                <div className="flex items-center gap-4">
                   <span className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full text-xs font-bold">{i+1}</span>
                   <div>
                     <p className="font-bold text-gray-800">{student.name}</p>
                     <p className="text-[10px] text-gray-400 font-mono">Roll: #{student.roll}</p>
                   </div>
                </div>
                <span className="text-green-600 font-black tracking-tighter">GPA {student.gpa}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Performance;