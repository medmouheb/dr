import './categoryMenu.css' 
import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class CategoryMenu extends Component {
 render (){


  return (
    <div>
      <div id="navbar">

{      
  this.props.data.map((element) => {
    return(
      
      <div id="dropdown">
      <button id="dropbtn">{element.label} 
        <i id="fa fa-caret-down" />
      </button>
      <div id="dropdown-content"> 
        <div id="row">
        {
        element.descendants.map((filselement)=> {
          return (
            <div id="column">
              <h3>{filselement.label}</h3>
              {
                filselement.descendants.map((petitfilselement)=> {
                  return (
                    <Link to={`/${element.label}/${filselement.label}/${petitfilselement}`}>{petitfilselement}</Link>
                  )
                }
              )
              }
              
              
            </div>
          )
        }
        )
      }
        </div>
      </div>
     </div> 
  
    )
  
  }
  )
}

      </div>
    </div>
  )
}
}

export default CategoryMenu






