import React, { useState, useEffect } from "react";
import axios from "axios";
import "./app.scss";
import DayList from "components/day-list/";
import Appointment from "components/appointment/";
import getAppointmentsForDay, { getInterview } from "helpers/selectors";

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    interviewers: {},
    appointments: {}
  });
  const setDay = day => setState({ ...state, day });
  async function fetchData() {
    try {
      const days = await axios.get("http://localhost:8001/api/days");
      const appointments = await axios.get(
        "http://localhost:8001/api/appointments"
      );
      const interviewers = await axios.get(
        "http://localhost:8001/api/interviewers"
      );

      setState({
        ...state,
        days: days.data,
        appointments: appointments.data,
        interviewers: interviewers.data
      });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const appointments = getAppointmentsForDay(state, state.day);
  const schedule = appointments.map(appointment => {
    const interview = getInterview(state, appointment.interview);

    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
      />
    );
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} day={state.day} setDay={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
