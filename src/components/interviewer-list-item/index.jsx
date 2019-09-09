import React from "react";
import classNames from "classnames";
import "./interviewer-list-item.scss";

const InterviewerListItem = ({ setInterviewer, selected, name, avatar }) => {
  const interviewClass = classNames("interviewers__item", {
    "interviewers__item--selected": selected
  });

  return (
    <li className={interviewClass} onClick={setInterviewer}>
      <img className="interviewers__item-image" src={avatar} alt={name} />
      {selected && name}
    </li>
  );
};

export default InterviewerListItem;
