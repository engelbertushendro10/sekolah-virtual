
import React, { useEffect, useRef, useState } from 'react';

interface ScannerScreenProps {
  onBack: () => void;
}

const ScannerScreen: React.FC<ScannerScreenProps> = ({ onBack }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setHasPermission(true);
        }
      } catch (err) {
        console.error("Camera access denied", err);
        setHasPermission(false);
      }
    }
    startCamera();
    return () => {
      const stream = videoRef.current?.srcObject as MediaStream;
      stream?.getTracks().forEach(track => track.stop());
    };
  }, []);

  return (
    <div className="h-full bg-black relative flex flex-col">
      {/* Header Overlay */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-20 bg-gradient-to-b from-black/60 to-transparent">
        <button onClick={onBack} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
          <span className="material-icons-round">close</span>
        </button>
        <h2 className="text-white font-bold">Pindai QR / Tugas</h2>
        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
          <span className="material-icons-round">flash_on</span>
        </button>
      </div>

      {/* Camera View */}
      <div className="flex-1 relative flex items-center justify-center overflow-hidden">
        {hasPermission === false ? (
          <div className="text-center p-10 text-white">
            <span className="material-icons-round text-6xl mb-4 text-red-500">videocam_off</span>
            <p className="text-sm font-medium">Akses kamera ditolak.<br/>Silakan aktifkan di pengaturan browser.</p>
          </div>
        ) : (
          <video 
            ref={videoRef} 
            autoPlay 
            playsInline 
            className="w-full h-full object-cover grayscale-[0.2]"
          />
        )}

        {/* Scanner Overlay UI */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 border-2 border-primary rounded-3xl relative">
            {/* Corner Accents */}
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-white rounded-tl-xl"></div>
            <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-white rounded-tr-xl"></div>
            <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-white rounded-bl-xl"></div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-white rounded-br-xl"></div>
            
            {/* Scanning Line */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-primary/80 shadow-[0_0_15px_rgba(19,91,236,1)] animate-[scan_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>

      {/* Footer Instructions */}
      <div className="p-8 bg-black/80 backdrop-blur-md text-white text-center z-20">
        <p className="text-xs font-medium opacity-70 mb-4 tracking-wide">Posisikan kode QR atau lembar tugas di dalam kotak</p>
        <div className="flex justify-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <span className="material-icons-round">qr_code_2</span>
            </div>
            <span className="text-[10px] font-bold">QR</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="material-icons-round">description</span>
            </div>
            <span className="text-[10px] font-bold">TUGAS</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <span className="material-icons-round">image</span>
            </div>
            <span className="text-[10px] font-bold">GALERI</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0%, 100% { top: 0%; }
          50% { top: 100%; }
        }
      `}</style>
    </div>
  );
};

export default ScannerScreen;
