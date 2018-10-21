import React from "react";
import BlankStarIcon from "@material-ui/icons/StarBorder";
// import FilledStarIcon from "@material-ui/icons/Star";
import Datasort from "react-data-sort";
// import { notification } from "./Seed";
import "../App.css";
// Initiate moment.js
const moment = require("moment");

export default function MyTable(props) {

  return (
    <Datasort
      defaultSortBy="score"
      defaultDirection="desc"
      data={props.notifications}
      //   paginate
      render={({
        data,
        setSortBy,
        sortBy,
        direction,
        // activePage,
        toggleDirection
        // goToPage,
        // nextPage,
        // prevPage,
        // pages
      }) => {
        return (
          <div style={{ maxWidth: "100%" }}>
            <table border={1} cellPadding={2} style={{ width: "100%" }}>
              <TableHead
                setSortBy={setSortBy}
                sortBy={sortBy}
                direction={direction}
                toggleDirection={toggleDirection}
              />
              <TableBody data={data} />
            </table>
          </div>
        );
      }}
    />
  );
}

function TableHead({ setSortBy, sortBy, direction, toggleDirection }) {
  const columns = [
    { key: "score", title: "Score" },
    { key: "checkbox", title: "" },
    { key: "star", title: "Star" },
    { key: "subject.title", title: "Description" },
    { key: "repository.name", title: "Repo" },
    { key: "reason", title: "Reason" },
    { key: "updated_at", title: "Update" }
  ];
  const items = columns.map(({ key, title }) => {
    const active = key === sortBy;
    return (
      <HeadToggle
        key={key}
        active={active}
        onClick={() => {
          if (active) {
            toggleDirection();
          }
          setSortBy(key);
        }}
      >
        {title} {active ? (direction === "asc" ? "▲" : "▼") : null}
      </HeadToggle>
    );
  });
  return (
    <thead>
      <tr>{items}</tr>
    </thead>
  );
}

// Table header toggling function

function HeadToggle({ children, active, onClick }) {
  return (
    <td
      onClick={onClick}
      style={{ fontWeight: active ? "bold" : "normal", cursor: "pointer" }}
    >
      {children}
    </td>
  );
}

function bookmarkRepo(event){
  debugger;
  event.preventDefault();
  
}

function TableBody({ data }) {
  return (
    <tbody>
      {data.map(
        ({
          unread,
          score,
          id,
          reason,
          subject,
          updated_at,
          repository,
          notification_url
        }) => (
          <tr key={id} className={unread ? "unread-notifications" : ""}>
            <td>{score}</td>
            <td>
                <input type="checkbox" />
            </td>
            <td>
            {/* Should have Ternary Operator to toggle between star icons */}
              <BlankStarIcon onClick={bookmarkRepo}/>
            </td>

            {/* Link to notification */}
            <td>
              <a href={notification_url} target="_ ">
                {" "}
                {subject.title}
              </a>
            </td>

            {/* Link to repo*/}
            <td>
              <a href={repository.html_url} target="_ ">
                {repository.full_name}
              </a>
            </td>

            <td>{reason}</td>

            <td>{moment(updated_at).fromNow()}</td>
          </tr>
        )
      )}
    </tbody>
  );
}