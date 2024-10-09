import React from 'react';

export default function PokemonCardSkeleton() {
    return (
      <div className="poketBox animate-pulse">
        <div className="h-6 w-12 bg-gray-300 rounded"></div> {/* 포켓몬 번호 스켈레톤 */}
        <div className="flex justify-center">
          <div className="poketImgBox">
            <div className="w-24 h-24 bg-gray-300 rounded-full"></div> {/* 포켓몬 이미지 스켈레톤 */}
          </div>
        </div>
        <div className="h-6 w-24 bg-gray-300 rounded mt-2"></div> {/* 포켓몬 이름 스켈레톤 */}
        <div className="flex justify-center space-x-2 mt-2">
          <div className="h-6 w-6 bg-gray-300 rounded-full"></div> {/* 타입1 스켈레톤 */}
          <div className="h-6 w-6 bg-gray-300 rounded-full"></div> {/* 타입2 스켈레톤 */}
        </div>
      </div>
    );
  }