import React from "react";
import MovieGrid from "../MovieGrid/MovieGrid";
import uuid from "react-uuid";
const MovieItem = ({ movies }) => {
  return (
    <section style={{ marginTop: "6em" }}>
      <div className="container-fluid">
        <div className="row">
          {movies.map((el) => (
            <MovieGrid
              key={uuid()}
              title={el.media_type === "tv" ? el.name : el.title}
              image={el.poster_path}
              release_date={
                el.media_type === "tv" ? el.first_air_date : el.release_date
              }
              overview={el.overview}
              popularity={el.popularity}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieItem;
