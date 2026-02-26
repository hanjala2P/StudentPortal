import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      html.setAttribute('data-theme', 'dark'); // DaisyUI er jonno
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      html.setAttribute('data-theme', 'light'); // DaisyUI er jonno
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button 
      onClick={() => setIsDark(!isDark)}
      className="p-2.5 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 transition-all active:scale-95 shadow-sm border border-transparent dark:border-gray-700"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;