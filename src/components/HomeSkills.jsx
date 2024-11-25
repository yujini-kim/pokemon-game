
export default function Skills(){
    return(
        <div className="flex flex-col items-center justify-center">
            <div id="Skills" className="mt-72">
                <p className="text-[#1C1D1F] text-4xl font-bold
                tablet:text-6xl">SKILLS</p>
            </div>

            <div className="desktop:w-1/2 px-6 mt-20">
                <div  className="bg-white w-auto h-auto rounded-xl drop-shadow-lg space-y-4 border border-[#1C1D1F]
                flex flex-col justify-center p-6 desktop:p-10 "> 

                <div className="space-y-2 desktop:space-y-4">
                <div className="flex flex-col items-start gap-y-1 
                tablet:flex-row tablet:gap-2">
                    <div className="bg-[#FBF8CB] flex items-center gap-1 p-2 rounded-lg border border-[#1C1D1F]">
                        <img className="w-5 h-5" src="./img/icon_language.webp"/>
                        <p className="font-bold text-[#1C1D1F]">Language</p>
                    </div>
                    <div className="flex flex-wrap gap-x-1 gap-y-1">
                        <div className="p-2 rounded-lg border border-[#1C1D1F] bg-gray-100 text-sm">
                            <p>HTML</p>
                        </div>
                        <div className="p-2 rounded-lg border border-[#1C1D1F] bg-yellow-300 text-sm">
                            <p>JavaScript</p>
                        </div>
                        <div className="p-2 rounded-lg border border-[#1C1D1F] bg-blue-500 text-sm">
                            <p>Typescript</p>
                        </div>
                        <div className="p-2 rounded-lg border border-[#1C1D1F] bg-blue-800 text-sm">
                            <p>Python</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-y-1 
                tablet:flex-row tablet:gap-2">
                    <div className="bg-[#FBF8CB] flex items-center gap-1 p-2 rounded-lg border border-[#1C1D1F]">
                        <img className="w-5 h-5" src="./img/icon_front.webp"/>
                        <p className="font-bold text-[#1C1D1F]">Frontend</p>
                    </div>
                    <div className="flex flex-wrap gap-x-1 gap-y-1">
                        <div className="p-2 rounded-lg border border-[#1C1D1F] bg-sky-300 text-sm">
                            <p>React</p>
                        </div>
                        <div className="p-2 rounded-lg border border-[#1C1D1F] bg-gray-500 text-sm">
                            <p>Next.js</p>
                        </div>
                        <div className="p-2 rounded-lg border border-[#1C1D1F] bg-purple-800 text-sm">
                            <p>Remix.js</p>
                        </div>
                        <div className="p-2 rounded-lg border border-[#1C1D1F] bg-orange-500 text-sm">
                            <p>Svelte.js</p>
                        </div>
                        <div className="p-2 rounded-lg border border-[#1C1D1F] bg-sky-900 text-sm">
                            <p>Tailwind CSS</p>
                        </div>
                        <div className="p-2 rounded-lg border border-[#1C1D1F] bg-red-400 text-sm">
                            <p>StoryBook</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-y-1 
                tablet:flex-row tablet:gap-2">
                    <div className="bg-[#FBF8CB] flex items-center gap-1 p-2 rounded-lg border border-[#1C1D1F]">
                        <img className="w-5 h-5" src="./img/icon_back.webp"/>
                        <p className="font-bold text-[#1C1D1F]">Backend</p>
                    </div>
                    <div className="space-x-1">
                        <div className="inline-block p-2 rounded-lg border border-[#1C1D1F] bg-orange-900 text-sm">
                            <p>SQL</p>
                        </div>
                        <div className="inline-block p-2 rounded-lg border border-[#1C1D1F] bg-pink-800 text-sm">
                            <p>GraphQL</p>
                        </div>
                    </div>
                </div>

                </div>
                </div>

             
            </div>
        </div>
    )
}