import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import AddStudentMember from './AddStudentMember'
import BreadCrumbs from '@components/breadcrumbs'

const Wizard = () => {
  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Student Member' breadCrumbParent='Form' breadCrumbActive='Student Member' />
      <Row>
        <Col sm='12'>
          <AddStudentMember/>
        </Col>
       
      </Row>
    </Fragment>
  )
}
export default Wizard
