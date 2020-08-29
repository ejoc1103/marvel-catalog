import { useState, useEffect, useMemo } from "react";

import axios from "axios";
import { timestamp, publicKey, hash } from "../utils";

const useCreateGame = (offset) => {
  let characters = [];
  const [temp, setTemp] = useState([]);
  const [collectionFlips, setCollectionFlips] = useState(Array.from(Array(16)));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (error) setError(false);
      try {
        const result = await axios.get(
          `http://gateway.marvel.com/v1/public/characters?limit=50&offset=${offset}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
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
  }, []);

  const newArr = temp.filter(
    (char) =>
      char.thumbnail.path !==
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
  );

  const createCharacters = () => {
    let characters = [...newArr].sort(() => Math.random() - 0.05);
    characters = newArr.slice(0, 8);
    characters = characters.concat(characters);
    let finalSort = [...characters].sort(() => Math.random() - 0.5);

    return finalSort;
  };

  const memoizedValue = useMemo(() => createCharacters(newArr), [newArr[0]]);

  const collection = memoizedValue.map((character) => ({
    id: character.id,
    name: character.name,
    front: character.thumbnail,
    flipped: false,
  }));

  return { collection, collectionFlips, setCollectionFlips };
};

export default useCreateGame;
