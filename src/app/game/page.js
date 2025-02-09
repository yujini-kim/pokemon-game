import PokeGameCountdown from "@components/PokeGameCountdown";

import PokeGame from "@components/PokeGame";
import PokeProviders from "@/components/PokeProviders";

export default function gamePage() {
  return (
    <>
      <PokeProviders>
        <PokeGame />
      </PokeProviders>
    </>
  );
}
