// import React from "react";
// import Child2 from "./Child2";

// const Child1 = (props) => {
//   console.log(props);
//   return (
//     <div>
//       Child1
//       <hr />
//       <Child2 uname={props.name} />
//       <h1>{props.userName}</h1>
//     </div>
//   );
// };
// export default Child1;

import React from "react";

class Child extends React.Component {
  // state={
  //   name:"vijay"
  // }
  // Child() {
  // ();
  //   this.state = {
  //     count: 0,
  //   };
  // }
  constructor(params) {
    super();
    this.state = {
      count: 0,
    };
  }

  incremnet() {
    count: this.state.count + 1;
  }

  render() {
    return;
    <>
      <h1>hello reactjs</h1>;<p>count :{this.state.count}</p>
      <button onClick={() => this.incremnet()}>incremnet</button>
    </>;
  }
}
export default Child;
