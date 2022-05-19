import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import FellowMember from './FellowMember'
import BreadCrumbs from '@components/breadcrumbs'

const Wizard = () => {
  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Fellow Member' breadCrumbParent='Form' breadCrumbActive='Fellow Member' />
      <Row>
        <Col sm='12'>
          <FellowMember />
        </Col>
       
      </Row>
    </Fragment>
  )
}
export default Wizard
