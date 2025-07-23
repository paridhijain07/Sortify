import Navbar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 text-gray-800">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
