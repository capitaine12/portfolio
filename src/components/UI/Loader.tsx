const Loader = () => {
  return (
    <div className="
      fixed inset-0 z-[9999]
      flex items-center justify-center
      bg-white text-black
      transition-opacity duration-300
      animate-fadeIn
    ">
      <svg
        viewBox="0 0 240 240"
        className="w-24 h-24"
      >
        <style>{`
          .pl1123__ring {
            animation: ringA 2s linear infinite;
          }
          .pl1123__ring--b { animation-name: ringB; }
          .pl1123__ring--c { animation-name: ringC; }
          .pl1123__ring--d { animation-name: ringD; }

          @keyframes ringA {
            from,4% { stroke-dasharray:0 660; stroke-width:20; stroke-dashoffset:-330 }
            12% { stroke-dasharray:60 600; stroke-width:30; stroke-dashoffset:-335 }
            32% { stroke-dasharray:60 600; stroke-width:30; stroke-dashoffset:-595 }
            40%,54% { stroke-dasharray:0 660; stroke-width:20; stroke-dashoffset:-660 }
            62% { stroke-dasharray:60 600; stroke-width:30; stroke-dashoffset:-665 }
            82% { stroke-dasharray:60 600; stroke-width:30; stroke-dashoffset:-925 }
            90%,to { stroke-dasharray:0 660; stroke-width:20; stroke-dashoffset:-990 }
          }

          @keyframes ringB {
            from,12% { stroke-dasharray:0 220; stroke-width:20; stroke-dashoffset:-110 }
            20% { stroke-dasharray:20 200; stroke-width:30; stroke-dashoffset:-115 }
            40% { stroke-dasharray:20 200; stroke-width:30; stroke-dashoffset:-195 }
            48%,62% { stroke-dasharray:0 220; stroke-width:20; stroke-dashoffset:-220 }
            70% { stroke-dasharray:20 200; stroke-width:30; stroke-dashoffset:-225 }
            90% { stroke-dasharray:20 200; stroke-width:30; stroke-dashoffset:-305 }
            98%,to { stroke-dasharray:0 220; stroke-width:20; stroke-dashoffset:-330 }
          }

          @keyframes ringC {
            from { stroke-dasharray:0 440; stroke-width:20 }
            8% { stroke-dasharray:40 400; stroke-width:30 }
            28% { stroke-dasharray:40 400; stroke-width:30 }
            36%,58% { stroke-dasharray:0 440; stroke-width:20 }
            66% { stroke-dasharray:40 400; stroke-width:30 }
            86% { stroke-dasharray:40 400; stroke-width:30 }
            94%,to { stroke-dasharray:0 440; stroke-width:20 }
          }

          @keyframes ringD {
            from,8% { stroke-dasharray:0 440; stroke-width:20 }
            16% { stroke-dasharray:40 400; stroke-width:30 }
            36% { stroke-dasharray:40 400; stroke-width:30 }
            44%,50% { stroke-dasharray:0 440; stroke-width:20 }
            58% { stroke-dasharray:40 400; stroke-width:30 }
            78% { stroke-dasharray:40 400; stroke-width:30 }
            86%,to { stroke-dasharray:0 440; stroke-width:20 }
          }
        `}</style>

        <circle className="pl1123__ring" cx="120" cy="120" r="105" fill="none" stroke="currentColor" strokeWidth="20" strokeLinecap="round"/>
        <circle className="pl1123__ring pl1123__ring--b" cx="120" cy="120" r="35" fill="none" stroke="currentColor" strokeWidth="20" strokeLinecap="round"/>
        <circle className="pl1123__ring pl1123__ring--c" cx="85" cy="120" r="70" fill="none" stroke="currentColor" strokeWidth="20" strokeLinecap="round"/>
        <circle className="pl1123__ring pl1123__ring--d" cx="155" cy="120" r="70" fill="none" stroke="currentColor" strokeWidth="20" strokeLinecap="round"/>
      </svg>
    </div>
  );
};

export default Loader;
