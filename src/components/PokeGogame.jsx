import Link from "next/link";

export default function PokeGamego() {
  return (
    <>
      <Link href="/game" className="flex justify-center items-center mb-14">
        <div
          className="flex items-center justify-center gap-2 bg-black w-1/2 px-2 rounded-2xl border border-[#1C1D1F]
                tablet:w-auto tablet:p-4"
        >
          <img src="/img/jiwoo.webp" className="size-9" />
          <p className="text-center text-xl text-white">Let’s Get Coins</p>
        </div>
      </Link>
    </>
  );
}
