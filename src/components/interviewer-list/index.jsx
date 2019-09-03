import React from "react";
import "./interviewer-list.scss";
import InterviewerListItem from "components/interviewer-list-item";

const InterviewerList = ({ interviewers, interviewer, setInterviewer }) => {
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewers.map(({ id, ...props }) => (
          <InterviewerListItem
            setInterviewer={() => setInterviewer(id)}
            selected={id === interviewer}
            id={id}
            {...props}
          />
        ))}
      </ul>
    </section>
  );
};

export default InterviewerList;
