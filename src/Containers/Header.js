import React, { Component } from 'react';
import NavBar from '../Components/navbar/navbar';
import CategoryMenu from '../Components/categoryMenu/categoryMenu';
import BreadCrumb from '../Components/breadCrumb/breadCrumb';
import LoginForm from '../Components/loginForm/loginForm';
let nav= ["Home","Liste","Details","Contact","UserProfile","Basket"]
let menu = [
  {
   label:"Handmade",
   descendants:[
     {
      label:"Embroidery",
      descendants: ["fils1","fils2","fils3"]
     },
     {
       label:"Crochet",
       descendants: ["fils1","fils2","fils3"]
     },
     {
       label:"Decoration",
       descendants: ["fils1","fils2","fils3"]
     },
   ]
  },
  {
   label:"Journey",
   descendants:[
     {
      label:"Appliance",
      descendants: ["fils1","fils2","fils3"]
     },
     {
       label:"Accessoires",
       descendants: ["fils1","fils2","fils3"]
     }
      
   ]
  },
  {
   label:"Games",
   descendants:[
     {
      label:"Intellectual games",
      descendants: ["fils1","fils2","fils3"]
     },
     {
       label:"Video games",
       descendants: ["fils1","fils2","fils3"]
     },
     
   ]
  },
  {
   label:"Music",
   descendants:[
     {
      label:"Instruments",
      descendants: ["fils1","fils2","fils3"]
     },
     {
       label:"Records",
       descendants: ["fils1","fils2","fils3"]
     }
   ]
  },
  {
   label:"Sports",
   descendants:[
     {
      label:"Equipment",
      descendants: ["fils1","fils2","fils3"]
     },
     {
       label:"Clothes",
       descendants: ["fils1","fils2","fils3"]
     }
   ]
  },
  {
   label:"Reading",
   descendants:[
     {
      label:"Psychology",
      descendants: ["fils1","fils2","fils3"]
     },
     {
       label:"Human Development",
       descendants: ["fils1","fils2","fils3"]
     },
     {
       label:"Relations",
       descendants: ["fils1","fils2","fils3"]
     },
     {
       label:"Nature",
       descendants: ["fils1","fils2","fils3"]
      },
      {
       label:"Languages",
       descendants: ["fils1","fils2","fils3"]
      },

   ]
  },
]

class Header extends Component {
  render() {
    return (
      <div>
        <NavBar data={nav}/>
        <CategoryMenu data={menu}/>
        <BreadCrumb /> 
        <LoginForm /> 
      </div>
    );
  }
}

export default Header