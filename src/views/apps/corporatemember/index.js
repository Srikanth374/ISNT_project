import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
// import WizardModern from './WizardModern'
// import WizardVertical from './WizardVertical'
import CorporateMember from './CorporateMember'
// import WizardModernVertical from './WizardModernVertical'
import BreadCrumbs from '@components/breadcrumbs'

const Wizard = () => {
  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Corporate Member' breadCrumbParent='Form' breadCrumbActive='Corporate Member' />
      <Row>
        <Col sm='12'>
          <CorporateMember />
        </Col>
       
      </Row>
    </Fragment>
  )
}
export default Wizard
