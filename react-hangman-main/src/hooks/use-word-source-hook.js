import { useContext } from "react";
import { WordsourceContext } from "../context-store/wordsource-context";

export default function useWordSource() {
  return useContext(WordsourceContext);
}
