import React,{Fragment, useState} from 'react'
import AvatarList from './AvatarList'
import {Button,Row, Col} from 'react-bootstrap'
function Avatar() {
    let avatarList = [
        {id: '1',name: 'Jason',work: 'React Developer'},
        {id: '2',name: 'Joe',work: 'Flutter Developer'},
        {id: '3',name: 'Adam',work: 'UI Developer'},
        {id: '4',name: 'Doe',work: 'UI Developer'}
    ]
    let [name,setName] = useState("Welcome to the world of Avatar")
    return (
        <div className="container">
            <h1>{name}</h1>
            <Row>
                {
                    avatarList.map((item,index)=> 
                    <Col><AvatarList name= {avatarList[index].name} work={avatarList[index].work}/></Col>
                    )
                }
                
                {/* <Col><AvatarList name= {avatarList[1].name} work={avatarList[1].work}/></Col>
                <Col><AvatarList name= {avatarList[2].name} work={avatarList[2].work}/></Col> */}
            </Row>
            {/* <Row>
                <Col xs={12} md={4}>
                    <AvatarList name= "Doe" work="UI Developer"/>
                </Col>
                <Col xs={12} md={4}>
                <AvatarList name= "Joe" work="Flutter Developer"/>
                </Col>
                <Col xs={12} md={4}>
                <AvatarList name= "Jason" work="React Developer"/>
                </Col>
            </Row> */}
            <div className="button-css">
                <Button variant="primary" onClick = {()=>setName("Thanks for Subscribing Avatar")}>Subscribe</Button>
            </div>
        </div>
    )
}
export default Avatar