import React, {Fragment, useEffect} from 'react';
import { Spinner } from 'reactstrap';
//import {Dots} from 'react-preloaders';
import FileItem from './FileItem';
import {useSelector} from "react-redux";
import {getMedicalFile,} from '../../js/actions/medicalFileAction';
import { useDispatch} from 'react-redux';

const MedicalFiles = () => {
    const dispatch=useDispatch()
    const getAllFiles = () => dispatch(getMedicalFile());
    useEffect(() => {
        getAllFiles();
    },[]);


const medicalFiles = useSelector(state=> state.MedicalFileReducer.medicalFiles);
const isLoading = useSelector(state=> state.MedicalFileReducer.medicalFiles);
    return (
        <Fragment>
            {/* { isLoading ? <Spinner /> :  */}
                <Fragment>
                    <h1 style={{marginLeft:'80px' , fontFamily:'"Open Sans", sans-serif', justifyContent:'space-around'  , padding:'20px',
color: '#e4a1ff', textAlign:'center',textTransform:' uppercase',fontSize: '2.5rem',letterSpacing: '0.5rem',
fontWeight: '400'}}><strong>Patient's Medical Files</strong></h1>  
<li><a href="/doctordashboard"> Back to dashboard</a></li>
                <section id="promedicalFiles-page">
                    <div  style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around' }}>
                        <div className="heading-common">
                            
                        </div>
                        <br />
                         {
                            medicalFiles != null ? (
                                medicalFiles.map((file) => (
                                    <FileItem key={file._id} file={file} />
                                ))
                            ) : <h4>No medical medicalFiles found..</h4>
                        } 
                    </div>
                </section>
                </Fragment>

            {/* <li><a href="/doctordashboard"> Back to dashboard</a></li> */}
        </Fragment>
    )
};

/*                        <h2 className="welcome-heading"><i className="fas fa-user-md"></i> Book your Appointments</h2>

*/

export default MedicalFiles;
