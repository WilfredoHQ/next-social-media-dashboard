import PropTypes from "prop-types";
import BaseCard from "../../atoms/BaseCard";
import Icon from "../../atoms/Icon";

const FollowerOverviewCard = ({
  isComingDown,
  title,
  icon,
  total,
  percentage,
}) => {
  return (
    <BaseCard>
      <figure className="flex justify-between items-center mb-3">
        <figcaption className="dark:text-gray-300">{title} </figcaption>
        <Icon svg={icon} classes="w-6 mr-2" />
      </figure>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-4xl dark:text-white">{total}</p>
        <p className="flex justify-center items-center">
          {isComingDown ? (
            <Icon svg="down" classes="w-2 mr-1" />
          ) : (
            <Icon svg="up" classes="w-2 mr-1" />
          )}
          <p
            className={[
              isComingDown ? "text-red-500" : "text-green-500",
              "font-semibold",
            ].join(" ")}
          >
            {percentage}%
          </p>
        </p>
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
