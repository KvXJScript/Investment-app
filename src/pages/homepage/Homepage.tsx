import { useState } from "react";

export const Homepage = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border border-gray-200 p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-2">title</h2>
      <p className="text-gray-700 mb-4">paragraph</p>
      {isExpanded ? (
        <p className="text-gray-600">content</p>
      ) : (
        <button
          onClick={toggleExpand}
          className="text-blue-500 hover:underline focus:outline-none"
        >
          Show Content
        </button>
      )}
    </div>
  );
};
