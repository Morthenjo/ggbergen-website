import styled from "styled-components";
import Sword from "./Sword.png";

export const Hamburger = styled.div`
  @media (min-width: 765px) {
    display: none;
  }
  background: black;
  height: 0.3rem;
  width: 3rem;
  position: relative;
  top: 3rem;
  left: 2rem;
  animation: ${(props) =>
    props.active
      ? "yeet 1s ease 0s alternate both "
      : "yeet-after 1s ease 0s alternate both"};
  &:before,
  &:after {
    content: "";
    background: black;
    position: absolute;
    height: 3rem;
    width: 0.3rem;
  }

  &::before {
    left: 1.3rem;
    transform: rotate(90deg);
    animation: ${(props) =>
      props.active
        ? "top 1s ease 0s alternate both "
        : "top-after 1s ease 0s alternate both"};
  }

  &:after {
    left: 1.3rem;
    transform: rotate(-90deg);
    animation: ${(props) =>
      props.active
        ? "bottom 1s ease 0s alternate both"
        : "bottom-after 1s ease 0s alternate both"};
  }

  @keyframes top {
    from {
      top: -1rem;
      left: 0;
    }
    50% {
      top: -10rem;
      left: -10rem;
      transform: rotate(-45deg);
      background: url("${Sword}") no-repeat fixed center;
      background-size: contain;
      width: 10rem;
      height: 5rem;
    }
    to {
      top: -2.5rem;
      left: -3.5rem;
      transform: rotate(-45deg);
      background: url("${Sword}") no-repeat fixed center;
      background-size: contain;
      width: 10rem;
      height: 5rem;
    }
  }
  @keyframes bottom {
    0% {
      bottom: -1rem;
      left: 0;
    }
    50% {
      bottom: 10rem;
      left: 10rem;
      transform: rotate(45deg);
      background: url("${Sword}");
      background: url("${Sword}") no-repeat fixed center;
      background-size: contain;
      width: 10rem;
      height: 5rem;
    }
    100% {
      bottom: -2rem;
      left: -3rem;
      transform: rotate(45deg);
      background: url("${Sword}") no-repeat fixed center;
      background-size: contain;
      width: 10rem;
      height: 5rem;
    }
  }
  @keyframes top-after {
    from {
      top: -2.5rem;
      left: -3.5rem;
      transform: rotate(-45deg);
      background: url("${Sword}") no-repeat fixed center;
      background-size: contain;
      width: 10rem;
      height: 5rem;
    }
    50% {
      top: -10rem;
      left: -10rem;
      transform: rotate(45deg);
      background: url("${Sword}") no-repeat fixed center;
      background-size: contain;
      width: 10rem;
      height: 5rem;
    }
    to {
      top: -0.1rem;
    }
  }
  @keyframes bottom-after {
    from {
      bottom: -2rem;
      left: -3rem;
      transform: rotate(-45deg);
      background: url("${Sword}") no-repeat fixed center;
      background-size: contain;
      width: 10rem;
      height: 5rem;
    }
    50% {
      bottom: 10rem;
      left: 10rem;
      transform: rotate(-45deg);
      background: url("${Sword}") no-repeat fixed center;
      background-size: contain;
      width: 10rem;
      height: 5rem;
    }
    to {
      bottom: -0.1rem;
    }
  }
  @keyframes yeet {
    from {
      left: 2rem;
      top: 3rem;
    }
    50% {
      background: rgba(0, 0, 0, 1);
    }
    to {
      top: 3rem;
      background: rgba(0, 0, 0, 0);
    }
  }
  @keyframes yeet-after {
    from {
      top: 3rem;
      background: rgba(0, 0, 0, 0);
    }
    to {
      left: 2rem;
      top: 3rem;
    }
  }
`;
