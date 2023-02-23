import React from "react";
import { useState } from "react";
import "../styles/styles.css"
function Dropdown() {

    const [resultsPerPage, setResultsPerPage] = useState("All");

  return (
    <div className="dropdown">
        <select value={resultsPerPage} className="dropdownSelect"  onChange={(event) => setResultsPerPage(event.target.value)}>
            <option value={"All"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon ipc-icon--label searchCatSelector__itemIcon" id="iconContext-label" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84l3.96-5.58a.99.99 0 0 0 0-1.16l-3.96-5.58z"></path></svg>
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84l3.96-5.58a.99.99 0 0 0 0-1.16l-3.96-5.58z"></path>
            All</option>
            <option value={"Titles"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon ipc-icon--label searchCatSelector__itemIcon" id="iconContext-label" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84l3.96-5.58a.99.99 0 0 0 0-1.16l-3.96-5.58z"></path></svg>
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84l3.96-5.58a.99.99 0 0 0 0-1.16l-3.96-5.58z"></path>
            Titles</option>
            <option value={"TV Episodes"}>TV Episodes</option>
            <option value={"Celebs"}>Celebs</option>
            <option value={"Companies"}>Companies</option>
            <option value={"Keywords"}>Keywords</option>
            <option value={"Advanced Search"}>Advanced Search</option>
        </select>
    </div>
  );
}

export default Dropdown;
