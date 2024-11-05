import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import * as S from "components/navigationBar/NavigationBar.styles";

import { navigationStore } from "stores/Navigation.stores";

import { navDataType } from "components/navigationBar/NavigationBar.data";

export default observer(function NavgationItem(props: navDataType) {
  const { icon, activeIcon, label, path } = props;
  const { currentNav } = navigationStore;

  const navigate = useNavigate();

  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (currentNav === label) setActive(true);
    else setActive(false);
  }, [currentNav, label]);

  const handleNavClick = () => {
    navigationStore.currentNav = label;
    navigate(path);
  };

  return (
    <S.Item onClick={handleNavClick}>
      <S.Icon src={active ? activeIcon : icon} alt="icon" />
      <S.Label $active={active.toString()}>{label}</S.Label>
    </S.Item>
  );
});
