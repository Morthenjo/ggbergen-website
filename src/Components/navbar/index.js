import { Route, Routes, NavLink } from "react-router-dom";
import ErrorPage from "../../Pages/ErrorPage";
import EventPage from "../../Pages/eventPage/EventPage";
import HomePage from "../../Pages/homePage/HomePage";
import {
  DiscordDiv,
  Logo,
  LogoDiv,
  NavbarDiv,
  NavbarSelect,
  StyledNav,
} from "./NavbarStyles";
import GGBergenLogo from "../../Images/GGBergenlog.png";
import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import DiscordLogo from "../../Images/discordlogo.png";
import FindUsPage from "../../Pages/findUsPage/FindUsPage";
import PicturePage from "../../Pages/picturePage/PicturePage";
import ContactPage from "../../Pages/contactPage/ContactPage";
import { Hamburger } from "./hamburger";
import Member from "../../Pages/memberPage/MemberPage.js";

const Navbar = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState();
  const languages = [
    { value: "", text: "Language" },
    { value: "en", text: "English" },
    { value: "no", text: "Norwegian" },
  ];

  const handleChange = (e) => {
    setLang(e.target.value);
    let loc = "https://morthenjo.github.io/ggbergen-website/";
    window.location.replace(loc + "?lng=" + e.target.value);
  };

  const [active, setActive] = useState(false);

  const menuToggle = () => {
    setActive(!active);
  };

  const autoClose = () => {
    window.scrollTo(0, 0);
    setActive(false);
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
          <NavLink to="/" end onClick={autoClose}>
            <LogoDiv>
              <Logo src={GGBergenLogo} alt="GGBergen sin logo"></Logo>
            </LogoDiv>
          </NavLink>
          <NavLink
            to="/location"
            end
            className={({ isActive }) => (isActive ? "activeStyle" : "navBtn")}
            onClick={autoClose}
          >
            {t("location")}
          </NavLink>
          <NavLink
            to="/picture"
            end
            className={({ isActive }) => (isActive ? "activeStyle" : "navBtn")}
            onClick={autoClose}
          >
            {t("picture")}
          </NavLink>
          <NavLink
            to="/eventer"
            className={({ isActive }) => (isActive ? "activeStyle" : "navBtn")}
            onClick={autoClose}
          >
            {t(`eventer`)}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "activeStyle" : "navBtn")}
            onClick={autoClose}
          >
            {t(`contact`)}
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
        <Hamburger active={active} onClick={menuToggle} />
      </div>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/location" element={<FindUsPage />} />
        <Route path="/picture" element={<PicturePage />} />
        <Route path="/eventer" element={<EventPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/member" element={<Member />} />
      </Routes>
    </>
  );
};

export default Navbar;
