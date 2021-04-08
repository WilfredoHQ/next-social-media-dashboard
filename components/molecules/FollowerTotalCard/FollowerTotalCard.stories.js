import FollowerTotalCard from ".";
import Icon from "../../atoms/Icon";

export default {
  title: "Molecules/FollowerTotalCard",
  component: FollowerTotalCard,
};

const Template = (args) => <FollowerTotalCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  nickname: "asfsa",
  icon: <Icon svg="facebook" classes="w-6 mr-2" />,
  total: "287",
  title: "followe",
  quantity: "287 Today",
};
