import BaseCard from "../../atoms/BaseCard";
import PropTypes from "prop-types";

const FollowerTotalCard = ({
  isComingDown,
  nickname,
  icon,
  total,
  title,
  quantity,
  topLine,
}) => {
  return (
    <BaseCard>
      <div
        className={[topLine, "h-1 absolute w-full left-0 top-0"].join(" ")}
      ></div>
      <figure className="flex justify-center items-center">
        <img src={`/${icon}.svg`} alt={icon} className="mr-2" />
        <figcaption className="font-semibold text-sm dark:text-gray-400">
          {nickname}
        </figcaption>
      </figure>
      <div className="py-4">
        <h3 className="text-center text-7xl font-semibold dark:text-white">
          {total}
        </h3>
        <p className="font-mono text-center text-gray-400 tracking-widest uppercase">
          {title}
        </p>
      </div>
      <div className="flex justify-center items-center ">
        {isComingDown ? (
          <img src="/icon-down.svg" alt="icon down" className="mr-1" />
        ) : (
          <img src="/icon-up.svg" alt="icon up" className="mr-1" />
        )}
        <p
          className={[
            isComingDown ? "text-red-500" : "text-green-500",
            "text-sm font-bold",
          ].join(" ")}
        >
          {quantity} Today
        </p>
      </div>
    </BaseCard>
  );
};

FollowerTotalCard.propTypes = {
  isComingDown: PropTypes.bool,
  nickname: PropTypes.string,
  icon: PropTypes.string,
  total: PropTypes.string,
  title: PropTypes.string,
  quantity: PropTypes.string,
  topLine: PropTypes.string,
};

export default FollowerTotalCard;
