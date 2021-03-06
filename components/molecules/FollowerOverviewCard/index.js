import BaseCard from "../../atoms/BaseCard";
import Image from "next/image";
import PropTypes from "prop-types";

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
        <Image src={`/${icon}.svg`} height={20} width={20} alt={icon} />
      </div>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-4xl dark:text-white">{total}</p>
        <div className="flex justify-center items-center">
          {isComingDown ? (
            <Image src="/icon-down.svg" height={4} width={8} alt="icon down" />
          ) : (
            <Image src="/icon-up.svg" height={4} width={8} alt="icon up" />
          )}
          <p
            className={[
              isComingDown ? "text-red-500" : "text-green-500",
              "font-semibold ml-1",
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
