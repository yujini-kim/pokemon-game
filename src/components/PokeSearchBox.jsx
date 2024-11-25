

export default function PokeSearchBox({ searchText, setSearchText, setSearchName }){
   
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setSearchName(searchText); 
        }
    };

    return(
        <div className="flex items-center gap-2 tablet:mx-10"> 
            <input className="bg-[#FBF8CB] rounded-lg w-full h-full p-1 border border-[#1C1D1F]
            placeholder-[#1C1D1F] placeholder:text-xs text-xs
            tablet:placeholder:text-sm tablet:text-xs tablet:p-2"
            type="text"
            placeholder="포켓몬 이름/번호 검색"
            value={searchText}
            id="pokemonName"
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown} 
            />
            <button 
            onClick={() => setSearchName(searchText)}
            className="w-auto h-full p-2 border border-[#1C1D1F] bg-[#FBF8CB] rounded-lg flex items-center justify-center
            tablet:p-3">
                    <img src="/img/icon_search.webp" className="w-3 h-3" />
            </button> 
        </div>     
    )
}