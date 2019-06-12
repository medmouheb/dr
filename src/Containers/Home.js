import React, { Component } from 'react'
import Header from './Header'
import ControlledCarousel from '../Components/carousel/carousel';
import Grid from '../Components/grid/grid';
import Footer from './Footer/Footer'
let tab = [
  {
    Titre: "Slide 1",
    Src: "https://d2h1pu99sxkfvn.cloudfront.net/b0/1931043/213159732.jpg",
    Description: " description Slide 1"
  },
  {
    Titre: " Slide 2",
    Src: "https://img.bfmtv.com/c/630/420/212/962a8ae88f8b6edd04127e7a55f2a.jpg",
    Description: "description Slide 2"
  },
  {
    Titre: "Slide 3",
    Src: "https://www.mbtech.fr/c/183-category_default/appareil-photo-jetable.jpg",
    Description: "description Slide 3"
  },
  {
    Titre: "Slide 3",
    Src: "https://images-na.ssl-images-amazon.com/images/I/515dGji7NeL._SY355_.jpg",
    Description: "description Slide 3"
  }

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
 class Home extends Component {
  render() {
    return (
      <div>
        <Header /> 
        <ControlledCarousel data={tab} />
        <Grid data={products} />
        <Footer data={footerData}   /> 
      </div>
    )
  }
}
export default Home