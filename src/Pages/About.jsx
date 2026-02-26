import { motion } from 'framer-motion';
import { Target, Users, ShieldCheck, Rocket, Award, Zap } from 'lucide-react';

const About = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-20 transition-colors duration-300">
      
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 px-6 overflow-hidden bg-gray-50/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto text-center relative z-10"
        >
          <span className="text-blue-600 font-black text-xs uppercase tracking-[5px] mb-4 block">Our Journey</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
            EMPOWERING THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-black">NEXT GENERATION</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
            Our mission is to make the academic journey seamless, digital, and highly efficient. Everything you need, centralized in one powerful portal.
          </p>
        </motion.div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="container mx-auto px-6 -mt-12 relative z-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { label: "Active Students", val: "1200+", icon: <Users size={20}/> },
            { label: "Projects Completed", val: "50+", icon: <Zap size={20}/> },
            { label: "Global Awards", val: "12", icon: <Award size={20}/> },
            { label: "Success Rate", val: "99%", icon: <Rocket size={20}/> }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 text-center"
            >
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-black text-gray-800 tracking-tight">{stat.val}</h3>
              <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="container mx-auto px-6 py-32">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black text-gray-900 leading-tight">Our Core Values & <br /> Strategic Targets</h2>
          </div>
          <p className="text-gray-500 font-medium max-w-sm">
            We believe in leveraging cutting-edge technology to elevate educational management to new heights of excellence.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {[
            { 
              title: "Transparency", 
              desc: "Ensuring student data remains completely transparent and secure is our top priority.",
              icon: <ShieldCheck size={32}/>,
              color: "text-emerald-500"
            },
            { 
              title: "Efficiency", 
              desc: "Reducing manual workload by automating administrative tasks for faster operations.",
              icon: <Zap size={32}/>,
              color: "text-amber-500"
            },
            { 
              title: "Goal Oriented", 
              desc: "Tracking academic performance meticulously to help students reach their full potential.",
              icon: <Target size={32}/>,
              color: "text-blue-500"
            }
          ].map((value, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="group p-10 bg-gray-50 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-100"
            >
              <div className={`${value.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {value.icon}
              </div>
              <h3 className="text-2xl font-black text-gray-800 mb-4">{value.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed text-sm">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      
    </div>
  );
};

export default About;