import React, { Component } from 'react'
import Header from './Header';
import ContactForm from './Forms/ContactForm'
import Footer from './Footer/Footer'
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
class Contact extends Component {
  render() {
    return (
      <div>
        <Header />
        <ContactForm />
        <Footer data={footerData} /> 
      </div>
    )
  }
}

export default Contact