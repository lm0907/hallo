import React, { Component } from 'react'
import	{	BrowserRouter as	Router,	Route,	Link,Switch	,Redirect,withRouter,Prompt,NavLink}	from	"react-router-dom";
const Home=()=>(<h1>Home</h1>)
const About=()=>(<h1>About</h1>)
const MenuLink=({to,label})=>{
    return (
        <Route
        path={to}
        children={
        ({match})=>{
            return (
                <div>
                    {match?">":""}
                    <Link to={to}>{label}</Link>
                </div>
            )
        }
        }/>
    )
}
export default class Class4 extends Component {
    constructor(props){
        super(props);
    }
  render() {
      let url=this.props.match.url;
    return (
      <div>
        <Router>
            <div>
            <MenuLink to={`${url}/home`} label="home"/>
        <MenuLink to={`${url}/about`} label="about"/>
        <Route path={`${url}/home`} component={Home}/>
        <Route path={`${url}/about`} component={About}/>
            </div>
        </Router>
      </div>
    )
  }
}
