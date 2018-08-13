import React, { Component } from "react";
import logo from './logo.svg';
 
class Main extends Component {
  render() {
    return (
        <div>
          <h1>Celeste@heroku
          
          <img src={logo} alt="logo" width="100" height="100" />
          </h1>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/stuff">React-Todo-List</a></li>
        
          </ul>
          <span>
             
            <p>  Hi everyone!<br/>
                 I'm currently learning coding and this is my first
                 attempt with React and JS.
                 Though it's tough, and I'm obviously stressed out by this project as can be seen from the
                 last minute submission, I'm loving the learning process. </p> 

             <p> The inspiration for this React Todo project is drawn from <a href="https://www.kirupa.com/">Kirupa</a>.
                 After encountering multiple frustrations, I chanced upon his amazing website just when I thought 
                 that I couldn't make it for the project submission. Kudos to Kirupa for the great website and swift
                 response to my call for help!</p>

            <p> Besides the practical usefulness of coding in the
                digital world today, my application for Techladies bootcamp is also motivated by the desire to create a really 
                cool personal finance website where I can share with others tips about managing 
                their money and investments. Hopefully I can also meet like-minded individuals in the tech
                community to create great websites and apps together. :)
                </p>
          </span>
          
        </div>
    );
  }
}
 
export default Main;