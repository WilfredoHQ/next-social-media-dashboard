import { useState } from "react";
import Head from "next/head";
import Icon from "components/atoms/Icon";
import DarkModeSwitch from "components/atoms/DarkModeSwitch";
import FollowerTotalCard from "components/molecules/FollowerTotalCard";

export const Home = () => {
  const [isDark, setIsDark] = useState(false);

  const followers = {
    total: [
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
    overview: [
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
      <div className=" dark:bg-gray-900 min-h-screen">
        <Head>
          <title>Frontend Mentor | [Challenge Name Here]</title>
          <link rel="icon" href="/favicon-32x32.png" />
        </Head>
        <main>
          <DarkModeSwitch
            isDark={isDark}
            onClick={() => setIsDark((prevState) => !prevState)}
          />
          <FollowerTotalCard
            nickname="@nathanf"
            icon={<Icon svg="facebook" classes="w-6 mr-2" />}
            total="1987"
            title="Followers"
            quantity="12"
            isComingDown={false}
            topLine="bg-gradient-to-r from-yellow-400 to-pink-400"
          />
        </main>
      </div>
    </div>
  );
};

export default Home;
