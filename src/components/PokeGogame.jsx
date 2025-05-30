import Image from "next/image";
import Link from "next/link";

export default function PokeGamego() {
  return (
    <>
      <Link href="/game" className="flex justify-center items-center mb-14">
        <div
          className="flex items-center justify-center gap-2 hover:opacity-70 bg-black w-1/2 h-10 px-2 rounded-2xl border border-[#1C1D1F]
                tablet:w-auto tablet:h-16 tablet:p-4"
        >
          <Image
            width={20}
            height={20}
            alt="profile image"
            src="/img/profile.webp"
            className="tablet:size-9"
          />
          <p className="text-center text-sm tablet:text-xl text-white">
            Let’s Get Coins
          </p>
        </div>
      </Link>
    </>
  );
}
