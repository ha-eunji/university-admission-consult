export interface tabProps {
  tabData: string[];
  handleClick: (selctedTab: string) => void;
  active: (selctedTab: string) => boolean;
}

export const countryTab = ["국내", "미국", "영국", "캐나다", "호주"];
