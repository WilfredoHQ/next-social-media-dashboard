import PropTypes from "prop-types";
import BaseCard from "../../atoms/BaseCard";
import Icon from "../../atoms/Icon";

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
        {icon}
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
      <p className="flex justify-center items-center ">
        {isComingDown ? (
          <Icon svg="down" classes="w-2 mr-1" />
        ) : (
          <Icon svg="up" classes="w-2 mr-1" />
        )}
        <p
          class={[
            isComingDown ? "text-red-500" : "text-green-500",
            "text-sm font-bold",
          ].join(" ")}
        >
          {quantity} Today
        </p>
      </p>
    </BaseCard>
  );
};

FollowerTotalCard.propTypes = {
  isComingDown: PropTypes.bool,
  nickname: PropTypes.string,
  icon: PropTypes.node,
  total: PropTypes.string,
  title: PropTypes.string,
  quantity: PropTypes.string,
  topLine: PropTypes.string,
};

export default FollowerTotalCard;
