import React, { Component } from 'react'
import	{	BrowserRouter as	Router,	Route,	Link,Switch	,Redirect,withRouter,Prompt,NavLink}	from	"react-router-dom";
const Page1=()=>{
    return (<div><h1>Page1</h1></div>)
}
const Page2=()=>{
    return (<div><h1>Page2</h1></div>)
}
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
const RouterChange=withRouter(({history})=>{
    return(<div>
        <button onClick={()=>{history.push("/page1")}}>withRouter</button>
    </div>)
})
export default class Class3 extends Component {
     constructor(props){
          super(props);
          this.state={
              isok:false
          }
      }
  render() {
     
    return (
      <div>
        <Router>
            <div>
                <MenuLink to="/page3" label="自定义链接1"></MenuLink>
                <MenuLink  to="/page4" label="自定义链接2"></MenuLink>
                <NavLink activeClassName="aa" to="/page1">page1</NavLink>
                <NavLink isActive={()=>false} activeClassName="aa" activeStyle={{color:"red"}} to="/page2">page2</NavLink>
                <Prompt when={this.state.isok} message="are u sure"/>
                <RouterChange/>
                <Route path={"/page1"} component={Page1}></Route>
                <Route path={"/page2"} component={Page2}></Route>
            </div>
        </Router>
      </div>
    )
  }
}
