import React from "react";
import Header from "../Header/Header";
import MovieCardList from "./MovieCardList/MovieCardList";
import SearchForm from "../Form/SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

export default function Movies({
  movies,
  loggedIn,
  isLoading,
  handleSearch,
  windowWidth,
  handleSaveMovie,
  handleDeleteMovie,
  moviesMessage,
}) {
  return (
    <>
      <Header loggedIn={loggedIn} windowWidth={windowWidth} />
      <main className="movies">
        <SearchForm handleSearch={handleSearch} windowWidth={windowWidth} />
        {isLoading ? (
          <Preloader />
        ) : (
          <MovieCardList
            movies={movies}
            windowWidth={windowWidth}
            handleSaveMovie={handleSaveMovie}
            handleDeleteMovie={handleDeleteMovie}
            moviesMessage={moviesMessage}
          />
        )}
      </main>
      <Footer />
    </>
  );
}