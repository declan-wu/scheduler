# Interview Scheduler

This React Application allows a user to book, cancel and edit 1-hour interview appointments for the week. The user can select the day of the week on the navagation menu, create a new apppointment in an empty timeslot, enter the name of the client and select an interviewer from a list of interivers that are available on the selected day. The user is also able to see how many available spots are left on any given day.

![Creating a new Appointment](https://media.giphy.com/media/h3tf9iklDN21eVtDcH/giphy.gif)

Use of API & Websockets allow all clients to see schedule changes in real-time.

Tech Stack:

- React
- Webpack, Babel
- Axios, WebSockets
- Storybook, Webpack Dev Server, Jest, Testing Library

In order to run this application locally, it is also necessary to clone & install the api server, for which the repo & instructions are located [HERE](https://github.com/declan-wu/scheduler-api)

Express is the basis for the Scheduler API server application. Both servers run concurrently; requests are proxied from the Webpack development server to the API server.

## INSTRUCTIONS:

### Setup

Install dependencies with `npm install`.

### Running Webpack Development Server

```sh
npm start
```

### Running Jest Test Framework

```sh
npm test
```

### Running Storybook Visual Testbed

```sh
npm run storybook
```

## DEMO of Application Features:

Toggling Days & editing and existing interview:

![Toggling Days & Editing an existing appointment](n)

Responsive Design, data updates to Clients in Real-Time:

![Live updates to data](n)

Error Handling:

![Live updates to data](n)

## Dev Dependencies:

    @babel/core": "^7.4.3",
    @storybook/addon-actions": "^5.0.10",
    @storybook/addon-backgrounds": "^5.0.10",
    @storybook/addon-links": "^5.0.10",
    @storybook/addons": "^5.0.10",
    @storybook/react": "^5.0.10",
    @testing-library/jest-dom": "^4.0.0",
    @testing-library/react": "^8.0.7",
    @testing-library/react-hooks": "^1.1.0",
    babel-loader": "^8.0.5",
    node-sass": "^4.11.0",
    prop-types": "^15.7.2"

## Behavioural Requirements
- Interviews can be booked between Monday and Friday.
- A user can switch between weekdays.
- A user can book an interview in an empty appointment slot.
- Interviews are booked by typing in a student name and clicking on an interviewer from a list of available - interviewers.
- A user can cancel an existing interview.
- A user can edit the details of an existing interview.
- The list of days informs the user how many slots are available for each day.
- The expected day updates the number of spots available when an interview is booked or canceled.
- A user is presented with a confirmation when they attempt to cancel an interview.
- A user is shown an error if an interview cannot be saved or deleted.
- A user is shown a status indicator while asynchronous operations are in progress.
- When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).
- The application makes API requests to load and persist data. We do not lose data after a browser refresh.