// import { AlignCenter } from 'react-feather'
import Select from 'react-select'
import { selectThemeColors } from '@utils'
import { Card, CardHeader, CardTitle, CardBody, FormGroup, Row, Col, Input, Form, Button, Label} from 'reactstrap'


const colourOptions = [
  { value: 'select', label: 'Select' },
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' } 
]

const MembershipProfile = () => {
  return (
    <Card>
       <CardBody>
        <Form>   
            <h5>Membership Profile</h5>
              <Row>
                <Col md='6' sm='12'>
                    <FormGroup>
                        <Label for='nameMulti'>Educational Background:List all degrees and diplomas</Label>
                        <Input type='text' name='name' id='eductionMulti' required/>
                    </FormGroup>
                </Col>
                <Col md='6' sm='12'>
              <FormGroup>
                <Label for='nameMulti'>Membership of other Technical Bodies</Label>
                <Input type='text' name='name' id='memberMulti' required/>
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='lastNameMulti'>Certificates in NDT</Label>
                <Input type='text' name='lastname' id='certificateMulti' />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='cityMulti'>Field of Activity</Label>
                <Input type='dropdown' name='city' id='fieldMulti' />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='CountryMulti'>NDT methods (Please indicate the methods you practice)</Label>
                <Input type='text' name='country' id='ndt'/>
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='CountryMulti'>Type of Organisation</Label>
                <Input type='text' name='country' id='Organisation'/>
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='select-lg'>Discipline</Label>
                <Input type='select' name='select' bsSize='lg' id='select-lg'>
                  <option>Engineering</option>
                  <option>Production</option>
                  <option>Training</option>
                  <option>Management</option>
                  <option>Quality Insurance</option>
                  <option>R&D</option>
                  <option>Marketing</option>
                  <option >Others</option>
                  
                </Input>
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
                    <FormGroup>
                        <Label for='nameMulti'>Continuing Education</Label>
                        <Input type='text' name='name' id='Education' required/>
                    </FormGroup>
                </Col>
                <Col md='6' sm='12'>
                    <FormGroup>
                        <Label for='nameMulti select-lg'>Your contribution to the Society :Interested in</Label>
                        <Input type='select' name='select' bsSize='lg' id='contribution'>
                            <option>Serving Local Chapter</option>
                            <option>Serving in Technical Activities</option>
                            <option>Serving in Education and Training</option>
                            <option>Participation in Local and National Seminars</option>                 
                        </Input>
                    </FormGroup>
                </Col>
                <Col md='6' sm='12'>
                    <FormGroup>
                        <Label for='nameMulti select-lg'>Indicate the Chapter you wish to be affiliated </Label>
                        <Input type='select' name='select' bsSize='lg' id='affiliated'>
                            <option>Select Chapter</option>
                            <option>Ahmedabad</option>
                            <option>Bengaluru</option>
                            <option>Chennai</option>
                            <option>Coimbatore</option> 
                            <option>Delhi</option>
                            <option>Hyderabad</option>
                            <option>Jamshedpur</option>
                            <option>Kalpakkam</option>
                            <option>Kochi</option>
                            <option>Kolkata</option>
                            <option>Kota</option>
                            <option>Mumbai</option>
                            <option>Nagpur</option>
                            <option>Pune</option>
                            <option>Sriharikota</option>
                            <option>Tarapur</option>
                            <option>Thiruvananthapuram</option>
                            <option>Tiruchirapalli</option>
                            <option>Vadodara</option>                 
                        </Input>
                    </FormGroup>
                </Col>
              
            <Col>
              <FormGroup className='d-flex' >
                <Button.Ripple  className='mr-1' color='primary' type='submit'  onClick={MembershipProfile}>
                  Save changes
                </Button.Ripple>
                
              </FormGroup>
            </Col>
            </Row>
        </Form>
      </CardBody>
    </Card>
  )
}
export default MembershipProfile
