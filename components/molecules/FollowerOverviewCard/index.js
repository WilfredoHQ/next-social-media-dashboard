import PropTypes from "prop-types";
import BaseCard from "../../atoms/BaseCard";
import FacebookIcon from "../../../public/icon-facebook.svg";
import UpIcon from "../../../public/icon-up.svg";
import DownIcon from "../../../public/icon-down.svg";

const FollowerOverviewCard = ({ isComingDown }) => {
  return (
    <BaseCard>
      <figure className="flex justify-between items-center mb-3">
        <figcaption class="dark:text-gray-300">Likes</figcaption>
        <img src={FacebookIcon} alt="facebook icon" />
      </figure>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-4xl dark:text-white">87</p>
        <p className="flex justify-center items-center">
          <img src={isComingDown ? DownIcon : UpIcon} alt="icon up" />
          <p
            className={[
              isComingDown ? "text-red-500" : "text-green-500",
              "font-semibold",
            ].join(" ")}
          >
            3%
          </p>
        </p>
      </div>
    </BaseCard>
  );
};

FollowerOverviewCard.propTypes = {
  isComingDown: PropTypes.bool,
};

FollowerOverviewCard.defaultprops = {
  isComingDown: false,
};

export default FollowerOverviewCard;
