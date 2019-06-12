import React, { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer/Footer'
import SlideMainImage from '../../Components/slideMainImage/slideMainImage';
import CardDescription from '../../Components/card/cardDescription';
// import TechnicalSheet from '../Components/technicalSheet/technicalSheet';
import './Details.css'
let productDescription = 
  // {} objet
  {
      Nom: "Nounours Puluche",
      Prix: "150 DT",
      Reduction: "0%",
      Disponibilite: false,
      Livraison: "le produit sera livré sur tout le territoire de la Tunisie à partir de 01/05/2019",
      ListCaraImg: ["le rom est 4 ","le ram est 4","le disque dur est 1"],
      Rating: 4
  }
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
    ],
    socialMedia:{
      facebook:"",
      instagram:"",
      twitter:"",
      email:"",
      googlePlus:""
    }
  }

  let images = [
    "https://tn.jumia.is/xz7qLJFXw-aqQXDX4TqhXBhpLdw=/fit-in/60x60/filters:fill(white):sharpen(1,0,false):quality(100)/product/04/7421/1.jpg?4656",
    "https://tn.jumia.is/b96joxrQn7E7rUSqjQNDoXEA33o=/fit-in/60x60/filters:fill(white):sharpen(1,0,false):quality(100)/product/04/7421/2.jpg?4656",
    "https://tn.jumia.is/YyOwN4xdiOsytuJNKAsx-ugCz5Y=/fit-in/60x60/filters:fill(white):sharpen(1,0,false):quality(100)/product/04/7421/3.jpg?4656",
    "https://tn.jumia.is/dtNHjjL54i2l5E4SgEtqCtfej04=/fit-in/60x60/filters:fill(white):sharpen(1,0,false):quality(100)/product/04/7421/4.jpg?4656" 
    
]
 class Details extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <TechnicalSheet /> */}
        <div className ="ProductDetails"> 
        <SlideMainImage data={images} />
        <CardDescription Description={productDescription} />
        </div>
        <Footer data={footerData} /> 
      </div>
    )
  }
}
export default Details