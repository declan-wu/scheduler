const getAppointmentsForDay = (state, day) => {
  const theDay = state.days.filter(d => d.name === day)[0];
  const ret = [];
  if (!theDay) {
    return ret;
  }
  for (let key in state.appointments) {
    if (theDay.appointments.includes(Number(state.appointments[key].id))) {
      ret.push(state.appointments[key]);
    }
  }
  return ret;
};

export default getAppointmentsForDay;

export const getInterview = (state, interview) => {
  if (!interview) {
    return null;
  }
  const { student, interviewer } = interview;
  const { ...interviewInfo } = state.interviewers[interviewer];
  return { student, interviewer: { ...interviewInfo } };
};
