import UserActionTypes from "./user.types";

export const googleSingInStart = () => ({
  type: UserActionTypes.GOOGLE_SING_IN_START,
});

export const singInSuccess = (user) => ({
  type: UserActionTypes.SING_IN_SUCCESS,
  payload: user,
});

export const singInFailure = (error) => ({
  type: UserActionTypes.SING_IN_SUCCESS,
  payload: error,
});

export const emailSingInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SING_IN_START,
  payload: emailAndPassword,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({ type: UserActionTypes.SIGN_OUT_START });

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = (userData) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userData,
});

export const signUpSuccess = (emailAndPassword) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: emailAndPassword,
});

export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});
