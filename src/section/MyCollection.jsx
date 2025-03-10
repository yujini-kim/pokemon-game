"use client";

import { db, auth } from "@/lib/firebase";
import { collection, query, orderBy, getDocs, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import PokeCard from "../components/PokeCard";
import { onAuthStateChanged } from "firebase/auth";
import PokeSearchBox from "@/components/PokeSearchBox";
import PokeSortBox from "@/components/PokeSortBox";
import PokeDetailCard from "@/components/PokeDetailCard";
import PokeCardSkeleton from "@/components/PokeCardSkeleton";

export default function MyPokeGrid() {
  const [myPokemonList, setMyPokemonList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchName, setSearchName] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedOption, setSelectedOption] = useState("number");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const searchFilter = (pokemonList) => {
    const FilterName = pokemonList.filter(
      (pokemon) =>
        pokemon.selectedPokemon.name
          .toLowerCase()
          .includes(searchName.toLowerCase()) ||
        pokemon.selectedPokemon.number.toString() === searchName.toString()
    );

    const filteredPokemon = FilterName.filter(
      (pokemon) =>
        !selectedType ||
        pokemon.selectedPokemon.type1 === selectedType ||
        pokemon.selectedPokemon.type2 === selectedType
    );
    return filteredPokemon;
  };
  const sortPokemon = (pokemonList) => {
    const sortedList = [...pokemonList];

    switch (selectedOption) {
      case "name":
        sortedList.sort((a, b) =>
          a.selectedPokemon.name.localeCompare(b.selectedPokemon.name)
        );
        break;
      case "Rename":
        sortedList.sort((a, b) =>
          b.selectedPokemon.name.localeCompare(a.selectedPokemon.name)
        );
        break;
      case "number":
        sortedList.sort(
          (a, b) => a.selectedPokemon.number - b.selectedPokemon.number
        );
        break;
      case "Renumber":
        sortedList.sort(
          (a, b) => b.selectedPokemon.number - a.selectedPokemon.number
        );
        break;
      case "weight":
        sortedList.sort(
          (a, b) => a.selectedPokemon.weight - b.selectedPokemon.weight
        );
        break;
      case "weight2":
        sortedList.sort(
          (a, b) => b.selectedPokemon.weight - a.selectedPokemon.weight
        );
        break;
      case "totalBaseStat":
        sortedList.sort(
          (a, b) =>
            b.selectedPokemon.totalBaseStat - a.selectedPokemon.totalBaseStat
        );
        break;
      case "HP":
        sortedList.sort((a, b) => b.selectedPokemon.HP - a.selectedPokemon.HP);
        break;
      case "attack":
        sortedList.sort(
          (a, b) => b.selectedPokemon.attack - a.selectedPokemon.attack
        );
        break;
      case "defense":
        sortedList.sort(
          (a, b) => b.selectedPokemon.defense - a.selectedPokemon.defense
        );
        break;
      case "specialAttack":
        sortedList.sort(
          (a, b) =>
            b.selectedPokemon.specialAttack - a.selectedPokemon.specialAttack
        );
        break;
      case "specialDefense":
        sortedList.sort(
          (a, b) =>
            b.selectedPokemon.specialDefense - a.selectedPokemon.specialDefense
        );
        break;
      case "speed":
        sortedList.sort(
          (a, b) => b.selectedPokemon.speed - a.selectedPokemon.speed
        );
        break;
      default:
        break;
    }

    return sortedList;
  };
  const filteredPokemon = sortPokemon(searchFilter(myPokemonList));

  const fetchMypokemon = async () => {
    const user = auth.currentUser;
    if (!user) {
      setMyPokemonList([]);
      setIsLoading(false);
      return;
    }
    // 로그인한 유저의 uid와 일치
    const myPokemonQuery = query(
      collection(db, "myPokemon"),
      where("userId", "==", user.uid),
      orderBy("createdAt", "desc")
    );
    const snapshot = await getDocs(myPokemonQuery);
    const fetchedPokemonList = snapshot.docs.map((doc) => {
      const { selectedPokemon } = doc.data();
      return {
        selectedPokemon,
        id: doc.id,
      };
    });

    setMyPokemonList(fetchedPokemonList);
    setIsLoading(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchMypokemon();
      } else {
        setMyPokemonList([]);
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleCardClick = (pokemon) => {
    console.log("Selected Pokemon: ", pokemon);
    setSelectedPokemon(pokemon);
  };

  const closeDetail = () => {
    setSelectedPokemon(null);
  };

  return (
    <>
      <PokeSearchBox
        searchText={searchText}
        setSearchText={setSearchText}
        setSearchName={setSearchName}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <div>
        <PokeSortBox
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <div
        className="grid grid-cols-3 justify-center items-center gap-2 p-2
      tablet:grid-cols-4
      desktop:grid-cols-7 desktop:gap-4 desktop:mx-44"
      >
        {isLoading
          ? [...Array(18)].map((_, index) => <PokeCardSkeleton key={index} />)
          : filteredPokemon.map((item, index) => (
              <PokeCard
                key={index}
                number={item.selectedPokemon.number}
                name={item.selectedPokemon.name}
                img={item.selectedPokemon.image}
                type1={item.selectedPokemon.type1}
                type2={item.selectedPokemon.type2}
                onClick={() => handleCardClick(item.selectedPokemon)}
              />
            ))}
      </div>
      {selectedPokemon && (
        <>
          <div
            className="fixed inset-0 w-screen h-screen bg-black opacity-50 z-40"
            onClick={closeDetail}
          ></div>

          <div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                          bg-[#FEEDEF] p-4 rounded-xl shadow-lg flex flex-col items-center z-50"
          >
            <PokeDetailCard
              number={selectedPokemon.number}
              name={selectedPokemon.name}
              HP={selectedPokemon.HP}
              attack={selectedPokemon.attack}
              defense={selectedPokemon.defense}
              specialAttack={selectedPokemon.specialAttack}
              specialDefense={selectedPokemon.specialDefense}
              speed={selectedPokemon.speed}
              weight={selectedPokemon.weight}
              totalBaseStat={selectedPokemon.totalBaseStat}
              image={selectedPokemon.image}
              closeDetail={closeDetail}
            />
          </div>
        </>
      )}
    </>
  );
}
