import React, { Component, useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { NotFound } from './containers/errors/NotFound'
import Writers from './components/writers'
import FuseNavbar from './components/fuse-navbar'


function App(){
  const [state, setWriters] = useState( { writers: [] } );
    useEffect(() => {

      const fetchData = async ()=>{
        await fetch('http://localhost:3001/writers?_embed=texts')
        .then(res=>res.json())
        .then((writers)=>{
            setWriters({writers});
            console.log(writers);
            console.log(state);
        })/*
        const res = await ( await fetch('http://localhost:3001/writers?_embed=texts')).json().then(
          (res)=>{
            setWriters({res});
            console.log(res);
            console.log(state);
          }
        )*/
      };
      fetchData();
    }, []);

    return (<BrowserRouter>
      <FuseNavbar writers={state}>
    <Switch>

      <Route component={NotFound}/>
    </Switch>
    </FuseNavbar>
    </BrowserRouter>
    ); 
}/*
class App extends Component {
  state = {
    writers: []
  }

  async componentDidMount() {
    const writers = await (await fetch('http://localhost:3001/writers?_embed=texts')).json()

    this.setState({ writers })
    console.log("sucess \n" + this.state);
  }

  render() {
    const { writers } = this.state
    
    return <BrowserRouter>
    <FuseNavbar writers={writers}>
    <Switch>

      <Route component={NotFound}/>
    </Switch>
    </FuseNavbar>
  </BrowserRouter>
  }
}*/
/*
      <Router>
        <div writers={writers}>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/authorization' exact={true} component={Authorization} />
          <Route component={NotFound}/>
        </Switch>
        </div>
      </Router>
<Route path='/writers' render={
  props => <Writers {...props} writers={writers}/>
}/>*/
export default App;