
import { Subject, Task, ScheduleItem } from './types';

export const SUBJECTS: Subject[] = [
  { id: '1', name: 'Matematika', teacher: 'Budi Santoso, M.Pd', progress: 75, icon: 'calculate', colorClass: 'bg-orange-100 text-orange-500', grade: 'A', finalScore: 92 },
  { id: '2', name: 'IPA Terpadu', teacher: 'Dr. Siti Aminah', progress: 40, icon: 'science', colorClass: 'bg-blue-100 text-blue-500', grade: 'A', finalScore: 90 },
  { id: '3', name: 'B. Inggris', teacher: 'John Doe, B.Ed', progress: 92, icon: 'language', colorClass: 'bg-purple-100 text-purple-500', grade: 'B', finalScore: 85 },
  { id: '4', name: 'Sejarah Indonesia', teacher: 'Drs. Ahmad Rifai', progress: 15, icon: 'history_edu', colorClass: 'bg-emerald-100 text-emerald-500', grade: 'B+', finalScore: 88 },
  { id: '5', name: 'B. Indonesia', teacher: 'Lestari Putri, S.Pd', progress: 60, icon: 'menu_book', colorClass: 'bg-red-100 text-red-500', grade: 'B+', finalScore: 88 },
  { id: '6', name: 'Informatika', teacher: 'Kevin Sanjaya, S.Kom', progress: 28, icon: 'computer', colorClass: 'bg-cyan-100 text-cyan-500', grade: 'B', finalScore: 82 },
];

export const TASKS: Task[] = [
  { id: '1', title: 'Latihan Aljabar', subject: 'Matematika Dasar', deadline: '14:00', status: 'IN_PROGRESS', priority: 'URGENT' },
  { id: '2', title: 'Proyek Ekosistem', subject: 'Biologi - Bab 4', deadline: 'Besok', status: 'PENDING', priority: 'NORMAL' },
  { id: '3', title: 'Ringkasan Puisi', subject: 'Bahasa Indonesia', deadline: 'Lusa', status: 'COMPLETED', priority: 'NORMAL' },
];

export const SCHEDULE: ScheduleItem[] = [
  { id: '1', subject: 'Matematika', teacher: 'Ibu Sarah', time: '08:00 - 09:30', status: 'ONGOING', icon: 'functions' },
  { id: '2', subject: 'Bahasa Indonesia', teacher: 'Pak Ahmad', time: '10:00 - 11:30', status: 'UPCOMING', icon: 'translate' },
  { id: '3', subject: 'Biologi', teacher: 'Ibu Wahyuni', time: '13:00 - 14:30', status: 'UPCOMING', icon: 'biotech' },
];

export const GROWTH_DATA = [
  { month: 'Jul', score: 78 },
  { month: 'Agu', score: 82 },
  { month: 'Sep', score: 88 },
  { month: 'Okt', score: 91 },
  { month: 'Nov', score: 89 },
];
