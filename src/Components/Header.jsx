import React from 'react';
import Logo from '../resources/natrel.png';
import Logo2 from '../resources/natrel2.jpeg';

import { Link, useNavigate } from 'react-router-dom';
import { url } from './property';
import { useState } from 'react';
import axios from 'axios';

// console.log(logo);import { Navigate } from "react-router-dom";

function Header() {
  const navigate =useNavigate()
  const [input, setInput] = useState('');
  const submit=(e)=>{
    e.preventDefault();
    axios.post(`${url}/search`, {input})
    .then(function (response) {
      if(response.status === 200) {
        navigate('/found_search', {state: response.data})
      }
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  console.log(input);
  return (

<nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    {/* <a href='' class="navbar-brand">Navbar</a> */}
    <img src={Logo} alt="logo"  className="d-inline-block logo align-text-top" id='logo'/>
    <form className="d-flex" role="search" onSubmit={submit}>
      <input className="form-control me-2" name='search'onChange={(e)=>setInput(e.target.value)} type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success"  type="submit">Search</button>
    </form>
    <div id='container'><button className='btn login-button' type="button"><Link className='link' to='/login'>Login</Link></button>
    {/* <button className='btn login-button' type="button"><Link className='link' to='/register'>Register</Link></button> */}
    </div>
    
  </div>
</nav>
    
   
  );
};

export default Header