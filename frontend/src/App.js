import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";

const UNSPLAH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  const [word, setWord] = useState("");

  const handleSearchSubmit = (e) => {
    e.prevent.default();
    console.log(word);
    // fetch(
    //   `https://api.unsplash.com/photos/random?query=${word}&client_id=${UNSPLAH_KEY}`
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data).catch((err) => {
    //       console.log(err);
    //     });
    //   });
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
