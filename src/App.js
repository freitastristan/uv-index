import "./App.css";
import Searchbar from "./Components/SearchBar";
import Result from "./Components/Result";
import LocationButton from "./Components/LocationButton";
import { useState } from "react";

function App() {
  const [location, setLocation] = useState(0);
  return (
    <>
      <div className="App">
        <h1>UV Index</h1>
        {/* <Searchbar /> */}
        <LocationButton onLocation={setLocation} />
        <Result coords={location} />
      </div>
    </>
  );
}

export default App;
