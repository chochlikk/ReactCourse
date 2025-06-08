import Header from "/src/components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
import { useState } from "react";
function App() {
  const [InvestmentValue, setInvestmentValue] = useState(0);

  function handleChange(e) {
    setInvestmentValue(e.target.value);
  }
  return (
    <>
      <Header></Header>
      <UserInput
        InvestmentValue={InvestmentValue}
        handleChange={handleChange}
      />
      <Result InvestmentValue={InvestmentValue}></Result>
    </>
  );
}

export default App;
