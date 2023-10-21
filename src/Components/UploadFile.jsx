import React from 'react';
import { url } from './property';

// import image from '../photo/natrel.png';

function UploadFile() {
  return (
    <div>
       


<div className="container">
	<div className="screen">
		<div className="screen__content">
			<form className="login"  enctype="multipart/form-data" method="post" action={`${url}/upload`}>
				<div className="">
					<i className="login__icon fas fa-user"></i>
					<input type="file" className="form-control-file"  name='uploaded_file'/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="text" className="login__input" name='title' placeholder="Title" />
				</div>
				<button className="button login__submit">
					<span className="button__text">Upload now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
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
		{/* console.log(image); */}
		{/* <img src={image} alt="" srcset="" /> */}
		<div className="screen__background">
			{/* <span className="screen__background__shape screen__background__shape4"></span> */}
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
    </div>
  )
}

export default UploadFile