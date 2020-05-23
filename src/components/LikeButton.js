import React from 'react';

class LikeButton extends React.Component {



	state = {
            likes: 0
        };
    // adding counter for like button
        addLike = () => {
            let likeCount = this.state.likes + 1;
            this.setState({
                likes:likeCount
            });
        };
    
        render() {
            return<span> <button onClick = {this.addLike}>Like</button> Likes: {this.state.likes}</span>
        }

	}

export default LikeButton;