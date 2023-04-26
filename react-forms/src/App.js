import "./index.css";
import ControlledInput from "./forms/ControlledInput";
import MultipleInput from "./forms/MultipleInput";
import OtherInput from "./forms/OtherInput";
import UserChallenge from "./forms/UserChallenge";
import UncontrolledInputs from "./forms/UncontrolledInputs";
function App() {
  return (
    <div className="App">
      <h1>React Form</h1>
      <ControlledInput />
      <UserChallenge />
      <MultipleInput />
      <OtherInput />
      <UncontrolledInputs />
    </div>
  );
}

export default App;
