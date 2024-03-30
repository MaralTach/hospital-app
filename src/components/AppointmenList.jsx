import { appointmentData } from "../helpers/Data";
import { useState } from "react";
import CloseButton from 'react-bootstrap/CloseButton';

console.log(appointmentData);

function AppointmenList() {
  const [show, setShow] = useState(true);

  return (
    <>
      <div>
        <h2>Appointments</h2>
        <ul className="appointments"> 
          {appointmentData.map((appointment) => (
            <li key={appointment.id}>
              <p>Patient: {appointment.patient}</p>    
             <p>Doctor: {appointment.doctor}</p>
             <p>Date: {new Date(appointment.day).toDateString()}</p>
            </li>
          ))}
        </ul>
      </div>
      <CloseButton aria-label="Hide" />
    </>
  );
}

export default AppointmenList;
