import Image from "next/image";

export default function PokeCard({ number, name, img, type1, type2, onClick }) {
  return (
    <div className="pokeCardBg" onClick={onClick}>
      <span className="pokeCardnumber">{number}</span>
      <div className="relative pokeCardImgBox">
        <Image
          fill
          className="object-cover pokeCardImg"
          src={img}
          alt="pokemon image"
        />
      </div>
      <span className="pokeCardName">{name}</span>
      <div className="flex gap-1">
        {type1 && (
          <div className="pokeCardType">
            <Image
              width={16}
              height={16}
              alt="type image"
              className="pokeCardTypeImg"
              src={`/img/${type1}.webp`}
            />
            <span className="pokeCardTypeText">{type1}</span>
          </div>
        )}
        {type2 && type2 !== "unknown" && (
          <div className="pokeCardType">
            <Image
              width={16}
              height={16}
              alt="type image"
              className="pokeCardTypeImg"
              src={`/img/${type2}.webp`}
            />
            <span className="pokeCardTypeText">{type2}</span>
          </div>
        )}
      </div>
    </div>
  );
}
