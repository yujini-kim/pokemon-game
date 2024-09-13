import Image from 'next/image';

export default function PokemonCard({ number, name, types }) {
  return (
    <div className="poketBox">
      <span className="poketBoxText">{number}</span> {/* 001 */}
      <div className="flex justify-center">
      <div className="poketImgBox"></div> {/* 포켓몬 이미지 */}
    </div>
      <span className="poketBoxText">{name}</span> {/* 이상해씨 */}

      <div className="flex justify-center space-x-1">
        {types.map((type, index) => (
          <div key={index} className="poketTypeImgBox"> {/* 타입 흰박스 */}
            
            {/* 타입 */}
            <Image className="poketTypeImg"
            src={type.imgSrc} alt={type.name} width={24} height={24} />
            <span className="text-[8px] tablet:text-xs">
              {type.name}</span>

          </div>
        ))}
      </div>
    </div>
  );
}