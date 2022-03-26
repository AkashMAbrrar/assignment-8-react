import React from 'react';
import './Answar.css'

const Answar = () => {
    return (
        <div className='ans-container'>
            <h2>Answar For The Quastions =)</h2>
            <div className='ans-one'>
                <h4>How Does React Work ?</h4>
                <p>React Js is the one of the most popular javascript framework in the world.This is a modern Javascript Framework.And also this is uses for mobile and web application development. React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.In the current world its so important for web developer</p>
            </div>
            <div className='ans-tow'>
                <h4>How Use State  Work?</h4>
                <p>useState is a most importan React Hook in React Js.which allows us to have state variables in the JSX functional component.we pass an initial value to this function, and it returns a variable with a new state based on functional logic.We need this very specialy in our daily life at front end web development.</p>
            </div>
        </div>
    );
};

export default Answar;