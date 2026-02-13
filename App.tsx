
import React, { useState } from 'react';
import { ScreenType } from './types';
import MobileLayout from './components/MobileLayout';
import WelcomeScreen from './components/WelcomeScreen';
import DashboardScreen from './components/DashboardScreen';
import SubjectsScreen from './components/SubjectsScreen';
import ClassroomScreen from './components/ClassroomScreen';
import TasksExamsScreen from './components/TasksExamsScreen';
import ReportScreen from './components/ReportScreen';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('WELCOME');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);

  const navigateTo = (screen: ScreenType) => {
    setCurrentScreen(screen);
    // Reset subject when navigating away from classroom
    if (screen !== 'CLASSROOM') {
      setSelectedSubjectId(null);
    }
  };

  const handleSelectSubject = (id: string) => {
    setSelectedSubjectId(id);
    setCurrentScreen('CLASSROOM');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'WELCOME':
        return <WelcomeScreen onLogin={() => navigateTo('DASHBOARD')} />;
      case 'DASHBOARD':
        return <DashboardScreen onSeeAllSubjects={() => navigateTo('SUBJECTS')} />;
      case 'SUBJECTS':
        return <SubjectsScreen onSelectSubject={handleSelectSubject} />;
      case 'CLASSROOM':
        return <ClassroomScreen subjectId={selectedSubjectId || ''} onBack={() => navigateTo('SUBJECTS')} />;
      case 'TASKS':
        return <TasksExamsScreen />;
      case 'REPORT':
        return <ReportScreen />;
      default:
        return <WelcomeScreen onLogin={() => navigateTo('DASHBOARD')} />;
    }
  };

  return (
    <MobileLayout activeScreen={currentScreen} onNavigate={navigateTo}>
      {renderScreen()}
    </MobileLayout>
  );
};

export default App;
