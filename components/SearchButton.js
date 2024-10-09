"use client"

import React, { useState } from "react";

export default function SearchButton() {
  return (
    <div className="flex gap-2">
      <input 
        type="text"
        className="bg-white w-58 h-5 rounded-3xl 
        tablet:w-[410px] tablet:h-10 
        desktop:w-[800px] desktop:h-10" 
      />

      <button 
        className='bg-white text-black w-10 rounded-3xl text-xs
        tablet:p-2'>
          검색
      </button>
    </div>
  );
}