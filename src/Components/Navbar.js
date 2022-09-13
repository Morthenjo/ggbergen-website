import { Route, Routes, NavLink } from "react-router-dom";
import AboutPage from "../Pages/AboutPage";
import ErrorPage from "../Pages/ErrorPage";
import EventPage from "../Pages/EventPage";
import HomePage from "../Pages/HomePage";
import { DiscordDiv, Logo, LogoDiv, StyledNav } from "../Styles/NavbarStyles";
import GGBergenLogo from "../Images/GGBergenlog.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import DiscordLogo from "../Images/discordlogo.png";

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

  return (
    <div>
      <StyledNav>
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
          to="/about"
          end
          className={({ isActive }) => (isActive ? "activeStyle" : "navBtn")}
        >
          {t("about")}
        </NavLink>
        <NavLink
          to="/eventer"
          className={({ isActive }) => (isActive ? "activeStyle" : "navBtn")}
        >
          {t(`eventer`)}
        </NavLink>
        <select value={lang} onChange={handleChange}>
          {languages.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.text}
              </option>
            );
          })}
        </select>
        <DiscordDiv>
          <a
            href="https://discord.gg/UwUwsFa"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Logo src={DiscordLogo} alt="Discord sin logo"></Logo>
          </a>
        </DiscordDiv>
      </StyledNav>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/eventer" element={<EventPage />} />
      </Routes>
    </div>
  );
};

export default Navbar;
