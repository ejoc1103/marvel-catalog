import { useState, useEffect, useMemo, useCallback } from 'react';
import md5 from 'md5';
import axios from 'axios';

const useCreateGame = (reset, level) => {
  const [temp, setTemp] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newArr, setNewArr] = useState([]);

  useEffect(() => {
    const date = new Date();
    const timeStamp = date.getTime();
    const hash = md5(
      timeStamp +
        process.env.REACT_APP_PRIVATE_KEY +
        process.env.REACT_APP_PUBLIC_KEY
    );
    const offset = Math.floor(Math.random() * 1394);
    const fetchData = async () => {
      if (error) {
        setError(false);
      }
      try {
        const result = await axios.get(
          `http://gateway.marvel.com/v1/public/characters?limit=100&offset=${offset}&ts=${timeStamp}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${hash}`
        );
        setLoading(false);
        setTemp(result.data.data.results);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError('ERR.');
      }
    };
    fetchData();
  }, [error, reset, level]);

  const createArr = useCallback(() => {
    let filtered = temp.filter(
      char =>
        char.thumbnail.path !==
          'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' &&
        char.thumbnail.path !==
          'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708'
    );
    setNewArr(filtered);
    return filtered;
  }, [temp]);

  useEffect(() => {
    if (newArr.length > 0) {
      let characters = [...newArr].sort(() => Math.random() - 0.05);
      characters = newArr.slice(0, parseInt(level) / 2);
      characters = characters.concat(characters);
      let finalSort = [...characters].sort(() => Math.random() - 0.5);

      return finalSort;
    }
  }, [newArr, level]);

  const memoizedValue = useMemo(() => createArr(), [createArr]);

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
