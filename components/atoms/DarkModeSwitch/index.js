import PropTypes from "prop-types";

const DarkModeSwitch = ({ isDark, onClick }) => {
  return (
    <div
      className={[
        isDark ? "bg-gradient-to-r from-blue-400 to-green-400" : "bg-gray-300",
        "rounded-full w-12 h-6 relative",
      ].join(" ")}
      onClick={onClick}
    >
      <div
        className={[
          isDark ? "bg-gray-600 left-1" : "bg-gray-50 right-1",
          "h-4 w-4 rounded-full absolute top-1",
        ].join(" ")}
      ></div>
    </div>
  );
};

DarkModeSwitch.propTypes = {
  isDark: PropTypes.bool,
  onClick: PropTypes.func,
};

export default DarkModeSwitch;
