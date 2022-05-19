import { Card, CardHeader, CardTitle, CardBody, FormGroup, Row, Col, Input, Form, Button, Label} from 'reactstrap'

const Instructions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h1'>Instructions</CardTitle>
      </CardHeader>
      
      <CardBody>
      <h5>Read Carefully before Applying for ISNT Membership</h5><br />
        <ul>
          <li style={{listStyleType:'square'}}>Membership of "Indian Society for Non-Destructive for Non-destructive Testing" is only by invitation by ISNT OR nomination / sponsoring through a Life Members of the Society.</li><br />
          <li style={{listStyleType:'square'}}>Please keep the membership number and name of the Life Member who has given verbal consent for nominating you for new membership of the society.</li><br />
          <li style={{listStyleType:'square'}}>Filling of complete form and submission must be done in a single session. Filled form is not saved by the server for completing at latter stage.</li><br />
          <li style={{listStyleType:'square'}}>Please provide your working e-mail ID as e-mail validation information would be sent to the provided e-mail ID.</li><br />
          <li style={{listStyleType:'square'}}>Your application must be approved by the sponsoring / nominating member of ISNT after verifying and satisfying himself / herself regarding your application only after which attempt to be made for making necessary payment.</li><br />
          <li style={{listStyleType:'square'}}>You may need to inform to the nominating member that you have applied for new membership so that he/ she can validate and confirm the eligibility of your membership and also forwarding your application form to the appropriate authority.</li><br />
        </ul>
      </CardBody>
    </Card>
  )
}
export default Instructions
