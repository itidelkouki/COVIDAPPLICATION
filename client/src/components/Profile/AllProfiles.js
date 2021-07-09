import React, {Fragment, useEffect} from 'react';
import { Spinner } from 'reactstrap';
//import {Dots} from 'react-preloaders';
import ProfileItem from './ProfileItem';
import {useSelector} from "react-redux";
import {getProfile,deleteprofile} from '../../js/actions/profileActions';
import { useDispatch} from 'react-redux';

const Profiles = () => {
    const dispatch = useDispatch();
    const getPro = () => dispatch(getProfile());
    
    useEffect(() => {
        getPro();
    },[]);

const profiles = useSelector(state=> state.profileReducer.profiles);
//const profile = useSelector(state=> state.profileReducer.profile);
const loading = useSelector(state=> state.profileReducer.loading);
    return (
        
        <Fragment>
            { loading ? <Spinner /> : 
                <Fragment>
                <section id="profiles-page">
                    <div className="container">
                        <div className="heading-common">
                            <h1><strong>Doctor Profiles</strong></h1>  
                        </div>
                        <br />
                        {
                            profiles != null ? (
                                profiles.map((profile) => (
                                    <ProfileItem key={profile._id} profile={profile} />
                                ))
                            ) : <h4>No Profiles found..</h4>
                        }
                    </div>
                </section>
                </Fragment>
            }
        </Fragment>
    )
};

/*                        <h2 className="welcome-heading"><i className="fas fa-user-md"></i> Book your Appointments</h2>

*/

export default Profiles;
