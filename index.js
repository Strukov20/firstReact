import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

const elem = (
<div>
  <h2>Hello World</h2>
  <input tyoe="text" placeholder="Type here" />
  <button/>
</div>
)


const Header = () => {
  
  return <h2>Hello World</h2>

}

const Field = () => {
  const holder = "Enter Here"

  return <input 
                  type="text" 
                  placeholder={holder} 
                  autoComplete=""
                  className="first"
                  htmlFor=""
  />
}

const Btn = () => {
  const text = "Log In";
  const logged = true;

  return <button>{logged ? "Enter" : text}</button>
}

const App = () => {
  return (
    <div>
    <Header/>
    <Field/>
    <Btn/>
    </div>
  )
}


ReactDOM.render(
  <App />, document.getElementById('root')
);
