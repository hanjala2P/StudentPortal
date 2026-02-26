import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, User, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-12 flex items-center justify-center font-sans">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-6xl w-full bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col lg:flex-row border border-gray-100"
      >
        
        {/* --- LEFT SIDE: CONTACT INFO (Dark Gradient) --- */}
        <div className="lg:w-2/5 bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-10 md:p-16 text-white relative overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

          <div className="relative z-10 space-y-12">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-4xl font-black tracking-tight mb-4">Let's Talk!</h2>
              <p className="text-gray-400 font-medium">Have questions? We're here to help you manage your academic journey.</p>
            </motion.div>

            <div className="space-y-8">
              {[
                { icon: <Mail size={24}/>, label: "Email Us", val: "support@portal.edu", color: "bg-blue-500" },
                { icon: <Phone size={24}/>, label: "Call Us", val: "+880 1234 567 890", color: "bg-indigo-500" },
                { icon: <MapPin size={24}/>, label: "Visit Us", val: "Dhaka, Bangladesh", color: "bg-emerald-500" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className={`${item.color} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[3px] font-black text-gray-500 mb-1">{item.label}</p>
                    <p className="text-lg font-bold group-hover:text-blue-400 transition-colors">{item.val}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links Placeholder */}
            <div className="pt-12 flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer"><Globe size={20}/></div>
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer"><MessageSquare size={20}/></div>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: CONTACT FORM --- */}
        <div className="lg:w-3/5 p-10 md:p-16 bg-white">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-10"
          >
            <span className="text-blue-600 font-black text-xs uppercase tracking-[4px]">Send Message</span>
            <h3 className="text-3xl font-black text-gray-900 mt-2">Write us a message</h3>
          </motion.div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18}/>
                  <input type="text" placeholder="John Doe" className="w-full pl-12 pr-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all font-bold text-gray-700"/>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18}/>
                  <input type="email" placeholder="john@example.com" className="w-full pl-12 pr-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all font-bold text-gray-700"/>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Subject</label>
              <input type="text" placeholder="How can we help?" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all font-bold text-gray-700"/>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Message</label>
              <textarea rows="4" placeholder="Your message here..." className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all font-bold text-gray-700 resize-none"></textarea>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-3 tracking-widest uppercase text-sm"
            >
              Send Message <Send size={18}/>
            </motion.button>
          </form>
        </div>

      </motion.div>
    </div>
  );
};

export default Contact;