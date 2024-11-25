import PokeGrid from "@/components/PokeGrid"
import PokeNavbar from "@/components/PokeNavbar"
import PokeProviders from "@/components/PokeProviders";



export const metadata = {
    title: '포켓몬 도감',
  }

export default async function PokeBook(){


    return(
        <>
            <PokeNavbar />
            <PokeProviders>
              <PokeGrid />
            </PokeProviders>                       
        </>
    )

  }