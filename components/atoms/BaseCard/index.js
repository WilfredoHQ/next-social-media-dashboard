const BaseCard = ({ children }) => {
  return (
    <article className="bg-gray-200 hover:bg-gray-300 rounded py-8 px-8 relative overflow-hidden dark:bg-gray-800 dark:hover:bg-gray-700">
      {children}
    </article>
  );
};

export default BaseCard;
