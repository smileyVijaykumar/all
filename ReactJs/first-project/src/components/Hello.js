import React, { Component } from "react";


class Hello extends Component{
    render(){
        return(
            React.createElement("div",{className:"demo", id:"container"},React.createElement("h1",{id:"heading_id", className:"hedaingtag"},"hello Reactjs"))
        )
    }
}
export default Hello 