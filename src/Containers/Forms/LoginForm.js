import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'
import {userLogin} from "../../store/actions/userActions"
import { connect } from 'react-redux'
import {users} from '../../test'

class LoginForm extends Component {
    state={
        email:"",
        password:""
    }
    render() {
        const verification=()=>{
            console.log("ho",users.filter(el=>{return (el.Email==this.state.email && el.Password==this.state.password)}))
            if(this.state.email=="" && this.state.password==""){
                alert("all inputs must be fild")
            }else if(users.filter(el=>{return (el.Email==this.state.email && el.Password==this.state.password)}).length!==0){
                alert("pushed")
                this.props.userLogin(users.filter(el=>{return (el.Email==this.state.email && el.Password==this.state.password)})[0])
            }else{
                alert("no user with this account")
            }
        }
        return (
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e)=>{this.setState({email:e.target.value})}} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e)=>{this.setState({password:e.target.value})}} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" onClick={verification}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      userLogin: (user) => dispatch(userLogin(user))
    }
  }
  export default connect(null, mapDispatchToProps)(LoginForm)