import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarLink = styled(Link)`
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &.hover {
    background: #fef5f7;
    color: #ff2957;
    cursor: pointer;
    font-weight: 500;
  }

  &.active {
    background-color: white;
    border-right: 4px solid #ff2957;
    color: #ff2957;
  }

  &.active-parent {
    background-color: white;
    border-right: 4px solid #ff2957;
    color: #ff2957;
  }
  
`;

export const SidebarLabel = styled.span`
  margin-left: 16px;
`;

export const DropdownLink = styled(Link)`
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 18px;

  &.hover {
    color: #ff2957;
    cursor: pointer;
  }

  &.active {
    color: #ff2957;
    cursor: pointer;
  }
`;
