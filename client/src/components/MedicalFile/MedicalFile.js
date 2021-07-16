import React, {Fragment, useEffect} from 'react';
import { Card, Button, CardTitle } from 'reactstrap';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getCurrentFile, deletemedicalFile, editmedicalFile} from "../../js/actions/medicalFileAction";
import {getAuthPatient} from "../../js/actions/authPatientActions";
//import EditModalPatient from "../auth/patient/EditModalPatient";



const CardMedicalFile = () => {
  const getFile = () => dispatch(getCurrentFile());
   const dispatch=useDispatch();
   useEffect(() => {
    getFile();
  }, []);
   const medicalfile = useSelector((state) => state.MedicalFileReducer.medicalfile);
   const user = useSelector((state) => state.authPatientReducer.user);
    
    const getPatient = ()=>dispatch(getAuthPatient());
    

    const delet = (id) => dispatch(deletemedicalFile(id));
   


    return     (
        <div  style={{ display:'flex' ,alignItems:'center' }}>
            <Card   style={{ backgroundColor :'#dab4df', color:'violet', height:"400px", width:"50%", alignItems:'center',margin:'100px', fontFamily:'"Open Sans", sans-serif', fontSize:'2rem',textTransform:' uppercase', }} >
            <h1 style={{ color:'yellow', fontWeight:'bold'}}>Medical file  </h1>
            <br/>
          <CardTitle style={{ textColor:'violet'}}> weight :{medicalfile && medicalfile.weight}</CardTitle>
          <CardTitle tag="h5"> medicalHistory: {medicalfile && medicalfile.medicalHistory}</CardTitle>
          <CardTitle tag="h5">allergiesName : {medicalfile && medicalfile.allergiesName}</CardTitle>
          <CardTitle tag="h5">bloodType : {medicalfile && medicalfile.bloodType} </CardTitle>
          <br/>
            <div style={{display:'flex', margin:'10px', alignItems:'center', textAlign:'center'}}>
          <Button  color="warning"   onClick={()=>delet(medicalfile._id)} >Delete</Button>
          <Link to="/Appointment">
          <Button  color="warning"  >Appointement</Button>  
          </Link> 
          <Link to="/Dashboard_patient">
          <Button  color="warning"  >Back</Button> 
          </Link> 
          </div>

          
          
        </Card>
        <img src="https://e7.pngegg.com/pngimages/634/743/png-clipart-directory-macintosh-ico-icon-folder-miscellaneous-purple.png" style={{ height:'300px',  width:'300px', borderRadius:'50%' }}/>   

        </div>
    )
}

export default CardMedicalFile ;
/*  <div style={{display:"flex",justifyContent:"space-around"}} >
          {/* <Button  color="warning"   onClick={()=>delet(medicalfile._id)} >delete</Button> */
          //<Link to="/Dashboard_patient" ><Button  color="warning" >Back to dashboard</Button></Link>
             
          //</div>
          //of ${user && user.name} ${user && user.lastName}`} 


          /*medicalfile == null ? (
      <Card body>
      <h1>You have not any medical File yet: Please go back to reply to questionnaire..</h1>
      <Link to='/Dashboard_patient' ><Button  color="warning" >Back </Button></Link>
    </Card>
) :*/