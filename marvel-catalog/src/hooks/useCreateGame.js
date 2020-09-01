import { useState, useEffect, useMemo } from "react";

import axios from "axios";
import { timestamp, publicKey, hash } from "../utils";

const useCreateGame = (offset) => {
  const [temp, setTemp] = useState([]);
  const [collectionFlips, setCollectionFlips] = useState(Array.from(Array(20)));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reset, setReset] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      if (error) setError(false);
      try {
        const result = await axios.get(
          `http://gateway.marvel.com/v1/public/characters?limit=100&offset=${offset}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
        );
        setLoading(false);
        setTemp(result.data.data.results);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError("ERR.");
      }
    };
    fetchData();
  }, [reset]);

  const newArr = temp.filter(
    (char) =>
      char.thumbnail.path !==
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" &&
      char.thumbnail.path !==
        "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708"
  );

  const createCharacters = () => {
    let characters = [...newArr].sort(() => Math.random() - 0.05);
    characters = newArr.slice(0, 10);
    characters = characters.concat(characters);
    let finalSort = [...characters].sort(() => Math.random() - 0.5);

    return finalSort;
  };

  const memoizedValue = useMemo(() => createCharacters(newArr), [
    newArr[0],
    reset,
  ]);

  const collection = memoizedValue.map((character) => ({
    id: character.id,
    name: character.name,
    front: character.thumbnail,
  }));

  return {
    collection,
    collectionFlips,
    setCollectionFlips,
    setReset,
    reset,
    loading,
    setLoading,
  };
};

export default useCreateGame;
