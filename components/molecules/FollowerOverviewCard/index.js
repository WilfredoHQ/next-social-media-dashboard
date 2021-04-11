import PropTypes from "prop-types";
import BaseCard from "../../atoms/BaseCard";

const FollowerOverviewCard = ({
  isComingDown,
  title,
  icon,
  total,
  percentage,
}) => {
  return (
    <BaseCard>
      <div className="flex justify-between items-center mb-3">
        <h3 className="dark:text-gray-300">{title}</h3>
        <img src={`/${icon}.svg`} alt={icon} />
      </div>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-4xl dark:text-white">{total}</p>
        <div className="flex justify-center items-center">
          {isComingDown ? (
            <img src="/icon-down.svg" className="mr-2" alt="icon down" />
          ) : (
            <img src="/icon-up.svg" className="mr-2" alt="icon up" />
          )}
          <p
            className={[
              isComingDown ? "text-red-500" : "text-green-500",
              "font-semibold",
            ].join(" ")}
          >
            {percentage}%
          </p>
        </div>
      </div>
    </BaseCard>
  );
};

FollowerOverviewCard.propTypes = {
  isComingDown: PropTypes.bool,
  title: PropTypes.string,
  icon: PropTypes.string,
  total: PropTypes.string,
  percentage: PropTypes.string,
};

export default FollowerOverviewCard;
