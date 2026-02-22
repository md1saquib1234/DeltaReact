import { useState } from "react"
import "./Comments.css";
import CommentsForm from "./CommentsForm";

export default function Comments() {
  let [comments, setComments] = useState([{
    username: "@sa",
    remarks: "great job!",
    rating: 4
  }]);

  let addNewComment = (comment) => {
   setComments((currComments) => [...currComments, comment]);
   console.log("added a new comment");
  };

  return (
    <>
    <div>
      <h3>All Comments</h3>
      {comments.map((comment, idx) => (
       <div className="comment" key={idx}>
        <span>{comment.remarks}</span>
        &nbsp;
        <span>(rating = {comment.rating})</span>
        <p>-{comment.username}</p>
        </div>
      ))}
    </div>
    <hr /><hr />
    <CommentsForm addNewComment={addNewComment}/>
    </>
     
  );
}