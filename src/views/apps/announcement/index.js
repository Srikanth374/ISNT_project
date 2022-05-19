import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Announcement from './Announcement'

const FormLayouts = () => {
  return (
    <Fragment>
      {/* <Breadcrumbs breadCrumbTitle='Associate Member' breadCrumbParent='Form' breadCrumbActive='Associate Member' /> */}
      <Row>
        <Col sm='12'>
          <Announcement />
        </Col>
      </Row>
    </Fragment>

    
  )
}
export default FormLayouts
