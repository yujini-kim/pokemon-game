
export default function HomeSkillsTitle({img, text}){
    return (
        <div className="bg-[#FBF8CB] flex items-center gap-1 p-2 rounded-lg border border-[#1C1D1F]">
            <img className="w-5 h-5" src={`./img/icon_${img}.webp`}/>
            <p className="font-bold text-[#1C1D1F]">{text}</p>
        </div>
    )
}