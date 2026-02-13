
export type ScreenType = 'WELCOME' | 'DASHBOARD' | 'SUBJECTS' | 'CLASSROOM' | 'TASKS' | 'REPORT' | 'SCANNER';

export interface Subject {
  id: string;
  name: string;
  teacher: string;
  progress: number;
  icon: string;
  colorClass: string;
  grade?: string;
  finalScore?: number;
}

export interface Task {
  id: string;
  title: string;
  subject: string;
  deadline: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
  priority: 'NORMAL' | 'URGENT';
}

export interface ScheduleItem {
  id: string;
  subject: string;
  teacher: string;
  time: string;
  status: 'ONGOING' | 'UPCOMING';
  icon: string;
}
