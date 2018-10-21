import { endpoint } from "./api";

function apiCall(requestPath, method = 'GET', body) {
    return fetch(`${endpoint}/${requestPath}.json`, {
        credentials: "include",
        mode: "cors",
        method: method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: body
      }).then(res => {
        if (!res.ok) throw new Error(`Problem making request to "${requestPath}"`);
        return res.json();
      });
}


export function getUserFavRepos(){
 return apiCall('user-favorite-repos');
};

export function getUserInfo(){
 return apiCall('user-info');
};
  
export function saveFavRepos(favRepos){
    return apiCall('find-repos', 'POST',  JSON.stringify(favRepos));
   };