import React, { Component } from 'react'
import {connect} from 'react-redux'
class UserInfo extends Component {
    render() {
        return (
            <div>
                FirstName :  {this.props.profil.FirstName} <br/>
                LastName :  {this.props.profil.LastName}<br/>
                Username :  {this.props.profil.Username}<br/>
                Email :  {this.props.profil.Email}<br/>
                Password :  {this.props.profil.Password}<br/>
                City :  {this.props.profil.City}<br/>
                State :  {this.props.profil.State}<br/>
                Zip : {this.props.profil.Zip} 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profil: state.userReducer.profil,
    }
}
export default connect(mapStateToProps)(UserInfo)