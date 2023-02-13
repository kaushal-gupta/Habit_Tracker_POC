import React from "react";
import Habits from "./Habits";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar name="Daily Habits page" />
      <Habits />
    </>
  );
};

export default Home;
