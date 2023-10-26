import React,{useEffect, useState} from 'react';
import { url } from './property';
import axios from 'axios';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import spinner from '../resources/spinner.gif';
import Spinner from 'react-bootstrap/Spinner';
import DeleteForeverIcon from '@mui/icons-material/DeleteForeverOutlined';

// import image from '../photo/natrel.png';

function UploadFile() {
	
	const [isDataPresent, setIsDataPresent] = useState(false)
	const [datta, setDatta] = useState('');
    const [images, setImages] = useState([]);
	const [title, setTitle] = useState('');
	const [isUpload, setIsUpload] = useState(false);
	const [dataInDatabase, setDataInDatabase] = useState(false);

	const navigate = useNavigate();
	const location=useLocation();
	const data=location.state;

  const testChange=(e) => {
    const reader= new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload= () => {
    // console.log(reader.result);
    setDatta(reader.result);
    }
    
  }
const SubmitMe=(e) => {
	e.preventDefault();
	
    axios.post(`${url}/uploadimage`, {datta, title})
    .then((res)=>{
		console.log(res.data.result);
		if(res.data.result === 'found'){
			setIsUpload(false);
			setDataInDatabase(true);
		// 	setTimeout(() => {
		// 		setIsUpload(false);
		// 		window.location.reload();
		// 	}, 3000);
		}else{
			setIsUpload(true);
			setDataInDatabase(false);
			setTimeout(() => {
				setIsUpload(false);
				setDataInDatabase(false);
				window.location.reload();
			}, 2000);
		}
		
	})
	.catch(err => {console.log(err);})
};

useEffect(() => {
 axios.get(`${url}/uploadimage`).then((res)=>{
    setIsDataPresent(true);
    setImages(res.data.data);
 });
  
}, [])

  
const Submitt=(e)=>{
	e.preventDefault();
	const id=e.target.id.value;
	console.log(id);
	axios.post(`${url}/delete`,{id})
	.then(()=>{
		window.location.reload();
	}).catch((err)=>{console.log(err);})
}
  
// console.log(images[0]._id);
  return (
    <div>
       
<div>{data==='authenticated'? 
<div>
	
<div className="container">

	<div className="screen">
	
		<div className="screen__content">
		<form className="login" onSubmit={SubmitMe}>
		{isUpload? <div  style={{color: "red", fontSize:'20px'}}>Upload Successful!!</div>: null}
		{dataInDatabase? <div  style={{color: "red", fontSize:'20px'}}>Oop!!! Image file or title already exist, upload a new image or change the name</div>: null}
		<br />
				<div className="">
					<i className="login__icon fas fa-user"></i>
					<input type="file" className="form-control-file" onChange={testChange}  required name='uploaded_file'/>
					{/* <input type="file" className="form-control-file"   required name='uploaded_file'/> */}
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="text" className="login__input" name='title' value={title} onChange={(e)=>{setTitle(e.target.value)}} required placeholder="Title" />
				</div>
				<button className="button login__submit">
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
		
	</div>

</div>
<div>
 {!isDataPresent? <div><img className='loadin'src={spinner} alt="loading" srcset="" /></div>: 
 <div>
     

         <div class="intro">
            <h2 class="text-center">Natural Hair AI Images</h2>
            <p class="text-center">Find the AI Image gallery for our Natural Hair. click on any image to open gallary</p>
        </div>
    
<div class="lightbox-gallery">
    <div class="container">
       
        <div class="row photos">

        {images.map(image => {
          return <div class="col-sm-6 col-md-4 col-lg-3 item">
            <h3 className='title'>{image.fileName}</h3>

               <a href={image.file} data-lightbox="photos">
                <img class="img-fluid gallery-image" src={image.file} alt='pic'/></a>
				<form onSubmit={Submitt}>
					<input type="hidden" name='id' value={image._id} />
					<button type="submit"> <DeleteForeverIcon /></button>
				{/* <div className='delete' onClick={()=>{setDeleteItem(data._id)}}> <DeleteForeverIcon /></div> */}
				
				</form>
					
					
                <p className='uploadTime'>uploaded: {image.uploadTime.slice(0, 10)}</p>
                </div>
                

          })}

        </div>
    </div>
</div>
</div>}
</div>
</div>
: <div>
	you're not allowed to upload unless you login as administrator
	 <Link to="/login">Login</Link>
	</div>}</div>
	
    </div>
  )
}

export default UploadFile