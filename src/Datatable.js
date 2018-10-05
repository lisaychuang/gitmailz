import React from "react";
import { render } from "react-dom";
import Datasort from "react-data-sort";
import {notification} from "./Seed";

// Initiate moment.js
const moment = require('moment');

export default function MyTable() {
  return (
    <Datasort
      data={notification}
      defaultSortBy="id"
    //   paginate
      render={({
        data,
        setSortBy,
        sortBy,
        direction,
        activePage,
        toggleDirection,
        goToPage,
        nextPage,
        prevPage,
        pages
      }) => {
        return (
          <div style={{maxWidth: "100%"}}>
            <table border={1} cellPadding={2} style={{width: '100%'}}>
              <TableHead
                setSortBy={setSortBy}
                sortBy={sortBy}
                direction={direction}
                toggleDirection={toggleDirection}
              />
              <TableBody data={data} />
            </table>

            {/* Pagination footer begins  */}
            <Flex style={{justifyContent: 'space-between'}}>
              <GoToPage goToPage={goToPage} pages={pages} />
              <PageIndicator pages={pages} activePage={activePage} />
              <Navigation
                activePage={activePage}
                goToPage={goToPage}
                nextPage={nextPage}
                prevPage={prevPage}
                pages={pages}
              />
              
            </Flex>
          </div>
        );
      }}
    />
  );
}

function TableHead({ setSortBy, sortBy, direction, toggleDirection }) {
  const columns = [
    { key: "score", title: "Score" },
    { key: "id", title: "ID" },
    { key: "repository.name", title: "Repo name" },
    { key: "reason", title: "Reason" },
    { key: "subject.title", title: "Description" },
    { key: "updated_at", title: "Update Date" }
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
        {title} {active ? direction === "asc" ? "▲" : "▼" : null}
      </HeadToggle>
    );
  });
  return (
    <thead>
      <tr>{items}</tr>
    </thead>
  );
}

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

function TableBody({ data }) {
  return (
    <tbody>
      {data.map(({score, id, reason, subject, updated_at, repository }) => (
        <tr>
          <td>{score}</td>
          <td>{id}</td>
          <td><a href={repository.html_url}>{repository.full_name}</a></td>
          <td>{reason}</td>
          <td>{subject.title}</td>
          <td>{moment(updated_at).fromNow()}</td>
        </tr>
      ))}
    </tbody>
  );
}

function Flex({ children, style }) {
  return <div style={{ display: "flex", ...style }}>{children}</div>;
}

function GoToPage({ goToPage, pages}) {
  const options = []
  for(let i = 0; i < pages; i++) {
    options.push(<option value={i}>{i + 1}</option>)
  }
  return <div>Go to page <select onChange={e => goToPage(parseInt(e.target.value))}>{options}</select></div>
}

function Navigation({ activePage, goToPage, nextPage, prevPage, pages }) {
  return (
    <Flex>
      <button disabled={activePage === 0} onClick={() => goToPage(0)}>
        {"<<"}
      </button>
      <button disabled={activePage === 0} onClick={prevPage}>
        {"<"}
      </button>

      <button disabled={activePage === pages - 1} onClick={nextPage}>
        {">"}
      </button>
      <button
        disabled={activePage === pages - 1}
        onClick={() => goToPage(pages - 1)}
      >
        {">>"}
      </button>
    </Flex>
  );
}

function PageIndicator ({pages, activePage}) {
  return <div>
    <b>{activePage + 1}</b> / {pages}
  </div>
} 
