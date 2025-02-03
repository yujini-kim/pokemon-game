import Link from "next/link";

export default function LoginBtn() {
  return (
    <div className="mb-4">
      <Link
        href="signup"
        className="absolute top-2 right-8 bg-[#1C1D1F] text-white p-2 rounded-lg hover:bg-[#3e4043] transition-colors duration-300 text-[8px]"
      >
        회원가입
      </Link>
    </div>
  );
}
