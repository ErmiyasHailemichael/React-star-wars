import { useState, useEffect } from "react";
import StarWarDisplay from "./components/StarWarDisplay";
import "./App.css";

function App() {
  const [starData, setStarData] = useState(null);

  const makeApiCall = async () => {
    const starUrl = "https://swapi.dev/api/starships/";
    const res = await fetch(starUrl);
    const json = await res.json();

    setStarData(json);
  };

  useEffect(() => {
    // console.log(1)
    makeApiCall();
    // console.log(2)
  }, []);

  const star = starData?.results.map((ele, index) => {
    console.log(ele);
    return <StarWarDisplay {...ele} key={index} />;
  });

  return (
    <div className="App">
      <div className="header">
        <h1>STAR WARS STARSHIPS</h1>
      </div>
      <div className="container">{star}</div>
    </div>
  );
}

export default App;
