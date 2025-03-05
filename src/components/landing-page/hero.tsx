import { BinaryBackground } from "../binary-background/binary-background";


export default function Hero() {
  return (
    <>
      <div className="overflow-hidden min-h-[90vh] flex items-center justify-center relative">
        {/* Blured Background Circles */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-green/20 rounded-full blur-3xl z-0 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-green/20 rounded-full blur-3xl z-0 pointer-events-none" />

        <BinaryBackground />
      </div>

      
    </>
  );
}
