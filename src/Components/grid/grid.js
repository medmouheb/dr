import React,{Component} from 'react'
import CardProduct from '../card/cardProduct';
// import {embroidery} from '../embroidery.jpg'

let tab = [
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

class Grid extends Component {
  render(){
  return (
    <div className="itemsGrid">
      {this.props.data.map((element)=>{
        return(<CardProduct data = {element}  />)
        
      }) }
    </div>
  )}
}

export default Grid
