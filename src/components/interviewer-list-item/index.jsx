import React from "react";

import "./interviewer-list-item.scss";

const InterviewerListItem = ({
  id,
  name,
  avatar,
  selected,
  setInterviewer
}) => {
  return (
    <li
      key={id}
      className={`${
        selected ? "interviewers__item--selected" : ""
      } interviewers__item`}
      onClick={setInterviewer}
    >
      <img className="interviewers__item-image" src={avatar} alt={name} />
      {selected && name}
    </li>
  );
};

export default InterviewerListItem;
