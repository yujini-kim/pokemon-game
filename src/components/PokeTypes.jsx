

export default function PokeTypes({selectedType, setSelectedType}) {

    const types = [
      "노말", "불꽃", "물", "풀", "전기", "얼음", "격투",
      "독", "땅", "비행", "에스퍼", "벌레", "바위", "고스트",
      "드래곤", "악", "강철", "페어리"
    ];


    const onClick = (type) => {
      if(selectedType == type) {
        setSelectedType('')
      } else {
        setSelectedType(type);
      }
    }
  
    return (

      <div className="grid grid-cols-5 gap-1
      tablet:grid-cols-8 tablet:m-10
      desktop:grid-cols-18">
        {types.map((type, index) => (
          <div key={index} className="flex justify-center items-center gap-2
         
          ">
            <button 
              className={`w-16 h-7 ${
                selectedType  === type ? "bg-[#BC99FF] font-bold " : "bg-[#FBF8CB]" 
              } border border-[#1C1D1F] 
              rounded-lg flex items-center justify-center gap-0.5
              tablet:flex-row tablet:w-full tablet:h-10 tablet:py-2
              desktop:flex-row desktop:w-full desktop:h-10`}

              onClick={() => onClick(type)}
              >
              <img src={`/img/${type}.webp`} alt={type} className="w-4 h-4 tablet:w-6 tablet:h-6" />
              <span className="text-xs tablet:text-sm">{type}</span>
            </button>
          </div>
        ))}
      </div>
    );
  }