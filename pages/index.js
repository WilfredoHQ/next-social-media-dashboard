import { useState } from "react";
import Head from "next/head";
import DarkModeSwitch from "components/atoms/DarkModeSwitch";
import FollowerTotalCard from "components/molecules/FollowerTotalCard";
import FollowerOverviewCard from "components/molecules/FollowerOverviewCard";

export const Home = () => {
  const [isDark, setIsDark] = useState(false);

  const followers = {
    totals: [
      {
        nickname: "@nathanf",
        icon: "facebook",
        total: "1987",
        title: "Followers",
        quantity: "12",
        isComingDown: false,
        topLine: "bg-blue-500",
      },
      {
        nickname: "@nathanf",
        icon: "twitter",
        total: "1044",
        title: "Followers",
        quantity: "99",
        isComingDown: false,
        topLine: "bg-blue-400",
      },
      {
        nickname: "@realnathanf",
        icon: "instagram",
        total: "11k",
        title: "Followers",
        quantity: "1099",
        isComingDown: false,
        topLine: "bg-gradient-to-r from-yellow-400 to-pink-400",
      },
      {
        nickname: "Nathan F.",
        icon: "youtube",
        total: "8239",
        title: "Subscribers",
        quantity: "144",
        isComingDown: true,
        topLine: "bg-red-600",
      },
    ],
    overviews: [
      {
        title: "Page Views",
        icon: "facebook",
        total: "87",
        percentage: "3",
        isComingDown: false,
      },
      {
        title: "Likes",
        icon: "facebook",
        total: "52",
        percentage: "2",
        isComingDown: true,
      },
      {
        title: "Likes",
        icon: "instagram",
        total: "5462",
        percentage: "2257",
        isComingDown: false,
      },
      {
        title: "Profile Views",
        icon: "instagram",
        total: "52k",
        percentage: "1375%",
        isComingDown: false,
      },
      {
        title: "Retweets",
        icon: "twitter",
        total: "117",
        percentage: "303",
        isComingDown: false,
      },
      {
        title: "Likes",
        icon: "twitter",
        total: "507",
        percentage: "553",
        isComingDown: false,
      },
      {
        title: "Likes",
        icon: "youtube",
        total: "107",
        percentage: "19",
        isComingDown: true,
      },
      {
        title: "Total Views",
        icon: "youtube",
        total: "1407",
        percentage: "12",
        isComingDown: true,
      },
    ],
  };

  return (
    <div className={isDark && "dark"}>
      <div className=" dark:bg-gray-900">
        <Head>
          <title>Frontend Mentor | [Challenge Name Here]</title>
          <link rel="icon" href="/favicon-32x32.png" />
        </Head>
        <main className="grid gap-10 p-5 container mx-auto">
          <div className="sm:flex justify-between items-center">
            <div className="dark:text-white mb-5 sm:mb-0">
              <h3 className="font-bold text-2xl">Social Media Dasboard</h3>
              <p className="text-gray-400">Total Followers: 23-004</p>
            </div>
            <div className="flex justify-between pt-5 border-t border-gray-500 sm:border-t-0 sm:pt-0">
              <p className="dark:text-white mr-3">Dark Mode</p>
              <DarkModeSwitch
                isDark={isDark}
                onClick={() => setIsDark((prevState) => !prevState)}
              />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {followers.totals.map((total) => (
              <FollowerTotalCard
                nickname={total.nickname}
                icon={total.icon}
                total={total.total}
                title={total.title}
                quantity={total.quantity}
                isComingDown={total.isComingDown}
                topLine={total.topLine}
              />
            ))}
          </div>
          <div>
            <h3 className="dark:text-white font-bold text-2xl">
              Overview-Today
            </h3>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {followers.overviews.map((overview) => (
              <FollowerOverviewCard
                title={overview.title}
                icon={overview.icon}
                total={overview.total}
                percentage={overview.percentage}
                isComingDown={overview.isComingDown}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
