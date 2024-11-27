import PokeGrid from "@/components/PokeGrid"
import PokeNavbar from "@/components/PokeNavbar"
import PokeProviders from "@/components/PokeProviders";
import { CoinProvider } from '@components/PokeCoinProviders';


export const metadata = {
    title: '포켓몬 도감',
  }

export default async function PokeBook(){


    return(
        <>
        <CoinProvider>
        <PokeNavbar />
            <PokeProviders>
              <PokeGrid />
            </PokeProviders>   
        </CoinProvider>
                    
        </>
    )

  }