import React from "react";
// import "./Navbar.css";

const Navbar = ({ SearchedMovie }) => {
  return (
    <>
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark justify-content-between">
        <a class="navbar-brand" href="/">
          Movies App
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarText"
        >
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link" href="/" style={{ color: "white" }}>
                Trending Movies
              </a>
            </li>
          </ul>
          <form class="form-inline" onSubmit={SearchedMovie}>
            <input
              class="form-control mr-sm-2"
              name="inputmovies"
              type="search"
              placeholder="Search Movies"
              aria-label="Search"
            />
            <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
