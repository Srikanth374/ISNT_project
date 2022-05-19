import { useState } from 'react'
// import UILoader from '@components/ui-loader'
import { Card, CardHeader, CardTitle, CardText, CardBody} from 'reactstrap'
import  './basicBlock.css'

const BasicBlocking = () => {
  const [block, setBlock] = useState(false)

  const handleBlock = () => {
    setBlock(true)

    setTimeout(() => {
      setBlock(false)
    }, 2000)
  }

  return (
    // <UILoader blocking={block}>
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Webinar</CardTitle> 
          <h6>01 October 2021</h6>
        </CardHeader>
        <CardBody>
          <CardText>
          ISNT (Organised by Chennai Chapter) will conduct a webinar at 1000 hrs on 23rd May 2021 on "Industry 4.0 solutions for metal testing & Flaw detection at high temperature". The talk will be delivered by Dr Maria Felice & Dr William Vickers.
          </CardText>
          {/* <Button className='d-flex justify-content-center' color='primary' outline onClick={handleBlock}>
            Block
          </Button> */}
          <div  style={{display: 'flex', justifyContent: 'right'}}><a className='btn  readmore'   href='#' onClick={handleBlock}>Read more</a></div>
          
        </CardBody>
      </Card>

      
    // </UILoader>
  )
}

export default BasicBlocking
