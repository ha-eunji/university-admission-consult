import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
`;

export const Bullet = styled.span`
  position: absolute;
  left: 10px;
  bottom: 15px;
  padding: 3px 10px;

  border-radius: 100px;
  background: rgba(0, 0, 0, 0.55);

  font-size: 10px;
  font-weight: 500;
  color: white;
`;
