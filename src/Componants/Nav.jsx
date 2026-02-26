import { Link, NavLink } from 'react-router';
import { 
  GraduationCap, 
  LayoutDashboard, 
  Info, 
  Mail, 
  Calculator, 
  BarChart3, 
  User 
} from 'lucide-react';

const Nav = () => {
  // NavLink Style Logic
  const linkStyle = ({ isActive }) => 
    `font-bold transition-all px-4 py-2 rounded-xl flex items-center gap-2 ${
      isActive 
      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
      : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700'
    }`;

  const navLinks = (
    <>
      <li>
        <NavLink className={linkStyle} to="/" end>
          <LayoutDashboard size={18} /> Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink className={linkStyle} to="/analytics">
          <BarChart3 size={18} /> Analytics
        </NavLink>
      </li>
      <li>
        <NavLink className={linkStyle} to="/developer">
          <User size={18} /> Developer
        </NavLink>
      </li>
      <li>
        <NavLink className={linkStyle} to="/about">
          <Info size={18} /> About
        </NavLink>
      </li>
      <li>
        <NavLink className={linkStyle} to="/contact">
          <Mail size={18} /> Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-[100] bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="navbar container mx-auto py-3">
        
        {/* Mobile & Logo Section */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-2xl bg-white rounded-3xl w-64 gap-2 border border-gray-50 font-sans">
              {navLinks}
              {/* Mobile version e link ta add kore dilam */}
              <li>
                <NavLink className={linkStyle} to="/cgpa-calculator">
                  <Calculator size={18} /> CGPA Calculator
                </NavLink>
              </li>
            </ul>
          </div>
          
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-blue-600 p-2.5 rounded-2xl group-hover:rotate-[15deg] transition-all duration-300 shadow-lg shadow-blue-200">
              <GraduationCap className="text-white w-6 h-6 md:w-7 md:h-7" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg md:text-xl font-black tracking-tighter text-gray-800 uppercase">
                Student<span className="text-blue-600">Portal</span>
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1 xl:gap-2">
            {navLinks}
          </ul>
        </div>

        {/* Actions Section */}
        <div className="navbar-end gap-3 md:gap-5">
          {/* Ekhane button ta ke Link banaye dilam */}
          <Link 
            to="/cgpa-calculator" 
            className="btn btn-ghost btn-circle hover:bg-blue-50 transition-all group relative flex items-center justify-center"
          >
            <Calculator className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-blue-500 rounded-full border-2 border-white"></span>
          </Link>
          
          <div className="hidden sm:block h-8 w-[1px] bg-gray-200"></div>
          
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black shadow-md cursor-pointer hover:scale-105 transition-transform">
            ST
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;