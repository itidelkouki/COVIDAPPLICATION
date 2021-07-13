import { combineReducers } from 'redux';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import authPatientReducer from './authPatientReducer';
import MedicalFileReducer from './medicalFileReducer';

export default combineReducers({ authReducer,profileReducer,authPatientReducer,MedicalFileReducer,
 });
