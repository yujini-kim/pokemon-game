import NavBar from '@components/NavBar';
import EggGame from '@components/EggGame';
import Countdown from '@components/Countdown';
import {CoinProvider} from '@context/CoinContext'

export default function Home() {
  return (
    <div>
       <CoinProvider>
        <NavBar />
        <Countdown />
        <EggGame />
       </CoinProvider>

      </div>
  );
}