import React, { Suspense } from 'react';
import Image from 'next/image';
import YellowBoxSkeleton from './YellowBoxSkeleton';

export default function YellowBox({ coinAmount, ballSrc, ballText }) {
  return (
    <div className="yellowBox">
      <div className="yellowBoxIn">
        <div className="coinBox">
          <Suspense fallback={<YellowBoxSkeleton />}>
            <Image src="/img/coin.webp" alt="Coin" width={24} height={24} className="coinImg" />
          </Suspense>
          <span className="coinText">{coinAmount}</span>
        </div>

        <div>
          <Suspense fallback={<YellowBoxSkeleton />}>
            <Image src={ballSrc} alt={ballText} width={48} height={48} className="ballImg" />
          </Suspense>
        </div>

        <div>
          <span className="ballText">{ballText}</span>
        </div>
      </div>
    </div>
  );
}