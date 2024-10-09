import Image from 'next/image';

export default function PokemonCard({ number, name, image, type1, type2 }) {
  return (
    <div className="poketBox">
      <span className="poketBoxText">{number}</span> {/* 포켓몬 번호 */}
      <div className="flex justify-center">
        <div className="poketImgBox">
          <Image src={image} alt={name} width={120} height={120} /> {/* 포켓몬 이미지 */}
        </div>
      </div>
      <span className="poketBoxText">{name}</span> {/* 포켓몬 이름 */}

      <div className="flex justify-center space-x-1">
        {/* 타입1이 존재할 경우 렌더링 */}
        {type1 && (
          <div className="poketTypeImgBox"> {/* 타입 흰박스 */}
            <Image className="poketTypeImg"
              src={`/img/${type1}.webp`} alt={type1} width={24} height={24} />
            <span className="text-[8px] tablet:text-xs">
              {type1}
            </span>
          </div>
        )}

        {/* 타입2가 존재할 경우 렌더링 */}
        {type2 && type2 !== "unknown" && (
          <div className="poketTypeImgBox"> {/* 타입 흰박스 */}
            <Image className="poketTypeImg"
              src={`/img/${type2}.webp`} alt={type2} width={24} height={24} />
            <span className="text-[8px] tablet:text-xs">
              {type2}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}