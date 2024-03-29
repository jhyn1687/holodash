import Post from "./components/Post"
import postList from "./posts.json"
import { MdEmail as Email } from "react-icons/md"
import { RiTwitterFill as Twitter } from "react-icons/ri"
import { GrReddit as Reddit } from "react-icons/gr"
import { AiFillInstagram as Instagram } from "react-icons/ai"
import { FaKickstarterK as KickStarter, FaItchIo as ItchIo } from "react-icons/fa"
import "./App.css";

function App() {

  return (
    <div id="App">
      <div className="title">
        <img id="Logo" src="HoloDash_Logo_Seattle.png"></img>
        <p>An action packed cyberpunk rogue-lite sidescroller</p>
        <p id="Names">
          Kyle Santos,{' '}
          Ashwin Subbaraman,{' '}
          Kevin Lee,{' '}
          Eva Liu,{' '}
          <a href="//jhyn.dev">Tony Yuan</a>
        </p>
        <div className="social-icons">
          <a href="mailto:playholodash@gmail.com"><Email /></a>
          <a href="https://twitter.com/holodash"><Twitter /></a>
          <a href="https://www.reddit.com/user/PlayHoloDash"><Reddit /></a>
          <a href="https://www.instagram.com/holodash_"><Instagram /></a>
          <a href="https://holodash.itch.io/holodash"><ItchIo /></a>
          <a href="https://www.figma.com/file/eiA0PbCl8szlKFU6XICSuH/Untitled?node-id=0%3A1"><KickStarter/></a>
        </div>
      </div>
      <div className="content">
        <div className="posts-container">
          <div className="posts-constraint">
            {postList.map((element, index) => {
              return <Post path={element} render={index === 0} />
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
