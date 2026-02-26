import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateStudents } from '../FakeData/Data'; 
import { Link, Outlet, useLocation } from 'react-router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const HeroDashBoard = () => {
  const [allStudents] = useState(generateStudents());
  const location = useLocation();

  // --- DYNAMIC HERO TEXT LOGIC ---
  const heroTexts = [
    "MANAGE STUDENTS EFFICIENTLY",
    "TRACK ACADEMIC PERFORMANCE",
    "VIEW SESSION SCHEDULES",
    "CALCULATE CGPA INSTANTLY"
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 3000); // Protí 3 second por por text change hobe
    return () => clearInterval(interval);
  }, []);

  // --- LOCAL STORAGE LOGIC ---
  const [courses, setCourses] = useState(() => {
    const savedCourses = localStorage.getItem('student_courses');
    return savedCourses ? JSON.parse(savedCourses) : [{ grade: '', credit: '' }];
  });

  const [cgpa, setCgpa] = useState(() => {
    const savedCgpa = localStorage.getItem('student_cgpa');
    return savedCgpa ? savedCgpa : '0.00';
  });

  useEffect(() => {
    localStorage.setItem('student_courses', JSON.stringify(courses));
    localStorage.setItem('student_cgpa', cgpa);
  }, [courses, cgpa]);

  const calculateCGPA = () => {
    let totalPoints = 0, totalCredits = 0;
    courses.forEach(c => {
      if(c.grade && c.credit) {
        totalPoints += parseFloat(c.grade) * parseFloat(c.credit);
        totalCredits += parseFloat(c.credit);
      }
    });
    const result = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';
    setCgpa(result);
  };

  const downloadPDF = () => {
    const input = document.getElementById('report-section');
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.text("Student Academic Report", 20, 20);
      pdf.addImage(imgData, 'PNG', 10, 30, 190, 0);
      pdf.save("Academic_Report.pdf");
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      
      {/* --- DYNAMIC HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-6 text-center z-10">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-yellow-400 font-bold tracking-[4px] mb-4 text-sm uppercase">Welcome to Portal</motion.p>
          
          <div className="h-20 flex items-center justify-center">
            <AnimatePresence mode='wait'>
              <motion.h1 
                key={currentTextIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-6xl font-black tracking-tighter"
              >
                {heroTexts[currentTextIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>
          
          <motion.div initial={{ width: 0 }} animate={{ width: "100px" }} className="h-1.5 bg-yellow-400 mx-auto mt-6 rounded-full"></motion.div>
        </div>
      </section>

      {/* --- CENTERED DASHBOARD CARDS --- */}
      <section className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1 */}
          <Link to="student-list" className="block group">
            <motion.div whileHover={{ y: -10 }} className={`p-10 rounded-[2.5rem] shadow-2xl transition-all flex flex-col items-center text-center ${location.pathname.includes('student-list') ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 border border-gray-100'}`}>
              <div className="text-5xl mb-4 p-4 bg-blue-50 rounded-3xl group-hover:rotate-12 transition-transform">👨‍🎓</div>
              <h3 className="font-black uppercase text-xs tracking-widest opacity-60 mb-2">Directory</h3>
              <p className="text-4xl font-black">{allStudents.length}</p>
            </motion.div>
          </Link>

          {/* Card 2 */}
          <Link to="performance" className="block group">
            <motion.div whileHover={{ y: -10 }} className={`p-10 rounded-[2.5rem] shadow-2xl transition-all flex flex-col items-center text-center ${location.pathname.includes('performance') ? 'bg-green-600 text-white' : 'bg-white text-gray-800 border border-gray-100'}`}>
              <div className="text-5xl mb-4 p-4 bg-green-50 rounded-3xl group-hover:rotate-12 transition-transform">📈</div>
              <h3 className="font-black uppercase text-xs tracking-widest opacity-60 mb-2">Performance</h3>
              <p className="text-4xl font-black">Live Stats</p>
            </motion.div>
          </Link>

          {/* Card 3 */}
          <Link to="session" className="block group">
            <motion.div whileHover={{ y: -10 }} className={`p-10 rounded-[2.5rem] shadow-2xl transition-all flex flex-col items-center text-center ${location.pathname.includes('session') ? 'bg-purple-600 text-white' : 'bg-white text-gray-800 border border-gray-100'}`}>
              <div className="text-5xl mb-4 p-4 bg-purple-50 rounded-3xl group-hover:rotate-12 transition-transform">📅</div>
              <h3 className="font-black uppercase text-xs tracking-widest opacity-60 mb-2">Session</h3>
              <p className="text-4xl font-black">2025-26</p>
            </motion.div>
          </Link>
        </div>

        {/* --- DYNAMIC CONTENT AREA --- */}
        <div className="min-h-[300px] mb-24">
          <Outlet />
        </div>

        {/* --- CGPA SECTION --- */}
        <div id="report-section" className="bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-50">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 text-center md:text-left">
            <div>
              <h2 className="text-4xl font-black text-gray-900">Academic Analytics</h2>
              <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[3px] mt-2">Personal CGPA Calculator</p>
            </div>
            <button 
              onClick={downloadPDF}
              className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-black flex items-center gap-3 hover:bg-black transition-all shadow-xl active:scale-95"
            >
              📥 EXPORT PDF
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-5">
              {courses.map((course, index) => (
                <div key={index} className="flex gap-4">
                  <input 
                    type="number" value={course.grade} placeholder="Grade" 
                    className="w-full bg-gray-100 p-5 rounded-2xl border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition font-bold"
                    onChange={(e) => {
                      const newCourses = [...courses];
                      newCourses[index].grade = e.target.value;
                      setCourses(newCourses);
                    }}
                  />
                  <input 
                    type="number" value={course.credit} placeholder="Credit" 
                    className="w-full bg-gray-100 p-5 rounded-2xl border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition font-bold"
                    onChange={(e) => {
                      const newCourses = [...courses];
                      newCourses[index].credit = e.target.value;
                      setCourses(newCourses);
                    }}
                  />
                </div>
              ))}
              <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
                <button onClick={() => setCourses([...courses, { grade: '', credit: '' }])} className="px-6 py-3 bg-blue-100 text-blue-700 rounded-xl font-black hover:bg-blue-200 transition">+ ADD SUBJECT</button>
                <button onClick={calculateCGPA} className="px-10 py-3 bg-blue-600 text-white rounded-xl font-black hover:bg-blue-700 transition shadow-lg shadow-blue-200">CALCULATE & SAVE</button>
                <button onClick={() => {localStorage.clear(); window.location.reload();}} className="px-4 py-3 text-red-400 font-bold text-xs hover:underline">RESET DATA</button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-800 to-indigo-950 rounded-[3rem] p-12 text-white flex flex-col items-center justify-center text-center shadow-inner relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
              <p className="text-blue-300 font-bold uppercase text-xs tracking-[4px] mb-4">Total CGPA</p>
              <motion.h3 key={cgpa} initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-9xl font-black tracking-tighter text-yellow-400">
                {cgpa}
              </motion.h3>
              <div className="mt-8 h-1 w-24 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroDashBoard;