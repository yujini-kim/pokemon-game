import React, { Suspense } from 'react';
import TypeSkeleton from './typeSkeleton'
import { components } from 'storybook/internal/components';


// MyImageComponent를 동적으로 import (React.lazy 사용)
const MyImageComponent = React.lazy(() => import('./MyImageComponent'));

export default function Page() {
  return (
    <div className="whiteBox2 ">
      <div className="space-y-1 tablet:flex tablet:gap-1 tablet:space-y-0 tablet:space-x-1 desktop:space-x-0">{/* 첫줄,  두줄 */}       
        <div className="flex gap-1 tablet:space-x-1 desktop:space-x-0">{/* 첫줄 */}
        <Suspense fallback={<TypeSkeleton/>}>
          <MyImageComponent type="노말" />
        </Suspense>
          <Suspense fallback={<TypeSkeleton/>}>
            <MyImageComponent type="불꽃" />
          </Suspense>
          <Suspense fallback={<TypeSkeleton/>}>
            <MyImageComponent type="물" />
          </Suspense>
          <Suspense fallback={<TypeSkeleton/>}>
            <MyImageComponent type="풀" />
          </Suspense>
          <Suspense fallback={<TypeSkeleton/>}>
            <MyImageComponent type="전기" />
          </Suspense>
        </div>{/* 첫줄 끝 */}

        <div className="flex gap-1 tablet:space-x-1 desktop:space-x-0">{/* 두줄 */} 
          <Suspense fallback={<TypeSkeleton/>}>
            <MyImageComponent type="얼음" />
          </Suspense>
          <Suspense fallback={<TypeSkeleton/>}>
            <MyImageComponent type="격투" />
          </Suspense>
          <Suspense fallback={<TypeSkeleton/>}>
            <MyImageComponent type="독" />
          </Suspense>
          <Suspense fallback={<TypeSkeleton/>}>
            <MyImageComponent type="땅" />
          </Suspense>
          <Suspense fallback={<TypeSkeleton/>}>
            <MyImageComponent type="비행" />
          </Suspense>
        </div>{/* 두줄 끝 */}
        </div>{/* 첫줄,  두줄끝 */}
        <div className="space-y-1
                    tablet:flex tablet:gap-1 tablet:space-y-0 tablet:space-x-1 desktop:space-x-0">{/* 3줄,  4줄 */}
        <div className="flex gap-1 tablet:space-x-1 desktop:space-x-0"> {/* 세줄 */} 
          <Suspense fallback={<TypeSkeleton/>}>
            <MyImageComponent type="에스퍼" />
          </Suspense>
          <Suspense fallback={<TypeSkeleton/>}>
            <MyImageComponent type="벌레" />
          </Suspense>
          <Suspense fallback={<TypeSkeleton/>}>
            <MyImageComponent type="바위" />
          </Suspense>
          <Suspense fallback={<TypeSkeleton/>}>
            <MyImageComponent type="고스트" />
          </Suspense>
          <Suspense fallback={<TypeSkeleton/>}>
            <MyImageComponent type="드래곤" />
          </Suspense>
        </div>{/* 세줄 끝 */}
 
        <div className="flex gap-1 tablet:space-x-1 desktop:space-x-0">{/* 네줄 */}  
          <Suspense fallback={<TypeSkeleton/>}>
            <MyImageComponent type="악" />
          </Suspense>
          <Suspense fallback={<TypeSkeleton/>}>
            <MyImageComponent type="강철" />
          </Suspense>
          <Suspense fallback={<TypeSkeleton/>}>
            <MyImageComponent type="페어리" />
          </Suspense>
        </div>{/* 네줄 끝 */}

      </div>
    </div>
  );
}