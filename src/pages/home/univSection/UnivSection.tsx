import Title from "pages/home/title/Title";
import Chip from "components/chip/Chip";
import UnivCard from "components/univCard/UnivCard";

import * as S from "pages/home/univSection/UnivSection.styles";

import { UnivCardProps } from "components/univCard/UnivCard";

export interface UnivSectionProps {
  curation: string;
  subKeyword?: string[] | undefined;
  univList: UnivCardProps[];
}

export default function UnivSection(props: UnivSectionProps) {
  const { curation, subKeyword, univList } = props;

  return (
    <S.Container>
      <Title title={curation} handleMoreClick={() => {}} />

      {subKeyword && (
        <S.ChipBox>
          {subKeyword.map((chip) => (
            <Chip label={chip} key={chip} />
          ))}
        </S.ChipBox>
      )}
      <S.UnivBox>
        {univList.map((item) => (
          <UnivCard {...item} key={item.university} />
        ))}
      </S.UnivBox>
    </S.Container>
  );
}
