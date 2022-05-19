import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Events from './Events'

const FormLayouts = () => {
  return (
    <Fragment>
      {/* <Breadcrumbs breadCrumbTitle='Associate Member' breadCrumbParent='Form' breadCrumbActive='Associate Member' /> */}
      <Row>
        <Col sm='12'>
          <Events />
        </Col>
      </Row>
    </Fragment>

    
  )
}
export default FormLayouts
