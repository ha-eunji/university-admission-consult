export interface menuDataType {
  icon?: string | undefined;
  label: string;
  path: string;
}

export const menuData: menuDataType[] = [
  {
    label: "전형 탐색",
    path: "/univ-info",
  },
  {
    label: "즐겨찾기",
    path: "/profile",
  },
  {
    label: "to-do",
    path: "/calendar",
  },
  {
    label: "원서 관리",
    path: "/",
  },
];
