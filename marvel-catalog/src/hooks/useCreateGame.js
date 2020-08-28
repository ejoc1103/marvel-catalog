import { useState, useEffect, useCallback } from "react";

import axios from "axios";
import { timestamp, publicKey, hash } from "../utils";
import { memo } from "react";

const useCreateGame = (offset) => {
  // let characters = [];
  const [temp, setTemp] = useState([]);
  const [collectionFlips, setCollectionFlips] = useState(Array.from(Array(16)))

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://gateway.marvel.com/v1/public/characters?limit=50&offset=${offset}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
      );
      setTemp(result.data.data.results);
    };
    fetchData();
  }, []);

  const newArr = temp.filter(
    (char) =>
      char.thumbnail.path !==
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
  );
  const memoizedValue = () => {
    let characters = [...newArr].sort(() => Math.random() - 0.05);
    characters = newArr.slice(0, 8);
    characters = characters.concat(characters);
    let finalSort = [...characters].sort(() => Math.random() - 0.5);
    return finalSort;
  }
  
  const characters = memoizedValue();


  const collection = characters.map((character) => ({
    id: character.id,
    name: character.name,
    front: character.thumbnail,
    back: "back",
    flipped: false,
  }));

  return {collection, collectionFlips, setCollectionFlips};
};

export default useCreateGame;
