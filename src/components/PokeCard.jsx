

export default function PokeCard({number, name, img, type1, type2, onClick}){

    return (
                <div className="pokeCardBg"
                onClick={onClick}>
                    <span className="pokeCardnumber">{number}</span>
                    <div className="pokeCardImgBox">
                        <img className="pokeCardImg" src={img} />
                    </div>
                    <span className="pokeCardName">{name}</span>
                    <div className="flex gap-1">
                        {type1 && (
                            <div className="pokeCardType">
                                <img className="pokeCardTypeImg" src={`/img/${type1}.webp`}/>
                                <span className="pokeCardTypeText">
                                    {type1}
                                </span>
                            </div>
                            )}
                        {type2 && type2 !== "unknown" && (
                        <div className="pokeCardType">
                            <img className="pokeCardTypeImg" src={`/img/${type2}.webp`}/>
                            <span className="pokeCardTypeText">
                                {type2}
                            </span>
                        </div>        )}

                    </div>
                </div>
    )
}