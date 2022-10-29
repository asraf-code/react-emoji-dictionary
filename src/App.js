import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😃": "Grinning Face",
  "😁": "Beaming Face",
  "😂": "Face with tears of joy",
  "😅": "Grinning face with sweat",
  "😉": "Winking Face",
  "🤗": "Hugging Face",
  "🤔": "Thinking Face",
  "🙄": "Face with rolling eyes",
  "😣": "Perervering Face",
  "😥": "Sad but relieved Face",
  "😪": "Sleepy Face",
  "😫": "Tired Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have this in out database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emote Me!</h1>
      <input onChange={emojiHandler}></input>

      <h2> {meaning} </h2>

      <h3> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
