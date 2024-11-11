import * as S from "components/univCard/UnivCard.styles";

import heartIcon from "assets/icons/heart.svg";
import heartOnICon from "assets/icons/heartOn.svg";

export interface UnivCardProps {
  university: string;
  major: string;
  favorite: boolean;
}

export default function UnivCard(props: UnivCardProps) {
  const { university, major, favorite } = props;

  return (
    <S.Container>
      <S.Thumbnail>
        <S.FavoriteIcon src={favorite ? heartOnICon : heartIcon} alt="icon" />
      </S.Thumbnail>
      <S.UnivName>{university}</S.UnivName>
      <S.MajorName>{major}</S.MajorName>
    </S.Container>
  );
}
