import React from 'react';
import {
    Card, CardImg,  CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import'./FileItem.css';
import {deletemedicalFile} from '../../js/actions/medicalFileAction';
import { useDispatch} from 'react-redux';
import {useSelector} from "react-redux";
import EditMedicalFile from "./EditFile";


const FileItem = ({file}) => {

const dispatch = useDispatch();
const deletefile = (id) => dispatch(deletemedicalFile(id));

const MedicalFiles = useSelector((state) => state.MedicalFileReducer.MedicalFiles);
    return (
        
        <div className="row" style={{marginTop:'5px' }}>   
        <div className="col-md-4">
            <Card className="client-signin" style={{justifyContent:'space-around' ,marginRight:'2px',marginLeft:'2px', marginTop:'2px',marginBottom:'2px'}}>
            <div className="profile-1" style={{textAlign:'center', justifyContent:'space-around', }}>
                    <div className="profile-img">
                    <CardImg top src="https://e7.pngegg.com/pngimages/483/555/png-clipart-color-file-folders-macos-folders-miscellaneous-rectangle.png" alt="Card image cap" style={{width:"30%", height:"30%" ,marginTop:'0px' , }}  />
                    </div>
                    <div className="profile-details">
                        <div className="profile-desc">
                            <p className="profile-heading"><strong>identifiant:{file._id}</strong></p>
                            <p className="profile-heading"><strong>Weight:{file.weight}</strong></p>
                            <p className="profile-p"><strong>MedicalHistory:{file.medicalHistory}</strong> </p>
                            <p className="profile-p2"><strong>AllergiesName:{file.allergiesName}</strong> </p>
                            <p className="profile-p2"><strong>BloodType:{file.bloodType}</strong> </p>
                           
                            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around", alignItems:''}} >


                             <Button color="warning"  onClick={()=>deletefile(file._id)}> delete</Button> 
                             <EditMedicalFile file={file}/> 
                             </div>
                        </div>
                    </div>
                    
                </div>
                </Card>
        </div>
        </div>
    )
};

export default FileItem ;
// <DoctorDashboard  profile={profile} />
/*<div className="mx-auto profile-buttons">
                        {authReducer.isAuth ? (
                            <Fragment>
                                <Link to={`/appointment/${_id}`} type="button" className="rounded-pill profile-btn btn btn-info"><i className="fas fa-calendar-check"></i> Book Appointment</Link>
                            </Fragment>
                            ) : (
                                <Fragment>
                                    <button type="button" data-toggle="tooltip" data-placement="right" title="Please Login as a User" className="rounded-pill profile-btn btn btn-info disabled">
                                        <i className="fas fa-calendar-check"></i> Book Appointment
                                    </button>
                                </Fragment>
                            )
                        }
                        <Link to={`/doctor/${_id}`} type="button" className="rounded-pill profile-btn btn btn-dark">View Profile</Link>
                    </div>
                    <img src="{avatar}" alt="" />
                    */