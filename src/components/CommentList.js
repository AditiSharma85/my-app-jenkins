import React from "react";
import LikeButton from "./LikeButton";

class CommentList extends React.Component {
  
  state = {
    posts: [],
    comment: ""
  };


  handleChange = event => {
      this.setState({comment: event.target.value})
    };
//add new comment functionality
  addNewComment = event => {
    event.preventDefault();
    let tempComment = this.state.comment;
    let tempPosts = this.state.posts;
    tempPosts.push(tempComment);
    this.setState({
      posts: tempPosts,
      comment: ''
    });

  };

  render() {
    return (
      <div>
      <div>
        <form onSubmit = {this.addNewComment}>
          <label>
            Add Comment:
            <input type="text" name="comment" onChange = {this.handleChange}/>
          </label>
          <button type="submit">Post</button>
        </form>
      </div>
      <ul>
      {this.state.posts.map(post => (
            <li>
              <b> {post} </b>     <LikeButton />

            </li>
          ))}
      </ul>
      </div>
      );
  }
}

export default CommentList;