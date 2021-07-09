import React from 'react';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { getAuthUser } from './js/actions/authActions';
import Switch from 'react-bootstrap/esm/Switch';
import Homepage from './components/Homepage';
import { Route } from "react-router-dom";
import PatientArea from './components/PatientArea';
import NavMenu from './components/NavMenu';
import DoctorArea from './components/DoctorArea';
import OurServices from './components/OurServices';
import Footer from "./components/Footer";
import Doctorlogin from "./components/Doctorlogin"
import ModalPatient from './components/ModalPatient';
import DoctorDashboard from './components/DoctorDash';
import CreateProfile from './components/Profile/CreateProfile';
import ProfileDoctor from './components/Profile/ProfileDoctor';
import Profiles from './components/Profile/AllProfiles';
import ProfileById from './components/Profile/ProfileById';
import {getCurrentProfile} from './js/actions/profileActions';
function App() {
  const dispatch = useDispatch();
  //const { isLoading } = useSelector((state) => state.authReducer);
  const getUser = () => dispatch(getAuthUser());
  useEffect(() => {
    getUser();
  }, []);

  return (
  <div className=
  "App">
  <Switch>
  <NavMenu/>
  
         <Route exact path="/" component={Homepage} />
         <Route path="/patient" component={PatientArea} />
         <Route path="/doctors" component={DoctorArea} />
         <Route path="/services" component={OurServices} />
         <Route path="/doctordashboard" component={DoctorDashboard} />
         <Route path="/doctorsllog" component={Doctorlogin} />
         <Route path='/create-profile' component={CreateProfile} />
         <Route path='/doctorprofile' component={ProfileDoctor} />
         <Route path="/patientlog" component={ModalPatient} />
         <Route path='/profiles' component={Profiles} />
         <Route path='/doctor/:id' component={ProfileById} />
         
         <Footer/>

  </Switch>
          
      
    </div>
  );
}

export default App;
//<Route path="/login" component={Login} />
//<Route path="/explore" component={Explore} />
///doctorsllog