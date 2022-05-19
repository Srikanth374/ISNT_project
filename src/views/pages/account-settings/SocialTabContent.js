
import { Card, CardBody, FormGroup, Row, Col, Input, Form, Button, Label} from 'reactstrap'


const colourOptions = [
  { value: 'select', label: 'Select' },
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' } 
]

const AssociateMember = () => {
  return (
    <Card>
      
      <CardBody>
        <Form>
          
              <h5>Address for Correspondence</h5>
              <Row>
                <Col md='12' sm='12'>
                    <FormGroup>
                        <Label for='townMulti'>City/Town<span style={{color:'red', fontSize: 18}} >*</span></Label>
                        <Input type='text' name='name' id='townMulti' required/>
                    </FormGroup>
                </Col>
                <Col md='6' sm='12'>
              <FormGroup>
                <Label for='stateMulti'>State<span style={{color:'red', fontSize: 18}} >*</span></Label>
                <Input type='text' name='name' id='stateMulti' required/>
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='lastNameMulti'>Pin<span style={{color:'red', fontSize: 18}} >*</span></Label>
                <Input type='text' name='lastname' id='pinMulti' />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='cityMulti'>Mobile/Tel.No<span style={{color:'red', fontSize: 18}} >*</span></Label>
                <Input type='dropdown' name='city' id='modileMulti' />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='CountryMulti'>Office</Label>
                <Input type='text' name='country' id='Country'/>
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='CountryMulti'>Residence</Label>
                <Input type='text' name='country' id='residence'/>
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='CountryMulti'>Email<span style={{color:'red', fontSize: 18}} >*</span></Label>
                <Input type='email' name='country' id='emailMulti'/>
              </FormGroup>
            </Col>
            <Col md='12' sm='12'>
                    <FormGroup>
                        <Label for='nameMulti'>Date of Birth<span style={{color:'red', fontSize: 18}} >*</span></Label>
                        <Input type='date' name='name' id='dateMulti' required/>
                    </FormGroup>
                </Col>
              </Row>
              <br/>
           
            <Col>
              <FormGroup className='d-flex justify-content-center' >
                <Button.Ripple  className='mr-1' color='primary' type='submit'  onClick={AssociateMember}>
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
export default AssociateMember
