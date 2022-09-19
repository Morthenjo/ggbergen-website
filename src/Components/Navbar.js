import { Route, Routes, NavLink } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import EventPage from "../Pages/EventPage";
import HomePage from "../Pages/HomePage";
import {
  DiscordDiv,
  Logo,
  LogoDiv,
  NavbarDiv,
  NavbarSelect,
  StyledBurger,
  StyledNav,
} from "../Styles/NavbarStyles";
import GGBergenLogo from "../Images/GGBergenlog.png";
import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import DiscordLogo from "../Images/discordlogo.png";
import FindUsPage from "../Pages/FindUsPage";
import PicturePage from "../Pages/PicturePage";

const languages = [
  { value: "", text: "Language" },
  { value: "en", text: "English" },
  { value: "no", text: "Norwegian" },
];

const Navbar = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState("");

  const handleChange = (e) => {
    setLang(e.target.value);
    let loc = "http://localhost:3000/";
    window.location.replace(loc + "?lng=" + e.target.value);
  };

  const [active, setActive] = useState(false);

  const menuToggle = () => {
    setActive(!active);
  };

  const closeMenu = (e) => {
    if (menu.current && active && !menu.current.contains(e.target)) {
      setActive(false);
    }
  };

  const menu = useRef(null);
  document.addEventListener("mousedown", closeMenu);

  return (
    <>
      <div ref={menu}>
        <StyledNav active={active}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "activeStyle" : "navBtn")}
          >
            <LogoDiv>
              <Logo src={GGBergenLogo} alt="GGBergen sin logo"></Logo>
            </LogoDiv>
          </NavLink>
          <NavLink
            to="/location"
            end
            className={({ isActive }) => (isActive ? "activeStyle" : "navBtn")}
          >
            {t("location")}
          </NavLink>
          <NavLink
            to="/picture"
            end
            className={({ isActive }) => (isActive ? "activeStyle" : "navBtn")}
          >
            {t("picture")}
          </NavLink>
          <NavLink
            to="/eventer"
            className={({ isActive }) => (isActive ? "activeStyle" : "navBtn")}
          >
            {t(`eventer`)}
          </NavLink>
          <NavbarDiv>
            <NavbarSelect value={lang} onChange={handleChange}>
              {languages.map((item) => {
                return (
                  <option key={item.value} value={item.value}>
                    {item.text}
                  </option>
                );
              })}
            </NavbarSelect>
            <DiscordDiv>
              <a
                href="https://discord.gg/UwUwsFa"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Logo src={DiscordLogo} alt="Discord sin logo"></Logo>
              </a>
            </DiscordDiv>
          </NavbarDiv>
        </StyledNav>
        <StyledBurger
          src={require("../Images/burger.png")}
          onClick={menuToggle}
        />
      </div>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/location" element={<FindUsPage />} />
        <Route path="/picture" element={<PicturePage />} />
        <Route path="/eventer" element={<EventPage />} />
      </Routes>
    </>
  );
};

export default Navbar;
