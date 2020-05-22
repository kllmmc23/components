import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const rootElement = document.getElementById("root");

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Important!</h4>
          <p>Are you sure you want to proceed?</p>
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="sam"
          timeAgo="Today at 4:40 pm"
          comment="Nice Blog Post!"
          imgAvatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 5:40 pm"
          comment="Nice Blog Post!"
          imgAvatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Today at 6:40 pm"
          comment="Nice Blog Post!"
          imgAvatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, rootElement);
