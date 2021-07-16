import React,{useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
// import {Link} from "react-router-dom"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input } from 'reactstrap';
import { editmedicalFile,getCurrentFile } from "../../js/actions/medicalFileAction";
import { useHistory } from 'react-router-dom';

import "../auth/patient/Questionnaire.css";


const EditMedicalFile = ({file}) => {
  const dispatch=useDispatch()
  const history = useHistory();
  const getFile = () => dispatch(getCurrentFile());
//   useEffect(() => {
//    getFile();
//  }, []);
  //const medicalfile = useSelector((state) => state.MedicalFileReducer.medicalfile);
    const [weight,setWeight]=useState(file.weight)
    const [medicalHistory,setMedicalHistory]=useState(file.medicalHistory)
    const [allergiesName,setAllergiesName]=useState(file.allergiesName)
    const [bloodType,setBloodType]=useState(file.bloodType);
   
  const [modal, setModal] = useState(false);

  const toggle = () => {
      setModal(!modal)
      setWeight(file.weight)
      setMedicalHistory(file.medicalHistory)
      setAllergiesName(file.allergiesName)
      setBloodType(file.bloodType)
    };
  

  const edit=()=>{
    dispatch(editmedicalFile(file._id,{ weight, medicalHistory, allergiesName, bloodType}))
    toggle();
    //history.push('/medicalFile')
  }

  

  return (
    <div className="container">
    <div class="contact-container">
       
       <div className="component">
       
    <div>
    <Button  className="edit" color="warning" onClick={toggle}>edit</Button>
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <Form>
      <FormGroup>
        <Label for="examplePassword">Weight</Label>
        <Input
        value={weight}
        onChange={e=>setWeight(e.target.value)}
          type="text"
          name="weight"
          id="exampleweight"
          placeholder="password placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail"> MedicalHistory</Label>
        <Input
        value={ medicalHistory}
        onChange={e=>setMedicalHistory(e.target.value)}
          type="text"
          name="medicalHistory"
          id="examplemedicalHistory"
          placeholder="with a placeholder"
        />
      </FormGroup>

      <FormGroup>
        <Label for="examplePassword">AllergiesName</Label>
        <Input
        value={allergiesName}
        onChange={e=>setAllergiesName(e.target.value)}
          type="text"
          name="password"
          id="exampleallergiesName"
          placeholder="password placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="bloodType"> BloodType </Label>
        <Input
        value={ bloodType}
        onChange={e=>setBloodType(e.target.value)}
          type="text"
          name="password"
          id="examplebloodType"
          placeholder="with a placeholder"
        />
      </FormGroup>
      
      </Form>     
       </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={edit}>Edit modal</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      </div>
      </div>
      </div>
      </div>

      )
      };
    


export default EditMedicalFile;
 