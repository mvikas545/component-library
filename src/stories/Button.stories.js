import Button from "../components/Button";

export default {
  title: "UI/Button",
  component: Button,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["primary", "success", "dark", "danger"],
      description: "Choose type for button",
    },
    borderRadius: {
      control: { type: "range", min: 0, max: 30, step: 1 },
    },
  },
};

const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.storyName = "btn";
Primary.args = {
  value: "Click me",
  height: 40,
  fontWeight: "500",
  type: "primary",
  borderRadius: 6,
  outlineButton: false,
};

export const OutlineBtn = Template.bind({});

OutlineBtn.args = {
  ...Primary.args,
  outlineButton: true,
};
