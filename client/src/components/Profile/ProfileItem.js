import React from 'react';
import {
    Card, CardImg,  CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import '../PatientArea.css';
import {deleteprofile} from '../../js/actions/profileActions';
import { useDispatch} from 'react-redux';
import EditModalProfile from "./EditModalProfile";
import DoctorDashboard from '../DoctorDash';
//import {Link} from 'react-router-dom';

const ProfileItem = ({profile}) => {

const dispatch = useDispatch();
const deleteProf = (id) => dispatch(deleteprofile(id));

    return (
        <div className="row">   
        <div className="col-md-4">
            <Card className="client-signin">
            <div className="profile-1">
                    <div className="profile-img">
                    <CardImg top width="40%" sizes="20%" src="https://i.pinimg.com/originals/64/34/d7/6434d72ce9e16251c4f41f4e5a146567.png" alt="Card image cap" />

                    </div>
                    <div className="profile-details">
                        <div className="profile-desc">
                            <h2 className="profile-heading"><strong>Tel:{profile.tel}</strong></h2>
                            <p className="profile-p"><strong>Clinic:{profile.clinic}</strong> </p>
                            <p className="profile-p2"><strong>website:{profile.website}</strong> </p>
                            <p className="profile-p2"><strong>Location:{profile.location}</strong> </p>
                            <Button color="warning"  onClick={()=>deleteProf(profile._id) }> delete</Button>
                            <EditModalProfile  profile={profile} />
                           
                        </div>
                    </div>
                    
                </div>
                </Card>
        </div>
        </div>
    )
};

export default ProfileItem ;
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