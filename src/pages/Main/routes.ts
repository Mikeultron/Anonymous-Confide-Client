import { ComponentType } from "react";
import Home from "./Home";
import Notifications from "./Notifications";
import Profile from "./Profile";

interface IRoutes {
  path: string;
  exact: boolean;
  component: ComponentType;
}

export const routes: IRoutes[] = [
  {
    path: "/home",
    exact: true,
    component: Home,
  },
  {
    path: "/home/notifications",
    exact: true,
    component: Notifications,
  },
  {
    path: "/home/profile",
    exact: true,
    component: Profile,
  },
];
