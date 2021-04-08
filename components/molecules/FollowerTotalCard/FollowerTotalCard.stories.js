import FollowerTotalCard from ".";
import Icon from "../../atoms/Icon";

export default {
  title: "Molecules/FollowerTotalCard",
  component: FollowerTotalCard,
};

const Template = (args) => <FollowerTotalCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  nickname: "@realnathanf",
  icon: <Icon svg="instagram" classes="w-6 mr-2" />,
  total: "11k",
  title: "Followers",
  quantity: "1099",
  topLine: "bg-gradient-to-r from-yellow-400 to-pink-400",
};
