import BaseCard from ".";

export default {
  title: "Atoms/BaseCard",
  component: BaseCard,
};

const Template = (args) => <BaseCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Children",
};
