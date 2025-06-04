import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Auth/Register';
import Loading from './Components/Loading';
import Login from './Pages/Auth/Login';
import CheckCode from './Pages/Auth/CheckCode';
import GoogleSuccess from './Components/GoogleSuccess';
import GoogleError from './Components/Google-error';
import ProtectedRoute from './Additions/ProtectedRoute';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // المدة الزمنية للأنيميشن (بالملي ثانية)
      offset: 10, // ⬅️ كلما نقصت الرقم، زادت حساسية الظهور
      once: false,     // تشغيل الأنيميشن مرة واحدة فقط
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />}/>

    <Route element={<ProtectedRoute />}>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/checkVerification" element={<CheckCode />}/>

    </Route>

      <Route path="/google-success" element={<GoogleSuccess />} />
      <Route path="/google-error" element={<GoogleError />} />
  
    <Route path="/*" element={<GoogleError />} />


    </Routes>
  );
}

export default App;
