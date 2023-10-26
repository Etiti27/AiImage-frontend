import React,{useEffect, useState} from 'react';
import { url } from './property';
import axios from 'axios';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import spinner from '../resources/spinner.gif';
import Spinner from 'react-bootstrap/Spinner';
import DeleteForeverIcon from '@mui/icons-material/DeleteForeverOutlined';

// import image from '../photo/natrel.png';

function UploadTest() {
    const [datta, setDatta] = useState('');
    const [images, setImages] = useState([]);





  const testChange=(e) => {
    const reader= new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload= () => {
    console.log(reader.result);
    setDatta(reader.result);
    }
    
  }
const SubmitMe=() => {
    
    axios.post(`${url}/uploadimage`, {datta})
    .then((res)=>{console.log(res);})
};

useEffect(() => {
 axios.get(`${url}/uploadimage`).then((res)=>{
    console.log(res.data.data);
    setImages(res.data.data);
 });
  
}, [])


  return (
   

<div className="container">
	<div className="screen">
		<div className="screen__content">
			<form className="login" onSubmit={SubmitMe} encType="multipart/form-data">
				<div className="">
					<i className="login__icon fas fa-user"></i>
					<input type="file" className="form-control-file" onChange={testChange}  required name='uploaded_file'/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="text" className="login__input" name='title' required placeholder="Title" />
				</div>
				<button type='submit' className="button login__submit">
					<span className="button__text">Upload now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			
		</div>
		
		<div className="screen__background">
			{/* <span className="screen__background__shape screen__background__shape4"></span> */}
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>	

        <div>{images.map((image)=>{
            return <img src={image.file} alt="" srcset="" />
        })}</div>
		
	</div>

</div>

  )
	
}

export default UploadTest