import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";

function Post(props) {
  const [text, setText] = useState("");
  const [render, setRender] = useState(true);

  useEffect(() => {
    fetch(props.path)
      .then((response) => {
        if (response.ok) {
          return response.text();
        }
        throw new Error("Post not found.");
      })
      .then((text) => {
        setText(text);
      })
      .catch(() => {
        setRender(false);
      });
  }, [props]);

  return render ? (
    <div className="post">
      <ReactMarkdown children={text} />
      <hr />
    </div>
  ) : (
    <></>
  );
}

export default Post;
