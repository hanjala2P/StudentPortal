import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { generateStudents } from '../FakeData/generateStudents';

const TotalStudentList = () => {
  // 1. Data load korlam
  const [allStudents] = useState(generateStudents());
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const studentsPerPage = 12;

  // 2. Filter & Search Logic
  const filteredStudents = allStudents.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.roll.toString().includes(searchTerm)
  );

  // 3. Pagination Logic
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
  const lastIndex = currentPage * studentsPerPage;
  const firstIndex = lastIndex - studentsPerPage;
  const currentStudents = filteredStudents.slice(firstIndex, lastIndex);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
    >
      {/* Header with Search */}
      <div className="p-6 bg-indigo-50 border-b flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-indigo-900">Student Database</h2>
          <p className="text-sm text-indigo-600 font-medium">Total: {filteredStudents.length} Students found</p>
        </div>
        
        <div className="relative w-full md:w-72">
          <input 
            type="text" 
            placeholder="Search Name or Roll..." 
            className="w-full pl-10 pr-4 py-2 rounded-xl border-2 border-indigo-100 focus:border-indigo-500 outline-none transition-all"
            onChange={(e) => {setSearchTerm(e.target.value); setCurrentPage(1);}}
          />
          <span className="absolute left-3 top-2.5 text-indigo-300">🔍</span>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white text-gray-400 text-xs uppercase tracking-widest border-b">
              <th className="px-6 py-4 font-semibold">Roll No</th>
              <th className="px-6 py-4 font-semibold">Student Name</th>
              <th className="px-6 py-4 font-semibold">Class</th>
              <th className="px-6 py-4 font-semibold">GPA</th>
              <th className="px-6 py-4 font-semibold text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {currentStudents.map((student) => (
              <tr key={student.id} className="hover:bg-indigo-50/50 transition duration-200">
                <td className="px-6 py-4 font-mono font-bold text-indigo-600">#{student.roll}</td>
                <td className="px-6 py-4 font-semibold text-gray-700">{student.name}</td>
                <td className="px-6 py-4 text-gray-500 text-sm">Class {student.class}</td>
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md font-bold text-sm">
                    {student.gpa}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-full ${
                    student.status === 'Active' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'
                  }`}>
                    {student.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modern Pagination Footer */}
      <div className="p-6 bg-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-sm text-gray-500 font-medium">
          Showing <span className="text-indigo-600">{firstIndex + 1}</span> to <span className="text-indigo-600">{Math.min(lastIndex, filteredStudents.length)}</span> of {filteredStudents.length}
        </span>
        
        <div className="flex items-center gap-2">
          <button 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => p - 1)}
            className="p-2 rounded-lg bg-white border border-gray-200 text-gray-400 hover:text-indigo-600 hover:border-indigo-600 disabled:opacity-30 disabled:hover:border-gray-200 transition-all shadow-sm"
          >
            ◀ Previous
          </button>
          
          <div className="flex gap-1">
             <span className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-bold shadow-md shadow-indigo-100">
               {currentPage}
             </span>
          </div>

          <button 
            disabled={currentPage >= totalPages}
            onClick={() => setCurrentPage(p => p + 1)}
            className="p-2 rounded-lg bg-white border border-gray-200 text-gray-400 hover:text-indigo-600 hover:border-indigo-600 disabled:opacity-30 disabled:hover:border-gray-200 transition-all shadow-sm"
          >
            Next ▶
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TotalStudentList;