import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It`s my first post", likesCount: 11 },
        { id: 3, message: "YoYo!!", likesCount: 15 },
      ],
      newPostText: "Wonderfool!",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Flaffy" },
        { id: 2, name: "Holly" },
        { id: 3, name: "Berry" },
        { id: 4, name: "Flint" },
        { id: 5, name: "Mikky" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hello" },
        { id: 3, message: "Glad to see" },
        { id: 4, message: "Wow" },
        { id: 5, message: "What&" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("state");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

window.store = store;

export default store;
