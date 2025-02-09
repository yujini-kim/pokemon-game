import PokeGrid from "@/components/PokeGrid";

import PokeProviders from "@/components/PokeProviders";

export const metadata = {
  title: "전체 포켓몬 도감",
};

export default async function PokeBook() {
  return (
    <>
      <PokeProviders>
        <PokeGrid />
      </PokeProviders>
    </>
  );
}
