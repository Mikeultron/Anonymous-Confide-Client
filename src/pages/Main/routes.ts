import Home from "./Home";
import Notifications from "./Notifications";

interface IRoutes {
  path: string;
  exact: boolean;
  component: React.ComponentType;
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
];
