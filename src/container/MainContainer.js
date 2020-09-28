import React, { Component } from 'react';
import Nav from '../common/Nav';
import MainView from '../view/MainView';
import {inject,observer} from "mobx-react"

@inject("TestStore")
@observer
class MainContainer extends Component {
    
    render() {
        const books = this.props.TestStore.book;
        console.log(books)
        return (
            <div>
                <Nav />
                <MainView />
            </div>
        );
    }
}

export default MainContainer;