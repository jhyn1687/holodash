import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="App">
      <div className="title">
        <h1>HoloDash</h1>
        <p>Are you ready to explore the HoloDash world?</p>
      </div>
      <div className="post">
        <h2>Humble Beginnings</h2>
        <p>
          Hello and welcome to the first blog post for our indie game, HoloDash!
        </p>

        <p>
          We are excited to announce that development has officially begun on
          our new game, which is a cyberpunk themed roguelite. While we haven't
          decided on a specific genre for the game yet, we can tell you that it
          will be fast-paced and action-packed.
        </p>

        <p>
          HoloDash runs will have procedually generated layouts and power-ups
          that will make each playthrough feel unique. Players will be able to
          explore through neon-lit streets, taking on challenging enemies and
          bosses as they progress through the game.
        </p>

        <p>
          We have only just begun development on HoloDash, but we are already
          hard at work on bringing it to life. We will be sharing updates on our
          progress as well as sneak peeks at gameplay and artwork in the future,
          so stay tuned!
        </p>

        <p>
          We can't wait for you to join us on this journey and be a part of
          bringing HoloDash to life.
        </p>

        <p>Sincerely, </p>
        <p>The HoloDash Team</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
