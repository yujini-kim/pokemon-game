import Image from 'next/image';

export default function PokemonCard({ number, name, types }) {
  return (
    <div className="poketBox">
      <span className="poketBoxText">{number}</span>
      <div className="flex justify-center">
        <div className="poketImgBox"></div>
      </div>
      <span className="poketBoxText">{name}</span>
      <div className="flex justify-center space-x-1">
        {types.map((type, index) => (
          <div key={index} className="poketTypeImgBox">
            <Image className="poketTypeImg" src={type.imgSrc} alt={type.name} width={24} height={24} />
            <span className="text-[8px] tablet:text-xs">{type.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}