let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 12 },
      { id: 2, message: "It`s my first post", likesCount: 11 },
    ],
  },
  messagesPage: {
    dialogs: [
      { id: 1, name: "Buffy" },
      { id: 2, name: "Donny" },
      { id: 3, name: "Nutty" },
      { id: 4, name: "Soffy" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Yo" },
    ],
  },
};

export default state;
