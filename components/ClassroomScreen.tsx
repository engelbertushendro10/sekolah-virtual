
import React, { useState } from 'react';
import { askStudyAssistant } from '../services/geminiService';

interface ClassroomScreenProps {
  subjectId: string;
  onBack: () => void;
}

const ClassroomScreen: React.FC<ClassroomScreenProps> = ({ subjectId, onBack }) => {
  const [activeTab, setActiveTab] = useState('Modul');
  const [question, setQuestion] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    setLoading(true);
    const response = await askStudyAssistant('Matematika', question);
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
              <h1 className="text-xl font-bold">Matematika</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">Kelas XI • MIPA 2</p>
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
            <img alt="Hero" className="w-full h-full object-cover" src="https://picsum.photos/seed/math/600/350" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/90 text-white shadow-2xl backdrop-blur-sm transition-transform active:scale-90">
                <span className="material-icons-round text-4xl leading-none ml-1">play_arrow</span>
              </button>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-xs font-medium opacity-80 mb-1">Bab 4: Trigonometri</p>
              <h3 className="text-lg font-bold leading-tight">Penerapan Identitas Trigonometri dalam Kehidupan</h3>
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

        {/* AI Assistant (Feature addition) */}
        <div className="mt-6 p-4 bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-2xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-icons-round text-primary text-xl">psychology</span>
            <h3 className="text-sm font-bold text-primary">AI Study Assistant</h3>
          </div>
          <form onSubmit={handleAskAI} className="space-y-3">
            <div className="relative">
              <input 
                type="text" 
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Tanyakan rumus atau konsep..."
                className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-2 px-4 text-sm focus:ring-primary focus:border-primary pr-10"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-primary active:scale-90 transition-transform">
                <span className="material-icons-round">send</span>
              </button>
            </div>
            {loading && <div className="text-xs text-slate-400 animate-pulse">Berpikir...</div>}
            {aiResponse && (
              <div className="p-3 bg-white dark:bg-slate-800 rounded-xl text-xs text-slate-600 dark:text-slate-300 leading-relaxed border border-slate-100 dark:border-slate-700">
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
              <h4 className="text-sm font-semibold">Bab 1: Eksponen & Logaritma</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">PDF • 4.2 MB • Diperbarui 2 hari lalu</p>
            </div>
            <button className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400">
              <span className="material-icons-round">file_download</span>
            </button>
          </div>

          <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-50 dark:bg-red-900/20 text-red-500">
              <span className="material-icons-round text-3xl">picture_as_pdf</span>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold">Latihan Soal UTS Semester 1</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">PDF • 1.8 MB • Diperbarui 1 minggu lalu</p>
            </div>
            <button className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400">
              <span className="material-icons-round">file_download</span>
            </button>
          </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-6 w-14 h-14 rounded-full bg-primary text-white shadow-xl flex items-center justify-center active:scale-95 transition-transform z-50">
        <span className="material-icons-round text-3xl">add</span>
      </button>
    </div>
  );
};

export default ClassroomScreen;
