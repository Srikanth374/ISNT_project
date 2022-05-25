import React, { useState } from 'react'
import {Button, Modal,  ModalHeader, ModalBody, ModalFooter, Input, Label, FormGroup} from 'reactstrap'
import { date } from 'yup'

const CreatePopup = ({modal, toggle, save}) => {
    const [titleName, setTitleName] = useState('')
    const [dateInput, setDateInput] = useState('')
    const [fileInput, setfileInput] = useState('')
    const [description, setDescription] = useState('')

    const handleChange = (e) => {
        const {name, value} = e.target

        if (name === "title") {
            setTitleName(value)
        } else if (name === "date") {
            setDateInput(value)
        } else if (name === "file") {
            setfileInput(value)
        } else {
            setDescription(value)
        }
    }

    const handleSave = () => {
        const taskObj = {}
        taskObj["Title"] = titleName
        taskObj["Date"] = dateInput
        taskObj["File"] = fileInput
        taskObj["Descripition"] = description
        save(taskObj)
    }

    return (        
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add Course</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for='title'>Title</Label>
                            <Input type='text' placeholder='Enter title' value ={titleName} onChange = {handleChange} name= "title"/>
                            </FormGroup>
                            <FormGroup>
                            <Label for='date'>Date</Label>
                            <Input type='date' value ={dateInput} onChange = {handleChange} name= "date"/>
                            </FormGroup>
                            <FormGroup>
                            <Label for='file'>Upload Document</Label>
                            <Input type='file' value ={fileInput} onChange = {handleChange} name= "file"/>
                            </FormGroup>
                            <FormGroup>
                            <Label for='description'>Description</Label>
                            <Input type='textarea'  value ={description} onChange = {handleChange} name= "descripition"/>
                        </FormGroup>  
                    </ModalBody>                  
                    <ModalFooter>
                        <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>               
                            <Button color='primary'  onClick={handleSave}>
                               Create
                            </Button>{' '}
                            <Button color='danger'  onClick={toggle}>
                               cancle
                            </Button>
                        </div>                 
                    </ModalFooter>
            </Modal> 
        
    )
}
export default CreatePopup