import { Card, CardBody, FormGroup, Row, Col, Input, Form, Button, Label} from 'reactstrap'

const AssociateMember = () => {
  return (
    <Card>
      
      <CardBody>
        <Form>

            <h5>Permanent/Home/Alternate Address</h5>
              <Row>
                <Col md='6' sm='12'>
                    <FormGroup>
                        <Label for='nameMulti'>City/Town</Label>
                        <Input type='text' name='name' id='city' required/>
                    </FormGroup>
                </Col>
                <Col md='6' sm='12'>
              <FormGroup>
                <Label for='nameMulti'>State</Label>
                <Input type='text' name='name' id='state' required/>
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='lastNameMulti'>Pin</Label>
                <Input type='text' name='lastname' id='pin' />
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
