import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const TabItem = styled.div<{ $active: boolean }>`
  padding: 4px 12px;
  border-bottom: ${(props) => props.$active && "2px solid #000"};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  font-weight: 600;
`;
