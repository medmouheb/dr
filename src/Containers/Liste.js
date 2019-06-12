import React, { Component } from 'react'
import Header from './Header'
import Grid from '../Components/grid/grid';
import Filters from '../Components/filters/filters';
import Footer from './Footer/Footer'
let filters = [
  {
      Label: "order",
      Liste: ["from a to z", "from z to a", "hiegher", "lower", ]
  },
  {
      Label: "Couleur",
      Liste: ["Rose", "Bleu", "Blanc", "vert", "rouge", "violet"]
  },
  {
      Label: "size",
      Liste: ["extra small", "small", "normal", "large", "extra large"]
  },
]
let products = [
  {
    Nom:"Jolie Veuilleuse",
    Src:"https://otriki.files.wordpress.com/2010/01/21_veilleuse_romantique_lamitee.jpg",
    Prix:"50 DT",
    Reduction:"20%",
    Rating: 4

  },
  {
    Nom:"Jolie Veuilleuse",
    Src:"https://otriki.files.wordpress.com/2010/01/21_veilleuse_romantique_lamitee.jpg",
    Prix:"50 DT",
    Reduction:"20%",
    Rating: 4

  },
  {
    Nom:"Piano",
    Src:"https://www.musicplus.tn/media/catalog/product/cache/1/image/1152x720/9df78eab33525d08d6e5fb8d27136e95/b/a/baby_white_grand_piano_gp148-1000x1000_1.jpg",
    Prix:"2550 DT",
    Reduction:"20%",
    Rating: 4

  },
  
]
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
class Liste extends Component {
  render() {
    return (
      <div>
       <Header />
       <div style = {{display : "flex"}}>
       <Filters data={filters}/>
       <Grid data={products} />
       </div>
       <Footer data={footerData} /> 
       
      </div>
    )
  }
}

export default Liste