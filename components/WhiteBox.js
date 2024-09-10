import Image from 'next/image';

export default function WhiteBox({ type }) {
  return (
    <div className="whiteBox">
      <img className="typeBoxImg" src={`/img/${type}.webp`} alt={type} />
      <span className="text-[8px]">{type}</span>
    </div>
  );
}