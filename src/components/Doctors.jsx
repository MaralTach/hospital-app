import React, {useState, useEffect} from 'react'
import { doctorData } from "../helpers/Data"
import AddModal from "./AddModal"
import AppointmenList from "./AppointmenList"

const Doctors = () => {
    const [show, setShow] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [appointments, setAppointments] = useState(() =>{
        const saved = localStorage.getItem("appointments");
        return
       
    });
    const handleModal = (name) => {
        console.log(name)
    }
  return (
    <div>
     <h2>Our Doctors</h2>
     <div className="doctors-container" >
     {
        doctorData.map((doctor) => {
          return (
            <div className="doctor-card" key={doctor.id}>
                <img src={doctor.img} 
                alt={doctor.name}
                onClick={()=> handleModal(doctor.name)} />
              <h3>{doctor.name}</h3>
              <p>{doctor.dep}</p>
            </div>
          )
        })
     }
     </div>
      <AppointmenList/>
      <AddModal/>
   
    </div>
  )
}

export default Doctors