const BaseCard = ({ children }) => {
  return (
    <article className="bg-gray-100 hover:bg-gray-200 rounded py-8 px-8 relative overflow-hidden dark:bg-gray-800 dark:hover:bg-gray-700 select-none">
      {children}
    </article>
  );
};

export default BaseCard;
