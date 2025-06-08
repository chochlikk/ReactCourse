import React from "react";
import "./Result.css";

const Result = ({ InvestmentValue }) => {
  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        <tr className="center">
          <td>1</td>
          <td>{InvestmentValue}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Result;
