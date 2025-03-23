import React from "react";
import "./UserInput.css";
const UserInput = ({ InitialValue, handleChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial investments</label>
          <input value={InitialValue} onChange={handleChange} type="number" />
        </p>
        <p>
          <label>Annual investments</label>
          <input type="number" />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected return</label>
          <input type="number" />
        </p>
        <p>
          <label>duration</label>
          <input type="number" />
        </p>
      </div>
    </section>
  );
};
export default UserInput;
