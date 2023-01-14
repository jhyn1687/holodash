import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import rehypeRaw from 'rehype-raw';

function Post(props) {
  const [text, setText] = useState("");
  const [valid, setValid] = useState(false);
  const [render, setRender] = useState(props.render);

  useEffect(() => {
    fetch(props.path)
      .then((response) => {
        if (response.ok) {
          setValid(true)
          return response.text();
        }
        throw new Error("Post not found.");
      })
      .then((text) => {
        setText(text);
      })
      .catch(() => {
        setValid(false)
      });
  }, [props]);

  const toggleRender = () => {
    setRender(!render);
  };
  const title = text.split(/\r?\n/)[0].split(" ").slice(1).join("_");
  const content = text.split(/\r?\n/).slice(1).join("\n");
  return (
    valid ? <div className="post">
      <h2 onClick={toggleRender} className="post-name">
        {">" + title + "_"}
      </h2>
      {render && (
        <div>
          <ReactMarkdown rehypePlugins={[rehypeRaw]} children={content} />
        </div>
      )}
      <hr />
    </div> : <></>
  );
}

export default Post;
