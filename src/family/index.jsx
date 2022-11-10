/**
 * variables and functions in react
 * communciation and props
*/

/**
 * ! 1. un-directional flow of data - (architecture style that was being planned by devs of react.)
 *      -> parent to child flow of information, wherein parent contains the child.
 *      -> can child not at all pass data to mother ?
 *      * yes it very well can but it was react was not architected in this manner.
 *      ? child component can update the state values of the parent component, with the help of function given by parent to child.
 * ! 2. one-way binding in react - ?
 *      -> 
*/

import React from 'react'
import { useState } from 'react'

export const Family = () => {
    return (
        <div>
            <Father />
            <Mother />
        </div>
    )
}

export const Mother = (props) => {
    // Roy ki wife.
    const aajKaKhana = "banana";
    // first value is the variable and second value is the setter function.
    const [momMood, setMomMood] = useState("normal");

    // let aajKaKhana = "rosogolla";
    const __speakMom = (moodByChild) => {
        alert("mom");
        setMomMood(moodByChild);
    }

    return (
        <section className='container mt-4'>
            <div className='p-5 bg-danger text-white shadow rounded display-6 text-center'>
                <p>Mother</p>
                <p className='lead text-white'> Mom's mood is {momMood}</p>
                {/* 
                    aajKaKhana is a variable being passed to the child component. 
                    __speakMom is a function that is being called by child component.
                */}
                {/* we are only passing the reference of the function to the child component. */}
                <Child food={aajKaKhana} speakMom={__speakMom} />
            </div>
        </section>
    )
}

export const Child = (props) => {
    let {food, speakMom} = props; // object destructuring.
    // const food = props.food; 
    // const bolaMom = props.speakMom;

    let currentMood = "sad";
    const setMood = (inputFood) => {
        // food = "banana"; // I'm trying to change the input value but it is not gtting changed in the parent component.
        if(inputFood === 'banana') {
            currentMood = "happy";
        } else if(inputFood === 'rosogolla') {
            currentMood = "orgasmic"
        }
    }

    setMood(food);

    return (
        <section className='bg-white text-dark p-5 text-center rounded'>
            <p>Child</p>
            <p className='text-muted lead'>My current mood <strong className='text-dark'>{currentMood}</strong></p>
            {/* 
                // this method will work same as that of one below
                // but the issue is -> how will you pass arguments?
                // another issue is -> you cannot capture the event that has occured, it should happen in function level.
                <button onClick={bolaMom} className='btn btn-danger'>say mom</button> 
            */}

            {/* method below is recommneded */}
            <button onClick={() => speakMom("super happy")} className='btn btn-danger'>Work hard & become successful</button>

        </section>
    )
}

export const Father = (props) => {

    const speakName = (name) => {
        alert("my name is " + name);
    }

    return (
        <section className='container mt-4'>
            <div className='p-5 bg-dark text-white shadow rounded text-center'>
                <p className='display-6'>
                    Father
                </p>
                {
                // we use these parentheses to use function and variables in the JSX code.
                  
                // this will direactly make a call to this function. | in any component argument or in event;
                // this methods will directly invoke the function; and not after a specific event to which it is passed.
                // onClick={speakName()}

                // if you want some action to take place after the event has been tirggered then;
                // this methods will invoke the function after the event.
                // onClick={() => speakName()}

                // if you just want to pass refrence to this function. use this method
                // only the reference to the function is passed, function is not called in real sense.
                // it is normally used when we want to pass a function as argument to child component.
                // property={someFunction}

                }

                {/* <input type="text" onChange={(e) => { console.log(e.target.value) }} className="bg-white text-dark border my-3 p-1" /> */}
                <br />
                <button onClick={
                    () => {
                        console.log("sachin"); 
                        speakName("sachin")
                    }
                } className='btn btn-light text-dark'>Speak name</button>
            </div>
        </section>
    )
}

// const simple = () => {

//     const el = document.getElementById('id');
//     const callback = () => {}

//     el.addEventListener('click', callback());
// }
