"use client";

import { db, auth } from "@/lib/firebase";
import { collection, query, orderBy, getDocs, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import PokeCard from "./PokeCard";

export default function MyPokeGrid() {
  const [myPokemonList, setMyPokemonList] = useState([]);

  const fetchMypokemon = async () => {
    const user = auth.currentUser;
    if (!user) {
      // 로그인 되어 있지 않으면 빈 리스트를 설정
      setMyPokemonList([]);
      return;
    }
    // 로그인한 유저의 uid와 일치하는 문서만 가져오기 (문서에 userId 필드가 있어야 함)
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
  };

  useEffect(() => {
    fetchMypokemon();
  }, []);

  return (
    <div
      className="grid grid-cols-3 justify-center items-center gap-2 p-2
      tablet:grid-cols-4
      desktop:grid-cols-7 desktop:gap-4 desktop:mx-44"
    >
      {myPokemonList.map((item) => (
        <PokeCard
          key={item.selectedPokemon.number}
          number={item.selectedPokemon.number}
          name={item.selectedPokemon.name}
          img={item.selectedPokemon.image}
          type1={item.selectedPokemon.type1}
          type2={item.selectedPokemon.type2}
        />
      ))}
    </div>
  );
}
