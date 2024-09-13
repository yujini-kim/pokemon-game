import React from 'react';

export default function YellowBoxSkeleton() {
  return (
    <div className="yellowBox">
      <div className="yellowBoxIn">

        <div className="coinBox bg-gray-300 animate-pulse">
          <div className="coinImg bg-gray-400 rounded-full w-6 h-6"></div>
          <div className="coinText bg-gray-400 rounded-full w-8 h-4"></div>
        </div>

        <div className="ballImg bg-gray-400 animate-pulse w-32 h-32 rounded-full"></div>

        <div className="ballText bg-gray-400 animate-pulse w-24 h-8 rounded-md"></div>
      </div>
    </div>
  );
}