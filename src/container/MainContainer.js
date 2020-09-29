import React, { Component } from 'react';
import Nav from '../common/Nav';
import MainView from '../view/MainView';
import {inject,observer} from "mobx-react"

@inject("TestStore")
@observer
class MainContainer extends Component {

    onWriteRemove = (id) => {
        this.props.TestStore.writeRemove(id);
    }
    
    render() {
        const books = this.props.TestStore.books;
        return (
            <div>
                <Nav />
                <MainView 
                    books={books} 
                    onWriteRemove={this.onWriteRemove}
                />
            </div>
        );
    }
}

export default MainContainer;