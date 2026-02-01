import React from 'react';

export default function Header() {
  return (
    <nav className="fixed top-6 left-0 w-full flex justify-center z-50 px-4">
      <div className="bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-full shadow-sm flex items-center justify-between w-full max-w-300 border border-white/50">
        
        {/* Logo Section */}
       <div className="flex items-center">
            <img src="/logo.png" alt="Steppe Coffee Logo" className="h-8" />
        </div>

        {/* Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wide">
          <a href="#" className="hover:text-brand-orange transition-colors">О нас</a>
          <a href="#" className="hover:text-brand-orange transition-colors">Услуги</a>
          <a href="#" className="hover:text-brand-orange transition-colors">Проекты</a>
          <a href="#" className="hover:text-brand-orange transition-colors">Шоу кейсы</a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button className="hidden md:block px-3 py-1.5 rounded-full border border-gray-200 text-[10px] font-bold uppercase hover:bg-gray-50">
            рус
          </button>
          <button className="bg-brand-orange text-white text-[10px] md:text-xs font-bold uppercase px-5 py-2.5 rounded-full hover:bg-orange-600 transition-colors">
            Связаться с нами
          </button>
        </div>
      </div>
    </nav>
  );
}