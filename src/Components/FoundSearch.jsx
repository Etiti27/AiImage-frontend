import React, {useEffect, useState} from 'react';
import spinner from '../resources/spinner.gif';
import Spinner from 'react-bootstrap/Spinner';
import { useLocation, useNavigate } from 'react-router-dom';



function FoundSearch() {
const location=useLocation();
const [loading, setLoading]=useState(true);
const data=location.state;
const navigate=useNavigate();
// console.log(location.state);
  return (
     
    <div className=''>
        {data===null? <div> <img onClick={()=>{navigate(-1)}} className='go-back-arrow' src={require('../resources/back-arrow.png')} alt="" /><div className='blink'> image with the name is NOT found in the database </div> </div>:
        
      <div><img onClick={()=>{navigate(-1)}} className='go-back-arrow' src={require('../resources/back-arrow.png')} alt="" /> <div class="search-image"><h2>{data.fileName.toUpperCase()}</h2> <p className='search-uploaded-text'  >uploaded: {data.uploadTime.slice(0, 10)}</p><a href={require(`../photo/${data.filefile}`)} data-lightbox="photos"><img class="img-fluid" src={require(`../photo/${data.filefile}`)} alt='imagess'/></a></div>
     
       </div>
}
    </div>
   
  )
}

export default FoundSearch