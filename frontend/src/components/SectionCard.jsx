function SectionCard({ title, icon }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition duration-300 hover:scale-105 cursor-pointer">
      <div className="flex items-center space-x-4">
        <div className="text-4xl">{icon}</div>
        <div>
          <h2 className="text-xl font-semibold text-indigo-600">{title}</h2>
          <p className="text-gray-500 text-sm">No items yet</p>
        </div>
      </div>
    </div>
  );
}

export default SectionCard;
