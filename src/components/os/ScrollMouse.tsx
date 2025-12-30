'use client';

type ScrollMouseProps = {
  onClick: () => void;
};

export default function ScrollMouse({ onClick }: ScrollMouseProps) {
  return (
    <button onClick={onClick} className="w-8 h-12 flex justify-center cursor-pointer group">
      <div className="w-full h-full border-2 border-white rounded-full p-1 relative transition-all group-hover:border-white/80">
        <div className="w-1.5 h-1.5 bg-white rounded-full absolute left-1/2 -translate-x-1/2 animate-scroll-wheel"></div>
      </div>
    </button>
  );
}
