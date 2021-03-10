import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};
// let initialState = {
//   profilePage: {
//     posts: [
//       {
//         id: 1,
//         message: "Hi, how are you?",
//         likesCount: 12,
//       },
//       {
//         id: 2,
//         message: "It`s my first post",
//         likesCount: 11,
//       },
//       {
//         id: 3,
//         message: "YoYo!!",
//         likesCount: 15,
//       },
//     ],
//     profile: {
//       aboutMe: null,
//       contacts: {
//         facebook: null,
//         website: null,
//         vk: null,
//         twitter: null,
//         instagram: null,
//         youtube: null,
//         github: null,
//         mainLink: null,
//       },
//       lookingForAJob: false,
//       lookingForAJobDescription: null,
//       fullName: "Ludanova",
//       userId: 15520,
//       photos: {
//         small: null,
//         large: null,
//       },
//     },
//     status: "hello react",
//   },
//   dialogsPage: {
//     dialogs: [
//       {
//         id: 1,
//         name: "Flaffy",
//       },
//       {
//         id: 2,
//         name: "Holly",
//       },
//       {
//         id: 3,
//         name: "Berry",
//       },
//       {
//         id: 4,
//         name: "Flint",
//       },
//       {
//         id: 5,
//         name: "Mikky",
//       },
//     ],
//     messages: [
//       {
//         id: 1,
//         message: "Hi",
//       },
//       {
//         id: 2,
//         message: "Hello",
//       },
//       {
//         id: 3,
//         message: "Glad to see",
//       },
//       {
//         id: 4,
//         message: "Wow",
//       },
//       {
//         id: 5,
//         message: "What&",
//       },
//     ],
//   },
//   sidebar: {},
//   usersPage: {
//     users: [
//       {
//         name: "restdz",
//         id: 15623,
//         uniqueUrlName: null,
//         photos: {
//           small: null,
//           large: null,
//         },
//         status: null,
//         followed: true,
//       },
//       {
//         name: "Vova342",
//         id: 15622,
//         uniqueUrlName: null,
//         photos: {
//           small: null,
//           large: null,
//         },
//         status: null,
//         followed: false,
//       },
//       {
//         name: "test12344",
//         id: 15621,
//         uniqueUrlName: null,
//         photos: {
//           small: null,
//           large: null,
//         },
//         status: null,
//         followed: false,
//       },
//       {
//         name: "raxani6032",
//         id: 15620,
//         uniqueUrlName: null,
//         photos: {
//           small: null,
//           large: null,
//         },
//         status: null,
//         followed: false,
//       },
//       {
//         name: "Monika",
//         id: 15619,
//         uniqueUrlName: null,
//         photos: {
//           small: null,
//           large: null,
//         },
//         status: null,
//         followed: false,
//       },
//     ],
//     pageSize: 5,
//     totalUsersCount: 10631,
//     currentPage: 1,
//     isFetching: false,
//     followingInProgress: [],
//   },
//   auth: {
//     userId: 15520,
//     email: "irynaludanova@gmail.com",
//     login: "Ludanova",
//     isAuth: true,
//   },
//   form: {},
//   app: {
//     initialized: true,
//   },
// };

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const requestUsers = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingProgress(true, userId));
  let data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};
export const follow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.follow.bind(usersAPI),
      followSuccess
    );
  };
};

export const unfollow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.unfollow.bind(usersAPI),
      unfollowSuccess
    );
  };
};

export default usersReducer;
