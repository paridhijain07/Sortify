const Navbar = () => {
  return (
    <nav className="bg-[#111111] shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-400">Sortify</h1>
        <div className="space-x-4">
          <a href="#" className="text-gray-300 hover:text-indigo-400 font-medium">Home</a>
          <a href="#" className="text-gray-300 hover:text-indigo-400 font-medium">About</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

