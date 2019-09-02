import React from "react";
import "./day-list-item.style.scss";
import classNames from 'classnames';

const DayListItem = ({ name, spots, selected, setDay }) => {
  let dayListItemClass = classNames({
    'day-list__item': true,
    'day-list__item--selected': selected,
    'day-list__item--full': spots === 0
  })
  return (
    <li onClick={() => setDay(name)} className={dayListItemClass}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{`${spots ? spots : 'no'} spot${spots === 1 ? '' : 's'} remaining`}</h3>
    </li>
  );
}

export default DayListItem;