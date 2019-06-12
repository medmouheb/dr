import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap'
import Header from './Header'
import Footer from './Footer/Footer'
import {connect} from 'react-redux'
import {removeFromCart} from '../store/actions/actions'
let footerData={
    tab : [
      {
          Label: "Couleur",
          Liste: ["Rose", "Bleu", "Blanc", "vert", "rouge", "violet"]
      },
      {
          Label: "Couleur",
          Liste: ["Rose", "Bleu", "Blanc", "vert", "rouge", "violet"]
      },
      {
          Label: "Couleur",
          Liste: ["Rose", "Bleu", "Blanc", "vert", "rouge", "violet"]
      },
      {
          Label:"adresse",
          Liste:["tunis , sousse","94 878 545"]
      }
    ],
    socialMedia:{
      facebook:"",
      instagram:"",
      twitter:"",
      email:"",
      googlePlus:""
    }
  }
 class Basket extends Component {
    render() {
        return (
            <div>
                <Header /> 
                
                {/* basket contient grid des produit 
                 contient total nombre 
                 className nom de div */}
                <div className="ShoppingList">
                    {
                        
                        this.props.products.map((element) => {
                            return (
                                <Card>
                                    
                                    <Card.Body style = {{display:"flex"}}>
                                        <div>
                                            {/*img à partir pc prb */} 
                                            <img style = {{height:"200px"}} src= {element.Src} />
                                            
                                        </div>
                                        
                                        <div>
                                            <Card.Title>Special title treatment</Card.Title>
                                            <Card.Text>
                                                With supporting text below as a natural lead-in to additional content.
                                            </Card.Text>
                                            <Button onClick={()=>{this.props.removeFromCart(element)}} variant="danger">X</Button>
                                        </div>

                                    </Card.Body>
                                </Card>
                            )
                        }

                        )
                    }

                </div>
                <div className="ShoppingResult">

                </div>
                <Footer data={footerData} />  
            </div>
        );
    }
}
/* importer le produit */
const MapStateToProps =(state) => {
    return {
        products: state.CartReducer.products
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (data) => dispatch(removeFromCart(data))
    }
}
export default connect(MapStateToProps,mapDispatchToProps)(Basket)
  