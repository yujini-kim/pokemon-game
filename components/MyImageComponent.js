import Image from 'next/image';
import React from 'react';

export default function MyImageComponent({ type }) {
  return (
    <div className="whiteBox">
      <img className="typeBoxImg" src={`/img/${type}.webp`} alt={type} />
      <span className="text-[8px]">{type}</span>
    </div>
  );
}