import React from 'react';
import { BrowserRouter, Route, Switch } from'react-router-dom';

import { Home, Root, User } from './components';

class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Root>
                    <Switch>
                        <Route exact path="/" render={(props) => <Home name="Vijay Deepak" {...props} />} />
                        <Route exact path="/user/:id" render={(props) => <User {...props} />} />
                        <Route exact path="/home" render={(props) => <Home name="Vijay Deepak" {...props} />} />
                    </Switch>                    
                </Root>
            </BrowserRouter>
        );
    }
}

export default App;