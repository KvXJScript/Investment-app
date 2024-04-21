import { useState } from "react";

export const About = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border border-gray-200 p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-2">test</h2>
      <p className="text-gray-700 mb-4">test</p>
      {isExpanded ? (
        <p className="text-gray-600">test</p>
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
