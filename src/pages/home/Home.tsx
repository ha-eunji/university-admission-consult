import { observer } from "mobx-react-lite";

import Header from "pages/home/header/Header";
import Tab from "components/tab/Tab";
import Banner from "components/banner/Banner";
import MenuList from "pages/home/menu/MenuList";
import UnivSection from "pages/home/univSection/UnivSection";

import * as S from "pages/home/Home.styles";

import { navigationStore } from "stores/Navigation.stores";

import { countryTab } from "components/tab/Tab.data";
import { menuData } from "pages/home/menu/Menu.data";
import { homeCurationData } from "static/data/Home.data";
import arrowIcon from "assets/icons/arrow-right.svg";

export default observer(function Home() {
  const { currentTab } = navigationStore;

  return (
    <S.Container>
      <Header />
      <Tab
        tabData={countryTab}
        active={(selectedTab: string) => {
          if (currentTab === selectedTab) return true;
          else return false;
        }}
        handleClick={(selecedTab: string) => {
          navigationStore.currentTab = selecedTab;
        }}
      />
      <Banner />

      <S.MyBox>
        <S.Text>
          내게 <strong>딱 맞는 학과/학교</strong>가 궁금하다면?
        </S.Text>
        <S.Btn>
          내 적성 찾아보기
          <img src={arrowIcon} alt="icon" />
        </S.Btn>
      </S.MyBox>

      <MenuList menuData={menuData} />
      <S.DivisionLine />

      <S.UnivSection>
        {homeCurationData.map((curation) => (
          <UnivSection {...curation} key={curation.curation} />
        ))}
      </S.UnivSection>
    </S.Container>
  );
});
