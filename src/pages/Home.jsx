import React from "react";
// import Doctors from "../components/Doctors";
import { doctorData } from "../helpers/Data";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import AddModal from "../components/AddModal";

const Home = () => {
  const [search, setSearch] = useState("");

  const [show, setShow] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleModal = (name) => {
    setSelectedDoctor(name);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredData = doctorData.filter((doctor) => {
    return doctor.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="main">
      {/* /* ********************************** */
      /*                home                */
      /* ********************************** */}

      <div id="home" className="home-container ">
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
              <a href="#appoinments">Appoinments</a>{" "}
            </li>
          </ul>
          <InputGroup className="  mb-3 w-25">
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
              {" "}
              Find Doctor
            </Button>
          </div>
          <div className="image-container">
            <img src="./img/home.png" alt="" />
          </div>
        </div>
      </div>

      {/* /* ********************************** */
      /*               doctors              */
      /* ********************************** */}

      <div id="our-doctors" className="doctors">
        <div className="doctor-title">
          <h1>Our Doctors</h1>
        </div>

        <div className="doctors-container">
          {filteredData.map((doctor) => (
            <div className="doctor-card" key={doctor.id}>
              <img
                src={doctor.img}
                alt={doctor.name}
                onClick={() => handleModal(doctor.name)}
              />
              <div className="doctor-title">
                <h3>{doctor.name}</h3>
                <p>{doctor.dep}</p>
              </div>
            </div>
          ))}
        </div>
        <AddModal
          show={show}
          handleClose={handleClose}
          doctorName={selectedDoctor}
        />
      </div>
    </div>
  );
};

export default Home;
