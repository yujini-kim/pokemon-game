import WhiteBox from '@components/WhiteBox';


export default function FilterBox() {
    return (
      <div className="flex justify-center mt-12">
        <div className="flex w-[350px] h-[150px] bg-[#FFDD00] rounded-3xl 
        tablet:w-[755px] tablet:h-64 
        desktop:w-[1076px] desktop:h-64 justify-center items-center">
          <div className="flex flex-row space-x-1">
            {/* 왼쪽 */}
            <div className="flex flex-col space-y-2 tablet:space-y-4 desktop:space-y-6 desktop:mr-4">
              <div className="lightYellowBox">
                <span className="lightYellowBoxText">이름/번호검색</span>
              </div>
              <div className="lightYellowBox">
                <span className="lightYellowBoxText">정렬기준</span>
              </div>
              <div className="lightYellowBox">
                <span className="lightYellowBoxText">타입</span>
              </div>
            </div>
            {/* 오른쪽 흰박스 */}
            <div className="flex flex-col space-y-2 tablet:space-y-4 desktop:space-y-6">
              <div className="bg-white w-60 h-5 rounded-3xl 
              tablet:w-[520px] tablet:h-10 
              desktop:w-[836px] desktop:h-10"></div>
              <div className="bg-white w-60 h-5 rounded-3xl 
              tablet:w-[520px] tablet:h-10 
              desktop:w-[836px] desktop:h-10"></div>
              {/* 타입 선택 */}
              <div className="flex flex-col mt-1 space-y-2 
              tablet:flex-row tablet:space-y-0 tablet:space-x-2 
              desktop:flex-row desktop:space-y-0 desktop:space-x-2 desktop:mt-0">
                {/* 타입 아이콘 그룹 */}
                <div className="whiteBox2">
                    <div className="space-y-1
                    tablet:flex tablet:gap-1 tablet:space-y-0">{/* 첫줄,  두줄 */}
                    <div className="flex gap-1">  {/* 첫줄 */}
                        <WhiteBox type = "노말"/>
                        <WhiteBox type = "불꽃"/>
                        <WhiteBox type = "물"/>
                        <WhiteBox type = "풀"/>
                        <WhiteBox type = "전기"/>
                    </div>{/* 첫줄 끝 */}
                     
                    <div className="flex gap-1"> {/* 두줄 */}       
                    <WhiteBox type = "얼음"/>
                    <WhiteBox type = "격투"/>
                    <WhiteBox type = "독"/>
                    <WhiteBox type = "땅"/>
                    <WhiteBox type = "비행"/>
                    </div>{/* 두줄 끝 */}
                    </div>{/* 첫줄,  두줄끝 */}

                    <div className="space-y-1
                    tablet:flex tablet:gap-1 tablet:space-y-0">{/* 3줄,  4줄 */}
                    <div className="flex gap-1"> {/* 세줄 */}       
                    <WhiteBox type = "에스퍼"/>
                    <WhiteBox type = "벌레"/>
                    <WhiteBox type = "바위"/>
                    <WhiteBox type = "고스트"/>
                    <WhiteBox type = "드래곤"/>
                    </div>{/* 세줄 끝 */}

                    <div className="flex gap-1"> {/* 네줄 */}       
                    <WhiteBox type = "악"/>
                    <WhiteBox type = "강철"/>
                    <WhiteBox type = "페어리"/>
                    </div>{/* 네줄 끝 */}
                    </div>{/* 3줄,  4줄 */}
                </div>   {/* 타입 아이콘 그룹 끝*/}
              </div> {/* 타입 선택 끝*/}
            </div>
          </div>
        </div>
      </div>
    );
  }