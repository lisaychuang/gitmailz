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
        case 'LOAD_DATA': 
            return { ...state, isLoaded: false};

        case 'GET_NOTIFICATIONS_SUCCESS':
            return { ...state, isLoaded: true, notifications: action.payload};

        case 'GET_USER_INFO':
            return { ...state, isLoaded: true, userName: action.payload.name, githubUsername: action.payload.username,};

        case 'GET_FAV_REPOS_SUCCESS':
            return { ...state, isLoaded: true, userFavRepos: action.payload};

        case 'API_ERROR':
            return { ...state, isLoaded: true, error: action.error};

        default: 
            return state;
    }
}

