import React, {Component} from 'react'
import "./Test.css"
// const Test = () => {
//     return (
//       <div>
//         <h1>Hello, I am Revant</h1>
//       </div>
//     );
//   };

class Test extends Component{
    
       state={ isLoggedIn : false};
    
    render(){
        return (
     <div>
        {!this.state.isLoggedIn ? (
           <h1>You are not logged in </h1>
         ) : (
            <h1>Congratulation, you are logged in!</h1>
        )}
        <button onClick={(e) => this.setState({ isLoggedIn : true})}>
            Login
        </button>
         

       </div>
        );
     }
    
}

export default Test;