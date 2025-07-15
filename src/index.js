import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TimerApp from './Timer';
import reportWebVitals from './reportWebVitals';
import Temperature from './Temperature';
import SimpleForm from './SimpleForm';
import ControlledVsUncontrolled from './ControlledVsUncontrolled';
import SinglePageArc from './SinglePage';
import TodoList from './Todo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TimerApp/> */}
    {/* <Temperature/> */}
    {/* <ControlledVsUncontrolled/> */}
    <SinglePageArc/>
    <TodoList/>
    <SimpleForm/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
