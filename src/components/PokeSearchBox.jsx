import Image from "next/image";

export default function PokeSearchBox({
  searchText,
  setSearchText,
  setSearchName,
}) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchName(searchText);
    }
  };

  return (
    <div className="flex items-center gap-2 tablet:mx-10">
      <input
        className="bg-[#F1F1F1] rounded-lg w-full h-full p-1 
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
        className="w-auto h-full p-2 border border-[#1C1D1F] bg-[#F1F1F1] rounded-lg flex items-center justify-center
            tablet:p-3"
      >
        <Image
          width={12}
          height={12}
          src="/img/icon_search.webp"
          alt="search icon"
        />
      </button>
    </div>
  );
}
