import React from 'react';
import { Link } from 'react-router-dom';

class User extends React.Component {
    render() {
        return (
            <div className="User">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                            <h3>User Page</h3>
                            <p>UserID: {this.props.match.params.id}</p>
                            <Link to="/home">
                                <button className="btn btn-primary">
                                    Go Home
                                </button>  
                            </Link> 
                        </div>
                    </div>                    
                </div>
            </div>
        );
    }
}

export default User;