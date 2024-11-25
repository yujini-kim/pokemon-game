

export default function PokeCardSkeleton() {
    return (
        <div className="flex flex-col justify-center items-center p-2 gap-y-2 w-full h-full bg-[#FBF8CB] border border-[#1C1D1F] rounded-lg">
            {/* 번호 */}
            <div className="w-16 h-5 bg-gray-300 rounded-md animate-pulse"></div>

            {/* 이미지 박스 */}
            <div className="w-24 h-24 bg-gray-300 rounded-lg animate-pulse"></div>

            {/* 이름 */}
            <div className="w-20 h-4 bg-gray-300 rounded-md animate-pulse"></div>

            {/* 타입 */}
            <div className="flex gap-1">
                <div className="w-12 h-6 bg-gray-300 rounded-2xl animate-pulse"></div>
                <div className="w-12 h-6 bg-gray-300 rounded-2xl animate-pulse"></div>
            </div>
        </div>

    )}