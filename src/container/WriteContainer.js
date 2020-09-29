import React, { Component } from 'react';
import WriteView from '../view/WriteView';
import {inject,observer} from "mobx-react";
import generateId from "../IDGenerator";

@inject("TestStore")
@observer
class WriteContainer extends Component {
    
    bookvalue = (name,value) =>{
        this.props.TestStore.setBookProps(name,value)
    }
    onWriteAdd =() =>{
        let book = 
            {
                id: generateId(3),
                title: this.props.TestStore.setBook.title,
                content: this.props.TestStore.setBook.content,
            }
        
        console.log(book)
        this.props.TestStore.writeAdd(book);
    }

    render() {
        return (
            <div>
                <WriteView 
                    bookvalue={this.bookvalue} 
                    onWriteAdd={this.onWriteAdd}
                />
            </div>
        );
    }
}

export default WriteContainer;