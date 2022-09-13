import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  text-align: center;
  border-bottom: 5px solid blue;
  background-color: #ed3232;
  z-index: 2;
  width: 100%;
  @media (max-width: 600px) {
    top: 0;
    right: 0;
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  object-fit: cover;
  position: absolute;
  width: 100%;
`;

export const LogoDiv = styled.div`
  left: -2.5rem;
  position: relative;
  width: 5rem;
`;

export const DiscordDiv = styled.div`
  right: -2rem;
  position: relative;
  width: 6rem;
`;
