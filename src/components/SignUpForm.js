import React from 'react'
import { Button, Form, FormGroup , Label, Input} from 'reactstrap';


export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      username:"",
      email:"",
      phoneNum:"",
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  } 

  render() {
      return (
        <div className="form">
          <h2 className="signupHead"> Would you like to know more? </h2>
          <h6>Get in touch today and find out more about this property.</h6>

          <Form >
            <FormGroup>
              <Label for="username">Name</Label>
              <Input type="username" autoComplete="username " name="username" id="username" onChange={this.handleChange} placeholder="Full Name" />
            </FormGroup> 

            <FormGroup>
              <Label for="email">Email Address</Label>
              <Input type="email" name="email" id="email" autoComplete=" email" onChange={this.handleChange} placeholder="Email" />
            </FormGroup>

            <FormGroup>
              <Label for="password"> Phone Number</Label>
              <Input type="phoneNum" name="phoneNum" autoComplete="new-phoneNum" id="phoneNum" onChange={this.handleChange} placeholder="Phone Number" />
            </FormGroup>

            <div className="warpBtn">  
              <Button className="btnLight" type="submit" onClick={this.handleSignup} >Register Now</Button>
            </div>
          </Form>
        </div>
      )
  }
}

