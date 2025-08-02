import React from 'react';
import {
  FiFileText,
  FiLink,
  FiBookOpen,
  FiFile,
  FiBell,
  FiTag,
} from 'react-icons/fi';

const iconMap = {
  Poem: <FiBookOpen className="text-indigo-400 text-xl" />,
  URL: <FiLink className="text-green-400 text-xl" />,
  Note: <FiFileText className="text-yellow-400 text-xl" />,
  File: <FiFile className="text-pink-400 text-xl" />,
  Reminder: <FiBell className="text-red-400 text-xl" />,
};

const ItemCard = ({ type, content }) => {
  const displayIcon = iconMap[type] || <FiTag className="text-gray-400 text-xl" />;

  return (
    <div className="bg-[#1e1e1e] rounded-lg shadow-md p-5 hover:shadow-indigo-700/50 transition duration-300 flex flex-col h-full">
      <div className="flex items-center mb-2 gap-2 text-indigo-300 font-bold text-lg">
        {displayIcon}
        <span>{type}</span>
      </div>
      <p className="text-gray-300 whitespace-pre-wrap flex-grow overflow-auto">
        {content}
      </p>
    </div>
  );
};

export default ItemCard;
