import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import { ArrowRightIcon } from '../Icons';
import * as Colors from '../../style/colors'

export default class FixedNavbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = { visible: false }

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    this.setState({ visible: window.scrollY > 200 })
  }

  render() {
    return (
      <Navbar color="light" light expand="sm" className={this.state.visible ? 'nav-visible' : 'nav-hidden'}>
        <NavbarBrand href="/">{this.props.siteTitle}</NavbarBrand>
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/#timeline">Timeline</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#about">About</NavLink>
            </NavItem>
          </Nav>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/blog">Blog <ArrowRightIcon color={Colors} /></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}