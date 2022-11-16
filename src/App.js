import React from 'react'
// import { Family } from './family';
// import { Navbar, Footer, Pricing } from './components';
import './style.css';
import { Dashboard } from './views/dashboard.view';

export const App = () => {
  // const title = "this is variable_title";

  return (
    <section className='py-3' style={{}}>
      <Dashboard />
      {/* <Navbar />
      <Pricing />
      <Footer />
      <Card title={title} sub_title="this is sub title" /> */}
      {/* <Family /> */}
    </section>
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
    <section className='card'>
      <h1>{title}</h1>
      <p>{sub_title}</p>
    </section>
  )

}

// input
// processing -> sum (a+b)
// output -> number;
export const Analogy = () => {
  return "something";
}