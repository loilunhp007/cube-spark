import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    posts: [],
    isLoading:true
  };

  async componentDidMount(){
    const response = await fetch('/api/employees');
    const body = await response.json();
    this.setState({posts: body, isLoading: false})
  }
  render(){
    const {posted, isLoading} = this.state;
    const empList = this.state.posts;
    if(isLoading){
      return <p>Loading...</p>
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <div className="App-intro">
            <h2> POST LIST</h2>
            <div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
