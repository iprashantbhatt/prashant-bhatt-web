'use client';

import StatusBar from './StatusBar';
import ProfileImage3D from './ProfileImage3D';
import Dock from './Dock';
import Chatbot from './Chatbot';
import ContentSuggester from './ContentSuggester';

type HomeScreenProps = {
  onShowWork: () => void;
};

export default function HomeScreen({ onShowWork }: HomeScreenProps) {
  return (
    <div className="relative h-full w-full flex flex-col items-center">
      <StatusBar />
      <ContentSuggester />
      
      <div className="flex-grow flex flex-col items-center justify-center pt-10 pb-32">
        <ProfileImage3D />
      </div>

      <Chatbot />
      <Dock onPortfolioClick={onShowWork} />
    </div>
  );
}
