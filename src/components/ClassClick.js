import React, { Component } from 'react';

class ClassClick extends Component {
    
    clickHandler(){
        console.log('Clicked on Class Components Button')
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Class Components</button>     
            </div>
        );
    }
}

export default ClassClick;