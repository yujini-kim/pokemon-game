"use clinet";

export default function PokeSortBox({ selectedOption, setSelectedOption }) {
  const handleSortChange = (e) => {
    const selectedSort = e.target.value;
    setSelectedOption(selectedSort);
  };

  return (
    <div className="flex justify-end px-2 desktop:mx-44">
      <select
        value={selectedOption}
        onChange={handleSortChange}
        className="p-1 rounded-lg text-xs
            tablet:w-1/2 tablet:text-sm"
      >
        <option value="name">이름순</option>
        <option value="Rename">이름 반대순서</option>
        <option value="number">도감번호순</option>
        <option value="Renumber">도감번호 반대순서</option>
        <option value="weight">무거운 순서</option>
        <option value="weight2">가벼운 순서</option>
        <option value="weight2">종족값</option>
        <option value="HP">HP</option>
        <option value="attack">공격력</option>
        <option value="specialAttack">특수공격력</option>
        <option value="defense">방어력</option>
        <option value="specialDefense">특수방어력</option>
        <option value="speed">속도</option>
      </select>
    </div>
  );
}
