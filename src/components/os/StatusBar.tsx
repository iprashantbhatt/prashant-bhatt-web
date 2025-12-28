'use client';
import { useState, useEffect } from 'react';
import { Wifi, Signal, Battery } from 'lucide-react';

export default function StatusBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="w-full flex justify-between items-center px-6 py-3 text-white text-xs font-medium z-50 mix-blend-overlay">
      <div className="flex items-center space-x-2">
        <span>{formatTime(time)}</span>
      </div>
      <div className="flex items-center space-x-2">
        <Signal size={14} />
        <Wifi size={14} />
        <div className="flex items-center space-x-1">
          <span>100%</span>
          <Battery size={16} className="text-white" />
        </div>
      </div>
    </div>
  );
}
