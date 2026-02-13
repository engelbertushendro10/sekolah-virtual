
import React from 'react';
import { SUBJECTS } from '../constants';
import { ScreenType } from '../types';

interface SubjectsScreenProps {
  onSelectSubject: (id: string) => void;
}

const SubjectsScreen: React.FC<SubjectsScreenProps> = ({ onSelectSubject }) => {
  return (
    <div className="min-h-full pb-10">
      <header className="px-6 pt-4 pb-4 sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-40">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold tracking-tight">Mata Pelajaran</h1>
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-icons-round">account_circle</span>
          </div>
        </div>
        
        <div className="relative mb-6">
          <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
          <input className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-primary text-sm placeholder-slate-500" placeholder="Cari mata pelajaran..." type="text"/>
        </div>

        <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-xl flex">
          <button className="flex-1 py-1.5 text-sm font-medium rounded-lg bg-white dark:bg-slate-700 shadow-sm text-primary">Wajib</button>
          <button className="flex-1 py-1.5 text-sm font-medium text-slate-500 dark:text-slate-400">Peminatan</button>
        </div>
      </header>

      <div className="px-6 py-4 flex gap-3 overflow-x-auto no-scrollbar">
        <button className="shrink-0 px-4 py-2 rounded-full bg-primary text-white text-xs font-semibold">Semua</button>
        <button className="shrink-0 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">Kelas 10</button>
        <button className="shrink-0 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">Kelas 11</button>
        <button className="shrink-0 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">Kelas 12</button>
      </div>

      <main className="px-6 grid grid-cols-2 gap-4 pb-8">
        {SUBJECTS.map((subject) => (
          <button 
            key={subject.id} 
            onClick={() => onSelectSubject(subject.id)}
            className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700/50 text-left active:scale-95 transition-transform"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${subject.colorClass}`}>
              <span className="material-icons-round">{subject.icon}</span>
            </div>
            <h3 className="font-bold text-sm mb-1 truncate">{subject.name}</h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-4 truncate">{subject.teacher}</p>
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-[10px] font-semibold">
                <span className="text-slate-400">Syllabus</span>
                <span className="text-primary">{subject.progress}%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full transition-all duration-1000" style={{ width: `${subject.progress}%` }}></div>
              </div>
            </div>
          </button>
        ))}
      </main>

      <div className="px-6 mb-8">
        <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden group shadow-lg">
          <img alt="Webinar" className="w-full h-full object-cover brightness-[0.7]" src="https://picsum.photos/seed/webinar/600/300" />
          <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
            <span className="bg-white/20 backdrop-blur-md px-2 py-1 rounded text-[10px] uppercase font-bold tracking-widest self-start mb-2">Webinar Besok</span>
            <h4 className="text-lg font-bold leading-tight mb-1">Strategi Menghadapi UNBK 2024</h4>
            <p className="text-xs text-slate-200">Siswa kelas 12 • 10:00 WIB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectsScreen;
