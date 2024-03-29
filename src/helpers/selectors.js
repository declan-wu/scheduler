export const getAppointmentsForDay = (state, day) => {
  const appointments = [];

  const filteredDay = state.days.filter(elem => elem.name === day);

  if (filteredDay.length === 0) {
    return appointments;
  } else {
    filteredDay[0].appointments.map(id =>
      appointments.push(state.appointments[id])
    );
  }

  return appointments;
};

export const getInterview = (state, interview) => {
  if (!interview) {
    return null;
  }

  const interviewerId = interview.interviewer;
  const { student } = interview;

  const interviewer = state.interviewers[interviewerId];

  const result = {
    student,
    interviewer
  };

  return result;
};

export const getInterviewersForDay = (state, day) => {
  const interviewers = [];

  const filteredDay = state.days.filter(elem => elem.name === day);

  if (filteredDay.length === 0) {
    return interviewers;
  } else {
    filteredDay[0].interviewers.map(id =>
      interviewers.push(state.interviewers[id])
    );
  }

  return interviewers;
};
