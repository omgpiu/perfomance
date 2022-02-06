import { styled } from "linaria/react";

export const Button = styled.button`
  color: #e5dc15;
  background: #0e79b2;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  margin: 1rem;
  padding: 0.5rem;
  border: 2px solid #e5dc15;
  border-radius: 0.5rem;
  position: relative;
  top: 0;
  transition: all 300ms ease-in-out;
  box-shadow: 0 0.6em #c2bb11, 0 0.9em rgba(0, 0, 0, 0.4);

  &:hover {
    top: 0.2em;
    box-shadow: 0 0.4em #c2bb11, 0 0.7em rgba(0, 0, 0, 0.4);
    background: #e5dc15;
    color: #0e79b2;
  }

  &:active {
    top: 0.4em;
    box-shadow: 0 0.2em #c2bb11, 0 0.5em rgba(0, 0, 0, 0.4);

  }
`