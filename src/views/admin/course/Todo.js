import React, {useState} from 'react'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Button} from 'reactstrap'
import CreatePopup from './CreatePopup'

const Todo = () => {
    const [modal, setModal] = useState(false) 
    const toggle = () => {
        setModal(!modal)
    }
    return (
    <>
            <div style={{display: 'flex', justifyContent: 'right'}}>
                <Button.Ripple className='d-flex justify-content-center' color='primary'  outline onClick={() => setModal(true)} >
                    Add Announcement
                </Button.Ripple>
            </div>
            <CreatePopup toggle ={toggle} modal ={modal} />
    </>
    )
}

export default Todo