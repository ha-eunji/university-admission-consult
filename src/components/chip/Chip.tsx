import * as S from "components/chip/Chip.styles";

export default function Chip(props: { label: string }) {
  const { label } = props;

  return <S.Container>{label}</S.Container>;
}
