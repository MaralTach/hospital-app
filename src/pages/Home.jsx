import React, { useEffect, useState } from "react";
import { doctorData } from "../helpers/Data";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from 'react-bootstrap/Modal';
import { appointmentData } from "../helpers/Data";
import {TiTick ,TiDelete} from 'react-icons/ti'
import { addLocal } from "../helpers/utils";



const Home = () => {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [list, setList] = useState([]);
  const [patient, setPatient] = useState("");
  const [day, setDay] = useState("");
  const [appointments, setAppointments] = useState(() => {
    const savedAppointment = localStorage.getItem("appointments");
    return savedAppointment ? JSON.parse(savedAppointment) : [];
  });

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  });



  useEffect(() => {
    setAppointments(appointmentData);
  }, [appointmentData]);


  const [patientName, setPatientName] = useState('');
  const [date, setDate] = useState(getCurrentDateTime());
  const [appoinments, setAppoinments] = useState([]);

  useEffect(() => {
    const storedAppointment = localStorage.getItem('newAppointment');
    if (storedAppointment) {
      const { patient, day } = JSON.parse(storedAppointment);
      setPatientName(patient);
      setDate(day);
    }
  }, []);

  const handlePatientName = (event) => {
    setPatientName(event.target.value);
    localStorage.setItem('newAppointment', JSON.stringify({ patient: event.target.value, day: date }));
  }

  const handleDate = (event) => {
    setDate(event.target.value);
    localStorage.setItem('newAppointment', JSON.stringify({ patient: patientName, day: event.target.value }));
  }

  const removeAppointment = (id) => {
    setAppointments(prevAppointments =>
      prevAppointments.filter((appointment) => appointment.id !== id)

    );
  };

  const onSelectedDoctor = (name) => {
    setSelectedDoctor(name);
    setShow(true);
  };

  const addAppointment = (newAppointment) => {
    setAppointments([
      ...appointments,
      {
        patientName: `${newAppointment.patientName}`,
        date: `${newAppointment.date}`,
      },
    ]);
  };

  const handleToggle= (index) => {
    const newAppo = appoinments?.map(appo => appo.id === appoinments.id ? {...appo,consulted: !appo.consulted} : appo );
    setAppoinments(newAppo)
    // localStorage.setItem("appointments",JSON.stringify(newAppo))
    addLocal("appointments",newAppo)
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const clickCard = (doctor) => {
    setSelectedDoctor(doctor.name);
    setShow(true);
  };

  function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  const handleSubmit = () => {
    const newAppointment = {doctor: selectedDoctor, patient: patientName, day: date, consulted: false, id: Date.now(), time: getCurrentDateTime() };
    setAppointments([...appointments, newAppointment]);
    setPatientName(""); // Clear patientName instead of patient
    setDate(""); // Clear date instead of day
    setShow(false);
  };

  const handleClose = () => setShow(false);

  const remove = (item) => {
    setList((data) => data.filter((info) => info !== item));
  };

  const filteredData = doctorData.filter((doctor) => {
    return doctor.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="main">
      <div id="home" className="home-container">
        <div className="navbar fixed-top mt-0 w-100">
          <h1 className="logo">
            Medical <span>Care</span>{" "}
          </h1>

          <ul className="nav-links">
            <li>
              {" "}
              <a href="#home">Home</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#our-doctors">Our Doctors</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#appointmentss">Appointments</a>{" "}
            </li>
          </ul>
          <InputGroup className="mb-3 w-25">
            <Form.Control
              placeholder="Search doctor..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={handleChange}
              value={search}
            />
            <Button variant="outline-secondary" id="button-addon2">
              Search
            </Button>
          </InputGroup>
        </div>

        <div className="home-image">
          <div className="title">
            <h1>Best Medical </h1>
            <h2>And Health Care Center</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur doloribus Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Officiis quisquam magni officia eligendi placeat
              repellat culpa.
            </p>

            <Button variant="primary" href="#our-doctors">
              Find Doctor
            </Button>
          </div>
          <div className="image-container">
            <img src="./img/home.png" alt="" />
          </div>
        </div>
      </div>

      <div id="our-doctors" className="doctors">
        <div className="doctor-title">
          <h1>Our Doctors</h1>
        </div>

        <div className="doctors-container">
          {filteredData.map((doctor) => (
            <div
              className="doctor-card"
              key={doctor.id}
              onClick={() => clickCard(doctor)}
            >
              <img src={doctor.img} alt={doctor.name} />
              <div className="doctor-title">
                <h3>{doctor.name}</h3>
                <p>{doctor.dep}</p>
              </div>
            </div>
          ))}
        </div>




              {/* AppointmentList */}



        <div key={appoinments.id} id="appointmentss" className={"appointments-container mt-5" + (doctorData.consulted ? " consulted" : "")}>
        <h2>Appointments</h2>
        <div className="appointments">
       
          {appointments.map((appointment) => (
            <ul key={appointment.id} className="container-ul" >
              <li>

                <p>Patient: {appointment.patient}</p>
                <p>Doctor: {appointment.doctor}</p>
                <p>Date: {new Date(appointment.day).toDateString()}</p>
                
                <TiDelete type="button" className="text-danger display-2"
                  onClick={() => removeAppointment(appointment.id)}/>
                 <TiTick type="button" className="text-success display-2" onClick={()=> handleToggle(appointment.id)}/>
              </li>
            </ul>
          ))}
        </div>
      </div>


      {/* /* ********************************** */
      /*              addmodal              */
      /* ********************************** */ }


<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedDoctor}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control type="text" 
                            placeholder="Enter your name..." 
                            autoFocus
                            value={patientName}
                            onChange={handlePatientName}
                            required/>
            </Form.Group>
            <Form.Group className="mb-3" id='date'>
              <Form.Label>Date & Time </Form.Label>
              <Form.Control type="datetime-local" 
                             value={date}
                             defaultValue={getCurrentDateTime()}
                             onChange={handleDate} 
                             required/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" type="submit" onClick={()=> handleSubmit(patientName, date)}> 
            Save
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    



      </div>
    </div>
  );
};

export default Home;
