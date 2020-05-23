import React from "react";
import Post from "../components/Post";
import LikeButton from "../components/LikeButton";
import CommentList from "../components/CommentList";
import { render,screen,fireEvent } from "@testing-library/react";
import { getByText,getByLabelText,createEvent } from "@testing-library/dom";

// Testing for Post component. 
// Post with some content is rendered and then, using getByText, 
// the String is searched on react testing library screen.
test("Post component receives props and renders text", () => {

	render(
		<Post content = "Give me all your likes!" />
	);

	expect.stringContaining("Give me all your likes!");	
});

//Testing for LikeButton component.
//Post is rendered, alongwith LikeButton.
//LikeButton is then clicked, and string containing 
//increased like count is expected.
test("Like component is clicked, and counter is increased", () => {

	render(
		<Post content = "This is totally not a cry for attention" />
		);

	const button = screen.getByText('Like');

	fireEvent.click(button);

	expect.stringContaining("Likes: 1");
});

//Testing for CommentList component.
//Post is rendered, and Add Comment label is selected.
//The string 'abc' is passed, and expected.
test("String is typed in Comment component and submit button clicked, string is displayed on screen", () => {

	render(
		<Post content = "What were the first three letters of the alphabet again?" />
		);

	const input = screen.getByLabelText('Add Comment:');

	fireEvent.keyDown(input, {key: 'a', code: 'keyA'});
	fireEvent.keyDown(input, {key: 'b', code: 'keyB'});
	fireEvent.keyDown(input, {key: 'c', code: 'keyC'});
	fireEvent.click(screen.getByText('Post'));

	expect.stringContaining("abc");

});