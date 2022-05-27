import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  CardText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Input,
  FormGroups,
  Button,
  Label,
  CustomInput,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import { User, Mail, Users, Lock, Date, Calendar, Edit2 } from 'react-feather'
// import checkImg from '@src/assets/images/icons8-ok.gif'
// import cancelImg from '@src/assets/images/icons8-close-64.png'
// // import { Select } from '@mui/material'
import { useState } from 'react'
const VerticalFormIcons = () => {
  const [basicModal, setBasicModal] = useState(false)
  return (
    <>
        <FormGroup>
          <Label for='title'>Title</Label>
          <Input type='text' placeholder='Enter title' name= "title" />
          <Label for='date'>Date</Label>
          <Input type='date' name= "date" />
          <Label for='file'>Date</Label>
          <Input type='file' name= "file" />
          <Label for='file'>Descripition</Label>
          <Input type='textarea' name= "descripition" />
        </FormGroup> 
                
       <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
          <ModalHeader toggle={() => setBasicModal(!basicModal)}>Delete</ModalHeader>
          <ModalBody className='d-flex justify-content-center'>
          <div style={{color:'red'}} ></div> <br /> <br /> 
          </ModalBody>
          <div className='d-flex justify-content-center'><h2>Are You Sure</h2></div>
          <div className='d-flex justify-content-center'><p>You won't be able to revert this!</p></div>
          
          <ModalFooter>
          <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
            
          <Button.Ripple className='d-flex justify-content-center delete' style={{color:"white"}} outline onClick={() => setBasicModal(!basicModal)}>
            Yes, delete it!
          </Button.Ripple>
          <Button.Ripple className='d-flex justify-content-center' color='primary' outline onClick={() => setBasicModal(!basicModal)} >
            Cancle
          </Button.Ripple>

          </div>
          
          </ModalFooter>
        </Modal>         
    </>
        
  )
}
export default VerticalFormIcons