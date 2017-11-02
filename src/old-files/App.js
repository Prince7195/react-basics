import React from 'react';

import { Header, Home } from './components';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            headerLink: "Home",
            homeMounted: true
        }
    }

    greeting = () => {alert('Welcome')}

    changeLinkName = (newName) => { this.setState({headerLink: newName}) }

    onChangeHomeMounted = () => {
        this.setState({homeMounted: !this.state.homeMounted})
    }

    render() {
        let data = {
            hobby: 'watching movies',
            nick: 'vijay'
        }
        let homeCmp = "";
        if(this.state.homeMounted){
            homeCmp = <Home greet={this.greeting} 
            change={this.changeLinkName} 
            name="Vijay Deepak" 
            age={22} 
            {...data}
            initialLinkName={this.state.headerLink} />
        }
        return(
            <Header headerLink={this.state.headerLink} >
                {homeCmp}
                <br/>
                <button 
                className="btn btn-default"
                onClick={this.onChangeHomeMounted}>(Un)Mount Home Component</button>
            </Header>
        );
    }
}

export default App;