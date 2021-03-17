import React from "react";
import SearchForm from "../../Form/SearchForm/SearchForm";
import MovieCardList from "../MovieCardList/MovieCardList";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Preloader from "../../Preloader/Preloader";

export default function SavedMovies({
  savedMovies,
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
      <section className="saved-movies">
        <SearchForm handleSearch={handleSearch} windowWidth={windowWidth} />
        {isLoading ? (
          <Preloader />
        ) : (
          <MovieCardList
            movies={savedMovies}
            isLoading={isLoading}
            windowWidth={windowWidth}
            handleSaveMovie={handleSaveMovie}
            handleDeleteMovie={handleDeleteMovie}
            moviesMessage={moviesMessage}
          />
        )}
      </section>
      <Footer />
    </>
  );
}