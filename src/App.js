import "./App.css";
import AddModal from "./components/AddModal";
import AppointmenList from "./components/AppointmenList";
import Home from "./pages/Home";
import { doctorData } from "./helpers/Data";
// import Doctors from "./components/Doctors";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  
  return (
    <div className="App">
      <Home  />
      <AddModal />

      {/* <Doctors /> */}
      <AppointmenList />
    </div>
  );
}

export default App;
