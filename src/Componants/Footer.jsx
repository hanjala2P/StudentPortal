import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.8, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-blue-200">
                <GraduationCap className="text-white" size={28} />
              </div>
              <span className="text-2xl font-black tracking-tighter text-gray-800">
                STUDENT<span className="text-blue-600">PORTAL</span>
              </span>
            </Link>
            <p className="text-gray-500 font-medium leading-relaxed">
              Elevating the academic experience through seamless digital management and real-time tracking.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ y: -5, scale: 1.1 }}
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-gray-900 font-black uppercase text-xs tracking-[3px]">Navigation</h4>
            <ul className="space-y-4">
              {['Dashboard', 'Student List', 'Academic Performance', 'Session Schedules'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-500 font-bold hover:text-blue-600 hover:translate-x-2 transition-all flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-gray-900 font-black uppercase text-xs tracking-[3px]">Support</h4>
            <ul className="space-y-4">
              {['Help Center', 'Privacy Policy', 'Terms of Service', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-500 font-bold hover:text-blue-600 transition-colors uppercase text-[11px] tracking-wider">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-gray-900 font-black uppercase text-xs tracking-[3px]">Newsletter</h4>
            <p className="text-gray-500 font-medium text-sm">Subscribe to get the latest academic updates.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-gray-50 border-2 border-transparent focus:border-blue-600 p-4 pr-12 rounded-2xl outline-none transition-all font-bold text-gray-700"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 p-2 rounded-xl text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                <Mail size={18} />
              </button>
            </div>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">
            © 2026 Student Portal. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-black text-gray-400 uppercase tracking-widest">
            <a href="#" className="hover:text-blue-600 transition-colors">Cookies</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Security</a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;