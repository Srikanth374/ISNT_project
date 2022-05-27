// import { AlignCenter } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Button, Modal, Input, Label,  FormGroup, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import * as Icons from 'react-feather'
import { MdLocationPin } from "react-icons/md"
import { AiOutlineClockCircle } from "react-icons/ai"
import { useState } from "react"
// import UILoader from '@components/ui-loader'
import  './events.css'
import Isnt from "./nde_logo.jpg"


const Contact = () => {
  const [basicModal, setBasicModal] = useState(false)
  return (
    <>
    <Row>
    <Col md="12">
            <Card>
            <CardBody>
                  <Row>
                  <Col md="2">
                      <img className='nde' src={Isnt} alt="fireSpot"/>
                  </Col>
                    <Col  md="10" style={{justifyContent:'center', alignItems:'left', display:'flex', flexDirection: 'column'}} >
                      <h4><a className='indian' href='#'>Virtual Conference and Exhibition on Non-Destructive Evaluation (NDE-2020).</a></h4>                     
                      <p> <MdLocationPin  size={15}/>  Virtual Platform</p>
                      <p> <AiOutlineClockCircle  size={15}/>  09/12/2020 - 12/12/2020</p>
                      <Row>
                        <Col md="3">
                        <div><a className='btn  Download'href='#'>Download </a></div>
                        </Col>
                        <Col md="3">
                        <div><a className='btn  Read'   href='#'>Read more</a></div>
                        </Col>                      
                        <Col>
                        <div><a className='btn' style={{color:"white", backgroundColor:"red"}} onClick={() => setBasicModal(!basicModal)}>Delete</a></div>
                        </Col>     
                      </Row>
                    </Col>
                  </Row>
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
      
     <Button.Ripple className='d-flex justify-content-center' style={{color:"white", backgroundColor:"red"}} outline onClick={() => setBasicModal(!basicModal)}>
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
export default Contact
