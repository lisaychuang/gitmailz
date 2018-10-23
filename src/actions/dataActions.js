import { getUserInfo, getNotifications, getUserFavRepos } from "../data/requests";

// const GET_USER_INFO = 'GET_USER_INFO';
// const GET_FAV_REPOS = 'GET_FAV_REPOS';
// const SAVE_FAV_REPOS = 'SAVE_FAV_REPOS';

// action function to get NOTIFICATIONS
export function loadNotifications() {
  return dispatch => {
    dispatch({
      type: "LOAD_DATA"
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
        console.error("Current user web request never came back");
        dispatch({
          type: "API_ERROR",
          error
        });
      }
    );
  };
}


// action function to get USER INFO
export function loadUser() {
  return dispatch => {
    dispatch({
      type: "LOAD_DATA"
    });

    // fetch list of user's notifications from Rails API
    getUserInfo()
    .then(data => {
      dispatch({
        type: "GET_USER_INFO",
        payload: data
      });
    })
    // Catch error if the API response never came, e.g. if user is offline or request timed out
    .catch(
      error => {
        console.error("Current user request never came back");
        dispatch({
          type: "API_ERROR",
          error
        });
      }
    );
  };
}

// action function to get FAV REPOS
export function loadFavRepos() {
  return dispatch => {
    dispatch({
      type: "LOAD_DATA"
    });

    // fetch list of user's notifications from Rails API
    getUserFavRepos()
    .then(data => {
      dispatch({
        type: "GET_FAV_REPOS_SUCCESS",
        payload: data
      });
    })
    // Catch error if the API response never came, e.g. if user is offline or request timed out
    .catch(
      error => {
        console.error("Fav repo web request never came back");
        dispatch({
          type: "API_ERROR",
          error
        });
      }
    );
  };
}