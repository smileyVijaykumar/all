import React, { Component } from 'react'

export default class Mounting extends Component {
    constructor(props){
        super(props);
        this.state={
            // points:0
            users:[]
        }
    }
    // static getDerivedStateFromProps(props,state){
    //     return{
    //         points:props.num 
    //     }
    // }

    componentDidMount(){
        // setTimeout(()=>{
        //     this.setState({points:"No Points"})
        // },5000)
        // this.setState({points:"1000"})
        try {
            window.fetch("https://api.github.com/users")
            .then(res=>res.json())
            .then(data=>{
                // console.log(data)
                this.setState({users:data})
            })
            .catch(error=>console.log(error))
        } catch (error) {
            console.log(error)
        }
    }
    // handleClick=()=>{
    //     this.setState({points:this.state.points+2})
    // }
  render() {
    // console.log(this.props)
    console.log(this.state.users)
    return (
      <div>
 {/* <h1 style={{color:"red",textDecoration:"underline"}}> Mounting</h1>
<hr/>
<h1>{this.state.points}</h1> */}
{/* <button onClick={this.handleClick}>Click</button> */}

{
    this.state.users.map(user=>{
        return(
            <div>
                <img src={user.avatar_url} style={{borderRadius:"50%",width:"200px",height:"200px"}}/>
            </div>
        )
    })
}
      </div>
    )
  }
}
