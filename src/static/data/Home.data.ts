import { UnivSectionProps } from "pages/home/univSection/UnivSection";

export const homeCurationData: UnivSectionProps[] = [
  {
    curation: "내신 낮아도 괜찮아!",
    subKeyword: ["학생부 종합", "학생부 교과", "SW", "특기자"],
    univList: [
      { university: "경북대학교", major: "전자공학부", favorite: true },
      { university: "가천대학교", major: "경영학부", favorite: false },
      { university: "동국대학교", major: "융합보안학과", favorite: false },
      { university: "덕성여자대학교", major: "국어국문학과", favorite: false },
    ],
  },
  {
    curation: "수포자 드루와!",
    univList: [
      { university: "대진대학교", major: "전자공학부", favorite: false },
      { university: "서울여자대학교", major: "경영학부", favorite: false },
      { university: "신한대학교", major: "융합보안학과", favorite: false },
      { university: "을지대학교", major: "국어국문학과", favorite: false },
    ],
  },
];
