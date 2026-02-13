
import React from 'react';
import { SUBJECTS, TASKS, SCHEDULE } from '../constants';

interface DashboardScreenProps {
  onSeeAllSubjects: () => void;
}

const DashboardScreen: React.FC<DashboardScreenProps> = ({ onSeeAllSubjects }) => {
  return (
    <div className="px-5 pb-10">
      {/* Header */}
      <header className="flex items-center justify-between mb-8 mt-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img 
              alt="Profile" 
              className="w-14 h-14 rounded-full border-2 border-primary object-cover" 
              src="https://picsum.photos/seed/student/100/100" 
            />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
          </div>
          <div>
            <h1 className="text-xl font-bold">Halo, Budi!</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">Semangat belajarnya hari ini!</p>
          </div>
        </div>
        <button className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm">
          <span className="material-icons-round text-slate-600 dark:text-slate-300">notifications</span>
        </button>
      </header>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center gap-3">
          <span className="material-icons-round text-primary">search</span>
          <input className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder-slate-400" placeholder="Cari materi atau tugas..." type="text"/>
        </div>
      </div>

      {/* Schedule */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Jadwal Hari Ini</h2>
          <button onClick={onSeeAllSubjects} className="text-primary text-sm font-medium">Lihat Semua</button>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar -mx-5 px-5">
          {SCHEDULE.map((item) => (
            <div 
              key={item.id} 
              className={`min-w-[280px] rounded-xl p-5 shadow-lg ${item.status === 'ONGOING' ? 'bg-primary text-white shadow-primary/20' : 'bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm'}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`${item.status === 'ONGOING' ? 'bg-white/20' : 'bg-primary/10'} p-2 rounded-lg`}>
                  <span className={`material-icons-round ${item.status === 'ONGOING' ? 'text-white' : 'text-primary'}`}>{item.icon}</span>
                </div>
                <span className={`${item.status === 'ONGOING' ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500'} px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider`}>
                  {item.status === 'ONGOING' ? 'Sedang Berlangsung' : 'Mendatang'}
                </span>
              </div>
              <h3 className={`text-lg font-bold mb-1 ${item.status === 'ONGOING' ? 'text-white' : ''}`}>{item.subject}</h3>
              <p className={`text-sm mb-4 ${item.status === 'ONGOING' ? 'text-white/80' : 'text-slate-500 dark:text-slate-400'}`}>{item.teacher} • {item.time}</p>
              <button className={`w-full py-2 rounded-lg font-semibold text-sm transition-all active:scale-95 ${item.status === 'ONGOING' ? 'bg-white text-primary' : 'border border-primary text-primary'}`}>
                {item.status === 'ONGOING' ? 'Gabung Kelas' : 'Detail Jadwal'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Tasks */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Tugas Mendatang</h2>
          <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full">{TASKS.length} Tersisa</span>
        </div>
        <div className="space-y-3">
          {TASKS.map((task) => (
            <div key={task.id} className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${task.priority === 'URGENT' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                <span className="material-icons-round">{task.priority === 'URGENT' ? 'edit_note' : 'forest'}</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm">{task.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{task.subject}</p>
              </div>
              <div className="text-right">
                {task.priority === 'URGENT' && (
                  <span className="inline-block bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full mb-1">2 jam lagi</span>
                )}
                <p className="text-[10px] text-slate-400">Deadline: {task.deadline}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Announcement */}
      <section className="mb-8">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-icons-round text-lg">campaign</span>
              <h2 className="text-sm font-bold uppercase tracking-widest">Pengumuman</h2>
            </div>
            <h3 className="text-lg font-bold leading-tight mb-2">Libur Nasional Semester Ganjil</h3>
            <p className="text-sm text-blue-100 mb-4">Dimulai tanggal 20 Desember 2023. Persiapkan diri untuk ujian akhir!</p>
            <button className="bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-lg text-xs font-bold">Baca Detail</button>
          </div>
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -left-4 -top-4 w-24 h-24 bg-indigo-400/20 rounded-full blur-xl"></div>
        </div>
      </section>
    </div>
  );
};

export default DashboardScreen;
