import HomeSkillsComponent from "@components/HomeSkillsComponent"
import HomeSkillsTitle from "@components/HomeSkillsTitle"

export default function Skills(){
    return(
        <div className="flex flex-col items-center justify-center">
            <div id="Skills" className="mt-72">
                <p className="HomeText">SKILLS</p>
            </div>

            <div className="desktop:w-1/2 px-6 mt-20">
                <div className="SkillsBg"> 
                <div className="space-y-2 desktop:space-y-4">
                <div className="SkillsLine">
                    <HomeSkillsTitle img={"language"} text={"Language"} />
                        <div className="SkillsComponentBox">
                            <HomeSkillsComponent text={"HTML"} color={"bg-gray-100"}/>
                            <HomeSkillsComponent text={"JavaScript"} color={"bg-[#FAEB78]"}/>
                            <HomeSkillsComponent text={"Typescript"} color={"bg-blue-500"}/>
                            <HomeSkillsComponent text={"Python"} color={"bg-blue-800"}/>
                        </div>
                </div>

                <div className="SkillsLine">
                    <HomeSkillsTitle img={"front"} text={"Frontend"} />
                        <div className="SkillsComponentBox">
                            <HomeSkillsComponent text={"React"} color={"bg-sky-300"}/>
                            <HomeSkillsComponent text={"Next.js"} color={"bg-gray-500"}/>
                            <HomeSkillsComponent text={"Remix.js"} color={"bg-purple-800 "}/>
                            <HomeSkillsComponent text={"Svelte.js"} color={"bg-orange-500"}/>
                            <HomeSkillsComponent text={"Tailwind CSS"} color={"bg-sky-900"}/>
                            <HomeSkillsComponent text={"StoryBook"} color={"bg-red-400"}/>
                        </div>
                </div>

                <div className="SkillsLine">
                    <HomeSkillsTitle img={"back"} text={"Backend"} />
                        <div className="SkillsComponentBox">
                            <HomeSkillsComponent text={"SQL"} color={"bg-orange-900"}/>
                            <HomeSkillsComponent text={"GraphQL"} color={"bg-pink-800"}/>
                        </div>
                </div>

                </div>
                </div>

             
            </div>
        </div>
    )
}