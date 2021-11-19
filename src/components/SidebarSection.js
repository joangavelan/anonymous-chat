import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
const { colors } = theme;

const Container = styled.div`
  padding: 0;

  & > h3 {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
    text-transform: uppercase;
    color: ${colors.dark[600]};
  }
`;

const List = styled.ul`
  list-style: none;

  & > li {
    margin: 1.2rem 0;

    & > a {
      font-size: 1.5rem;
      text-decoration: none;
      color: ${colors.white};
    }
  }
`;

const SidebarSection = ({ title, items }) => {
  return (
    <Container>
      <h3>{title}</h3>

      <List>
        {items.map((item) => (
          <li key={item.id}>
            <a href="#">{item.name}</a>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default SidebarSection;
