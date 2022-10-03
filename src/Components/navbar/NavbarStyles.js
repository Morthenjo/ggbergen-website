import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  border-bottom: 5px solid white;
  background-color: #ed3232;
  width: 100%;
  transition: 0.2s;
  @media (max-width: 765px) {
    position: fixed;
    flex-direction: column;
    padding: 10% 0;
    transform: translateY(${(props) => (props.active ? "0" : "-110%")});
  }
`;

export const Logo = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const LogoDiv = styled.div`
  position: relative;
  width: 5rem;
  @media (max-width: 765px) {
    margin: 0 auto;
  }
`;

export const DiscordDiv = styled.div`
  position: relative;
  margin-top: 0.6rem;
  width: 5rem;
  @media (max-width: 765px) {
    margin-left: 20%;
  }
`;

export const NavbarSelect = styled.select`
  height: 2rem;
  margin: auto 0;
  @media (max-width: 765px) {
    margin-left: 20%;
  }
`;

export const NavbarDiv = styled.div`
  display: flex;
  flex-direction: row;
  @media (min-width: 765px) {
  }
`;

export const StyledBurger = styled.img`
  display: none;
  @media (max-width: 765px) {
    position: fixed;
    top: 3%;
    left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 3rem;
    height: 3rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 2;
  }
`;
