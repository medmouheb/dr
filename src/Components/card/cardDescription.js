import React, { Component } from 'react'
import { Card, Button, ListGroup } from 'react-bootstrap'
import './cardDescription.css'
// coonect fait la liaison entre composant et redux (store)
// connect recoit 2 paramètre comprend 1 comme etant mapStateToProps et 2 comme mapDispatchToProps
import { connect } from 'react-redux'
//?
import * as actionCreators from '../../store/actions/actions'

// javascript peut contenir # types de données au meme temps exemple objet, entier, str.... 

class CardDescription extends Component {
    // declaration de chaque variable particulière à 1 composant doit etre ecrite sous state
 state= {
     // variable responsable d'afficher ou non liste
     showListeCara: false
 }
    render() {
        //handleClick: fonction
        // event: chaque action dans browser
        //event.preventDefault(): si tu as une action qui se deroule par defaut arrete la
        // this.setState({showListeCara:true}) ne s'execute qu'après 1 click
        // setState responsable de modification dans 1 composant
        // ! l'antagoniste de boolean

        const handleClick=(event)=>{
            event.preventDefault()
            this.setState({showListeCara:!this.state.showListeCara})
        }
        return (
            <div>
                
                            <Card>
                                <Card.Header as="h5">Featured</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                     {/* les apportent à travers tab */}
                                        Nom: {this.props.Description.Nom} <br />
                                        Prix:  {this.props.Description.Prix}<br />
                                        Réduction: {this.props.Description.Reduction}<br />
                                        {/* si true alors button 1 si non button 2 grace à l'opérateur ternaire */}
                                        Disponibilité: {this.props.Description.Disponibilite?<Button size="sm" variant="success">Disponible</Button> :<Button size="sm" variant="danger">Indisponible</Button> }<br/>                                
                                        Livraison: {this.props.Description.Livraison}<br />
                                        {/* a: balise de declaration d'1 lien href: lien qu'on va y arriver
                                         onClick : fonction predifinie de HTML
                                         = {}: fonction
                                         (event): ou e  dans onClicj c.à.d l'evenement instantané
                                         {(event)=>{handleClick(event)}}: executer traitement de handleClick sur l'event

                                         
                                    */}
                                        ListCaraImg: <a onClick={(event)=>{handleClick(event)}} href = "#">Cliquer ici si vous voulez savoir les caractéristiques de produit</a>
                                        {/*display: apparence 
                                        none: non*/}
                                        {/* on peut faire une card dans une autre card */}
                                        <Card style={{ display: this.state.showListeCara?"":"none" }}>

                                                <Card.Header>{this.props.Description.Nom}</Card.Header>
                                                {/* variant a une relation avec couleur dans bootstrap
                                                listGroup: liste sous forme d'un tableau avec 1 seul column
                                                flush: eliminer bordure
                                                
                                                */}
                                                
                                                <ListGroup variant="flush">
                                                    {/* element: elt de tab
                                                    element0: elt listecara
                                                    listGroup.Item : rectangle qui contient l'info
                                                    {element0}: elt de listecara

                                                     */}
                                                {this.props.Description.ListCaraImg.map((element0) =>{
                                                        return (
                                                           <ListGroup.Item>{element0}</ListGroup.Item> 
                                                              )
                                                       }
                                        )
                                        }
                                                  
                                                </ListGroup>
                                               { /* retour à la ligne*/ }
                                              </Card> <br/>
                                        {/*  ["","","","",""] : pour avoir 5 places pour attribuer des etoiles*/}
                                           Rating:{
                                            ["","","","",""].map((element0,index)=>
                                
                                            
                                            {
                                                {/*  < comparaison
                                                    span comme div plus petite
                                                fa fastar: from bootstrap
                                                checked parametre qu'on a definit dans css color orange */}
                                                return(
                                                    
                                                        index<this.props.Description.Rating?<span className="fa fa-star checked"></span>:<span className="fa fa-star "></span>
                                                )
                                            }
                                            )
                                        }
                            
                                    </Card.Text>
                                   
                                    <Button variant="primary" onClick={this.props.addToCard}>Ajouter au panier</Button>
                                    


                                </Card.Body>
                            </Card>
                       
            </div>
        )
  }
}

{/*actionCreators */}

const mapDispatchToProps = dispatch => {
    return {
        addToCard: () => dispatch(actionCreators.addToCardAction()),
        
    }
};


export default connect(null, mapDispatchToProps)(CardDescription);

