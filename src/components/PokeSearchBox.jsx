import Image from "next/image";

export default function PokeSearchBox({
  searchText,
  setSearchText,
  setSearchName,
  selectedType,
  setSelectedType,
}) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchName(searchText);
    }
  };

  const types = [
    "노말",
    "불꽃",
    "물",
    "풀",
    "전기",
    "얼음",
    "격투",
    "독",
    "땅",
    "비행",
    "에스퍼",
    "벌레",
    "바위",
    "고스트",
    "드래곤",
    "악",
    "강철",
    "페어리",
  ];

  const onClick = (type) => {
    if (selectedType == type) {
      setSelectedType("");
    } else {
      setSelectedType(type);
    }
  };
  return (
    <div
      className="m-2 w-auto h-auto p-3 bg-white rounded-lg 
        tablet:py-6 desktop:mx-44"
    >
      <div className="space-y-2">
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
        <div
          className="grid grid-cols-5 gap-1
          tablet:grid-cols-8 tablet:m-10
          desktop:grid-cols-18"
        >
          {types.map((type, index) => (
            <div
              key={index}
              className="flex justify-center items-center gap-2
             
              "
            >
              <button
                className={`w-16 h-7 ${
                  selectedType === type
                    ? "bg-[#FEEDEF] font-bold "
                    : "bg-[#F5F5F5]"
                } 
                  rounded-lg flex items-center justify-center gap-0.5
                  tablet:flex-row tablet:w-full tablet:h-10 tablet:py-2
                  desktop:flex-row desktop:w-full desktop:h-10`}
                onClick={() => onClick(type)}
              >
                <Image
                  width={16}
                  height={16}
                  src={`/img/${type}.webp`}
                  alt={type}
                  className="tablet:w-6 tablet:h-6"
                />
                <span className="text-xs desktop:text-sm">{type}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
