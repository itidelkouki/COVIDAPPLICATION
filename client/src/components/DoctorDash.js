import React , { useEffect, Fragment } from 'react';
import {useDispatch,useSelector} from "react-redux"
import {getProfile,getProfileById /*,getCurrentProfile*/} from '../js/actions/profileActions';
import {Link} from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { useHistory } from 'react-router-dom';
const DoctorDashboard = ({profile}) => {
  const getPro = () => dispatch(getProfile());
  useEffect(() => {
      getPro();
  },[]);
//const profiles = useSelector((state)=> state.profileReducer.profiles);
//const profile = profiles.find((profile) => profile._id === match.params.id)
//console.log(profile);
    const dispatch=useDispatch()
    //const getCurrent = () => dispatch(getCurrentProfile());

  
    const getById =  () => {
      dispatch(getProfileById(profile._id));
     // history.push("/");
    }; 
    const history = useHistory();
    //const getPro = () => dispatch(getProfile());
    /*const getById = (e) => {
      e.preventDefault();
      dispatch(getProfileById(doctor._id));
      getPro();
      //history.push("/");
    };*/

const doctor = useSelector((state) => state.authReducer.doctor);
console.log(doctor);
//const isAuth = useSelector((state) => state.authReducer.isAuth);
//const profileById = useSelector((state)=> state.profileReducer.profileById);
//const profile = useSelector((state)=> state.profileReducer.profile);

  return  (

    <div>

<h1 className="mb-3 ml-4">

{doctor ? `Welcome ${doctor.name}` : null}
       
      </h1>
     
      
      <button onClick= {(e)=>getById(e)}  >see your profile</button>;
         
      <br/>
      <Link to='/profiles'>
      <button onClick= {getPro}> see all profiles</button>
      </Link>
      <p>You have not any Profile add your Profile..</p>
      <Link to='/create-profile' className="btn btn-info">
      Create Profile
      </Link>
    </div>

  );
};

export default DoctorDashboard;

/*useEffect(()=>{
      dispatch(getCurrentProfile())
  },[]);    
  
  if (!doctor) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Spinner
          style={{ width: '3rem', height: '3rem', color: 'secondary' }}
          type="grow"
        />
      </div>
    );
  }*/

     /*profileById == null ?
    <Fragment>
       <h1 className="mb-3 ml-4">
        Welcome Doctor {doctor.name} {doctor.lastName}
      </h1>
      <h5 className="mb-3 ml-4">{doctor.email} </h5>
                                <p>You have not any Profile add your Profile..</p>
                                <Link to='/create-profile' className="btn btn-info">
                                    Create Profile
                                
                            </Fragment>)
 : (*/
  
  
  //onClick= {()=>getById()}

  //<Link to={`/ ${profile._id}`}>