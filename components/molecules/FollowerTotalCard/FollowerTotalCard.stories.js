import FollowerTotalCard from ".";

export default {
  title: "Molecules/FollowerTotalCard",
  component: FollowerTotalCard,
};

const Template = (args) => <FollowerTotalCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  nickname: "@realnathanf",
  icon: "icon-instagram",
  total: "11k",
  title: "Followers",
  quantity: "1099",
  topLine: "bg-gradient-to-r from-yellow-400 to-pink-400",
};
