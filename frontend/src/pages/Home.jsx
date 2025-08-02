import { useEffect, useState } from 'react';
import { fetchAllItems } from '../services/api';
import ItemCard from '../components/ItemCard';
import SectionCard from '../components/SectionCard';
import {
  FiBookOpen,
  FiLink,
  FiFileText,
  FiFile,
  FiBell,
  FiTag,
} from 'react-icons/fi'; // icons

// Map each known type to an icon
const iconMap = {
  Poem: <FiBookOpen className="text-indigo-500 text-2xl" />,
  URL: <FiLink className="text-green-500 text-2xl" />,
  Note: <FiFileText className="text-yellow-500 text-2xl" />,
  File: <FiFile className="text-pink-500 text-2xl" />,
  Reminder: <FiBell className="text-red-400 text-2xl" />,
};

// Ensure proper casing and matching for all known types
const typeCasingMap = {
  poem: 'Poem',
  note: 'Note',
  url: 'URL',
  file: 'File',
  reminder: 'Reminder',
};

// Normalize type name
const normalizeType = (type) =>
  typeCasingMap[type?.toLowerCase()] || type?.charAt(0).toUpperCase() + type?.slice(1).toLowerCase();

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchAllItems()
      .then((res) => setItems(res.data))
      .catch((err) => console.error('Error fetching items:', err));
  }, []);

  // Normalize all items with a new `normalizedType` property
  const allNormalizedItems = items.map((item) => ({
    ...item,
    normalizedType: normalizeType(item.type),
  }));

  // Dynamically extract unique types
  const uniqueTypes = Array.from(
    new Set(allNormalizedItems.map((item) => item.normalizedType))
  );

  // Group items by normalized type
  const grouped = uniqueTypes.reduce((acc, type) => {
    acc[type] = allNormalizedItems.filter((item) => item.normalizedType === type);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-400">
        📁 Your Classified Files
      </h1>

      <div className="space-y-8">
        {uniqueTypes.map((type) => (
          <div key={type}>
            <h2 className="text-2xl font-semibold text-indigo-300 mb-4 flex items-center gap-2">
              {iconMap[type] || <FiTag className="text-gray-400 text-2xl" />} {type}
            </h2>

            {grouped[type]?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {grouped[type].map((item, idx) => (
    <ItemCard
      key={item._id || idx}
      type={item.type}
      content={item.content}
    />
  ))}
</div>
            ) : (
              <SectionCard title={type} icon={iconMap[type] || <FiTag />} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
