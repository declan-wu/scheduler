import React from "react";
import "./day-list-item.style.scss";
import classNames from "classnames";

const DayListItem = ({ selected, spots, setDay, name }) => {
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": selected,
    "day-list__item--full": spots === 0
  });

  const formatSpots = number => {
    if (number === 0) {
      return `no spots remaining`;
    } else if (number === 1) {
      return `${number} spot remaining`;
    } else {
      return `${number} spots remaining`;
    }
  };

  return (
    <li className={dayClass} onClick={() => setDay(name)} data-testid="day">
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots(spots)}</h3>
    </li>
  );
};

export default DayListItem;
