
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { GROWTH_DATA, SUBJECTS } from '../constants';
import { getReportSummary } from '../services/geminiService';

const ReportScreen: React.FC = () => {
  const [aiInsight, setAiInsight] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInsight = async () => {
      const insight = await getReportSummary(SUBJECTS);
      setAiInsight(insight);
      setLoading(false);
    };
    fetchInsight();
  }, []);

  return (
    <div className="min-h-full pb-32">
      <header className="px-6 pt-6 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Rapor Siswa</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">Semester Ganjil 2023/2024</p>
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20 shadow-sm">
            <img alt="Student" src="https://picsum.photos/seed/student/100/100" />
          </div>
        </div>

        <div className="flex gap-2 mt-6 overflow-x-auto pb-2 no-scrollbar">
          <button className="px-4 py-2 bg-primary text-white rounded-full text-xs font-medium shrink-0">Semester 1</button>
          <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-full text-xs font-medium shrink-0">Semester 2</button>
          <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-full text-xs font-medium shrink-0">Ujian Akhir</button>
        </div>
      </header>

      <main className="px-6 space-y-8 mt-4">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-primary p-5 rounded-2xl text-white shadow-lg shadow-primary/20 relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <span className="material-icons text-7xl">trending_up</span>
            </div>
            <p className="text-xs font-light opacity-80 uppercase tracking-wider">Rata-rata Nilai</p>
            <h2 className="text-3xl font-bold mt-1">88.5</h2>
            <div className="flex items-center mt-2 text-[10px] bg-white/20 w-fit px-2 py-0.5 rounded-full">
              <span className="material-icons text-[12px] mr-1">arrow_upward</span> +2.4%
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Kehadiran</p>
            <h2 className="text-3xl font-bold mt-1 text-primary">98%</h2>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-2">124 dari 126 hari</p>
          </div>
        </div>

        {/* AI Insight Section */}
        <section className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-2xl border border-indigo-100 dark:border-indigo-800">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-icons-round text-primary text-sm">auto_awesome</span>
            <h3 className="text-xs font-bold text-primary uppercase tracking-widest">AI Insights</h3>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {loading ? "Menganalisis perkembangan belajarmu..." : aiInsight}
          </p>
        </section>

        {/* Chart */}
        <section>
          <div className="flex justify-between items-end mb-4">
            <h3 className="font-semibold text-lg">Grafik Perkembangan</h3>
            <span className="text-xs text-primary font-medium">Lihat Detail</span>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 h-48 shadow-sm">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={GROWTH_DATA}>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} dy={10} />
                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ fontSize: '10px', borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                <Bar dataKey="score" radius={[6, 6, 0, 0]}>
                  {GROWTH_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 3 ? '#135bec' : '#cbd5e1'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Subject List */}
        <section>
          <h3 className="font-semibold text-lg mb-4">Daftar Mata Pelajaran</h3>
          <div className="space-y-3">
            {SUBJECTS.slice(0, 4).map((subject) => (
              <div key={subject.id} className="bg-white dark:bg-slate-800 p-4 rounded-xl flex items-center justify-between shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${subject.colorClass}`}>
                    <span className="material-icons-round">{subject.icon}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{subject.name}</p>
                    <p className="text-[10px] text-slate-400">{subject.teacher}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-bold text-lg leading-tight">{subject.finalScore}</p>
                    <p className="text-[10px] text-slate-400 uppercase">Nilai Akhir</p>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${subject.grade === 'A' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                    {subject.grade}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Action Buttons */}
      <div className="fixed bottom-0 left-0 w-full p-6 pb-12 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3 z-50">
        <button className="w-full bg-white dark:bg-slate-800 border border-primary/20 text-primary py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all">
          <span className="material-icons-round text-xl">assignment</span>
          Lihat Detail Kompetensi
        </button>
        <button className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/30 active:scale-95 transition-all">
          <span className="material-icons-round">picture_as_pdf</span>
          Download Rapor Digital (PDF)
        </button>
      </div>
    </div>
  );
};

export default ReportScreen;
