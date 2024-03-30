
import React, { useState } from 'react';
import { doctorData } from "../helpers/Data";
import AddModal from "./AddModal";

const Doctors = () => {
    const [show, setShow] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    const handleModal = (name) => {
        setSelectedDoctor(name);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    return (
        <div>
            <h2>Our Doctors</h2>
            <div className="doctors-container">
                {doctorData.map((doctor) => (
                    <div className="doctor-card" key={doctor.id}>
                        <img
                            src={doctor.img}
                            alt={doctor.name}
                            onClick={() => handleModal(doctor.name)}
                        />
                        <h3>{doctor.name}</h3>
                        <p>{doctor.dep}</p>
                    </div>
                ))}
            </div>
            <AddModal show={show} handleClose={handleClose} doctorName={selectedDoctor} />
        </div>
    );
};

export default Doctors;







/* ********************************** */
/*                1nci                */
/* ********************************** */

// import React, {useState} from 'react'
// import { doctorData } from "../helpers/Data"
// import AddModal from "./AddModal"
// import AppointmenList from "./AppointmenList"

// const Doctors = () => {
//     const [show, setShow] = useState(false);
//     const [selectedDoctor, setSelectedDoctor] = useState(null);
//     const [appointments, setAppointments] = useState(() =>{

//         const saved = localStorage.getItem("appointments");
//         return saved ? JSON.parse(saved) : [];
       
//     });
//     const handleModal = (name) => {
//         console.log(name)
//         setShow(true); // Set show to true to open the modal
//         setSelectedDoctor(name); // Set the selected doctor
//     }
//   return (
//     <div>
//      <h2>Our Doctors</h2>
//      <div className="doctors-container" >
//      {
//         doctorData.map((doctor) => (
         
//             <div className="doctor-card" key={doctor.id}>
//                 <img src={doctor.img} 
//                 alt={doctor.name}
//                 onClick={()=> handleModal(doctor.name)} />
//               <h3>{doctor.name}</h3>
//               <p>{doctor.dep}</p>
//             </div>
          
//           ))
//      }
//      </div>
//       {/* Display the appointment list */}
//       <AppointmenList appointments={appointments} />
//             {/* Display the add modal */}
//       <AddModal show={show} setShow={setShow} selectedDoctor={selectedDoctor} />
   
//     </div>
//   )
// }

// export default Doctors