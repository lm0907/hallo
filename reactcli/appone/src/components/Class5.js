import React, { Component } from 'react'
import	{	BrowserRouter as	Router,	Route,	Link,Switch	,Redirect,withRouter,Prompt,NavLink}	from	"react-router-dom";
const One = ()=><h1>one</h1>
const Two = ()=><h1>Two</h1>
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            val:""
        }
    }
    check(event){
        this.setState({
            val:event.target.value
        })
    }
    render(){
        return(
            <div>
                <Prompt when={this.state.val.length?true:false} message="are u sure to go"/>
                <input type="text"  onChange={this.check.bind(this)}/>
                <button>prompt</button>
            </div>
        )
    }
}
export default class Class5 extends Component {
  render() {
    return (
      <div>
        <Router>
            <div>
                <Link to="/one">one</Link>|
                <Link to="/two">two</Link>|
                <Link to="/form">form</Link>
                <Route path={"/one"} component={One}/>
                <Route path={"/two"} component={Two}/>
                <Route path={"/form"} component={Form}/>
            </div>
        </Router>
      </div>
    )
  }
}
