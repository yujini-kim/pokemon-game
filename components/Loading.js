import Image from 'next/image';

export default function Loading(){
    return(
        <div className='CenteredFlex-col'>
            <Image width={200} height={200} src="/img/loading.gif" />
            <p>Loading...</p>
        </div>
    )
}