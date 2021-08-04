import { useEffect, useState } from "react";

import DarkModeSwitch from "components/atoms/DarkModeSwitch";
import FollowerOverviewCard from "components/molecules/FollowerOverviewCard";
import FollowerTotalCard from "components/molecules/FollowerTotalCard";
import Head from "next/head";
import { followers } from "data/followers";

export const Home = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(JSON.parse(localStorage.getItem("isDark")) || false);
  }, []);

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <div className={[isDark && "dark"].join(" ")}>
      <div className="dark:bg-gray-900">
        <Head>
          <title>
            Frontend Mentor | Social media dashboard with theme switcher
          </title>
          <link rel="icon" href="/favicon-32x32.png" />
        </Head>
        <main className="grid gap-10 p-5 container mx-auto">
          <div className="sm:flex justify-between items-center">
            <div className="dark:text-white mb-5 sm:mb-0">
              <h2 className="font-bold text-2xl">Social Media Dasboard</h2>
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
            {followers.totals.map((total, index) => (
              <FollowerTotalCard
                key={index}
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
            <h2 className="dark:text-white font-bold text-2xl">
              Overview-Today
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {followers.overviews.map((overview, index) => (
              <FollowerOverviewCard
                key={index}
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
