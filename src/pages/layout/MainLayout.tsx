import { Outlet } from "react-router-dom";

import NavigationBar from "components/navigationBar/NavigationBar";

import * as S from "pages/layout/MainLayout.styles";

export default function MainLayout() {
  return (
    <S.Container>
      <S.SubContainer>
        <Outlet />
      </S.SubContainer>
      <NavigationBar />
    </S.Container>
  );
}
