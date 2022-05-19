import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'
import AssociateMember from './AssociateMember'

const FormLayouts = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Associate Member' breadCrumbParent='Form' breadCrumbActive='Associate Member' />
      <Row>
        <Col sm='12'>
          <AssociateMember />
        </Col>
      </Row>
    </Fragment>

    
  )
}
export default FormLayouts
