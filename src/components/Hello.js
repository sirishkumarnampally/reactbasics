import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Sirish JSX</h1>
    //     </div>
    // )
    return React.createElement('div',null, React.createElement('h1', null, 'Hello Sirish Without JS X'))
}

export default Hello
