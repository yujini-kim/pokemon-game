"use clinet"

import React from "react";

export default function PokeSortBox ({selectedOption, setSelectedOption}) {

    
    const handleSortChange = (e) => {
        const selectedSort  = e.target.value;
        setSelectedOption(selectedSort);}

    return (
        <div className="flex justify-end px-2">
            <select
            value={selectedOption}
            onChange={handleSortChange}
            className="p-1 border border-[#1C1D1F] rounded-lg text-xs
            tablet:w-1/2 tablet:text-sm"
            >
                <option value="name">이름순</option>
                <option value="Rename">이름 반대순</option>
                <option value="number">도감번호순</option>
                <option value="Renumber">도감번호 반대순</option>
            </select>
        </div>
    )
}