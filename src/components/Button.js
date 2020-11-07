import React from 'react';
import styled from 'styled-components/macro';
import ImageNav from '../assets/menu.svg';

const Image = styled.img`
  text-align: center;
  background: transparent;
  width: 20px;
  height: 20px;
`;

const ButtonNav = styled.button`
  display: flex;
  align-content: right;
  border: none;

  &:hover {
    background-color: red;
  }
  &:focus {
    outline: none;
  }
`;

// const NavBar = () => {
// const [nav, setNav] = useState(false);

const handleClick = () => {
  alert(`menu`);
};

export default function Button() {
  return (
    <ButtonNav type="button" onClick={handleClick}>
      <Image src={ImageNav} alt="menu" />
    </ButtonNav>
  );
}
