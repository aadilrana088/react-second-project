import React from 'react'
import {Card} from 'react-bootstrap'
import '../Component/avatar.css'
function AvatarList(props) {
    return (
        <Card style={{ width: '18rem' }} className="card-style">
            <Card.Img variant="top" src={`https://joeschmoe.io/api/v1/random${props.name}`} alt={props.name}/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.work}
                </Card.Text>
            </Card.Body>
            </Card>
    )
}
export default AvatarList