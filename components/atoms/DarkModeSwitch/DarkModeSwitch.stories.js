import DarkModeSwitch from ".";

export default {
  title: "Atoms/DarkModeSwitch",
  component: DarkModeSwitch,
};

const Template = (args) => <DarkModeSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
  isDark: false,
  onClick: undefined,
};
