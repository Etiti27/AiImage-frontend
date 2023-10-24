import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import spinner from '../resources/spinner.gif';
import Spinner from 'react-bootstrap/Spinner';
import { url } from './property';



function Gallery() {
  const [data, setData] = useState([]);
  const [isDataPresent, setIsDataPresent] = useState(false)

  
  useEffect(() => {

    
      axios.get(`${url}/home`)
      .then(res => {
        // console.log(res.data);
        setIsDataPresent(true)
        setData(res.data);
      })
      .catch((error) =>{console.log(error);})
  
    
   
  }, [])
  console.log(data);
  // const fetchInfo = async () => { 
  //   const res = await fetch(url);
  //   const d = await res.json();
  //   return setData(d); 
  //   }
    
  //   useEffect(() => {
  //     fetchInfo();
  //   }, [])
  // console.log(data);
  // console.log(data);
  
  return (
    
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

        {data.map(datas => {
          return <div class="col-sm-6 col-md-4 col-lg-3 item">
            <h3 className='title'>{datas.fileName}</h3>

               <a href={require(`../photo/${datas.filefile}`)} data-lightbox="photos">
                <img class="img-fluid gallery-image" src={require(`../photo/${datas.filefile}`)} alt='pic'/></a> 
                <p className='uploadTime'>uploaded: {datas.uploadTime.slice(0, 10)}</p>
                </div>
                

          })}

            {/*<div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/zmzERpe.jpg" data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/zmzERpe.jpg" alt=''/></a></div>
            <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/gX11Vt5.jpg" data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/gX11Vt5.jpg"/></a></div>
            <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/pZcUS2Y.jpg" data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/pZcUS2Y.jpg"/></a></div>
            <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/06Ajq7f.jpg" data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/06Ajq7f.jpg"/></a></div>
            <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/zmzERpe.jpg" data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/zmzERpe.jpg"/></a></div>
            <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/gX11Vt5.jpg" data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/gX11Vt5.jpg"/></a></div>
            <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/pZcUS2Y.jpg" data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/pZcUS2Y.jpg"/></a></div>
            <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/06Ajq7f.jpg" data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/06Ajq7f.jpg"/></a></div>
            <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/zmzERpe.jpg" data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/zmzERpe.jpg"/></a></div>
            <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/gX11Vt5.jpg" data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/gX11Vt5.jpg"/></a></div>
            <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/pZcUS2Y.jpg" data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/pZcUS2Y.jpg"/></a></div>
            <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/06Ajq7f.jpg" data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/06Ajq7f.jpg"/></a></div>
            <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/zmzERpe.jpg" data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/zmzERpe.jpg"/></a></div>
            <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/gX11Vt5.jpg" data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/gX11Vt5.jpg"/></a></div>
            <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/pZcUS2Y.jpg" data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/pZcUS2Y.jpg"/></a></div>
            <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/06Ajq7f.jpg" data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/06Ajq7f.jpg"/></a></div>
            <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/zmzERpe.jpg" data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/zmzERpe.jpg"/></a></div>
            <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/gX11Vt5.jpg" data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/gX11Vt5.jpg"/></a></div>
            <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/pZcUS2Y.jpg" data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/pZcUS2Y.jpg"/></a></div>
            <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/06Ajq7f.jpg" data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/06Ajq7f.jpg"/></a></div> */}
        </div>
    </div>
</div>
</div>}
</div>
  )
}

export default Gallery