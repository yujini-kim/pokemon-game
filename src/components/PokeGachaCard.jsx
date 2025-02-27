import Image from "next/image";

export default function PokeGachaCard({ onClick, coin, ballImg, rank }) {
  return (
    <div className="flex gap-2 desktop:gap-3">
      <div className="PokeGachaCard" onClick={onClick}>
        <div className="PokeGachaCardCoinBox">
          <Image
            width={16}
            height={16}
            alt="coin image"
            className="PokeGachaCardCoinImg"
            src="/img/icon_coin.webp"
          />
          <span className="PokeGachaCardCoinText">{coin}</span>
        </div>

        <Image
          width={80}
          height={80}
          alt="pokeball image"
          className="PokeGachaCardBallImg"
          src={`/img/${ballImg}.webp`}
        />
        <div className="w-20 h-auto bg-[#FEEDEF] text-center rounded-3xl shadow-md">
          <span className="PokeGachaCardRankText">{rank}</span>
        </div>
      </div>
    </div>
  );
}
