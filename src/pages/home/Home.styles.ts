import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const MyBox = styled.div`
  padding: 12px;
  margin: 10px 15px 0 15px;

  border-radius: 8px;
  background: #fce6e4;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 400px) {
    padding: 10px;
  }
`;

export const Text = styled.span`
  color: #b21700;
  font-size: 14px;
  font-weight: 400;
  word-break: keep-all;

  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

export const Btn = styled.span`
  border-radius: 8px;
  border: 1px solid #ffc5b4;
  background: #fff;

  display: flex;
  padding: 8px;
  align-items: center;
  gap: 2px;

  color: #d92e08;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  word-break: keep-all;

  @media screen and (max-width: 400px) {
    font-size: 11px;
  }
`;

export const DivisionLine = styled.div`
  height: 9px;

  background: #fafafa;
`;

export const UnivSection = styled.div`
  padding-top: 15px;
`;
