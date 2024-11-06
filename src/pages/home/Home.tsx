import { observer } from "mobx-react-lite";

import Header from "pages/home/Header";
import Tab from "components/tab/Tab";
import Banner from "components/banner/Banner";

import * as S from "pages/home/Home.styles";

import { navigationStore } from "stores/Navigation.stores";

import { countryTab } from "components/tab/Tab.data";

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
    </S.Container>
  );
});
