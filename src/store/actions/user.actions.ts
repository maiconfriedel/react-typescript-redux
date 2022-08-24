import { TOGGLE_LOGGED_USER, UserActions, UserState } from "../types";

export function toggleLoggedUser(user: UserState): UserActions {
  return {
    type: TOGGLE_LOGGED_USER,
    payload: user,
  };
}
