import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Button, Modal, Input, Label,  FormGroup, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import  './course.css'
import * as Icons from 'react-feather'

const ItemCard = ({taskObj, index, deleteTask}) => {
    const [basicModal, setBasicModal] = useState(false)
    const handleDelete = () => {
        
        deleteTask(index)
    }

    // const handleConfirmCancel = () => {
        
        return (
            <>
             <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
                    <ModalHeader toggle={() => setBasicModal(!basicModal)}>Delete</ModalHeader>
                    <ModalBody className='d-flex justify-content-center'>
                    <div style={{color:'red'}} ><Icons.AlertCircle size={70}/></div> <br /> <br /> 
                    </ModalBody>
                    <div className='d-flex justify-content-center'><h2>Are You Sure</h2></div>
                    <div className='d-flex justify-content-center'><p>You won't be able to revert this!</p></div>
                    
                    <ModalFooter>
                    <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
                    
                    <Button className='d-flex justify-content-center delete' style={{color:"white"}} onClick= {handleDelete}>
                        Yes, delete it!
                    </Button>
                    <Button className='d-flex justify-content-center' color='primary' outline onClick={() => setBasicModal(!basicModal)} >
                        Cancle
                    </Button>

                    </div>
                    
                    </ModalFooter>
            </Modal> 

            <div>
        <Row>
            <Col md="12">
            <Card>
                <CardHeader>
                    <CardTitle tag='h4'>{taskObj.Title}</CardTitle> 
                    <h6>{taskObj.Date}</h6> 
                    </CardHeader>                           
                <CardBody>
                <CardText> 
                {taskObj.File}                 
                {taskObj.Descripition}
                </CardText>                
                <div style={{display: 'flex', justifyContent: 'right'}}>
                <a className='btn delete' style={{color:"white"}} onClick={() => setBasicModal(!basicModal)}>
                    Delete
                </a>
                <div><a className='btn  readmore' style={{color:"white"}} >Read more</a></div>
                </div>
            </CardBody>
            </Card>
            </Col>      
        </Row>
    </div>
            </>
        )
      }

    // return (
    // <div>
    //     <Row>
    //         <Col md="12">
    //         <Card>
    //             <CardHeader>
    //                 <CardTitle tag='h4'>{taskObj.Title}</CardTitle> 
    //                 <h6>{taskObj.Date}</h6> 
    //                 </CardHeader>      
    //             <CardBody>
    //             <CardText>
    //             {taskObj.Descripition}
    //             </CardText>
                
    //             <div style={{display: 'flex', justifyContent: 'right'}}>
    //             <Button.Ripple color='primary' outline onClick={() => setBasicModal(!basicModal)}>
    //                 Basic Modal
    //             </Button.Ripple>
    //             <div><a className='btn  readmore' style={{color:"white"}} >Read more</a></div>
    //             </div>
    //         </CardBody>
    //         </Card>
    //         </Col>      
    //     </Row>
    // </div>
    // )
// }
//  onClick = {handleDelete}
export default ItemCard