import React from 'react'
import './style.css';

export const App = () => {
  // const _cards = [
  //   {title: 'title 1', sub_title: 'subtitle 1'},
  //   {title: 'title 2', sub_title: 'subtitle 2'},
  //   {title: 'title 3', sub_title: 'subtitle 3'},
  // ]
  
  return (
    <>
      {/*
        _cards.map((el, idx) => <Card key={idx} title={el.title} sub_title={el.sub_title}/>)
      */}

      <br />

      <Card title="title h1" sub_title="this is subtitle"/>
    </>

  )
}

// javascript way of using function.
// const values = {title: '', sub_title: ''};
// Card(values);

// const getSubTitle = () => {
//   return "this is subtitle from global function"
// }

export const Card = (input) => {
  // const title = input.title;
  // const sub_title = input.sub_title;
  const {title, sub_title} = input; // destructure.
  
  // const _variable = "this is h1";

  return (
    // jsx - javascript XML.
    <div className='card'>
      <h1>{title}</h1>
      <p>{sub_title}</p>
    </div>
  )

}

// input
// processing -> sum (a+b)
// output -> number;
export const Analogy = () => {
  return "something";
}