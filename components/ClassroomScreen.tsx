
import React, { useState } from 'react';
import { askStudyAssistant } from '../services/geminiService';
import { SUBJECTS } from '../constants';

interface ClassroomScreenProps {
  subjectId: string;
  onBack: () => void;
}

const ClassroomScreen: React.FC<ClassroomScreenProps> = ({ subjectId, onBack }) => {
  const subject = SUBJECTS.find(s => s.id === subjectId) || SUBJECTS[0];
  const [activeTab, setActiveTab] = useState('Modul');
  const [question, setQuestion] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    setLoading(true);
    setAiResponse(null);
    const response = await askStudyAssistant(subject.name, question);
    setAiResponse(response || "Gagal mendapatkan jawaban.");
    setLoading(false);
  };

  return (
    <div className="min-h-full pb-32">
      <header className="px-4 py-4 sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-40 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm text-primary active:scale-95 transition-transform">
              <span className="material-icons-round">arrow_back_ios_new</span>
            </button>
            <div>
              <h1 className="text-xl font-bold">{subject.name}</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">Kelas XI • {subject.teacher}</p>
            </div>
          </div>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm text-slate-600 dark:text-slate-300">
            <span className="material-icons-round">more_vert</span>
          </button>
        </div>
      </header>

      <main className="px-4 mt-4">
        {/* Hero Section */}
        <section className="mt-2">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Materi Terbaru</h2>
            <span className="text-xs font-medium text-primary">Lihat Semua</span>
          </div>
          <div className="relative group overflow-hidden rounded-xl aspect-video bg-slate-200 dark:bg-slate-800 shadow-lg">
            <img alt="Hero" className="w-full h-full object-cover" src={`https://picsum.photos/seed/${subject.name}/600/350`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/90 text-white shadow-2xl backdrop-blur-sm transition-transform active:scale-90">
                <span className="material-icons-round text-4xl leading-none ml-1">play_arrow</span>
              </button>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-xs font-medium opacity-80 mb-1">Bab 4: Topik Utama</p>
              <h3 className="text-lg font-bold leading-tight">Pendalaman Materi {subject.name} Terkini</h3>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <nav className="mt-8 overflow-x-auto no-scrollbar -mx-4 px-4 sticky top-[80px] z-30 py-2 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
          <div className="flex items-center bg-white dark:bg-slate-800 p-1 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 min-w-max">
            {['Modul', 'Video', 'Diskusi', 'Tugas'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === tab ? 'bg-primary text-white shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>

        {/* AI Assistant */}
        <div className="mt-6 p-4 bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-2xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-icons-round text-primary text-xl">psychology</span>
            <h3 className="text-sm font-bold text-primary">Asisten {subject.name} AI</h3>
          </div>
          <form onSubmit={handleAskAI} className="space-y-3">
            <div className="relative">
              <input 
                type="text" 
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder={`Tanyakan tentang ${subject.name}...`}
                className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-2 px-4 text-sm focus:ring-primary focus:border-primary pr-10"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-primary active:scale-90 transition-transform disabled:opacity-50" disabled={loading}>
                <span className="material-icons-round">send</span>
              </button>
            </div>
            {loading && <div className="text-[10px] text-primary animate-pulse font-bold ml-1">Menganalisis...</div>}
            {aiResponse && (
              <div className="p-3 bg-white dark:bg-slate-800 rounded-xl text-xs text-slate-600 dark:text-slate-300 leading-relaxed border border-slate-100 dark:border-slate-700 animate-[fadeIn_0.3s_ease-out]">
                <div className="font-bold text-primary mb-1">Jawaban:</div>
                {aiResponse}
              </div>
            )}
          </form>
        </div>

        {/* Content Area */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm transition-all active:bg-slate-50 dark:active:bg-slate-700">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-50 dark:bg-red-900/20 text-red-500">
              <span className="material-icons-round text-3xl">picture_as_pdf</span>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold">Materi Pertemuan 1</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">PDF • 2.4 MB</p>
            </div>
            <button className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400">
              <span className="material-icons-round">file_download</span>
            </button>
          </div>
        </div>
      </main>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ClassroomScreen;
