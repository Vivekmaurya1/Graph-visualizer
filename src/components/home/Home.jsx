import React from "react";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  const data = {
    "Sorting Visualizer": [
      ["/sorting/mergesort", "Mergesort"],
      ["/sorting/selectionsort", "Selectionsort"],
      ["/sorting/bubblesort", "Bubblesort"],
      ["/sorting/insertionsort", "Insertionsort"],
      ["/sorting/quicksort", "Quicksort"],
    ]

  };
  return (
    <div className={classes.home}>
      <div className={classes.heading_top}>DSA Visualizer</div>
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className={classes.each_object}>
          <div className={classes.heading}>{key}</div>
          <div className={classes.navbar}>
            <div className={classes.nav}>
              {value.map((navitem, index) => (
                <Link to={navitem[0]} className={classes.navItem} key={index}>
                  {navitem[1]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
