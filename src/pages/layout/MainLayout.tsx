import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import NavigationBar from "components/navigationBar/NavigationBar";

import * as S from "pages/layout/MainLayout.styles";

import { navigationStore } from "stores/Navigation.stores";

import { navMapper } from "components/navigationBar/NavigationBar.data";

export default function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    const currentNav: string = navMapper[location.pathname] as string;
    navigationStore.currentNav = currentNav;
  }, [location.pathname]);

  return (
    <S.Container>
      <S.SubContainer>
        <Outlet />
      </S.SubContainer>
      <NavigationBar />
    </S.Container>
  );
}
