import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../redux/features/habitSlice";
import { useNavigate } from "react-router-dom";

const Habit = ({ habit }) => {
  let countDone = 0;
  for (let i = 0; i < habit.weekLog.length; i++) {
    if (habit.weekLog[i].isDone === true) {
      countDone++;
    }
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteHabit(habit.id));
    alert("Habit Deleted");
  };

  const setId = () => {
    localStorage.setItem("id", habit.id);
    navigate("/week-view");
  };

  return (
    <div className="habit">
      <div className="habit-left">
        <div>
          <h4 style={{ textTransform: "capitalize" }}>{habit.name}</h4>
        </div>
      </div>
      <div className="habit-right">
        <div className="log-btn" onClick={setId}>
          Weekly View
        </div>
        <i
          className="fa-solid fa-trash"
          onClick={handleDelete}
          // style={{ backgroundColor: "red" }}
        ></i>
      </div>
    </div>
  );
};

export default Habit;
