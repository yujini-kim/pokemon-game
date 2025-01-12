import PokeNavbar from "@/components/PokeNavbar"
import PokeGacha from "@/components/PokeGacha"
import PokeGamego from "@/components/PokeGogame"
import { CoinProvider } from '@components/PokeCoinProviders';
import PokeProviders from "@/components/PokeProviders";

export const metadata = {
    title: '포켓몬 도감채우기 게임',
  }

export default function PokemonHome() {
    return(
        <>
        <PokeProviders>
            <CoinProvider>
            <PokeNavbar /> 
                <div className="space-y-8 mb-40">
                    <PokeGacha />
                    <PokeGamego /> 
                </div>                   
            </CoinProvider>
        </PokeProviders>
        </>
     

    )
}