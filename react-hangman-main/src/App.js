import { Header } from "./components";
import Hangman from "./containers/hangman";
import { WordsourceContextProvider } from "./state/wordsource-context";

function App() {
  return (
    <WordsourceContextProvider>
      <div >
        <div className="container">
          <Header />
          <Hangman />
        </div>
      </div>
    </WordsourceContextProvider>
  );
}

export default App;
