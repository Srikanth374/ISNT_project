
import { Card, CardBody, FormGroup, Row, Col, Input, Form, Button, Label} from 'reactstrap'

const AssociateMember = () => {
  return (
    <Card>     
      <CardBody>
        <Form>          
              <h5>Address for Correspondence</h5>
              <Row>
                <Col md='12' sm='12'>
                    <FormGroup>
                        <Label for='townMulti'>City/Town</Label>
                        <Input type='text' name='name' id='townMulti' required/>
                    </FormGroup>
                </Col>
                <Col md='6' sm='12'>
              <FormGroup>
                <Label for='stateMulti'>State</Label>
                <Input type='text' name='name' id='stateMulti' required/>
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='lastNameMulti'>Pin</Label>
                <Input type='text' name='lastname' id='pinMulti' />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='cityMulti'>Mobile/Tel.No</Label>
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
                <Label for='CountryMulti'>Email</Label>
                <Input type='email' name='country' id='emailMulti'/>
              </FormGroup>
            </Col>
            {/* <Col md='12' sm='12'>
                    <FormGroup>
                        <Label for='nameMulti'>Date of Birth<span style={{color:'red', fontSize: 18}} >*</span></Label>
                        <Input type='date' name='name' id='dateMulti' required/>
                    </FormGroup>
                </Col> */}             
              <Col className='mt-1' sm='12'>
                <Button.Ripple className='mr-1' color='primary'>
                  Save changes
                </Button.Ripple>
          {/* <Button.Ripple color='secondary' outline>
            Cancel
          </Button.Ripple> */}
        </Col>
        </Row>
        </Form>
      </CardBody>
    </Card>
  )
}
export default AssociateMember
