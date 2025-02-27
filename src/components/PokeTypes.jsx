import Image from "next/image";

export default function PokeTypes({ selectedType, setSelectedType }) {
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
              selectedType === type ? "bg-[#FEEDEF] font-bold " : "bg-[#F5F5F5]"
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
  );
}
