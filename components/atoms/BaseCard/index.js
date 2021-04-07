const BaseCard = ({ children }) => {
  return (
    <article className="bg-gray-100 hover:bg-gray-200 rounded py-8 px-8 relative overflow-hidden">
      {children}
    </article>
  );
};

export default BaseCard;
