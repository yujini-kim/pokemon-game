import PokeGameCountdown from "@components/PokeGameCountdown"
import PokeNavbar from '@components/PokeNavbar';
import PokeGame from '@components/PokeGame';
import { CoinProvider } from '@components/PokeCoinProviders';
import PokeProviders from "@/components/PokeProviders";

export default function gamePage(){
    return(
        <>
            <PokeProviders>
                <CoinProvider>
                    <PokeNavbar />
                    <PokeGame />
                </CoinProvider>
            </PokeProviders>
        </>
    )
}