export function AnimatedOrderButton() {
    return (
      <div className="relative w-[110px] h-[40px] rounded-full overflow-hidden">
        {/* Rotating Border */}
        <span className="absolute inset-[-2px] rounded-full animate-spin-slow
          bg-[conic-gradient(from_0deg,#ff7a18,#ffb347,#ff7a18)]">
        </span>
  
        {/* Button */}
        <span className="relative z-10 flex items-center justify-center
          w-full h-full bg-white rounded-full
          text-orange-600 font-bold text-sm shadow">
          Order Now
        </span>
      </div>
    );
  }
  