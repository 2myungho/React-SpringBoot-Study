import React, { Component } from 'react';

class WriteView extends Component {
    render() {
        return (
            <div>
                <form>
                    <input name="title" /> <br />
                    <input name="content" /> <br />
                    <button>확인</button>
                </form>
            </div>
        );
    }
}

export default WriteView;