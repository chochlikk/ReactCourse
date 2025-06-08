import React from "react";
import "./UserInput.css";

const UserInput = ({ InvestmentValue, handleChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial investments</label>
          <input
            type="number"
            required
            onChange={handleChange}
            value={InvestmentValue}
          />
        </p>
        <p>
          <label>Annual investments</label>
          <input type="number" required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected return</label>
          <input type="number" required />
        </p>
        <p>
          <label>duration</label>
          <input type="number" required />
        </p>
      </div>
    </section>
  );
};
export default UserInput;
