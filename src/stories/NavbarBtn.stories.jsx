import {
  NavbarBtn,
  NavbarIconMy,
  NavbarIconOverall,
  NavbarLoginBtn,
  NavbarCoin,
  NavbarLogoutBtn,
} from "@/components/NavbarBtn";

import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/Navbar",
  component: NavbarBtn,
};

const Template = (args) => (
  <MemoryRouter>
    <NavbarBtn {...args} />
  </MemoryRouter>
);

export const Overall = Template.bind({});
Overall.args = {
  path: "/All",
  icon: <NavbarIconOverall />,
  text: "전체도감",
};

export const My = Template.bind({});
My.args = {
  path: "/My",
  icon: <NavbarIconMy />,
  text: "내도감",
};

export const Login = () => (
  <MemoryRouter>
    <NavbarLoginBtn />
  </MemoryRouter>
);

export const Logout = () => (
  <MemoryRouter>
    <NavbarLogoutBtn />
  </MemoryRouter>
);

export const Coin = (args) => (
  <MemoryRouter>
    <NavbarCoin {...args} />
  </MemoryRouter>
);

Coin.args = {
  hover: false,
  coin: 0,
  onMouseEnter: () => console.log("마우스 오버"),
  onMouseLeave: () => console.log("마우스 아웃"),
};
