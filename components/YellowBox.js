import Image from 'next/image';

export default function YellowBox({ coinAmount, ballSrc, ballText }) {
  return (
    <div className="yellowBox">
      <div className="yellowBoxIn">
        <div className="coinBox">
          <Image src="/img/coin.webp" alt="Coin" width={24} height={24} className="coinImg" />
          <span className="coinText">{coinAmount}</span>
        </div>
        <div>
          <Image src={ballSrc} alt={ballText} width={48} height={48} className="ballImg" />
        </div>
        <div>
          <span className="ballText">{ballText}</span>
        </div>
      </div>
    </div>
  );
}