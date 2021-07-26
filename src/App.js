import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import News from "./components/news";
import Beds from "./components/beds";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <News />
      <Beds />
    </div>
  );
}

export default App;
