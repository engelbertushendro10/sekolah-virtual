
import React from 'react';
import { ScreenType } from '../types';

interface MobileLayoutProps {
  children: React.ReactNode;
  activeScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children, activeScreen, onNavigate }) => {
  const showNav = activeScreen !== 'WELCOME' && activeScreen !== 'SCANNER';

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-slate-100 dark:bg-slate-900">
      <div className="w-full max-w-[430px] h-[850px] bg-white dark:bg-slate-900 shadow-2xl rounded-[3rem] overflow-hidden flex flex-col relative border-[8px] border-slate-200 dark:border-slate-800">
        
        {/* iOS Status Bar */}
        <div className="h-10 w-full flex justify-between items-center px-8 pt-4 shrink-0 bg-transparent z-50">
          <span className="text-xs font-bold">9:41</span>
          <div className="flex gap-1.5 items-center">
            <span className="material-icons-round text-[14px]">signal_cellular_alt</span>
            <span className="material-icons-round text-[14px]">wifi</span>
            <span className="material-icons-round text-[14px]">battery_full</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto no-scrollbar relative">
          {children}
        </div>

        {/* Bottom Navigation */}
        {showNav && (
          <nav className="h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-6 py-3 shrink-0 flex justify-between items-center z-50">
            <button 
              onClick={() => onNavigate('DASHBOARD')}
              className={`flex flex-col items-center gap-1 transition-colors ${activeScreen === 'DASHBOARD' ? 'text-primary' : 'text-slate-400'}`}
            >
              <span className="material-icons-round">home</span>
              <span className="text-[10px] font-bold uppercase">Beranda</span>
            </button>
            <button 
              onClick={() => onNavigate('SUBJECTS')}
              className={`flex flex-col items-center gap-1 transition-colors ${activeScreen === 'SUBJECTS' || activeScreen === 'CLASSROOM' ? 'text-primary' : 'text-slate-400'}`}
            >
              <span className="material-icons-round">book</span>
              <span className="text-[10px] font-bold uppercase">Mata Pelajaran</span>
            </button>
            
            <div className="relative -top-8">
              <button 
                onClick={() => onNavigate('SCANNER')}
                className="w-14 h-14 bg-primary text-white rounded-full shadow-lg shadow-primary/40 flex items-center justify-center active:scale-95 transition-transform"
              >
                <span className="material-icons-round text-3xl">qr_code_scanner</span>
              </button>
            </div>

            <button 
              onClick={() => onNavigate('TASKS')}
              className={`flex flex-col items-center gap-1 transition-colors ${activeScreen === 'TASKS' ? 'text-primary' : 'text-slate-400'}`}
            >
              <span className="material-icons-round">assignment</span>
              <span className="text-[10px] font-bold uppercase">Tugas</span>
            </button>
            <button 
              onClick={() => onNavigate('REPORT')}
              className={`flex flex-col items-center gap-1 transition-colors ${activeScreen === 'REPORT' ? 'text-primary' : 'text-slate-400'}`}
            >
              <span className="material-icons-round">analytics</span>
              <span className="text-[10px] font-bold uppercase">Profil</span>
            </button>
          </nav>
        )}

        {/* iOS Home Indicator */}
        <div className="h-8 w-full flex justify-center items-end pb-2 shrink-0 bg-transparent">
          <div className="w-32 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;
