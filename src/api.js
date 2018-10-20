// Fetch data from localhost:3000 in local environment
// OR 
// Fetch from web API

export const endpoint =
  window.location.host.startsWith("localhost") // If the react app is running on localhost
    ? "http://localhost:3000"   // use localhost:3000 for API calls
    : "https://gitmailz-api.herokuapp.com"; // otherwise use the production API
