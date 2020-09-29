import React, { Component } from 'react';
import MainItem from './MainItem'

class mainView extends Component {
    render() {
        const {
            books,
            onWriteRemove
        } = this.props;

        const bookList = books.map((book,index) => (
            <MainItem 
                key={index}
                book={book}
                onWriteRemove={onWriteRemove}
            />
        ))
        
        return (
            <div>
                {bookList}
            </div>
        );
    }
}

export default mainView;