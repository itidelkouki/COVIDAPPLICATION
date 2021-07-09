import React,{useState} from "react";
import {useDispatch} from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input } from 'reactstrap';
import { editProfile } from "../../js/actions/profileActions";
import '../PatientArea.css';
const Editprofile = ({profile}) => {
    const [tel,setTel]=useState(profile.tel)
    const [clinic,setClinic]=useState(profile.clinic)
    const [website,setWebsite]=useState(profile.website)
    const [location,setLocation]=useState(profile.location);
   
  const [modal, setModal] = useState(false);

  const toggle = () => {
      setModal(!modal)
      setTel(profile.tel)
      setClinic(profile.clinic)
      setWebsite(profile.website)
      setLocation(profile.location)
    };
  const dispatch=useDispatch()

  const edit=()=>{
    dispatch(editProfile(profile._id,{ tel, clinic, website, location}))
    toggle()
  }
//   setWeight('');
//   setMedicalHistory('');
//   setAllergiesName('');
//   setBloodType('');
  

  return (
    <div className="container">
    <div class="contact-container">
       {/* <div class="right-col"> */}
       <div className="component">
       
    <div>
    <Button color="warning" onClick={toggle}>edit</Button>
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <Form>
      <FormGroup>
        <Label for="examplePassword">Tel</Label>
        <Input
        value={tel}
        onChange={e=>setTel(e.target.value)}
          type="text"
          name="weight"
          id="exampleweight"
          placeholder="Tel"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail"> Clinic</Label>
        <Input
        value={ clinic}
        onChange={e=>setClinic(e.target.value)}
          type="text"
          name="medicalHistory"
          id="examplemedicalHistory"
          placeholder="clinic"
        />
      </FormGroup>

      <FormGroup>
        <Label for="examplePassword">Website</Label>
        <Input
        value={website}
        onChange={e=>setWebsite(e.target.value)}
          type="text"
          name="password"
          id="exampleallergiesName"
          placeholder="websiter"
        />
      </FormGroup>
      <FormGroup>
        <Label for="bloodType"> Location </Label>
        <Input
        value={ location}
        onChange={e=>setLocation(e.target.value)}
          type="text"
          name="password"
          id="examplebloodType"
          placeholder="location"
        />
      </FormGroup>
      
      </Form>     
       </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={edit}>Edit profile</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      </div>
      </div>
      </div>
      </div>

      )
      };
    


export default Editprofile;