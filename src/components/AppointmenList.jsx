// import React, { useState, useEffect } from "react";

// import CloseButton from "react-bootstrap/CloseButton";

// const AppointmentList = ({HandleSubmit}) => {
 

//   return (
//     <>
     
//     </>
//   );
// }

// export default AppointmentList;





// import { appointmentData } from "../helpers/Data";
// import { useState } from "react";
// import CloseButton from "react-bootstrap/CloseButton";

// function AppointmenList() {
//   const [appointments, setAppointments] = useState(appointmentData);

//   const removeAppointment = (id) => {
//     setAppointments((prevAppointments) =>
//       prevAppointments.filter((appointment) => appointment.id !== id)
//     );
//   };

//   return (
//     <>
//       <div id="appointments" className="appointments-container mt-5">
//         <h2>Appointments</h2>
//         <div className="appointments">
//           {appointments.map((appointment) => (
//             <ul key={appointment.id} className="container-ul">
//               <li>
//                 <p>Patient: {appointment.patient}</p>
//                 <p>Doctor: {appointment.doctor}</p>
//                 <p>Date: {new Date(appointment.day).toDateString()}</p>
//                 <CloseButton
//                   onClick={() => removeAppointment(appointment.id)}
//                 />
//               </li>
//             </ul>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default AppointmenList;



// import { appointmentData } from "../helpers/Data";
// import { useState } from "react";
// import CloseButton from "react-bootstrap/CloseButton";

// function AppointmenList() {
//   const [appointments, setAppointments] = useState([]);;

//   const removeAppointment = (id) => {
//     setAppointments((prevAppointments) =>
//       prevAppointments.filter((appointment) => appointment.id !== id)
//     );
//   };

//   return (
//     <>
//       <div id="appoinments" className="appointments-container mt-5">
//         <h2>Appointments</h2>
//         <div className="appointments">
//           {appointments.map((appointment) => (
//             <ul key={appointment.id} className="container-ul">
//               <li>
//                 <p>Patient: {appointment.patient}</p>
//                 <p>Doctor: {appointment.doctor}</p>
//                 <p>Date: {new Date(appointment.day).toDateString()}</p>
//                 <CloseButton
//                   onClick={() => removeAppointment(appointment.id)}
//                 />
//               </li>
//             </ul>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default AppointmenList;

// // import { appointmentData } from "../helpers/Data";
// // import { useState } from "react";
// // import CloseButton from "react-bootstrap/CloseButton";

// // console.log(appointmentData);

// // function AppointmenList() {
// //   const [show, setShow] = useState(true);

// //   return (
// //     <>
// //       <div>
// //         <h2>Appointments</h2>
// //         <div className="appointments">
// //           {appointmentData.map((appointment) => (
// //             <ul key={appointment.id} className="container-ul">
// //               <li>
// //                 <p>Patient: {appointment.patient}</p>
// //                 <p>Doctor: {appointment.doctor}</p>
// //                 <p>Date: {new Date(appointment.day).toDateString()}</p>
// //                 <i class="fa-regular fa-rectangle-xmark clsBtn"></i>
// //               </li>
// //             </ul>
// //           ))}
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default AppointmenList;
