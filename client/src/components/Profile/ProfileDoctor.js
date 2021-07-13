
import React , { useEffect, Fragment } from 'react';
import {useSelector} from "react-redux";
import {getCurrentProfile,getProfileById} from '../../js/actions/profileActions';
import {useDispatch} from "react-redux"

const Profile = ()=>{
const dispatch=useDispatch()
/*const getProfile = () =>  dispatch(getCurrentProfile());
    useEffect(() => {
    
      getProfile();
  
    },[])*/
    const getCurrent = () => dispatch(getCurrentProfile());
    useEffect(() => {
      getCurrent();
    }, [getCurrent]);
const profile = useSelector(state=> state.profileReducer.profile);
const doctor = useSelector((state) => state.authReducer.doctor);
  
    return (
        <Fragment>
                    <section id="profile-page">
                    <h1 className="mb-3 ml-4" >Doctor Profile</h1>
                            <div className="profilecontainer">
                            
                                <div>
                             <h3>{profile && profile.tel} </h3>   
                             <h3>{profile && profile.clinic} </h3> 
                             <h3>{profile && profile.website} </h3> 
                             <h3>{profile && profile.location}</h3> 
                             </div>
                             <img src="https://png.pngtree.com/element_our/png_detail/20181026/doctor-avatar-icon-medical-health-specialist-avatar-woman-doctor-avatar-png_219874.jpg" style={{ height:'300px',  width:'300px', borderRadius:'50%' }}/>   

                             <li><a href="/doctordashboard"> Back to dashboard</a></li>   
                            </div>
                    </section>
               </Fragment>
    )};

  /*const profile=useSelector((state)=> state.profileReducer.profile);
  const loading=useSelector((state)=> state.profileReducer.loading);
    return (
        <Fragment>
           {profile=== null || loading ? (
               <Spinner />
           ) : (
               <Fragment>
                    <section id="profile-page">
                            <div class="container">
                             <h1>your profile </h1>   
                             <img/>   
                                
                            </div>
                    </section>
               </Fragment>
           )} 
        </Fragment>
    );
};*/



export default Profile;