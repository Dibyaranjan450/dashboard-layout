import {
  home,
  homeActive,
  reports,
  reportsActive,
  users,
  usersActive,
} from "../assets/svgs";

const adminMenuItems = [
  {
    title: "Dashboard",
    img: home,
    slectedImg: homeActive,
    isActive: true,
    navigateTo: "",
  },
  {
    title: "Reports",
    img: reports,
    slectedImg: reportsActive,
    isActive: false,
    navigateTo: "reports",
  },
  {
    title: "Users",
    img: users,
    slectedImg: usersActive,
    isActive: false,
    navigateTo: "users",
  },
];

const userMenuItems = [
  {
    title: "Dashboard",
    img: home,
    slectedImg: homeActive,
    isActive: true,
    navigateTo: "",
  },
  {
    title: "Reports",
    img: reports,
    slectedImg: reportsActive,
    isActive: false,
    navigateTo: "reports",
  },
];

export const getSidebarItems = (role) => {
  return role === "user" ? userMenuItems : adminMenuItems;
};
