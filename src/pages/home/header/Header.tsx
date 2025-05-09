import * as S from "pages/home/header/Header.styles";

import searchIcon from "assets/icons/search.svg";
import alamIcon from "assets/icons/bell.svg";

export default function Header() {
  return (
    <S.Container>
      <S.Logo>Bridge.</S.Logo>
      <S.Icon src={alamIcon} alt="icon" />
      <S.Icon src={searchIcon} alt="icon" />
    </S.Container>
  );
}
