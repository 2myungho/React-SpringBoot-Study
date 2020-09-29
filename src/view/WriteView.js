import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WriteView extends Component {
    render() {
        const {bookvalue,onWriteAdd} = this.props
        return (
            <div>
                <form onSubmit={(e) => onWriteAdd(e.preventDefault())}>
                    <input name="title" onChange={(e) => bookvalue("title",e.target.value)}/> <br />
                    <input name="content" onChange={(e) => bookvalue("content",e.target.value)}/> <br />
                    <button>확인</button>
                </form>
                <Link to ="/"> 메인페이지로 이동 </Link>
            </div>
        );
    }
}

export default WriteView;