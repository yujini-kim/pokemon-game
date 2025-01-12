export default function PokeGachaCardSkeleton() {
    return (
        <div className="flex gap-2 desktop:gap-3">
            <div className="PokeGachaCard animate-pulse">
                {/* 코인 박스 스켈레톤 */}
                <div className="PokeGachaCardCoinBox">
                    <div className="PokeGachaCardCoinImg bg-gray-300 rounded-full"></div>
                    <div className="PokeGachaCardCoinText bg-gray-300 w-4 h-4 rounded"></div>
                </div>

                {/* 볼 이미지 스켈레톤 */}
                <div className="PokeGachaCardBallImg bg-gray-300 rounded-full"></div>

                {/* 등급 텍스트 스켈레톤 */}
                <div className="PokeGachaCardRankText bg-gray-300 w-16 h-6 rounded"></div>
            </div>
        </div>
    );
}