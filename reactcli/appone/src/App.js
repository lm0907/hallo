import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Class1 from "./components/Class1";
import Class2 from "./components/Class2";
import Class3 from "./components/Class3";
import Class4 from "./components/Class4";
import Class5 from "./components/Class5";
import Class6 from "./components/Class6";
import {Provider} from 'react-redux';
import store from './store';
import	{	BrowserRouter as	Router,	Route,	Link,Switch	,Redirect}	from	"react-router-dom";
const Test=({match})=>{
  console.log(match.params.id)
  return (<div>
    <h1>Test</h1>
  </div>)
}
const Error404 = ()=><h1>404</h1>
class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>
        <Router>
         <div>
         <Link to="/">class1</Link> |
          <Link to="/class2/100">class2</Link> |
          <Link to="/class3">class3</Link> |
          <Link to="/class4">class4</Link> |
          <Link to="/class5">class5</Link> |
          <Link to="/class6">class6</Link> |
          <Link to="/test/10">test</Link> |
          <Link to="/render">render</Link> |
          <Link to="/redirect">redirect</Link> |
          <Switch>
          <Route path={"/class2/:id"} component={Class2}></Route>
          <Route path={"/class3"} component={Class3}></Route>
          <Route path={"/class4"} component={Class4}></Route>
          <Route path={"/class5"} component={Class5}></Route>
          <Route path={"/class6"} component={Class6}></Route>
          <Route path={"/test/:id"} component={Test}></Route>
          <Route path={"/render"} render={()=>(<div><h1>render</h1></div>)}></Route>
          <Route path={"/redirect"} render={()=><Redirect to="/"/>}></Route>
          <Route path={"/"} component={Class1}></Route>
          <Route component={Error404}></Route>
          </Switch>
         </div>
        </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
