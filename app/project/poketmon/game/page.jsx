import NavBar from '../../../../components/NavBar';
import EggGame from '../../../../components/EggGame';
import Countdown from '../../../../components/Countdown';

export default function Home() {
  return (
    <div>
      <NavBar />
      <Countdown />
      <EggGame />
    </div>
  );
}