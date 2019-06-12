import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer/Footer'
import RegisterForm from './Forms/RegisterForm'
import LoginForm from './Forms/LoginForm'
import UserInfo from './Forms/userInfo'
import ContactForm from './Forms/ContactForm'
import {connect} from 'react-redux'
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
class UserProfile extends Component {
  render() {
    return (
      <div>
        <Header />
        {!this.props.isConnected? <div><RegisterForm /> <ContactForm/> <LoginForm /></div> :<UserInfo/>}
        <Footer data={footerData} /> 
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isConnected: state.userReducer.isConnected,
  }
}
export default connect(mapStateToProps)(UserProfile)