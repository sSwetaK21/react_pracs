import { useState } from 'react';
import './App.css';
// import Card from './Card'

function App() {

  let [count, setCount] =  useState(0)

  function increment(){
    setCount(count+1);
  }

  function decrement(){
    setCount(count-1)
  }

  // let data = [
  //   {
  //     personName: "ronaldo",
  //     price: "300 million",
  //     src: "https://picsum.photos/seed/picsum/300/300"
  //   },
  //   {
  //     personName: "messi",
  //     price: "500 million",
  //     src: "https://picsum.photos/seed/picsum/300/250"
  //   },
  //   {
  //     personName: "virat",
  //     price: "600 million",
  //     src: "https://picsum.photos/seed/picsum/300/400"
  //   }
  // ]

  return (
    <div className='main'>
      <h1>{count}</h1>
      <button onClick={ () => {decrement()}} className='buttonInc'>-1</button>

      <button onClick={ () => {increment()} } className='buttonInc'>+1</button>

      {/* {
        data.map((item) => {
         return <Card personName={item.personName} price={item.price} src={item.src}/>
        })
      } */}
    </div>
  );
}

export default App;