import React from 'react';

import Header from './Header';

class Root extends React.Component {
    render() {
        return(
            <Header >
                {this.props.children}
            </Header>
        );
    }
}

export default Root;