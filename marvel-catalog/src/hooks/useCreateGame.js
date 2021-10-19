import { useState, useEffect, useMemo, useCallback } from "react";

import axios from "axios";
import { timestamp, publicKey, hash } from "../utils";

const useCreateGame = (reset, level) => {
  const [temp, setTemp] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const offset = Math.floor(Math.random() * 1394);
    const fetchData = async () => {
      if (error) {
        setError(false);
      }
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
  }, [error, reset, level]);

  const newArr = useCallback(
    temp.filter(
      char =>
        char.thumbnail.path !==
          "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" &&
        char.thumbnail.path !==
          "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708"
    ),
    [temp]
  );

  const createCharacters = useCallback(() => {
    let characters = [...newArr].sort(() => Math.random() - 0.05);
    characters = newArr.slice(0, parseInt(level) / 2);
    characters = characters.concat(characters);
    let finalSort = [...characters].sort(() => Math.random() - 0.5);

    return finalSort;
  }, [level, newArr]);

  const memoizedValue = useMemo(
    () => createCharacters(newArr),
    [createCharacters, newArr]
  );

  const collection = memoizedValue.map(character => ({
    id: character.id,
    name: character.name,
    front: character.thumbnail,
  }));

  return {
    collection,
    loading,
    setLoading,
  };
};

export default useCreateGame;
