import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 63px;
  bottom: 0;

  display: flex;
  justify-content: space-around;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 7px;
`;

export const Icon = styled.img`
  width: 16px;
`;

export const Label = styled.div<{ $active: string }>`
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  color: ${(props) => (props.$active === "true" ? "#000000" : "#9F9F9F")};
`;
