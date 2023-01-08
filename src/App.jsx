import Post from "./components/Post"
import postList from "./posts.json"
import "./App.css";

function App() {

  return (
    <div id="App">
      <div className="title">
        <h1>HoloDash</h1>
        <p>Are you ready to explore the HoloDash world?</p>
        <p>Kyle Santos, Ashwin Subbaraman, Kevin Lee, Eva Liu, Tony Yuan</p>
        <p>Business Inquiries: <a href="mailto:playholodash@gmail.com">playholodash@gmail.com</a></p>
      </div>
      <div className="content">
        <div className="posts-container">
          {postList.map((element, index) => {
            return <Post path={element} render={index === 0} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
