import { UserState, TOGGLE_LOGGED_USER } from "../types";

const initialState: UserState = {
  loggedUserAccessToken: undefined,
  loggedUserName: undefined,
};

export function userReducer(state = initialState, action: any): UserState {
  switch (action.type) {
    case TOGGLE_LOGGED_USER:
      return {
        ...state,
        loggedUserName: action.payload.loggedUserName,
        loggedUserAccessToken: action.payload.loggedUserAccessToken,
      };

    default:
      return state;
  }
}
