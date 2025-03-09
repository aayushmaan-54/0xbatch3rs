'use client';
import Icon from '@/assets/icons';
import { useRouter } from 'next/navigation';

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };
  
  return (
    <div 
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-start justify-center z-50 overflow-y-auto p-4 pt-20 pb-20" 
      onClick={handleClose}
    >
      <div 
        className="rounded-lg shadow-lg max-w-md w-full mx-4 my-auto" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <button 
            onClick={handleClose}
            className="ml-1"
          >
            <Icon.X className="fill-white/70 hover:fill-white transition-colors cursor-pointer" />
          </button>
        </div>
        <div className="mt-2">
          {children}
        </div>
      </div>
    </div>
  );
}