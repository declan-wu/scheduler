import React from "react";
import "./appointment.scss";

import Header from "./header";
import Empty from "./empty";
import Show from "./show";
// import Confirm from "./confirm";
// import Status from "./status";
// import Error from "./error";

const Appointment = ({ id, time, interview }) => {
  return (
    <article key={id} className="appointment">
      <Header time={time} />
      {interview ? (
        <Show student={interview.student} interviewer={interview.interviewer} />
      ) : (
        <Empty />
      )}
    </article>
  );
};

export default Appointment;
