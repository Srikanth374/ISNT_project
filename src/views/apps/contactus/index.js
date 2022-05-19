import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Contact from './Contact'

const FormLayouts = () => {
  return (
    <Fragment>
      {/* <Breadcrumbs breadCrumbTitle='Associate Member' breadCrumbParent='Form' breadCrumbActive='Associate Member' /> */}
      <Row>
        <Col sm='12'>
          <Contact />
        </Col>
      </Row>
    </Fragment>

    
  )
}
export default FormLayouts
