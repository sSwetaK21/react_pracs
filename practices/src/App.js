// import logo from "./logo.svg";
// import "./App.css";
// import React, { Component } from "react";


// export class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [
//         {
//           profile: "https://images.unsplash.com/photo-1663495744270-5664bb19da67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
//           user: "Shweta",
//           set: "...",
//           image: "https://i.pinimg.com/236x/8c/9f/22/8c9f22d4f6eada2853cc13804baced18.jpg",
//         },
//         {
//           profile: "https://images.unsplash.com/photo-1663524789648-90fbdf8c8b76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//           user: "Sneha",
//           set: "...",
//           image: "https://i.pinimg.com/236x/cf/b5/1f/cfb51f38bd20d65dfc48ba030916c669.jpg",
//         },
//         {
//           profile: "https://images.unsplash.com/photo-1662859017498-744a30297600?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//           user: "neha",
//           set: "...",
//           image: "https://i.pinimg.com/236x/35/36/d8/3536d87eb7c7adcf37a11ab6c5d943d8.jpg",
//         },
//         {
//           profile: "https://images.unsplash.com/photo-1663488631285-ee6eaaa9aef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//           user: "Ketu",
//           set: "...",
//           image: "https://i.pinimg.com/236x/ce/6e/db/ce6edb14d459af09ceb7d3f1c799c51e.jpg",
//         },
//         {
//           profile: "https://images.unsplash.com/photo-1663429122432-c2769373768f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//           user: "sadhna",
//           set: "...",
//           image: "https://i.pinimg.com/236x/98/f9/30/98f930c9d601f4ddf61e52ac3b0c6cf5.jpg",
//         },
//         {
//           profile: "https://images.unsplash.com/photo-1662859010103-61b5735968ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//           user: "sahna",
//           set: "...",
//           image: "https://i.pinimg.com/236x/7e/2f/e0/7e2fe06f993fb0f3a138633be3851e3b.jpg",
//         },
//       ],
//     };
//   }
//   render() {
//     return this.state.data.map((data) => (
//       <div className="container">
//         <div className="box">
//           <div className="profile">
//             <img src={data.profile} alt="" />
//             <div className="user">{data.user}</div>
//             <div className="set">{data.set}</div>
//           </div>
//           <div className="image">
//             <img src={data.image} alt="" />
//           </div>
//           <div className="button">
//             <button className="heart">&#10084;	</button>
//             <div className="likes">100 Likes</div>
//           </div>
//           {/* 
//           <div className="descript">{data.user} <span>description here</span></div> */}
//         </div>
//       </div>
//     ));
//   }
// }

// export default App;

import "./App.css";
import React  from "react";
import ShareBtn from "./components/ShareBtn";

function App(){


    return(
        <>
        <ShareBtn></ShareBtn>
        </>
    )
}
export default App;