import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  min-width: 340px;
  height: 100%;
  top: 0;
  left: 0;
`;

export const SubContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 63px);

  overflow: scroll;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
