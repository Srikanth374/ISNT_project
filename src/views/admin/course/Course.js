// import { AlignCenter } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Button} from 'reactstrap'
// import UILoader from '@components/ui-loader'
import  './course.css'
import Todo from './Todo'

const Course = () => {
  return (
    <>
    <div>
      <Todo />
    </div>
    {/* <Row>
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
      
      <div style={{display: 'flex', justifyContent: 'right'}}>
      <div><a className='btn  delete'   href='#'>Delete</a></div> <br/>
      <div><a className='btn  readmore'   href='#'>Read more</a></div>
      </div>
      
    </CardBody>
    </Card>
        </Col>
        
    </Row> */}
    {/* <div style={{display: 'flex', justifyContent: 'right'}}>
      <Button.Ripple className='d-flex justify-content-center' color='primary'  onClick={() => setformAnn(!formAnn)} outline >
        Add Announcement
      </Button.Ripple>
    </div> */}
    
    </>
      
  )
    
}
export default Course
