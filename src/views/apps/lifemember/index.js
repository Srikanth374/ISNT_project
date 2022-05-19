import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'
import LifeMember from './LifeMember'

const FormLayouts = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Life Member' breadCrumbParent='Form' breadCrumbActive='Life Member' />
      <Row>
        <Col sm='12'>
          <LifeMember />
        </Col>
      </Row>
    </Fragment>

    
  )
}
export default FormLayouts
