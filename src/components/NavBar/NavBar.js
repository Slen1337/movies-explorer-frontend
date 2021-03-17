import React from "react";
import UserMenu from "./UserMenu/UserMenu";
import HeaderFilms from "../Header/HeaderFilms/HeaderFilms";
import MobileMenu from "./MobileMenu/MobileMenu";

export default function NavBar({ loggedIn, windowWidth }) {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = React.useState(false);

  function handleMenuClick() {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  }

  return (
    <nav className={loggedIn ? "navbar" : "navbar navbar_exit"}>
      {loggedIn && windowWidth > 768 && <HeaderFilms />}
      {loggedIn && windowWidth > 768 && <UserMenu loggedIn={loggedIn} />}
      {loggedIn && windowWidth <= 768 && (
        <button className="navbar__start" onClick={handleMenuClick} />
      )}
      {!loggedIn && <UserMenu loggedIn={loggedIn} />}
      <MobileMenu
        loggedIn={loggedIn}
        handleMenuClick={handleMenuClick}
        isMobileMenuOpened={isMobileMenuOpened}
      />
    </nav>
  );
}