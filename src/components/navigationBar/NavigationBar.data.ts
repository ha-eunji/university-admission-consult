// inactive icon
import homeIcon from "assets/navigation/home.svg";
import univIcon from "assets/navigation/university.svg";
import calendarIcon from "assets/navigation/calender.svg";
import profileIcon from "assets/navigation/profile.svg";

// active icon
import homeOnIcon from "assets/navigation/home_on.svg";
import univOnIcon from "assets/navigation/university_on.svg";
import calendarOnIcon from "assets/navigation/calender_on.svg";
import profileOnIcon from "assets/navigation/profile_on.svg";

export interface navDataType {
  icon: string;
  activeIcon: string;
  label: string;
  path: string;
}

export const navigationData: navDataType[] = [
  {
    icon: homeIcon,
    activeIcon: homeOnIcon,
    label: "홈",
    path: "/",
  },
  {
    icon: univIcon,
    activeIcon: univOnIcon,
    label: "대학",
    path: "/univ-info",
  },
  {
    icon: calendarIcon,
    activeIcon: calendarOnIcon,
    label: "일정",
    path: "/calendar",
  },
  {
    icon: profileIcon,
    activeIcon: profileOnIcon,
    label: "나",
    path: "/profile",
  },
];

export const navMapper: { [_key: string]: string } = {
  "/": "홈",
  "/univ-info": "대학",
  "/calendar": "일정",
  "/profile": "나",
};
