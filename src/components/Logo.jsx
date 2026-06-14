import React from 'react';

const Logo = ({ className = 'h-10', showTagline = false }) => {
  return (
    <div className="flex items-center gap-3 select-none">
      {/* SVG Icon */}
      <svg
        viewBox="0 0 200 200"
        className={`${className} w-auto`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Graduation Cap */}
        <path
          d="M100 25L30 60L100 95L170 60L100 25Z"
          fill="#2563EB"
          stroke="#2563EB"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M60 75V110C60 125 78 135 100 135C122 135 140 125 140 110V75"
          fill="#2563EB"
          opacity="0.8"
        />
        {/* Tassel */}
        <path
          d="M145 62V105"
          stroke="#FBBF24"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="145" cy="110" r="6" fill="#FBBF24" />

        {/* Interlocking Chain Links */}
        {/* Blue Link (Left) */}
        <path
          d="M85 110C73.9543 110 65 118.954 65 130C65 141.046 73.9543 150 85 150H100"
          stroke="#2563EB"
          strokeWidth="10"
          strokeLinecap="round"
        />
        {/* Yellow Link (Right) */}
        <path
          d="M100 130C100 118.954 108.954 110 120 110C131.046 110 140 118.954 140 130C140 141.046 131.046 150 120 150H105"
          stroke="#FBBF24"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <span className="font-display font-black text-xl tracking-tight leading-none text-dark">
          <span className="text-primary">Skill</span>Link
        </span>
        {showTagline && (
          <span className="text-[9px] tracking-wide text-slate-500 uppercase mt-0.5 font-sans font-medium">
            Connecting Skills
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
