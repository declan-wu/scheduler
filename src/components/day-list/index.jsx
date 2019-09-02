import React from "react";
import "./day-list.scss";
import DayListItem from "components/day-list-item/";

const DayList = ({ days, day, setDay }) => (
  <ul>
    {days.map(d => (
      <DayListItem
        key={d.id}
        name={d.name}
        spots={d.spots}
        selected={d.name === day}
        setDay={setDay}
      />
    ))}
  </ul>
);

export default DayList;
