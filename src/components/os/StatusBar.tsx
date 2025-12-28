'use client';
import { useState, useEffect } from 'react';
import { Wifi, Signal, BatteryFull } from 'lucide-react';

export default function StatusBar() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
    };
    update();
    const timerId = setInterval(update, 60000); // Update every minute
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="w-full flex justify-between items-center px-6 py-3 text-sm font-semibold text-white mix-blend-difference absolute top-0 left-0 right-0 z-10">
      <div className="w-1/3 text-left">
        <span>{time}</span>
      </div>
      <div className="w-1/3" />
      <div className="w-1/3 flex justify-end items-center gap-2">
        <Signal size={16} />
        <Wifi size={16} />
        <div className="flex items-center gap-1">
            <span>94%</span>
            <BatteryFull size={20} />
        </div>
      </div>
    </div>
  );
}
