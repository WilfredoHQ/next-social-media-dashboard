import FollowerOverviewCard from ".";
import Icon from "../../atoms/Icon";

export default {
  title: "Molecules/FollowerOverviewCard",
  component: FollowerOverviewCard,
};

const Template = (args) => <FollowerOverviewCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Ppage",
  icon: <Icon svg="facebook" classes="w-6 mr-2" />,
  total: "12",
  percentage: "12k",
};
