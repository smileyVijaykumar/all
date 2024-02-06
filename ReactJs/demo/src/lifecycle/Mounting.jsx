import React, { Component } from 'react'

export default class Mounting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        //  num:0
        users:[]
      }
    }

    // handler=()=>{
    //     this.setState({
    //         num:this.state.num+2
    //     })        
    // }

    // static getDerivedStateFromProps(props,state){
    //     return{
    //         num:props.points
    //     }
    // }

    componentDidMount(){
        // setTimeout(()=>{
        //    this.setState({num:"no value"})
        // },5000)

        // this.setState({num:2000})

        try {
            window.fetch("https://api.github.com/users")
            .then(res=>res.json())
            .then(data=>{
                // console.log(data)

                this.setState({users:data})
            })
        } catch (error) {
            console.log(error)
        }
    }
    
  render() {
    // console.log(this.props)
    return (
      <div>
        {/* <h1 style={{color:"red", textDecoration:"underline"}}>Mounting </h1>
        <h4>{this.state.num}</h4> */}
        {/* <button onClick={this.handler}>click</button> */}

        {
            this.state.users.map(user=>{
                return(
                    <div>
                        <img src={user.avatar_url}/>
                    </div>
                )
            })
        }
        
      </div>
    )
  }
}
