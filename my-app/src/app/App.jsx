import React from 'react';
import Header from './components/Header/header.component';
import {HeaderButton} from './components/Header/header.component'


import './App.css';

class Service{
    static getData(){
        return [
            'Bob Morane',
            'Chuck Norris',
            'ADB'
        ];
    }
}

function List (props){
    return (
        <ul>
            {
                props.items && props.items.map( (item,num) => (<ListItem text={item} key={num}/>) )
            }
        </ul>
    );
}

function ListItem (props){
    return <li>{props.text}</li>
}

class App extends React.Component{

    constructor(props){
        super(props)

        // Composant A etat
        this.state = {
            items:Service.getData(),
            showList:false
        }
    }

    clickHandler = data => {
        // alert(data)
        // this.state.showList = !this.state.showList;

        // setState Key Method commad re render
        this.setState( {
            showList:!this.state.showList
        })
    }

    // Method du cycle de vie 
    render(){
        return ( 
            <React.Fragment>
                <Header collapsible={true} color="blue" action={this.clickHandler}>
                    <h1> Hello world !! </h1>
                </Header>
                <div hidden={!this.state.showList}>
                    <List items={this.state.items}></List>
                </div>
            </React.Fragment>
        );
    }

}

export default App