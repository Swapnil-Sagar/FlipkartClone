import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Cards />
    </div>
  );
};

export default App;
