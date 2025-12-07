import CareerlinkForm from "./form";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from "react";

export default function CareerlinkFormTable(){
    let [ userData , setData ] = useState([
        [1, "Aryan Kumar", "Student", "LIT2025016"],
        [2, "Virottam Dutt", "Student", "LIT2025017"],
        [3, "Divyansh", "Student", "LIT2025023"],
        [4, "Lakshya", "Student", "LIT2025033"],
        [5, "Pratyush", "Student", "LCS2025038"],
        [6, "Akash", "Student", "LIT2025012"],
        [7, "Vishnu", "Student", "LIT2025037"],
        [8, "Pradeep", "Student", "LCS2025006"],
        [9, "Shreyam", "Student", "LIT2025020"],
        [10, "Atharva", "Student", "LIT2025014"]
    ]);
    let [ id , setId ] = useState(11);
    let updateTable = (name,proff,details) =>{
        setData([...userData, [id, name, proff, details]]);
        setId(id+1);
    }

    let [ cards, setCards ] = useState([
    ])
    let addCard = (idx) => {
        if (!cards.includes(userData[idx])){
            setCards([...cards, userData[idx]])
            window.scrollTo(0,2.8*window.innerHeight)
        }
    }
    let removeCard = (idx) =>{
        setCards(cards.slice(0, idx).concat(cards.slice(idx + 1)))
    }
    return(
        <>
            <CareerlinkForm addRowData={([name,proff,det])=>{updateTable(name,proff,det)}}/>
            <Container>
                <Table striped bordered hover style={{textAlign:"center", width:"67vw"}} className="m-4">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Profession</th>
                      <th>Details</th>
                      <th>Connect</th>
                    </tr>
                  </thead>
                  <tbody>
                            {userData.map((val,idx) => {
                                return (
                                <tr>
                                    <th> {val[0]} </th>
                                    <td> {val[1]} </td>
                                    <td> {val[2]} </td>
                                    <td> {val[3]} </td>
                                    <td> <img src="https://i.postimg.cc/NFsMTYvC/connect.png" height={"25px"} onClick={()=>{addCard(idx)}} style={{cursor:"pointer"}}/> </td>
                                </tr>
                                )
                            })}
                  </tbody>
                </Table>
            </Container>
            <Container className="text-center row">
                <h1 className="fs-2 text-light">Connections</h1>
                {
                    cards.map((val,idx)=>{
                        return(
                            <Card className="col-2 m-4">
                              <Card.Img variant="top" src="https://imgs.search.brave.com/zzGqLhmPfUCegJaj5GtrRUysRaycYY4-eHtPaTPzVtw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/c3ZnLm9yZy9pbWcv/UHJvZmlsZVBsYWNl/aG9sZGVyU3VpdC5w/bmc" />
                              <Card.Body className="text-center p-1 m-0">
                                <Card.Title className="fs-6">{val[1]}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{val[2]}</Card.Subtitle>
                                <Card.Text>{val[3]}</Card.Text>
                                <button className="btn btn-primary" onClick={() => {removeCard(idx)}}>Remove</button>
                              </Card.Body>
                            </Card>
                        )
                    })
                }
            </Container>
        </>
    )
}
