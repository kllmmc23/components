import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from './CommentDetail'

const rootElement = document.getElementById("root");

const App = () => {
    return (
      <div className="ui container comments">
        <CommentDetail />
        <CommentDetail />
        <CommentDetail />
        <CommentDetail />
        <CommentDetail />
      </div>
    );
};

ReactDOM.render(<App />, rootElement);
