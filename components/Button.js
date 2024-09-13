export default function Button({ onClick, text }) {
    return (
      <div 
        className="CenteredFlex w-20 h-10 bg-[#00FFF2] rounded-3xl desktop:w-36 desktop:h-14 cursor-pointer"
        onClick={onClick}>
        <span className="text-base text-black font-extrabold desktop:text-2xl">{text}</span>
      </div>
    );
  }