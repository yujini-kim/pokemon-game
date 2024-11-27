
export default function PokeGachaCard({ onClick, coin, ballImg, rank}){
    return(

            <div className="flex gap-2 desktop:gap-3">
                    <div className="PokeGachaCard"
                    onClick={onClick}>
                        <div className="PokeGachaCardCoinBox">
                            <img className="PokeGachaCardCoinImg" src="/img/coin.webp" />
                            <span className="PokeGachaCardCoinText">{coin}</span>
                        </div>

                        <img className="PokeGachaCardBallImg" src={`/img/${ballImg}.webp`}/>

                        <span className="PokeGachaCardRankText">{rank}</span>
                </div>
            </div>

    )
}