import React, { useState } from "react";
import Axios from "axios";

function ApiTest() {
  const [joke, setJoke] = useState("");
  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke").then(
      (response) => {
        // console.log(response);
        setJoke(response.data.setup + "..." + response.data.punchline);
      }
    );
  };
  return (
    <div>
      <button className="btn" onClick={getJoke}>
        Get Joke Right Now
      </button>
      <p>{joke}</p>
    </div>
  );
}
export default ApiTest;
