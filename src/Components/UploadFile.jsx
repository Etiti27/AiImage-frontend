import React,{useEffect, useState} from 'react';
import { url } from './property';
import axios from 'axios';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import spinner from '../resources/spinner.gif';
import Spinner from 'react-bootstrap/Spinner';
import DeleteForeverIcon from '@mui/icons-material/DeleteForeverOutlined';

// import image from '../photo/natrel.png';

function UploadFile() {
	const [files, setFiles]=useState('');
	const [title, setTitle]=useState('');
	const [deleteItemId, setDeleteItem]=useState('');
	const navigate = useNavigate();
	const location=useLocation();
	const data=location.state;

	const [datas, setDatas] = useState([]);
  const [isDataPresent, setIsDataPresent] = useState(false)

  
const Submitt=(e)=>{
	e.preventDefault();
	const id=e.target.id.value;
	console.log(id);
	axios.post(`${url}/delete`,{id})
	.then(()=>{
		window.location.reload();
	})

}
  
  useEffect(() => {

    
      axios.get(`${url}/home`)
      .then(res => {
        // console.log(res.data);
        setIsDataPresent(true)
        setDatas(res.data);
      })
      .catch((error) =>{console.log(error);})
  
    
   
  }, [])

  return (
    <div>
       
<div>{data==='authenticated'? 
<div>
<div className="container">
	<div className="screen">
		<div className="screen__content">
			<form className="login"  encType="multipart/form-data" method="post" action={`${url}/upload`}>
				<div className="">
					<i className="login__icon fas fa-user"></i>
					<input type="file" className="form-control-file"   required name='uploaded_file'/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="text" className="login__input" name='title' required placeholder="Title" />
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

        {datas.map(data => {
          return <div class="col-sm-6 col-md-4 col-lg-3 item">
            <h3 className='title'>{data.fileName}</h3>

               <a href={require(`../photo/${data.filefile}`)} data-lightbox="photos">
                <img class="img-fluid gallery-image" src={require(`../photo/${data.filefile}`)} alt='pic'/></a>
				<form onSubmit={Submitt}>
					<input type="hidden" name='id' value={data._id} />
					<button type="submit"> <DeleteForeverIcon /></button>
				{/* <div className='delete' onClick={()=>{setDeleteItem(data._id)}}> <DeleteForeverIcon /></div> */}
				
				</form>
					
					
                <p className='uploadTime'>uploaded: {data.uploadTime.slice(0, 10)}</p>
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