const SEND_MESSAGE = "SEND-MESSAGE";
let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };

    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
