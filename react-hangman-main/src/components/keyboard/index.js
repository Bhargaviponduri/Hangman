import { useCallback, useEffect } from "react";
import KeyboardButton from "../keyboard-button";
import "./style.css";

const keys = "abcdefghijklmnopqrstuvwxyz".split("");
const Keyboard = ({ onKeyClick, onReset, disabledKeys }) => {
  const handleKeyOnClick = useCallback(
    (event) => {
      onKeyClick(event.target.value);
    },
    [onKeyClick]
  );

  const handleKeyOnPress = useCallback(
    (event) => {
      event.preventDefault();
      const code = event.keyCode || event.which;
       if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        onKeyClick(event.key);
      }
    },
    [onKeyClick]
  );

  useEffect(() => {
    document.addEventListener("keyup", handleKeyOnPress);
    return () => document.removeEventListener("keyup", handleKeyOnPress);
  }, [handleKeyOnPress]);

  return (
    <div className="keyboard">
      <div className="letters">
        {keys.map((key) => (
          <KeyboardButton
            key={key}
            value={key}
            disabled={disabledKeys.includes(key)}
            onClick={handleKeyOnClick}
          />
        ))}
      </div>
      <KeyboardButton value="reset" text="Reset" onClick={onReset} />
    </div>
  );
        }
export default Keyboard;
