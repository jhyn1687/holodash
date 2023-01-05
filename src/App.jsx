import Post from "./components/Post"
import "./App.css";

function App() {

  return (
    <div id="App">
      <div className="title">
        <h1>HoloDash</h1>
        <p>Are you ready to explore the HoloDash world?</p>
      </div>
      <Post path="1.md"/>
    </div>
  );
}

export default App;
