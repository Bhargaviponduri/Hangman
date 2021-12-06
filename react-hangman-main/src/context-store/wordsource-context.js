import { createContext, useCallback, useEffect, useState } from "react";
import { PROGRAMING_LANGS } from "../constants";



export const WordsourceContext = createContext();

const getRandomWord = (source) =>
  source[Math.floor(Math.random() * source.length)];

export const WordsourceContextProvider = ({ children }) => {
  const [wordsource, setWordsource] = useState(PROGRAMING_LANGS);
  const [guessword, setGuessWord] = useState(
    getRandomWord(PROGRAMING_LANGS)
  );

  const resetGuessword = useCallback(() => {
    setGuessWord(getRandomWord(PROGRAMING_LANGS));
  }, [setGuessWord]);

  useEffect(() => {
    resetGuessword();
  }, [wordsource, resetGuessword]);

  return (
    <WordsourceContext.Provider
      value={{
        wordsource,
        guessword,
        setWordsource,
        setGuessWord,
        resetGuessword
      }}
    >
      {children}
    </WordsourceContext.Provider>
  );
};
