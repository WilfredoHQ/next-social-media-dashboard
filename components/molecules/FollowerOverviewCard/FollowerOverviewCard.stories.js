import FollowerOverviewCard from ".";
import Icon from "../../atoms/Icon";

export default {
  title: "Molecules/FollowerOverviewCard",
  component: FollowerOverviewCard,
};

const Template = (args) => <FollowerOverviewCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Likes",
  icon: <Icon svg="instagram" classes="w-6 mr-2" />,
  total: "5462",
  percentage: "2257",
};
