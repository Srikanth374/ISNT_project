import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import LifeCorporate from './LifeCorporate'
import BreadCrumbs from '@components/breadcrumbs'

const Wizard = () => {
  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Life Corporate Member' breadCrumbParent='Form' breadCrumbActive='Life Corporate Member' />
      <Row>
        <Col sm='12'>
          <LifeCorporate />
        </Col>
       
      </Row>
    </Fragment>
  )
}
export default Wizard
