import React from 'react';
import styled from 'styled-components/macro';
import Button from './Button';

const Header = styled.div`
  display: flex;
  justify-content: center;
  background-color: hotpink;
  text-align: center;
  margin: 0;
  padding: 20px;
`;

export default function HeaderComponent() {
  return (
    <Header>
      Meal Prep
      <Button />
    </Header>
  );
}
