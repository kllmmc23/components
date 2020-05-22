import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const rootElement = document.getElementById("root");

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="sam" />
      <CommentDetail author="Alex" />
      <CommentDetail author="Jane" />
    </div>
  );
};

ReactDOM.render(<App />, rootElement);
