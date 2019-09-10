import React from "react";
import "./interviewer-list.scss";
import InterviewerListItem from "components/interviewer-list-item";
import PropTypes from "prop-types";
const InterviewerList = ({ value, onChange, interviewers }) => {
  InterviewerList.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired
  };
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewers.map(interviewer => {
          return (
            <InterviewerListItem
              key={interviewer.id}
              name={interviewer.name}
              avatar={interviewer.avatar}
              setInterviewer={event => onChange(interviewer.id)}
              selected={interviewer.id === value}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default InterviewerList;
