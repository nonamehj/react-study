import "./index.css";
import Navbar from "./prop-drilling/Navbar";
import Navbar2 from "./useContext/Navbar";
import Navbar3 from "./globalContext/Navbar";
function App() {
  return (
    <div className="App">
      <h1>Use Context</h1>
      <Navbar />
      <Navbar2 />
      <Navbar3 />
    </div>
  );
}

export default App;
