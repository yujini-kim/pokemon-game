import NavBar from '../../../../components/NavBar';
import EggGame from '../../../../components/EggGame';
import Countdown from '../../../../components/Countdown';

export const metadata = {
  title: '포켓코인 모으기',
}

export default function Home() {
  return (
    <div>
      <NavBar />
      <Countdown />
      <EggGame />
    </div>
  );
}