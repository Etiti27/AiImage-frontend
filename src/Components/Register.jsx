import React, { useState } from 'react';
import axios from 'axios';
import {url} from './property'
import Alert from 'react-bootstrap/Alert';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
    // document.body.style.overflow = "hidden"
    const navigate = useNavigate();
    
    const [names, setNames] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSuccess,setIsSuccess] = useState(false)
	const [userExists, setUserExists] = useState(false);
    const Registration=(e)=>{
        e.preventDefault();
        // const url='http://localhost:3001/register'
axios.post(`${url}/register`,{
    names: names,
    password: password,
    username: username
}).then((response)=>{
	if(response.data!=='you\'re  successfully registered'){
setUserExists(false)
setIsSuccess(true);
setNames('');
setPassword('');
setUsername('');
	}else{
		setUserExists(true)
		setTimeout(() => {
			setIsSuccess(false);
			navigate('/login')
		}, 5000);
	}
	
})
    }
  return (
    <div className="container">
	<div className="screen">
		<div className="screen__content">
            
			<form className="login" onSubmit={Registration}>
            <h2>REGISTER</h2>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" value={names} onChange={(e)=>{setNames(e.target.value)}} placeholder="Name" name='names'/>
				</div>

                <div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="email" className="login__input" placeholder="Email" value={username} onChange={(e)=>{setUsername(e.target.value)}} name='email'/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" name='password' value={password}  onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
				</div>
				<button type='submit' className="button login__submit">
					<span className="button__text">REGISTER</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
            {isSuccess?
        <Alert key='success' variant='success'>
          You're successfully registered!
        </Alert>:null
}
{userExists?
        <Alert key='success' variant='success'>
          The email address already exist!, <div><Link to='/reset'>Reset Password</Link></div>
        </Alert>:null
}
			{/* <div className="social-login">
				<h3>log in via</h3>
                <div class="social-icons">
					<a href="ww" class="social-login__icon fab fa-instagram"></a>
					<a href="www.google.com" class="social-login__icon fab fa-facebook"></a>
					<a href="#" class="social-login__icon fab fa-twitter"></a>
				</div>
				<div className="social-icons">
					
                    <Link  className='social-login__icon fab fa-instagram' to='www.instagram.com'></Link>
                    <Link  className="social-login__icon fab fa-facebook" to='www.facebook.com'></Link>
                    <Link  className="social-login__icon fab fa-twitter" to='www.twitter.com'></Link>
					
				</div>
			</div> */}
		</div>
		<div className="screen__background">
			{/* <span className="screen__background__shape screen__background__shape4"></span> */}
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
  )
}

export default Register

