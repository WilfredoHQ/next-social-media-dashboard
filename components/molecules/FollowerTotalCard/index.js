import BaseCard from "../../atoms/BaseCard";
import Image from "next/image";
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
        <Image src={`/${icon}.svg`} height={20} width={20} alt={icon} />
        <figcaption className="ml-2 font-semibold text-sm dark:text-gray-400">
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
          <Image src="/icon-down.svg" height={4} width={8} alt="icon down" />
        ) : (
          <Image src="/icon-up.svg" height={4} width={8} alt="icon up" />
        )}
        <p
          className={[
            isComingDown ? "text-red-500" : "text-green-500",
            "text-sm font-bold ml-1",
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
