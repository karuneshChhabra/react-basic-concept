import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 200px;
  padding: 10px;
  margin: 1rem;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Image = styled.img`
  width: 160px;
  max-height: 100px;
`;
export const Body = styled.div`
  min-height: 1px;
`;

export const Title = styled.h1`
  padding: 10px;
`;

export const Text = styled.p`
  margin: 10px;
  margin-top: 0px;
`;

export const Button = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  transition-duration: 0.4s;
  font-size: 16px;
  &:hover {
    background-color: blue; /* Green */
    color: white;
  }
`;
