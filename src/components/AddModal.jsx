// import React, { useState, useEffect } from 'react';


// function AddModal({ show, handleClose, doctorName, setAppointments, appointments, handleSubmit }) {
  

//   console.log(handleSubmit.value)
//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   const newAppointment = {
//   //     patient: patientName,
//   //     doctor: doctorName,
//   //     day: date
//   //   };
//   //   setAppointments([...appointments, newAppointment]);
//   //   setPatientName('');
//   //   setDate('');
//   //   handleClose();
//   // }

  

//   return (
//     <>
    
//     </>
//   );
// }

// export default AddModal;







// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';

// function AddModal({ show, handleClose, doctorName, handleShow,setAppointments, appointments }) {
//   const [patientName, setPatientName] = useState('');
//   const [date , setDate] = useState(getCurrentDateTime());

//   const handlePatientName = (event) => {
//     setPatientName(event.target.value);
//   }

//   const handleDate = (event) => {
//     setDate(event.target.value);
//   }
// console.log(setDate);
//   const handleSubmit = (event) => {
//     const newAppointment = {
//       patient: patientName,
//       doctor: doctorName,
//       day: date
//     }
//     event.preventDefault();
//     console.log(newAppointment);
//     setAppointments([...appointments, newAppointment]);
//   }
//   function getCurrentDateTime() {
//     const now = new Date();
//     const year = now.getFullYear();
//     const month = String(now.getMonth() + 1).padStart(2, '0');
//     const day = String(now.getDate()).padStart(2, '0');
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     return `${year}-${month}-${day}T${hours}:${minutes}`;
//   }

//   return (
//     <>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Appointment for {doctorName}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Patient Name</Form.Label>
//               <Form.Control type="text" 
//               placeholder="Enter your name" 
//               value={patientName}
//               onChange={handlePatientName}/>
              
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Date & Time</Form.Label>
//               <Form.Control type="datetime-local" 
//               // onChange={}
//               defaultValue={getCurrentDateTime()} />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="danger" onClick={handleSubmit}
//           onChange={handleDate}>
//             Submit
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default AddModal;

