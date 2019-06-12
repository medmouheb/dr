import React, { Component } from 'react'
import { Form, Button, Col, InputGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import {userSignup} from '../../store/actions/userActions'
class RegisterForm extends Component {
  state = {
    FirstName: "",
    LastName: "",
    Username: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    City: "",
    State: "",
    Zip: ""
  }
  render() {
    const verification=()=>{
      if(this.state.FirstName=="" || this.state.LastName=="" || this.state.Username=="" || this.state.Email=="" || this.state.Password=="" || this.state.ConfirmPassword=="" || this.state.City=="" || this.state.State=="" || this.state.Zip==""){
        alert("all inputs must be fild")
      }
      else if (this.state.Password.length<8){
        alert("password must be longer then 7 caracters")
      }
      else if (this.state.Password!==this.state.ConfirmPassword){
        alert("the passwords must match")
      }
      else{
        this.props.userSignup(this.state)
      }
    }
    return (
      <div>

        <Form>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                onChange={(e) => { this.setState({ FirstName: e.target.value }) }}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                onChange={(e) => { this.setState({ LastName: e.target.value }) }}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(e) => { this.setState({ Username: e.target.value }) }}
                />
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control onChange={(e) => { this.setState({ Email: e.target.value }) }} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={(e) => { this.setState({ Password: e.target.value }) }} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control onChange={(e) => { this.setState({ ConfirmPassword: e.target.value }) }} type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control onChange={(e) => { this.setState({ Address: e.target.value }) }} placeholder="1234 Main St" />
          </Form.Group>


          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control onChange={(e) => { this.setState({ City: e.target.value }) }} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control onChange={(e) => { this.setState({ State: e.target.value }) }} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control onChange={(e) => { this.setState({ Zip: e.target.value }) }} />
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" onClick={verification}>
            Submit
          </Button>
        </Form>

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userSignup: (user) => dispatch(userSignup(user))
  }
}
export default connect(null, mapDispatchToProps)(RegisterForm)