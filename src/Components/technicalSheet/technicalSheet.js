import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
let column = [
    "Couleur",
    "Puissance",
    "Vitesse",
    "Assurence"
]
let tab = [
    [
        "Rouge", "80 W", "12 M/H", "Oui"
    ],
    


]
class TechnicalSheet extends Component {
    render() {
        return (
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                           {column.map(element => {
                               return (
                                   <th>{element}</th>
                               )
                           })}
                        </tr>
                    </thead>
                    <tbody>
                        {tab.map(element => {
                               return (
                                   <tr>{element.map(elementChild => {
                                       return (
                                           <th>{elementChild}</th>
                                       )
                                   })}</tr>
                               )
                           })}
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default TechnicalSheet