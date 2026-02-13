
import React from 'react';
import { ScreenType } from '../types';

interface WelcomeScreenProps {
  onLogin: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onLogin }) => {
  return (
    <div className="px-6 pb-10">
      {/* Hero Illustration */}
      <div className="mt-4 flex flex-col items-center">
        <div className="w-full h-56 relative rounded-2xl overflow-hidden mb-6">
          <img 
            alt="Education Illustration" 
            className="w-full h-full object-cover" 
            src="https://picsum.photos/seed/school/400/300" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 to-transparent"></div>
        </div>
        <h1 className="text-2xl font-bold text-center mb-2 tracking-tight">Selamat Datang!</h1>
        <p className="text-slate-500 dark:text-slate-400 text-center text-sm leading-relaxed max-w-[280px]">
          Silakan pilih jenjang pendidikanmu untuk mulai belajar di Sekolah Virtual.
        </p>
      </div>

      {/* Level Selection Grid */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        {[
          { id: 'SD', label: 'Sekolah Dasar', color: 'sd-red', icon: 'school' },
          { id: 'SMP', label: 'Menengah Pertama', color: 'smp-blue', icon: 'history_edu' },
          { id: 'SMA', label: 'Menengah Atas', color: 'sma-gray', icon: 'menu_book' },
          { id: 'SMK', label: 'Kejuruan', color: 'smk-orange', icon: 'build_circle' },
        ].map((level) => (
          <button 
            key={level.id}
            className={`group flex flex-col items-center p-5 bg-slate-50 dark:bg-slate-800 border-2 border-transparent hover:border-primary rounded-xl transition-all active:scale-95`}
          >
            <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white mb-3 shadow-lg shadow-primary/20 bg-primary`}>
              <span className="material-icons-round text-3xl">{level.icon}</span>
            </div>
            <span className={`font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200`}>{level.id}</span>
            <span className="text-[10px] text-slate-400 font-medium">{level.label}</span>
          </button>
        ))}
      </div>

      {/* Action Section */}
      <div className="mt-10 flex flex-col items-center gap-4">
        <button 
          onClick={onLogin}
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2"
        >
          <span>Login Sekarang</span>
          <span className="material-icons-round text-sm">login</span>
        </button>
        <div className="flex flex-col items-center gap-2">
          <a className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#">
            Lupa Password?
          </a>
          <div className="flex items-center gap-1 text-xs text-slate-400 mt-2">
            <span>Belum punya akun?</span>
            <a className="text-primary font-semibold underline underline-offset-2" href="#">Daftar</a>
          </div>
        </div>
      </div>

      {/* Help Center */}
      <div className="mt-12 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl flex items-center gap-4">
        <div className="w-10 h-10 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center text-primary shadow-sm">
          <span className="material-icons-round">support_agent</span>
        </div>
        <div>
          <h4 className="text-xs font-bold">Butuh Bantuan?</h4>
          <p className="text-[10px] text-slate-500">Hubungi tim support Sekolah Virtual</p>
        </div>
        <span className="material-icons-round text-slate-300 ml-auto">chevron_right</span>
      </div>
    </div>
  );
};

export default WelcomeScreen;
