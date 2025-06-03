import '../../Style/Login.css';
import google_icon from '../../Img/google-icon.png';
import { useEffect, useState } from 'react';
import Loading from './../../Components/Loading';
import axios from 'axios';
import { API, LoginApi } from './../../Additions/API';
import Cookie from 'universal-cookie';
import { Link, useNavigate } from 'react-router-dom';


export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [InvalidMatch, SetInvalidMatch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFlag, setFlag] = useState(false);
  const [EmailGoogle, SetEmailGoogle] = useState(false);
  const navigate = useNavigate();
  const cookie = new Cookie();

  useEffect(() => {
    const animations = document.querySelectorAll('animateTransform');
    animations.forEach(anim => anim.beginElement());
  }, []);

  useEffect(() => {
    const emailValid = /\S+@\S+\.\S+/.test(form.email);
    if(
      form.email.length >= 12 &&
      form.email.length <= 28 &&
      emailValid &&
      form.password.length >= 8 &&
      form.password.length <= 22
    ) {
        setFlag(true);
    }
  }, [form]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  async function Submitted(e) {
    e.preventDefault();
    setIsSubmitted(true);
    setIsLoading(true);

    if (isFlag) {
      try {
        SetEmailGoogle(false);
        SetInvalidMatch(false)
        const res = await axios.post(`${API}${LoginApi}`, form);

        cookie.set("Portfolio_AccessToken", res.data.access_token, {
          path: "/",
          secure: true,
          sameSite: "strict"
        });

        cookie.set("Portfolio_RefreshToken", res.data.refresh_token, {
          path: "/",
          secure: true,
          sameSite: "strict"
        });

        setIsLoading(false);
        navigate("/");
      } catch (error) {
        console.log("Login error:", error);
        if (error.response?.status === 422) {
          SetInvalidMatch(true);
        }
        if (error.status === 403) {
          SetEmailGoogle(true)
        }
        setIsLoading(false);
      }
    };
  };

  // دالة التعامل مع نجاح تسجيل دخول Google
  const handleGoogleLoginSuccess = async (credentialResponse) => {
    setIsLoading(true);
    try {
      const id_token = credentialResponse.credential;
      // ترسل التوكن للباك
      const res = await axios.post(`${API}auth/google-signin`, { id_token });

      cookie.set("Portfolio_AccessToken", res.data.access_token, {
        path: "/",
        secure: true,
        sameSite: "strict"
      });

      cookie.set("Portfolio_RefreshToken", res.data.refresh_token, {
        path: "/",
        secure: true,
        sameSite: "strict"
      });

      setIsLoading(false);
      navigate("/");
    } catch (error) {
      console.log("Google login error:", error);



      setIsLoading(false);
    }
  };
  console.log(EmailGoogle)
  return (
    <div id="body_auth">
      {isLoading && <Loading />}

      <a href="/">
        <svg className="logo-auth" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
          <path d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      </a>


      <div className="center-auth-page-login">
        <div id="rotate_machine">
          <div id="mask_color_1"></div>
          <div id="mask_color_2"></div>
        </div>

        <div id="continer_saver_auth">
          <h1 className="title_auth">Login</h1>
          <p className="describe_registering">
            Login With Your Account Now, Your Datas Are Saved In The App
          </p>

          <form className="form_auth" onSubmit={Submitted}>
            <label>
              <input
                type="text"
                name="email"
                placeholder=" "
                onChange={handleChange}
                value={form.email}
              />
              <span>Email:</span>
            </label>

            <label>
              <input
                type="password"
                name="password"
                placeholder=" "
                onChange={handleChange}
                value={form.password}
              />
              <span>Password:</span>
            </label>
            <p className="exp_auth">
  {isSubmitted ? 
    EmailGoogle 
        ? <span className="red_wrong">This Email Must Be Logining in With Google</span> 
        : InvalidMatch ? <span className="red_wrong">Invalid Email Or Password</span> : "Type Your Email And Password"
    : null}
</p>

            <button className="submit_auth">Login</button>
            <p className="ask_for_acc">Don't Have An Account? <Link to="/register">Register</Link></p>
          </form>

          <p className="or_auth">OR</p>


            <button id="google_auth"  onClick={() => {
              window.location.href = "http://localhost:8000/api/auth/google/redirect";
              }}><img src={google_icon} alt="Google Icon" className="google-icon-auth" />Login with Google
            </button>
            
            



        </div>
      </div>
    </div>
  );
}
