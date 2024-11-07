import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 20px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const Icon = styled.div<{ $imgSrc?: string | undefined }>`
  width: 51px;
  height: 51px;

  border-radius: 15px;

  ${(props) =>
    props.$imgSrc
      ? css`
          background-image: url(${props.$imgSrc});
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        `
      : css`
          background: #e9e9e9;
        `}
`;

export const Label = styled.div`
  color: #5c5c5c;
  font-size: 12px;
  font-weight: 500;
`;
