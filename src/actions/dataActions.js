import { getNotifications } from "../data/requests";

// const GET_USER_INFO = 'GET_USER_INFO';
// const GET_FAV_REPOS = 'GET_FAV_REPOS';
// const SAVE_FAV_REPOS = 'SAVE_FAV_REPOS';

export function loadNotifications() {
  return dispatch => {
    dispatch({
      type: "LOAD_NOTIFICATIONS"
    });

    // fetch list of user's notifications from Rails API
    getNotifications()
    .then(data => {
      dispatch({
        type: "GET_NOTIFICATIONS_SUCCESS",
        payload: data
      });
    })
    // Catch error if the API response never came, e.g. if user is offline or request timed out
    .catch(
      error => {
        window.alert("Current user request never came back");
        dispatch({
          type: "GET_NOTIFICATIONS_ERROR",
          error
        });
      }
    );
  };
}