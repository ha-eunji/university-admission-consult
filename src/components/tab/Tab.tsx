import * as S from "components/tab/Tab.styles";

import { tabProps } from "components/tab/Tab.data";

export default function Tab(props: tabProps) {
  const { tabData, handleClick, active } = props;

  return (
    <S.Container>
      {tabData.map((item) => (
        <S.TabItem
          key={item}
          $active={active(item)}
          onClick={() => handleClick(item)}
        >
          {item}
        </S.TabItem>
      ))}
    </S.Container>
  );
}
