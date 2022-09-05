import profileReducer, { addPostActionCreator } from "./profile-reducer";
import React from "react";

let state = {
  posts: [
    { id: 1, message: "Hi! How are you?", likeCount: 12 },
    { id: 2, message: "Hello! It's my first post!", likeCount: 7 },
    { id: 3, message: "Hi! Have a good day!!!", likeCount: 23 },
    { id: 4, message: "Have a good day!!!", likeCount: 190 },
  ]
};

it('length of post should be incremented', () => {
  let action = addPostActionCreator("Be strong!");

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(5);
});

it('message of new post should be correct', () => {
  let action = addPostActionCreator("Be strong!");

  let newState = profileReducer(state, action);

  expect(newState.posts[4].message).toBe("Be strong!");
});

it('after deleting length of post should be decremented', () => {
  let action = deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});
