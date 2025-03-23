import Header from "/src/components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
import { useState } from "react";
function App() {
  const [InitialInvestment, setInitialInvestment] = useState(0);
  const handleChange = (e) => {
    setInitialInvestment(e.target.value);
  };
  return (
    <>
      <Header></Header>
      <UserInput
        InitialInvestment={InitialInvestment}
        handleChange={handleChange}
      />
      <Result InitialInvestment={InitialInvestment}></Result>
    </>
  );
}

export default App;
