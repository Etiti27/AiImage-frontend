
import './App.css';
import  Body from './Components/Body';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import UploadFile from './Components/UploadFile';
import FoundSearch from './Components/FoundSearch';
import Register from './Components/Register';
import ResetPassword from './Components/ResetPassword';
import ResetFromEmail from './Components/ResetFromEmail';


function App() {
  let {userId}=useParams();
  return (
    
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Body /> }>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="/login" element={<Header />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="upload" element={<UploadFile/>} />
        <Route path="found_search" element={<FoundSearch/>} />
        <Route path="register" element={<Register/>} />
        <Route path='reset' element={<ResetPassword/>} />
        <Route path='reset/:userid' element={<ResetFromEmail/>} />
      </Routes>
    </BrowserRouter>
      
   
  );
}

export default App;
