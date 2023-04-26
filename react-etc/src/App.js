import "./index.css";
import ShortCircuit from "./reactETC/ShortCircuit";
import ShortCircuitExamples from "./reactETC/ShortCircuitExamples";
import ToggleChallenge from "./reactETC/ToggleChallenge";
import UserChallenge from "./reactETC/UserChallenge";
function App() {
  return (
    <div className="App">
      <h1>React etc</h1>
      <ShortCircuit />
      <ShortCircuitExamples />
      <ToggleChallenge />
      <UserChallenge />
    </div>
  );
}

export default App;
