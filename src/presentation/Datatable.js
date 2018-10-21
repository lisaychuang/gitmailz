import React from "react";
import Datasort from "react-data-sort";
import "../App.css";

// @material-ui components
import Chip from '@material-ui/core/Chip';
import BlankStarIcon from "@material-ui/icons/StarBorder";
// import FilledStarIcon from "@material-ui/icons/Star";


// Initiate moment.js
const moment = require("moment");

export default function MyTable(props) {

  return (
    <Datasort
      // higher score = more important notifications
      defaultSortBy="score"
      defaultDirection="desc"
      data={props.notifications}

      render={({
        data,
        setSortBy,
        sortBy,
        direction,
        toggleDirection
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
  event.preventDefault();
  
}

// Background color for notification reason labels
// https://flatuicolors.com/palette/se

function reasonChipColor(reason){
  let style = {}
  switch (reason) {
    case "invitation":
      style = { backgroundColor: "#4bcffa" } //MEGAMAN color
      break;
    case "mention":
      style = { backgroundColor: "#ffdd59" }  //YRIEL YELLOW
      break;
    case "assign":
      style = { backgroundColor: "#ff5e57" }  //SUNSET ORANGE
      break;
    case "team_mention":
      style = { backgroundColor: "#0be881" }  //MINTY GREEN
      break;
    case "manual":
      style = { backgroundColor: "#575fcf" }  //DARK PERIWINKLE
      break;
    case "author":
      style = { backgroundColor: "#808e9b" }  //LONDON SQUARE
      break;
    case "state_change":
      style = { backgroundColor: "#485460" }  //GOODNIGHT
      break;
    case "comment":
      style = { backgroundColor: "#05c46b" }  //GREEN TEAL
      break;
    case "subscribed":
      style = { backgroundColor: "#485460", color: "#ffffff" }  //GOODNIGHT
      break;
    default:
      style = { backgroundColor: "#d2dae2" }  //GREY
  }
  debugger;
  return style;
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

            {/* Colorful notification reason label*/}
            <td>
            <Chip
              label={reason}
              style={reasonChipColor(reason)}
              className="notification-reason"
            />
            </td>

            <td>{moment(updated_at).fromNow()}</td>
          </tr>
        )
      )}
    </tbody>
  );
}