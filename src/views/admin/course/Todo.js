import React, {useState, useEffect} from 'react'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Button} from 'reactstrap'
import CreatePopup from './CreatePopup'
import ItemCard from './ItemCard'

const Todo = () => {
    const [modal, setModal] = useState(false) 
    const [taskList, setTaskList] = useState([])

    useEffect(() => {
        const arr = localStorage.getItem("taskList")
        
        if (arr) {
            const obj = JSON.parse(arr)
            setTaskList(obj)
        }

    }, [])

    const deleteTask = (index) => {
        const tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal)
    }

    const SaveTask = (taskObj) => {
        const tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setModal(false)
        setTaskList(tempList)
    }

    return (
    <>
            <div style={{display: 'flex', justifyContent: 'right', marginBottom: '1%'}}>
                <Button.Ripple className='d-flex justify-content-center' color='primary'  outline onClick={() => setModal(true)} >
                    Add Announcement
                </Button.Ripple>
            </div>
            <div className='task-Container'>
                {taskList.map((obj, index) => <ItemCard taskObj = {obj} index = {index} key={index + 1} deleteTask={deleteTask} />)}
                {/* {taskList.map((obj, index) => <ItemCard taskObj = {obj} index = {index}/>)}
                {taskList.map((obj, index) => <ItemCard taskObj = {obj} index = {index}/>)} */}
            </div>
            <CreatePopup toggle ={toggle} modal ={modal} save = {SaveTask} />
    </>
    )
}

export default Todo