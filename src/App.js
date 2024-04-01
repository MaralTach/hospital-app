import "./App.css";
import { useState } from "react";
import { appointmentData } from "./helpers/Data";
import AddModal from "./components/AddModal";

import Home from "./pages/Home";
// import { doctorData } from "./helpers/Data";
// import Doctors from "./components/Doctors";
import "bootstrap/dist/css/bootstrap.min.css";
import AppointmentList from "./components/AppointmenList";

function App() {
  const [appointments, setAppointments] = useState(appointmentData);
  return (
    <div className="App">
      <Home  />

    </div>
  );
}

export default App;
