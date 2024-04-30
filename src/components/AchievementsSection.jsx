"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Followers",
    value: "3000",
    postfix: "+",
  },
  {
    metric: "Pelanggan",
    value: "1000",
    postfix: "+",
  },
  {
    metric: "Tahun",
    value: "15",
    postfix: "+",
  },
  {
    metric: "Proyek",
    value: "96",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="bg-primary-500 dark:bg-primary-700 sm:border-primary-600 dark:sm:border-[#33353F] sm:border rounded-md sm:py-8 sm:px-16 grid grid-cols-4 sm:grid-cols-4">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center sm:mx-4 my-4 sm:my-0 place-items-center"
            >
              <h2 className="text-white text-lg sm:text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-slate-100 dark:text-slate-200 text-xs sm:text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
