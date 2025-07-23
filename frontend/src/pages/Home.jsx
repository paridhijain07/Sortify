import { useEffect, useState } from 'react';
import { fetchAllItems } from '../services/api'
import ItemCard from '../components/ItemCard';

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchAllItems()
      .then(res => {
        setItems(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-400">📁 Your Classified Files</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, idx) => (
          <ItemCard key={idx} type={item.type} content={item.content} />
        ))}
      </div>
    </div>
  );
};

export default Home;
