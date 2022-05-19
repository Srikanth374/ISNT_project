// import { AlignCenter } from 'react-feather'
import Select from 'react-select'
import { selectThemeColors } from '@utils'
import { Card, CardHeader, CardTitle, CardBody, FormGroup, Row, Col, Input, Form, Button, Label} from 'reactstrap'


const colourOptions = [
  { value: 'select', label: 'Select' },
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' } 
]

const LifeMember = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h1'>Life Member</CardTitle>
      </CardHeader>
      

      <CardBody>
        <Form>
          <Row>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='nameMulti'>Name<span style={{color:'red', fontSize: 18}} >*</span></Label>
                <Input type='text' name='name' id='nameMulti' required/>
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='lastNameMulti'>Name of the Organiation<span style={{color:'red', fontSize: 18}} >*</span></Label>
                <Input type='text' name='lastname' id='lastNameMulti' />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
            <FormGroup>
                <Label for='CountryMulti'>Gender<span style={{color:'red', fontSize: 18}} >*</span></Label>
                {/* <Label>Basic</Label> */}
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={colourOptions[0]}
              options={colourOptions}
              isClearable={false}
            />
              </FormGroup>
              
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='CountryMulti'>Designation<span style={{color:'red', fontSize: 18}} >*</span></Label>
                <Input type='text' name='country' id='CountryMulti'/>
              </FormGroup>
            </Col>
            </Row>
            <br/>
          
              <h5>Address for Correspondence</h5>
              <Row>
                <Col md='12' sm='12'>
                    <FormGroup>
                        <Label for='nameMulti'>City/Town<span style={{color:'red', fontSize: 18}} >*</span></Label>
                        <Input type='text' name='name' id='nameMulti' required/>
                    </FormGroup>
                </Col>
                <Col md='6' sm='12'>
              <FormGroup>
                <Label for='nameMulti'>State<span style={{color:'red', fontSize: 18}} >*</span></Label>
                <Input type='text' name='name' id='nameMulti' required/>
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='lastNameMulti'>Pin<span style={{color:'red', fontSize: 18}} >*</span></Label>
                <Input type='text' name='lastname' id='lastNameMulti' />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='cityMulti'>Mobile/Tel.No<span style={{color:'red', fontSize: 18}} >*</span></Label>
                <Input type='dropdown' name='city' id='cityMulti' />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='CountryMulti'>Office</Label>
                <Input type='text' name='country' id='CountryMulti'/>
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='CountryMulti'>Residence</Label>
                <Input type='text' name='country' id='CountryMulti'/>
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='CountryMulti'>Email<span style={{color:'red', fontSize: 18}} >*</span></Label>
                <Input type='email' name='country' id='CountryMulti'/>
              </FormGroup>
            </Col>
            <Col md='12' sm='12'>
                    <FormGroup>
                        <Label for='nameMulti'>Date of Birth<span style={{color:'red', fontSize: 18}} >*</span></Label>
                        <Input type='date' name='name' id='nameMulti' required/>
                    </FormGroup>
                </Col>
              </Row>
              <br/>

            <h5>Permanent/Home/Alternate Address</h5>
              <Row>
                <Col md='6' sm='12'>
                    <FormGroup>
                        <Label for='nameMulti'>City/Town</Label>
                        <Input type='text' name='name' id='nameMulti' required/>
                    </FormGroup>
                </Col>
                <Col md='6' sm='12'>
              <FormGroup>
                <Label for='nameMulti'>State</Label>
                <Input type='text' name='name' id='nameMulti' required/>
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='lastNameMulti'>Pin</Label>
                <Input type='text' name='lastname' id='lastNameMulti' />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='cityMulti'>Telephone</Label>
                <Input type='dropdown' name='city' id='cityMulti' />
              </FormGroup>
            </Col>
              </Row>
            <br/>
            <h5>Sponsoring ISNT Member</h5>
              <Row>
                <Col md='4' sm='12'>
                    <FormGroup>
                        <Label for='nameMulti'>Membership No<span style={{color:'red', fontSize: 18}} >*</span></Label>
                        <Input type='text' name='name' id='nameMulti' required/>
                    </FormGroup>
                </Col>
                <Col md='4' sm='12'>
              <FormGroup>
                <Label for='nameMulti'>Name<span style={{color:'red', fontSize: 18}} >*</span></Label>
                <Input type='text' name='name' id='nameMulti' required/>
              </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='lastNameMulti'>Email<span style={{color:'red', fontSize: 18}} >*</span></Label>
                <Input type='email' name='lastname' id='lastNameMulti' />
              </FormGroup>
            </Col>
              </Row>
            <br/>
            <h5>Membership Profile</h5>
              <Row>
                <Col md='6' sm='12'>
                    <FormGroup>
                        <Label for='nameMulti'>Educational Background:List all degrees and diplomas</Label>
                        <Input type='text' name='name' id='nameMulti' required/>
                    </FormGroup>
                </Col>
                <Col md='6' sm='12'>
              <FormGroup>
                <Label for='nameMulti'>Membership of other Technical Bodies</Label>
                <Input type='text' name='name' id='nameMulti' required/>
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='lastNameMulti'>Certificates in NDT</Label>
                <Input type='text' name='lastname' id='lastNameMulti' />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='cityMulti'>Field of Activity</Label>
                <Input type='dropdown' name='city' id='cityMulti' />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='CountryMulti'>NDT methods (Please indicate the methods you practice)</Label>
                <Input type='text' name='country' id='CountryMulti'/>
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='CountryMulti'>Type of Organisation</Label>
                <Input type='text' name='country' id='CountryMulti'/>
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
                        <Input type='text' name='name' id='nameMulti' required/>
                    </FormGroup>
                </Col>
                <Col md='6' sm='12'>
                    <FormGroup>
                        <Label for='nameMulti select-lg'>Your contribution to the Society :Interested in</Label>
                        <Input type='select' name='select' bsSize='lg' id='select-lg'>
                            <option>Serving Local Chapter</option>
                            <option>Serving in Technical Activities</option>
                            <option>Serving in Education and Training</option>
                            <option>Participation in Local and National Seminars</option>                 
                        </Input>
                    </FormGroup>
                </Col>
                <Col md='6' sm='12'>
                    <FormGroup>
                        <Label for='nameMulti select-lg'>Indicate the Chapter you wish to be affiliated (Geographically Nearest to your place of work)<span style={{color:'red', fontSize: 18}} >*</span></Label>
                        <Input type='select' name='select' bsSize='lg' id='select-lg'>
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
              </Row>
            <Row>
            {/* <CardHeader>
              <CardTitle tag="h6">If Membership Fees is through your organisation</CardTitle>
            </CardHeader> */}
            <CardHeader><h5>If Membership Fees is through your organisation</h5></CardHeader>
            <Col md='12'>
            <FormGroup check inline>
              <Label check>
                <Input type='radio'  value="yes"/> Yes
              </Label>
            </FormGroup>
            </Col>
            <br />
            <br />
            <Col md='12'>
            <FormGroup check inline>
              <Label check>
                <Input type='radio' value="no"/> No
              </Label>
            </FormGroup>
            </Col>
            <br />
            <br />

            {/* <CardHeader>
              <CardTitle tag="h6" >Additional Information</CardTitle>
            </CardHeader> */}
            <CardHeader><h5>Additional Information</h5></CardHeader>
            
            <Col md='12' sm='12'>
                    <FormGroup>
                        <Input type='textarea' name='name' id='nameMulti' required/>
                    </FormGroup>
                </Col>

            </Row>
            <Col>
              <FormGroup className='d-flex justify-content-center' >
                <Button.Ripple  className='mr-1' color='primary' type='submit'  onClick={LifeMember}>
                  Submit
                </Button.Ripple>
                <Button.Ripple outline color='secondary' type='reset'>
                  Reset
                </Button.Ripple>
              </FormGroup>
            </Col>
          
        </Form>
      </CardBody>
    </Card>
  )
}
export default LifeMember
