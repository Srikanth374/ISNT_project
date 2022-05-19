// import { AlignCenter } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col} from 'reactstrap'
import { PhoneIncoming  } from 'react-feather'
import { BsEnvelope } from "react-icons/bs"
import { IoMdCall } from "react-icons/io"


// import UILoader from '@components/ui-loader'
import  './contact.css'
import Isnt from "./ISNT_logo.jpg"


const Contact = () => {
  return (
    <Row>
    <Col md="12">
            <Card>
            <CardBody>
                  <Row>
                  <Col md="2">
                      <img className='isnt' src={Isnt} alt="fireSpot"/>
                  </Col>
                    <Col  md="10" style={{justifyContent:'center', alignItems:'left', display:'flex', flexDirection: 'column'}} >
                      <h4><a className='indian' href='#'>Indian Society for Non-Destructive Testing (ISNT)</a></h4>
                      <p>Modules 60 & 61, 3rd floor, Garment Complex, SIDCO Industrial Estate, Guindy, Chennai - 600 032. Tamilnadu, India</p>
                      <p> <IoMdCall  size={15}/> 044-2250 0412 / 4203 8175</p>
                      <p> <BsEnvelope  size={15}/> isntheadoffice@gmail.com , <a href='mailto:headoffice@isnt'  className='indian'>headoffice@isnt.in</a></p>

                      {/* <ul style={{listStyle:'none', justifyContent:'center', alignItems:'left', display:'flex', flexDirection: 'column'}}>
                        <li>044-2250 0412 / 4203 8175</li>
                        <li>
                          <a href='#'>isntheadoffice@gmail.com</a> , <a href='mailto:headoffice@isnt'>headoffice@isnt.in</a>
                        </li>
                      </ul> */}
                    </Col>
                  </Row>
              </CardBody>
            </Card>
     </Col>
    </Row>               
      )                  
}
export default Contact
