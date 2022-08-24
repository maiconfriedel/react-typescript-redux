/** @description Estado do usuário */
export interface UserState {
  /** @description Username do usuário logado */
  loggedUserName?: string;

  /** @description Token do usuário logado */
  loggedUserAccessToken?: string;
}

export const TOGGLE_LOGGED_USER = "TOGGLE_LOGGED_USER";

export interface ToggleLoggedUserAction {
  type: typeof TOGGLE_LOGGED_USER;
  payload: UserState;
}

export type UserActions = ToggleLoggedUserAction;
