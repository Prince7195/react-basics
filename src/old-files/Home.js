import React, {ReactPropTypes} from 'react';

import logo from './logo.svg';
import './Home.css';

class Home extends React.Component {

  constructor(props) {
    super();
    this.state = {
      age: props.age,
      status: 0,
      homeLink: props.initialLinkName
    }
    setTimeout(() => {
      this.setState({status: 1});
    } ,2000);
    console.log('Constructor');
  }
  
  componentWillMount() {
    console.log("Component will Mount");
  }
  componentDidMount() {
    console.log("Component Did Mount");
  }
  componentWillReceiveProps(nextProps) {
    console.log("Component Will recive props", nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Shuld component update", nextProps, nextState);
    // if(nextState.status)
    //   return false;
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Component will update", nextProps, nextState);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did update", prevProps, prevState);
  }
  componentWillUnmount() {
    console.log('Component will unmount');
  }
  
  onMakeOlder() {
    this.setState({age: this.state.age + 1});
  }

  changeLinkName() {
    this.props.change(this.state.homeLink);
  }

  onHandleChange(event) {
    this.setState({homeLink: event.target.value})
  }

  render() {
    return (
      <div className="Home">
        <div className="container-fluid">
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                <h1>Hi {this.props.name}, Welcome to React Hell...</h1>
                <h4>Your age is {this.state.age}</h4>  
                <p>Nick: {this.props.nick}</p>   
                <p>Hobby: {this.props.hobby}</p>              
                <p>Status: {this.state.status}</p>
                <hr/>
                {/* <button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)} >Make me Older</button> */}
                <button className="btn btn-primary" onClick={() => this.onMakeOlder()} >Make me Older</button>
              </div>                   
            </div>
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                <hr/>
                <button onClick={this.props.greet} className="btn btn-success" >Greet Me</button>  
                <hr/> 
                <input type="text" ref="linkname" 
                value={this.state.homeLink} 
                onChange={(event) => this.onHandleChange(event)}
                /><br/>
                <button onClick={this.changeLinkName.bind(this)} className="btn btn-info" >Change Header Link</button> 
              </div>
            </div>
        </div>   
      </div>
    );
  }
}

export default Home;
