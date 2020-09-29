import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import logo3 from '../image/logo3.png';
import { Link } from 'react-router-dom';

class Nav extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const height ={
      height:"60px",
      marginBottom:"50px"
    }
    const image_logo={
      margin:"0 30px 0 20px"
    }

    return (
      <Menu inverted style={height}>
        <img src={logo3} width='50' height='50' style={image_logo}  alt="logo"/>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='write'
          active={activeItem === 'write'}
          onClick={this.handleItemClick}
        ></Menu.Item>
        <Link to="/write">write</Link>
      </Menu>
    );
  }
}

export default Nav;