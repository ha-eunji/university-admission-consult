import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 15px 0;
`;

export const ChipBox = styled.div`
  margin-top: 10px;
  padding: 0 16px;

  display: flex;
  justify-content: start;
  align-items: center;
  gap: 6px;
`;

export const UnivBox = styled.div`
  position: relative;
  max-width: 100%;
  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;

  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
