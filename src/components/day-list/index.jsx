import React from "react";
import "./day-list.scss";
import DayListItem from "components/day-list-item/";

const DayList = props => {
  const days = props.days.map(day => {
    return (
      <DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots}
        setDay={props.setDay}
        selected={day.name === props.day}
      />
    );
  });
  return <ul>{days}</ul>;
};

export default DayList;
