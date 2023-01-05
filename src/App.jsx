import Post from "./components/Post"
import "./App.css";

function App() {

  return (
    <div id="App">
      <div className="title">
        <h1>HoloDash</h1>
        <p>Are you ready to explore the HoloDash world?</p>
      </div>
      <div className="posts-container">
        <Post path="1.md"/>
      </div>
    </div>
  );
}

export default App;
