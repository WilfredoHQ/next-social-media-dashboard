import PropTypes from "prop-types";
import BaseCard from "../../atoms/BaseCard";
import FacebookIcon from "../../../public/icon-facebook.svg";
import UpIcon from "../../../public/icon-up.svg";
import DownIcon from "../../../public/icon-down.svg";

const FollowerTotalCard = ({ isComingDown }) => {
  return (
    <BaseCard>
      <div
        className={["h-1 absolute w-full left-0 top-0", "bg-blue-400"].join(
          " "
        )}
      ></div>
      <figure className="flex justify-center items-center">
        <img className="mr-2" src={FacebookIcon} alt="facebook icon" />
        <figcaption className="font-semibold text-sm dark:text-gray-400">
          @nathanf
        </figcaption>
      </figure>
      <div className="py-4">
        <h3 className="text-center text-7xl font-semibold dark:text-white">
          1987
        </h3>
        <p className="font-mono text-center text-gray-400 tracking-widest ">
          FOLLOWERS
        </p>
      </div>
      <p className="flex justify-center items-center">
        <img src={isComingDown ? DownIcon : UpIcon} alt="icon up" />
        <p
          class={[
            isComingDown ? "text-red-500" : "text-green-500",
            "text-sm font-bold",
          ].join(" ")}
        >
          12 Today
        </p>
      </p>
    </BaseCard>
  );
};

FollowerTotalCard.propTypes = {
  isComingDown: PropTypes.bool,
};

FollowerTotalCard.defaultProps = {
  isComingDown: false,
};

export default FollowerTotalCard;
