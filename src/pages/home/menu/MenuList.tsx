import { useNavigate } from "react-router-dom";

import * as S from "pages/home/menu/Menu.styles";

import { menuDataType } from "pages/home/menu/Menu.data";

export default function MenuList(props: { menuData: menuDataType[] }) {
  const { menuData } = props;

  const navigate = useNavigate();

  return (
    <S.Container>
      {menuData.map((item) => (
        <S.MenuBox key={item.label} onClick={() => navigate(item.path)}>
          <S.Icon $imgSrc={item.icon} />
          <S.Label>{item.label}</S.Label>
        </S.MenuBox>
      ))}
    </S.Container>
  );
}
