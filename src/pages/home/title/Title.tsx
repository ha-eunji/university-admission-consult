import * as S from "pages/home/title/Title.styles";

import arrowIcon from "assets/icons/arrow-right2.svg";

export default function Title(props: {
  title: string;
  handleMoreClick: () => void;
}) {
  const { title, handleMoreClick } = props;

  return (
    <S.Container>
      <S.Text>{title}</S.Text>
      <S.MoreBtn onClick={handleMoreClick}>
        더보기
        <img src={arrowIcon} alt="icon" />
      </S.MoreBtn>
    </S.Container>
  );
}
