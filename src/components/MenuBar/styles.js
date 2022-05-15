import styled from "styled-components";
import { Link } from "gatsby";

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: #192734;
  border-left: 1px solid #38444d;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;
  transition: background 0.5s;
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuBarLink = styled(Link)`
  display: block;
  &.active {
    span {
      color: #1fa1f2;
    }
  }
`;

export const MenuBarItem = styled.span`
  color: #8899a6;
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;
  &.light {
    color: #d4d400;
    &:hover {
      color: #e2e240;
    }
  }
  &:hover {
    color: #1fa1f2;
  }
`;
