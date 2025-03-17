import { NavbarBtn, NavbarIconMy } from "@/components/NavbarBtn";
import { Meta, StoryFn } from "@storybook/react";
import { MemoryRouter } from "react-router-dom"; // Storybook에서 라우팅 오류 방지

export default {
  title: "Components/NavbarBtn",
  component: NavbarBtn,
} as Meta<typeof NavbarBtn>;

const Template: StoryFn<typeof NavbarBtn> = (args) => (
  <MemoryRouter>
    <NavbarBtn {...args} />
  </MemoryRouter>
);

export const My = Template.bind({});
My.args = {
  path: "/My",
  icon: <NavbarIconMy />,
  text: "내도감",
};
