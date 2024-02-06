import React,{Component} from 'react'

class Message extends Component{

    constructor(){
        super();
        this.state={
            Message:"Welecome visitors"
        }
    }
    changeMessage(){
        this.setState(()=>({
            Message:'Thank you subscribe'
        }))
    }

    render(){
        return(
            <div>
                <h1 >{this.state.Message}</h1>
                <button onClick={()=>this.changeMessage()}>click</button>
            </div>
        )
    }
}
export default Message