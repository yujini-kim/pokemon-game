
export default function HomeSkillsComponent({color, text}){
    return(
        <div className={`HomeSkillsComponent ${color}`}>
        <p>{text}</p>
        </div>
    )
}