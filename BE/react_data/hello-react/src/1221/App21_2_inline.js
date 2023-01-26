//인라인스타일
import React from 'react';

function App() {
    const name = '리액트';
    const style={
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: '40px',
        fontWeight: 'bold',
        padding:16
    };
    return<div style={style}>{name}</div>
}

export default App;