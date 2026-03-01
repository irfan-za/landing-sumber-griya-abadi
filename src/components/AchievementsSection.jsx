const AchievementsSection = ({achievementsList}) => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="bg-primary dark:bg-blue-700 sm:border-blue-600 dark:sm:border-[#33353F] sm:border rounded-md sm:py-8 sm:px-16 grid grid-cols-4 sm:grid-cols-4">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center sm:mx-4 my-4 sm:my-0 place-items-center"
            >
              <h2 className="text-white text-lg sm:text-4xl font-bold">
                {achievement.prefix}{achievement.value}{achievement.postfix}
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
