import React from 'react'
import './header.component.css';


export function HeaderButton(){
    return (
        <button>A button</button>
    );
}

function Header(props){
    
    console.log(props);
    // Props are ReadOnly
    // props.collapsible = false; // Error

    const collapsible = props.collapsible; //OK! but bad pratice

    return (
        <>
            {/* React.createElement() */}
            <div className="header" onClick={ () => props.action('From Component')}>
                {/* props particuliere */}
                {props.children }
                <HeaderButton></HeaderButton>
            </div>
        </>
    );
}

export default Header;
