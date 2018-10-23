// Reducer function

const initialState = {
    error: null,
    isLoaded: false,
    userName: "",
    githubUsername: "",
    userFavRepos: ""
};

export default function gimailApp(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_NOTIFICATIONS': 
            return { ...state, isLoaded: false};
        case 'GET_NOTIFICATIONS_SUCCESS':
            return { ...state, isLoaded: true, notifications: action.payload};

        case 'GET_NOTIFICATIONS_ERROR':
            return { ...state, isLoaded: true, error: action.error};

        default: 
            return state;
    }
}

