import React from 'react'

function FunctionClick(){

    function clickHandler(){
        console.log('Clicked on Functional Components Button')
    }

    return (
        <div>
            <button onClick={clickHandler}>Click Functional Components</button>
        </div>
    )
}

export default FunctionClick
