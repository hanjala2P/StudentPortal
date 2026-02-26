import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Animation er jonno
import { generateStudents } from '../FakeData/generateStudents';
import { Search, ChevronLeft, ChevronRight, ArrowUpDown, User } from 'lucide-react';

const StudentList = () => {
  const [allStudents] = useState(() => generateStudents(1200));
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: 'roll', direction: 'asc' });
  const studentsPerPage = 12;

  // 🔍 Filter Logic
  const filteredStudents = useMemo(() => {
    return allStudents.filter(s => 
      (s.name?.toLowerCase().includes(searchTerm.toLowerCase())) || 
      (s.roll?.toString().includes(searchTerm))
    );
  }, [allStudents, searchTerm]);

  // ↕️ Sort Logic
  const sortedStudents = useMemo(() => {
    let items = [...filteredStudents];
    items.sort((a, b) => {
      let valA = a[sortConfig.key];
      let valB = b[sortConfig.key];
      if (sortConfig.key === 'roll' || sortConfig.key === 'gpa') {
        valA = parseFloat(valA) || 0;
        valB = parseFloat(valB) || 0;
      }
      if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
      if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
    return items;
  }, [filteredStudents, sortConfig]);

  const totalPages = Math.ceil(sortedStudents.length / studentsPerPage);
  
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const currentStudents = sortedStudents.slice(
    (currentPage - 1) * studentsPerPage, 
    currentPage * studentsPerPage
  );

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 } // Protita row 0.05s por por asbe
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="p-4 md:p-8 space-y-6 bg-gray-50/50 min-h-screen">
      
      {/* HEADER & SEARCH (Animated) */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100"
      >
        <div>
          <h2 className="text-3xl font-black text-gray-800 tracking-tight">Student <span className="text-blue-600">Database</span></h2>
          <p className="text-gray-400 font-bold text-xs uppercase tracking-[3px] mt-1">Found {sortedStudents.length} Records</p>
        </div>
        
        <div className="relative w-full md:w-96">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
          <input 
            type="text"
            placeholder="Search by name or roll..."
            className="w-full pl-14 pr-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-blue-500 focus:bg-white transition-all outline-none font-bold text-gray-700 shadow-inner"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </motion.div>

      {/* TABLE SECTION */}
      <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50/80 text-gray-500">
              <tr>
                <th onClick={() => setSortConfig({key:'roll', direction: sortConfig.direction === 'asc' ? 'desc' : 'asc'})} className="p-6 cursor-pointer hover:text-blue-600">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest">Roll <ArrowUpDown size={14}/></div>
                </th>
                <th className="p-6 text-xs font-black uppercase tracking-widest">Student Info</th>
                <th className="p-6 text-xs font-black uppercase tracking-widest text-center">Class</th>
                <th onClick={() => setSortConfig({key:'gpa', direction: sortConfig.direction === 'asc' ? 'desc' : 'asc'})} className="p-6 cursor-pointer hover:text-blue-600">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest">GPA <ArrowUpDown size={14}/></div>
                </th>
                <th className="p-6 text-xs font-black uppercase tracking-widest text-right">Status</th>
              </tr>
            </thead>

            {/* ANIMATED TBODY */}
            <motion.tbody 
              key={currentPage + searchTerm} // Page ba search change holei animation repeat hobe
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="divide-y divide-gray-50"
            >
              {currentStudents.length > 0 ? currentStudents.map((s, index) => (
                <motion.tr 
                  key={s.id || s.roll} 
                  variants={rowVariants}
                  whileHover={{ backgroundColor: "rgba(239, 246, 255, 0.5)", x: 5 }}
                  className="transition-colors group"
                >
                  <td className="p-6 font-bold text-gray-400 group-hover:text-blue-600">#{s.roll}</td>
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm border border-blue-100">
                        {s.name ? s.name.charAt(0) : <User size={18}/>}
                      </div>
                      <span className="font-bold text-gray-800 text-lg tracking-tight">{s.name}</span>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-xl font-bold text-xs uppercase">Class {s.class}</span>
                  </td>
                  <td className="p-6 font-black text-blue-600 text-xl">
                    {s.gpa && !isNaN(parseFloat(s.gpa)) ? parseFloat(s.gpa).toFixed(2) : '0.00'}
                  </td>
                  <td className="p-6 text-right">
                    <span className={`px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[1px] shadow-sm border ${
                      s.status === 'Active' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-red-50 text-red-600 border-red-100'
                    }`}>
                      {s.status}
                    </span>
                  </td>
                </motion.tr>
              )) : (
                <motion.tr initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <td colSpan="5" className="p-32 text-center text-gray-400 font-bold italic text-xl">No Result Found...</td>
                </motion.tr>
              )}
            </motion.tbody>
          </table>
        </div>
      </div>

      {/* PAGINATION (Animated) */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm"
      >
        <div className="text-sm font-bold text-gray-400 uppercase tracking-[2px]">
          Showing <span className="text-gray-800">{(currentPage-1)*studentsPerPage + 1}-{Math.min(currentPage*studentsPerPage, sortedStudents.length)}</span> of {sortedStudents.length}
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
            className="p-4 bg-gray-100 rounded-2xl hover:bg-blue-600 hover:text-white disabled:opacity-20 transition-all active:scale-90"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="px-6 py-3 bg-blue-50 rounded-2xl text-blue-700 font-black text-sm uppercase">
            Page {currentPage} / {totalPages || 1}
          </div>

          <button 
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => setCurrentPage(prev => prev + 1)}
            className="p-4 bg-gray-100 rounded-2xl hover:bg-blue-600 hover:text-white disabled:opacity-20 transition-all active:scale-90"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default StudentList;