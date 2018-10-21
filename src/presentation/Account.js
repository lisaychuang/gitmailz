import React from "react";

import { saveFavRepos } from "../data/requests";

const DEFAULT_FAV_REPOS =
  "emberjs/ember.js, jquery/jquery, DefinitelyTyped/DefinitelyTyped";

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
      <label>
        List repos you'll like to set as favorite repos (:owner/:repo),
        separated by commas:
        <br />
      </label>
      <textarea
        name="favRepos"
        rows="6"
        cols="50"
        onChange={onInputChange}
        value={userFavRepos || DEFAULT_FAV_REPOS}
      />
      <input type="submit" value="Submit" />
    </form>

    <p>You have signed in successfully</p>
  </div>
);

export default AccountPage;