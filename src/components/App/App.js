import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../Main/Main";
import NotFound from "../NotFound/NotFound";
import Register from "../Profile/Register/Register";
import Login from "../Profile/Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../Movies/SavedMovies/SavedMovies";

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/patchProfile">
          <Profile />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/savedmovies">
          <SavedMovies />
        </Route>
        <Route path="/notfound">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}
