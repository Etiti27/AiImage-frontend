import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { url } from './property';
import Alert from 'react-bootstrap/Alert';

export default function Login() {
	const navigate=useNavigate();
	const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
	const [userNotFound, setUserNotFound] = useState(false);
	const [passwordNotCorrect, setPasswordNotCorrect] = useState(false);
	const SignIn=(e)=>{
		e.preventDefault();
		axios.post(`${url}/login`,{
			username,
			password
		}).then((response)=>{
console.log(response.data);
if(response.data==='authenticated'){
	navigate('/upload',{state:response.data});
	setUserNotFound(true);
	setPasswordNotCorrect(false)
	
}


		}).catch((error)=>{
			if(error.response.status===401){
				setPasswordNotCorrect(true)
			}
			
			console.log(error.response.status);
		});
	}
  return (
    <div className="container">
	<div className="screen">
		<div className="screen__content">
		<h2>LOGIN</h2>
			<form className="login" onSubmit={SignIn}>
				
				<h2>Please Login </h2>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="email" className="login__input" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder="Email" name='username'/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" value={password} onChange={(e)=>{setPassword(e.target.value)}} name='password' placeholder="Password" />
				</div>
				<button className="button login__submit" type='submit'>
					<span className="button__text">Log In Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			{userNotFound?
        <Alert key='success' variant='success'>
          Username or email address not found! 
		  {/* <div><Link to='/register'>Register</Link></div> */}
        </Alert>:null
}
{passwordNotCorrect?
        <Alert key='success' variant='success'>
         Username or password entered not correct!, please try again or reset your password
		  <div><Link to='/resetpassword'>Password Reset</Link></div>
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
