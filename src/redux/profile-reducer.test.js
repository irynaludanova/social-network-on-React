import profileReducer, { addPostActionCreator } from "./profile-reducer";
import React from "react";
let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It`s my first post", likesCount: 11 },
    { id: 3, message: "YoYo!!", likesCount: 15 },
  ],
};
it("length of posts should be incremented", () => {
  //1.test data
  let action = addPostActionCreator("hello react");
  //2. action
  let newState = profileReducer(state, action);
  //3.expectation
  expect(newState.posts.length).toBe(4);
});
it("message of new post should be 'hello react'", () => {
  //1.test data
  let action = addPostActionCreator("hello react");
  //2. action
  let newState = profileReducer(state, action);
  //3.expectation
  expect(newState.posts.length).toBe(4);
  expect(newState.posts[3].message).toBe("hello react");
});
