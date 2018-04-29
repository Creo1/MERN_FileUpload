import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Row, Col, Nav,Container, NavItem, NavLink } from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
  return (

            <Container>
            <Row className="Bg-color">
            <Nav tabs>
            <Col xs={2} md={2}>
            <NavItem>
            <NavLink href="#" >Name of The project</NavLink>
            </NavItem>
            </Col>

            <Col  xs={2} md={2}>
            <NavItem>
            <NavLink href="#" >Tasks</NavLink>
            </NavItem>
            </Col>

            <Col  xs={2} md={2}>
            <NavItem>
            <NavLink active href="#">Files</NavLink>
            </NavItem>
            </Col>

            <Col  xs={2} md={2}>
            <NavItem>
            <NavLink  href="#">Activity</NavLink>
            </NavItem>
            </Col>

            <Col  xs={2} md={2}>
            <NavItem>
            <NavLink href="#" >Invite</NavLink>
            </NavItem>
            </Col>

            </Nav>

            </Row>

            <Row >
            <Col  xs={12} md={12}>
            {this.props.children}
            </Col>
            </Row>
            </Container>
        );
      }

}
export default App;
