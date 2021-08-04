import BaseCard from ".";

const config = {
  title: "Atoms/BaseCard",
  component: BaseCard,
};

const Template = (args) => <BaseCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <p className="dark:text-gray-400">Children</p>,
};

export default config;
