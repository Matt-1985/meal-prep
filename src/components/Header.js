import React from 'react';

import styled from 'styled-components/macro';

const Header = styled.div`
  background-color: hotpink;
  text-align: center;
  margin: 0;
`;

export default function HeaderComponent() {
  return <Header>Meal Prep</Header>;
}
