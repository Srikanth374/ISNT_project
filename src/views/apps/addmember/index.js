import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'
import AddMemberForm from './AddMemberForm'

const FormLayouts = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Member' breadCrumbParent='Form' breadCrumbActive='Member' />
      <Row>
        <Col sm='12'>
          <AddMemberForm />
        </Col>
      </Row>
    </Fragment>

    
  )
}
export default FormLayouts
