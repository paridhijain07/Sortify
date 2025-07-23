import React from 'react';
import { FiFileText, FiLink, FiBookOpen, FiFile } from 'react-icons/fi';

const iconMap = {
  Poem: <FiBookOpen className="text-indigo-500 text-2xl" />,
  URL: <FiLink className="text-green-500 text-2xl" />,
  Note: <FiFileText className="text-yellow-500 text-2xl" />,
  File: <FiFile className="text-pink-500 text-2xl" />,
};

const ItemCard = ({ type, content }) => {
  return (
    <div className="bg-[#1e1e1e] rounded-lg shadow-md p-5 hover:shadow-indigo-700/50 transition duration-300">
      <h2 className="text-lg font-bold text-indigo-400 mb-2">{type}</h2>
      <p className="text-gray-300 whitespace-pre-wrap">{content}</p>
    </div>
  );
};

export default ItemCard;

