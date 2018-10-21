import React from "react";

import { saveFavRepos } from "../data/requests";

const DEFAULT_FAV_REPOS =
  "example: facebook/react, emberjs/ember.js, jquery/jquery, DefinitelyTyped/DefinitelyTyped";

/**
 * Upon form submit, save new user input
 * @param {KeyboardEvent} evt
 */
function preferencesSave(evt) {
  /** @type {HTMLFormElement} */

  evt.preventDefault();
  const formElement = evt.target;
  const elements = [...formElement.elements];
  const [repoTextArea] = elements.filter(elem => elem.name === "favRepos");
  const favRepos = repoTextArea.value;

  saveFavRepos(favRepos);
}

const AccountPage = ({userFavRepos, onInputChange}) => (
  <div>
    <h2>Account information</h2>

    <form onSubmit={preferencesSave}>
      <h4>
        List repos you'll like to set as favorite repos (:owner/:repo),
        separated by commas:
      </h4>
      <br />

      <textarea
        name="favRepos"
        rows="6"
        cols="50"
        onChange={onInputChange}
        value={userFavRepos || DEFAULT_FAV_REPOS}
      /><br />

      <input type="submit" value="Save Favorite Repos" />
    </form>
  </div>
);

export default AccountPage;