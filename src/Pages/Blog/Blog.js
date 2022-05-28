import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='w-2/3 mx-auto mt-10'>
                <h2 className='text-2xl font-semibold'>How i can improve REACT APPLICATION</h2>
                <p>Performance is a key element in the quality of an application. It depends on how we write the code and configure the infrastructure.Performance of a react app can be improve by follow some staeps these are:
                    <ul className='mt-2'>
                        <li className='list-disc'>Using Pure Components</li>
                        <li className='list-disc'>Immutable Data Structures</li>
                        <li className='list-disc'>Production Assembly</li>
                        <li className='list-disc'>Compression</li>
                        <li className='list-disc'>React Developer Tools</li>
                        <li className='list-disc'>Chrome DevTools</li>
                    </ul>
                </p>
            </div>
            <div className='w-2/3 mx-auto mt-10'>
                <h2 className='text-2xl font-semibold'>What are the different ways to manage a state in a React application?
                </h2>
                <p>The state of any application is represented by the user interface of the application.States can be managed by a React component.Different ways to manage states are:
                    <ul className='mt-2'>
                        <li className='list-disc'>useState and React State: useContext</li>
                        <li className='list-disc'>React State: useReducer</li>
                        <li className='list-disc'>React State: Redux</li>
                    </ul>
                </p>
            </div>
            <div className='w-2/3 mx-auto mt-10'>
                <h2 className='text-2xl font-semibold'>Why should do not set the state directly in React
                </h2>
                <p> The reason should not set state directly,The state contains data specific to this component that may change over time. if immediately call State.  components might not re-render , and the rendering bugs will be tricky to track down.so, always create new objects and arrays when call setState.
                </p>
            </div>
            <div className='w-2/3 mx-auto mt-10'>
                <h2 className='text-2xl font-semibold'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </h2>
                <h3>Ans:</h3>
                <p> myObj = myArrayOfObjects.find(obj = obj.name === 'something');
                </p>
            </div>
            <div className='w-2/3 mx-auto mt-10 mb-10'>
                <h2 className='text-2xl font-semibold'>What is a unit test? Why should write unit tests?
                </h2>
                <p> Unit test:  Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class.
                </p>
                <p>
                    Why Should We Need Unit Testing:
                    <ul className='mt-2'>
                        <li className='list-disc'>Unit tests save time and money.</li>
                        <li className='list-disc'>It simplifies the debugging process.
                        </li>
                        <li className='list-disc'>Unit tests make code reuse easier.</li>
                        <li className='list-disc'>Unit testing is an integral part of extreme programming. </li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default Blog;