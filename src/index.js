import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const rootElement = document.getElementById("root");

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="sam" timeAgo="Today at 4:40 pm" />
      <CommentDetail author="Alex" timeAgo="Today at 5:40 pm" />
      <CommentDetail author="Jane" timeAgo="Today at 6:40 pm" />
    </div>
  );
};

ReactDOM.render(<App />, rootElement);
