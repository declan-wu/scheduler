import { useEffect, useReducer } from "react";
import Axios from "axios";

import reducer, {
  SET_DAY,
  SET_APPLICATION_DATA,
  SET_INTERVIEW,
  SET_SPOTS
} from "reducers/application";

const useApplicationData = () => {
  const getWeekDay = date => {
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    if (typeof date === "string") {
      return weekdays.indexOf(date);
    }
    const day = date.getDay();
    // since we are not scheduling interview for saturday and sunday
    // we apply condition to check if the day we receie is 0, or 6, if so, we return 0 else we return the item in the array, which should be of index day-1 to offset for 0 idx
    return weekdays[day - 1];
  };

  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  useEffect(() => {
    Promise.all([
      Axios.get("/api/days"),
      Axios.get("/api/appointments"),
      Axios.get("/api/interviewers")
    ]).then(all => {
      dispatch({ type: SET_APPLICATION_DATA, value: all });
    });
  }, []);

  const setDay = day => dispatch({ type: SET_DAY, value: day });

  // helper func
  const updateObjectInArray = (array, action) => {
    return array.map((item, index) => {
      if (index !== action.index) {
        // This isn't the item we care about - keep it as-is
        return item;
      }

      // Otherwise, this is the one we want - return an updated value
      return {
        ...item,
        spots: action.item
      };
    });
  };

  // helper func
  const getDayId = appointmentId => {
    let dayId = 0;
    if (appointmentId > 20) {
      dayId = 4;
    } else if (appointmentId > 15) {
      dayId = 3;
    } else if (appointmentId > 10) {
      dayId = 2;
    } else if (appointmentId > 5) {
      dayId = 1;
    }

    return dayId;
  };

  const bookInterview = (id, interview) => {
    return Axios.put(`/api/appointments/${id}`, { interview }).then(
      response => {
        if (response.status >= 200 && response.status < 300) {
          const appointment = {
            ...state.appointments[id],
            interview: { ...interview }
          };

          const appointments = {
            ...state.appointments,
            [id]: appointment
          };

          if (!state.appointments[id].interview) {
            const dayId = getWeekDay(state.day);
            const days = updateObjectInArray(state.days, {
              index: dayId,
              item: state.days[dayId].spots - 1
            });
            dispatch({ type: SET_SPOTS, value: days });
          }

          dispatch({ type: SET_INTERVIEW, value: appointments });
        } else {
          console.log(`There was an error. Response was ${response}`);
        }
      }
    );
  };

  const cancelInterview = id => {
    return Axios.delete(`/api/appointments/${id}`).then(response => {
      if (response.status >= 200 && response.status < 300) {
        const appointment = {
          ...state.appointments[id],
          interview: null
        };

        const appointments = {
          ...state.appointments,
          [id]: appointment
        };

        const dayId = getWeekDay(state.day);
        const days = updateObjectInArray(state.days, {
          index: dayId,
          item: state.days[dayId].spots + 1
        });
        dispatch({ type: SET_SPOTS, value: days });
        dispatch({ type: SET_INTERVIEW, value: appointments });
      } else {
        console.log(`There was an error. Response was ${response}`);
      }
    });
  };

  // for websocket
  useEffect(() => {
    const sock = new WebSocket(process.env.REACT_APP_WEBSOCKET_URL);
    sock.onopen = () => {
      sock.send("ping");
    };
    sock.onmessage = event => {
      if (JSON.parse(event.data).type === SET_INTERVIEW) {
        const { type, id, interview } = JSON.parse(event.data);
        const dayId = getDayId(id);

        const appointment = {
          ...state.appointments[id],
          interview: { ...interview }
        };

        if (!interview) {
          appointment.interview = null;
          const days = updateObjectInArray(state.days, {
            index: dayId,
            item: state.days[dayId].spots + 1
          });
          dispatch({ type: SET_SPOTS, value: days });
        }

        if (!state.appointments[id].interview) {
          const days = updateObjectInArray(state.days, {
            index: dayId,
            item: state.days[dayId].spots - 1
          });
          dispatch({ type: SET_SPOTS, value: days });
        }

        const appointments = {
          ...state.appointments,
          [id]: appointment
        };

        dispatch({ type: type, value: appointments });
      }
    };

    return () => {
      sock.close();
    };
  }, [state]);

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
};

export default useApplicationData;
