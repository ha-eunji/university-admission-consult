import NavgationItem from "components/navigationBar/NavgationItem";

import * as S from "components/navigationBar/NavigationBar.styles";

import { navigationData } from "components/navigationBar/NavigationBar.data";

export default function NavigationBar() {
  return (
    <S.Container>
      {navigationData.map((item) => (
        <NavgationItem {...item} key={item.label} />
      ))}
    </S.Container>
  );
}
