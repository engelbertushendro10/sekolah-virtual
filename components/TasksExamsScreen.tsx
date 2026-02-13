
import React, { useState } from 'react';

const TasksExamsScreen: React.FC = () => {
  const [activeSegment, setActiveSegment] = useState<'TASKS' | 'EXAMS'>('TASKS');

  return (
    <div className="min-h-full pb-10">
      <header className="px-5 pt-4 pb-4 sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-40">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold tracking-tight">Tugas & Ujian</h1>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
              <span className="material-icons-round">notifications</span>
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
              <img className="w-full h-full object-cover" src="https://picsum.photos/seed/student/100/100" />
            </div>
          </div>
        </div>

        <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-xl flex">
          <button 
            onClick={() => setActiveSegment('TASKS')}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${activeSegment === 'TASKS' ? 'bg-white dark:bg-slate-700 shadow-sm text-primary' : 'text-slate-500'}`}
          >
            Tugas Aktif
          </button>
          <button 
            onClick={() => setActiveSegment('EXAMS')}
            className={`flex-1 py-2 text-sm font-medium transition-all ${activeSegment === 'EXAMS' ? 'bg-white dark:bg-slate-700 shadow-sm text-primary' : 'text-slate-500'}`}
          >
            Ujian Mendatang
          </button>
        </div>
      </header>

      <main className="px-5 space-y-6 mt-4">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary shadow-sm" placeholder="Cari mata pelajaran..." type="text"/>
          </div>
          <button className="bg-slate-50 dark:bg-slate-800 p-2.5 rounded-xl shadow-sm text-slate-500">
            <span className="material-icons-round">tune</span>
          </button>
        </div>

        {activeSegment === 'TASKS' ? (
          <section>
            <div className="flex justify-between items-end mb-4">
              <h2 className="text-lg font-semibold">Tugas Aktif</h2>
              <span className="text-xs font-medium text-primary">Lihat Semua</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700/50">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600">
                      <span className="material-icons-round">calculate</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Matematika - Aljabar</h3>
                      <p className="text-[11px] text-slate-500">Modul 4: Persamaan Linear</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 text-[10px] font-bold uppercase tracking-wider">Sedang Dikerjakan</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <span className="material-icons-round text-sm">schedule</span>
                    <span className="text-[11px]">Batas: Besok, 23:59</span>
                  </div>
                  <div className="w-24 h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 w-2/3"></div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700/50">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                      <span className="material-icons-round">science</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">IPA (Biologi)</h3>
                      <p className="text-[11px] text-slate-500">Laporan Fotosintesis</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider">Selesai</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <span className="material-icons-round text-sm text-emerald-500">check_circle</span>
                    <span className="text-[11px] text-emerald-500">Dikirim: Kemarin</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-600">Nilai: 95/100</span>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section>
            <div className="flex justify-between items-end mb-4">
              <h2 className="text-lg font-semibold">Ujian Mendatang</h2>
            </div>
            <div className="space-y-4">
              <div className="relative overflow-hidden bg-primary p-5 rounded-2xl shadow-lg shadow-primary/20 text-white">
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded bg-white/20 text-[10px] font-bold tracking-widest uppercase mb-1">Sedang Berlangsung</span>
                      <h3 className="text-xl font-bold leading-tight">Kuis Harian:<br/>Sejarah Indonesia</h3>
                    </div>
                    <span className="material-icons-round text-4xl opacity-40">history_edu</span>
                  </div>
                  <div className="flex gap-4 mb-5 text-sm font-light text-white/80">
                    <div className="flex items-center gap-1.5">
                      <span className="material-icons-round text-sm">timer</span>
                      <span>45 Menit</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-icons-round text-sm">list_alt</span>
                      <span>20 Soal</span>
                    </div>
                  </div>
                  <button className="w-full py-3 bg-white text-primary font-bold rounded-xl shadow-xl flex items-center justify-center gap-2 active:scale-95 transition-all">
                    <span>Mulai Ujian</span>
                    <span className="material-icons-round text-sm">play_arrow</span>
                  </button>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700/50">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300">
                      <span className="material-icons-round">biotech</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">UTS: Fisika Dasar</h3>
                      <p className="text-[11px] text-slate-500">Senin, 12 Okt • 08:00 WIB</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tighter leading-none">Mulai Dalam</p>
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-200">2h 15m</p>
                  </div>
                </div>
                <button className="w-full py-2.5 bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500 font-bold rounded-lg text-xs cursor-not-allowed">
                  Akses Belum Dibuka
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default TasksExamsScreen;
