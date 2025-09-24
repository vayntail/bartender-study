import React from "react";
import { drinks } from "../data/drinks";
import DrinkCard from "./DrinkCard";

const DrinksGrid = () => {
  const sortedDrinks = drinks
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {sortedDrinks.map((drink) => (
        <DrinkCard drink={drink} key={drink.name} />
      ))}
    </div>
  );
};

export default DrinksGrid;
