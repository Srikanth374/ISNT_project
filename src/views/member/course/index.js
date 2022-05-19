import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Course from './Course'

const FormLayouts = () => {
  return (
    <Fragment>
      {/* <Breadcrumbs breadCrumbTitle='Associate Member' breadCrumbParent='Form' breadCrumbActive='Associate Member' /> */}
      <Row>
        <Col sm='12'>
          <Course />
        </Col>
      </Row>
    </Fragment>

    
  )
}
export default FormLayouts
