
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Button, Modal, Input, Label,  FormGroup, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import * as Icons from 'react-feather'
import  './announcement.css'
import { Plus } from "react-feather"
import { useState } from "react"
import VerticalFormIcons from "./VerticalFormIcons"
import "@styles/base/pages/dashboard-ecommerce.scss"
import alergif from '@src/assets/images/icons8-box-important.gif' 
import cancelpng from '@src/assets/images/icons8-close-48.png'
import checkgif from '@src/assets/images/icons8-ok.gif' 

  const Announcement = () => { 

  const [addElection, setAddElection] = useState(false)
  const [areYouSure, setAreYouSure] = useState(false)
  const [cancelModal, setCancelModal] = useState(false)
  const [successModal, setSuccessModal] = useState(false)

  const [basicModal, setBasicModal] = useState(false)
  return (   
    <>
    
    <Row>
     <Col md="12"   style={{display: 'flex', justifyContent: 'right', bottom:'12px'}}>
     <>
      <Button
        className="ml-2"
        color="primary"
        onClick={() => setAddElection(!addElection)}
      >
        <Plus size={15} />
        <span className="align-middle ml-50">Add Announcement</span>
      </Button>
      <Modal isOpen={addElection} toggle={() => setAddElection(!addElection)}>
        <ModalHeader toggle={() => setAddElection(!addElection)}>
          Create an Announcement
        </ModalHeader>
        <ModalBody>
          <VerticalFormIcons />
        </ModalBody>
        <ModalFooter style={{display:'flex', width:'100', justifyContent:'space-between'}}>
          <Button color="success" onClick={() => {
              setAreYouSure(!areYouSure)
            setTimeout(() => {
              setAddElection(!addElection)
            }, 200)
          }}>
            Create New Announcement!
          </Button>
          <Button.Ripple  color="danger" type="reset" onClick={() => {
              setAddElection(!addElection)
          }} >
            Cancel
          </Button.Ripple>
        </ModalFooter>
      </Modal>
      {/* areyousure */}
      <Modal isOpen={areYouSure} toggle={() => setAreYouSure(!areYouSure)}>
        <ModalHeader toggle={() => setAreYouSure(!areYouSure)}>
        </ModalHeader>
        <ModalBody style={{textAlign:'center', display:'flex', flexDirection:'column', gap:'10px'}}>
          <img width={85} height={85} style={{display:'block', margin:'auto'}}  src={alergif}></img>
          <h3>Are you sure?</h3>
          <p>You won't be able to revert this!</p>
        </ModalBody>
        <ModalFooter style={{display:'flex', width:'100%', justifyContent:'space-between'}}>
          <Button color="success" onClick={() => {
            setSuccessModal(!successModal)
            setTimeout(() => {
              setAreYouSure(!areYouSure)
            }, 200)
          }}>
            Yes, Create New Announcement
          </Button>
          <Button.Ripple outline color="danger" type="reset" onClick={() => {
              setCancelModal(!cancelModal)
              setTimeout(() => {
                setAreYouSure(!areYouSure)
              }, 200)
          }}>
            Cancel
          </Button.Ripple>
        </ModalFooter>
      </Modal>
       {/* are you sure */}
       {/* Cancelmodal */}
       <Modal isOpen={cancelModal} toggle={() => setCancelModal(!cancelModal)}>
        <ModalBody style={{textAlign:'center', display:'flex', flexDirection:'column', gap:'10px'}}>
          <img width={85} height={85} style={{display:'block', margin:'auto'}}  src={cancelpng}></img>
          <h3>Cancelled</h3>
          <p>Re-Create New Election Next Time</p>
        </ModalBody>
        <ModalFooter>
          <Button style={{display:'block', margin:'auto'}} color="primary" onClick={() => {
            setCancelModal(!cancelModal)
           
            }}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
        {/* Cancelmodal */}
        {/* sucessmodal */}
       <Modal isOpen={successModal} toggle={() => setSuccessModal(!successModal)}>
        <ModalBody style={{textAlign:'center', display:'flex', flexDirection:'column', gap:'10px'}}>
          <img width={85} height={85} style={{display:'block', margin:'auto'}}  src={checkgif}></img>
          <h3>New Announcement Created</h3>
          <p>A new Announcement have been created</p>
        </ModalBody>
        <ModalFooter>
          <Button style={{display:'block', margin:'auto'}} color="primary" onClick={() => {
            setSuccessModal(!successModal)
            }}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
        {/* sucessmodal */}
    </>
     </Col>
      
      <Col md="12">
      <Card>
      <CardHeader>
          <CardTitle tag='h4'>Webinar</CardTitle> 
          <h6>2022-05-26</h6>
        </CardHeader>
      <CardBody>
      <CardText>
      ISNT (Organised by Chennai Chapter) will conduct a webinar at 1000 hrs on 23rd May 2021 on "Industry 4.0 solutions for metal testing & Flaw detection at high temperature". The talk will be delivered by Dr Maria Felice & Dr William Vickers.
      </CardText>
      <div style={{display:'flex', justifyContent:'right'}}>
      <a  className=' btn delete' style={{color:"white"}} onClick={() => setBasicModal(!basicModal)}>Delete</a>
      <a  className=' btn readmore' style={{color:"white"}} >Read More
     </a>
     {/* <Col style={{display:'flex', justifyContent:'right'}} className='mb-2 mb-md-0' md='6' sm='12'>
            <Button className='delete'  style={{color:"white"}} onClick={handleConfirmCancel} outline>
              Delete
            </Button>
            <Button className='readmore'  style={{color:"white"}}outline>
              Read More
            </Button>
          </Col> */}
      </div>
      
    </CardBody>
    </Card>
        </Col>
    </Row>
     <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
    <ModalHeader toggle={() => setBasicModal(!basicModal)}>Delete</ModalHeader>
    <ModalBody className='d-flex justify-content-center'>
     <div style={{color:'red'}} ><Icons.AlertCircle size={70}/></div> <br /> <br /> 
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
export default Announcement
