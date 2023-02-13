import React from "react";

import { useDispatch } from "react-redux";
import { addHabit } from "../redux/features/habitSlice";

const Navbar = ({ name }) => {
  const dispatch = useDispatch();
  const handleSave = () => {
    const habitName = document.getElementById("habitName").value;
    dispatch(addHabit(habitName));
    alert("Habit added");
    document.getElementById("habitName").value = "";
  };

  return (
    <>
      <div className="navbar">
        <h3>Habit Tracker</h3>
        <div className="right-nav">
          <h5>{name}</h5>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Habit Name
        </label>
        <input
          type="text"
          className="form-control"
          id="habitName"
          placeholder="Enter habit name"
          autoComplete="off"
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={handleSave}>
        Save
      </button>
    </>
  );
};

export default Navbar;
