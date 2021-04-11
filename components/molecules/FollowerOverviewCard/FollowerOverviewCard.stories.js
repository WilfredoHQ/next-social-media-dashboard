import FollowerOverviewCard from ".";

export default {
  title: "Molecules/FollowerOverviewCard",
  component: FollowerOverviewCard,
};

const Template = (args) => <FollowerOverviewCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Likes",
  icon: "icon-instagram",
  total: "5462",
  percentage: "2257",
};
