import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Instructions from './Instructions'
import BreadCrumbs from '@components/breadcrumbs'

const Wizard = () => {
  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Instructions' breadCrumbParent='Form' breadCrumbActive='Instructions' />
      <Row>
        <Col sm='12'>
          <Instructions />
        </Col>
       
      </Row>
    </Fragment>
  )
}
export default Wizard
