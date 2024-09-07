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
                    <div className="whiteBox">
                        <img className="typeBoxImg" src="/img/노말.png" alt="노말" />
                        <span className="text-[8px]">노말</span>
                        </div>

                        <div className="whiteBox">
                        <img className="typeBoxImg" src="/img/불.png" alt="불" />
                        <span className="text-[8px]">불꽃</span>
                        </div>

                        <div className="whiteBox">
                        <img className="typeBoxImg" src="/img/물.png" alt="물" />
                        <span className="text-[8px]">물</span>
                        </div>

                        <div className="whiteBox">
                        <img className="typeBoxImg" src="/img/풀.png" alt="풀" />
                        <span className="text-[8px]">풀</span>
                        </div> 

                        <div className="whiteBox">
                        <img className="typeBoxImg" src="/img/번개.png" alt="번개" />
                        <span className="text-[8px]">전기</span>
                        </div> 
                    </div>{/* 첫줄 끝 */}
                     
                    <div className="flex gap-1"> {/* 두줄 */}       
                        <div className="whiteBox">
                        <img className="typeBoxImg" src="/img/얼음.png" alt="얼음" />
                        <span className="text-[8px]">얼음</span>
                        </div> 

                        <div className="whiteBox">
                        <img className="typeBoxImg" src="/img/권투.png" alt="권투" />
                        <span className="text-[8px]">격투</span>
                        </div> 

                        <div className="whiteBox">
                        <img className="typeBoxImg" src="/img/독.png" alt="독" />
                        <span className="text-[8px]">독</span>
                        </div> 

                        <div className="whiteBox">
                        <img className="typeBoxImg" src="/img/땅.png" alt="땅" />
                        <span className="text-[8px]">땅</span>
                        </div>

                        <div className="whiteBox">
                        <img className="typeBoxImg" src="/img/비행.png" alt="비행" />
                        <span className="text-[8px]">비행</span>
                        </div>
                    </div>{/* 두줄 끝 */}
                    </div>{/* 첫줄,  두줄끝 */}

                    <div className="space-y-1
                    tablet:flex tablet:gap-1 tablet:space-y-0">{/* 3줄,  4줄 */}
                    <div className="flex gap-1"> {/* 세줄 */}       
                        <div className="whiteBox">
                        <img className="typeBoxImg" src="/img/에스퍼.png" alt="에스퍼" />
                        <span className="text-[8px]">에스퍼</span>
                        </div> 

                        <div className="whiteBox">
                        <img className="typeBoxImg" src="/img/벌레.png" alt="벌레" />
                        <span className="text-[8px]">벌레</span>
                        </div> 

                        <div className="whiteBox">
                        <img className="typeBoxImg" src="/img/바위.png" alt="바위" />
                        <span className="text-[8px]">바위</span>
                        </div> 

                        <div className="whiteBox">
                        <img className="typeBoxImg" src="/img/고스트.png" alt="고스트" />
                        <span className="text-[8px]">고스트</span>
                        </div>

                        <div className="whiteBox">
                        <img className="typeBoxImg" src="/img/드래곤.png" alt="드래곤" />
                        <span className="text-[8px]">드래곤</span>
                        </div>
                    </div>{/* 세줄 끝 */}

                    <div className="flex gap-1"> {/* 네줄 */}       
                        <div className="whiteBox">
                        <img className="typeBoxImg" src="/img/악.png" alt="악" />
                        <span className="text-[8px]">악</span>
                        </div> 

                        <div className="whiteBox">
                        <img className="typeBoxImg" src="/img/강철.png" alt="강철" />
                        <span className="text-[8px]">강철</span>
                        </div> 

                        <div className="whiteBox">
                        <img className="typeBoxImg" src="/img/페어리.png" alt="페어리" />
                        <span className="text-[8px]">페어리</span>
                        </div> 
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