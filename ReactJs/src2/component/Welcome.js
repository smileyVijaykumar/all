
import React,{Component} from 'react';

//1 st  way
// class Welcome extends Component{
//     render() {
//         return (
           
//             <div>
                
//            <h1>Welcome {this.props.name} aka {this.props.heroName}</h1>
//             </div>
            
             
//         );
//     }

    

// }
// export default Welcome;


// !2nd way



 class Welcome extends Component {
  render() {
    const {name,heroName}=this.props
    return (
      <div>
        <h1>hello {name} aka {heroName}</h1>
      </div>
    )
  }
}

export default Welcome

