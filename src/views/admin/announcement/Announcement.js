// import { AlignCenter } from 'react-feather'
// import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
// import * as Icons from 'react-feather'
// import UILoader from '@components/ui-loader'
import  './announcement.css'
import { Card, CardHeader, CardTitle, CardBody, CardText, Button, Row, Col, FormGroup, Input, Label } from 'reactstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

  const Announcement = () => {  
    
    const announcementForm = () => {
      return MySwal.fire(
        <FormGroup>
              <Label for='email'>Email:</Label>
              <Input type='email' id='email' placeholder='Email Address' />
        </FormGroup>
      )
    }

   const handleConfirmCancel = () => {
      return MySwal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        customClass: {
          confirmButton: 'btn btn-danger',
          cancelButton: 'btn btn-primary ml-1'
        },
        buttonsStyling: false
      }).then(function (result) {
        if (result.value) {
          MySwal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            customClass: {
              confirmButton: 'btn btn-success'
            }
          })
        } else if (result.dismiss === MySwal.DismissReason.cancel) {
          MySwal.fire({
            title: 'Cancelled',
            text: 'Your imaginary file is safe :)',
            icon: 'error',
            customClass: {
              confirmButton: 'btn btn-success'
            }
          })
        }
      })
    }

    // const [basicModal, setBasicModal] = useState(false)
  return (   
    <>
    <Row>
     <Col md="12"   style={{display: 'flex', justifyContent: 'right', bottom:'12px'}}>
     <Button.Ripple className='d-flex justify-content-center' color='primary'  onClick={announcementForm} outline >
        Add Announcement
      </Button.Ripple>
     </Col>
      
      <Col md="12">
      <Card>
      <CardHeader>
          <CardTitle tag='h4'>Webinar</CardTitle> 
          <h6>01 October 2021</h6>
        </CardHeader>
      <CardBody>
      <CardText>
      ISNT (Organised by Chennai Chapter) will conduct a webinar at 1000 hrs on 23rd May 2021 on "Industry 4.0 solutions for metal testing & Flaw detection at high temperature". The talk will be delivered by Dr Maria Felice & Dr William Vickers.
      </CardText>
      <div style={{display:'flex', justifyContent:'right'}}>
      {/* <a  className=' btn delete' style={{color:"white"}} onClick={() => setBasicModal(!basicModal)}>Delete</a>
      <a  className=' btn readmore' style={{color:"white"}} onClick={() => setBasicModal(!basicModal)}>    Read More
     </a> */}
     <Col style={{display:'flex', justifyContent:'right'}} className='mb-2 mb-md-0' md='6' sm='12'>
            <Button className='delete'  style={{color:"white"}} onClick={handleConfirmCancel} outline>
              Delete
            </Button>
            <Button className='readmore'  style={{color:"white"}}outline>
              Read More
            </Button>
          </Col>
      </div>
      
    </CardBody>
    </Card>
        </Col>
    </Row>
    {/* <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
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
   </Modal> */}
     </>
  )
  }
export default Announcement
