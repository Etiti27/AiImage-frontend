import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate,Link, useParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { url } from './property';

function ResetFromEmail() {
   
  
    const navigate=useNavigate();
	const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
	const [userNotFound, setUserNotFound] = useState(false);
	const [passwordNotCorrect, setPasswordNotCorrect] = useState(false);
	const Reset=(e)=>{

		e.preventDefault();
		axios.post(`${url}/resetpass`,{
			
			password
		},{
            withCredentials: true,}).then((response)=>{
console.log(response);
// if(response.data==='not user found'){
// 	setUserNotFound(true);
// 	setPasswordNotCorrect(false)
	
// }
// else if(response.data===false){
// setPasswordNotCorrect(true);
// setUserNotFound(false);
// }else if(response.data===true){
// 	setPasswordNotCorrect(false);
// setUserNotFound(false);
// 	navigate('/upload')
// }
		})
	}
  return (
    <div className="container">
	<div className="screen">
		<div className="screen__content">
		<h2>Reset password</h2>
			<form className="login" onSubmit={Reset}>
				<h2>from email</h2>
				{/* <div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder="User name / Email" name='email'/>
				</div> */}
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" value={password} onChange={(e)=>{setPassword(e.target.value)}} name='password' placeholder="Password" />
				</div>
				<button className="button login__submit" type='submit'>
					<span className="button__text">Reset</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			{userNotFound?
        <Alert key='success' variant='success'>
          Username or email address not found! please register now
		  <div><Link to='/register'>Register</Link></div>
        </Alert>:null
}
{passwordNotCorrect?
        <Alert key='success' variant='success'>
         password is entered not correct!, please try again or reset your password
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

export default ResetFromEmail