import "./App.css";
import Searchbar from "./Components/SearchBar";
import Result from "./Components/Result";

function App() {
  return (
    <>
      <div className="App">
        <h1>UV Index</h1>
        <Searchbar />
        <Result />
      </div>
    </>
  );
}

export default App;
