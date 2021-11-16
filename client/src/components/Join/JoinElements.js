import styled from "styled-components";

export const JoinOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;
  align-items: center;
  background-color: #1a1a1d;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 100%;
  }
`;

export const JoinInnerContainer = styled.div`
  width: 20%;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 90%;
  }
`;

export const Heading = styled.h1`
  color: white;
  font-size: 2.5em;
  padding-bottom: 10px;
  border-bottom: 2px solid white;
`;

export const JoinInput = styled.input`
  border-radius: 0;
  padding: 15px 20px;
  width: 100%;
  margin-bottom: 20px;
`;

export const JoinButton = styled.button`
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  background: #2979ff;
  padding: 20px;
  border-radius: 5px;
  display: inline-block;
  border: none;
  width: 100%;

  &:focus {
    outline: 0;
  }

  &:hover {
    cursor: pointer;
    color: #2979ff;
    background: #FFF;
  }
`;
