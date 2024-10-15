import React from 'react';

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1);
        // word.charAt(0).toUpperCase() + word.slice(0)
        
}



let divstyle = {
    height : '40px'
}
    return (
        <div style={divstyle}>
        {props.alert && <div className='container'>
            <div className={`alert alert-${props.alert.type}`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
            </div>
        </div>}
        </div>
    );
}

export default Alert;