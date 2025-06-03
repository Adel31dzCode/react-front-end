import '../../Style/CheckMail.css';
import { useEffect, useState } from 'react';
import Loading from './../../Components/Loading';
import axios from 'axios';
import { API, RegisterApi } from './../../Additions/API';
import Cookie from 'universal-cookie';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function CheckCode() {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('Type Code Above');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const cookie = new Cookie();
  const [Flag, SetFlag] = useState(false);
  const [InvalidCode, SetInvalidCode] = useState(false);
  const [ExpiredCode, SetExpiredCode] = useState(false);
  const [SomethingWrong, SetSomethingWrong] = useState(false);
  const [isSubmitted, SetisSubmitted] = useState(false);
  const [ReSending, SetReSending] = useState("Send Again");

  const location = useLocation();
  const { formData } = location.state || {};
  const email = formData?.email;


  useEffect(() => {
    const onlyNumbers = /^[0-9]+$/.test(code);
    if (code.length === 6 && onlyNumbers) {
      SetFlag(true); 
    } else {
      SetFlag(false); 
    }
  }, [code]);
  


  async function verifyCode(e) {
    e.preventDefault();
    setLoading(true);
    SetisSubmitted(true);

    if (Flag) {

      SetInvalidCode(false);
      SetExpiredCode(false);
      SetSomethingWrong(false);
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/email/verify-code', {
        email,
        code
      });

      console.log(res);

      // إذا تحقق الكود، نكمل عملية التسجيل
      const registerRes = await axios.post(`${API}${RegisterApi}`, formData);

      const accessToken = registerRes.data.access_token;
      const refreshToken = registerRes.data.refresh_token;

      cookie.set("Portfolio_AccessToken", accessToken, {
        path: "/",
        secure: true,
        sameSite: "strict"
      });
      cookie.set("Portfolio_RefreshToken", refreshToken, {
        path: "/",
        secure: true,
        sameSite: "strict"
      });

      navigate('/');
    } catch (err) {
      console.log(err);
      if (err.status === 400) {
        SetInvalidCode(true);
      } else if (err.status === 401) {
        SetExpiredCode(true);
        console.log("expired Code");
      } else {
        SetSomethingWrong(true);
      }
      setLoading(false);

    }
  } else {
    setLoading(false);

  }
  }


  async function Resend() {
    setLoading(true);
    if (ReSending === "Send Again") {
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/email/send-code', {email});
      SetReSending("Code Sent. (We Send Code Only 2 Times, Try To Type It This Time)");
      console.log(res);
      setLoading(false)

    } catch (error) {
      setLoading(false)

    }} else {
      setLoading(false)

    }
  
};

  

  return (
    <div id="body_auth">
      {loading && <Loading />}
      <a href="/">
        <svg className="logo-auth" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
          <path d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      </a>
      <div className="center-auth-page1">
        <div id="rotate_machine">
          <div id="mask_color_1"></div>
          <div id="mask_color_2"></div>
        </div>
        <div id="continer_saver_auth">
          <h1 className="title_auth">Verify Your Email</h1>
          <p className="describe_registering">
            We Sent A Code Via {email}. Check It And Type Code It Below.
          </p>
          <form className="form_auth1" onSubmit={verifyCode}>
            <label>
              <input
                type="text"
                name="code"
                placeholder=" "
                value={code}
                onChange={(e) => setCode(e.target.value)}
                maxLength="6"
              />
              <span>Code</span>

            </label>

           <p className="exp_auth">
  {
    InvalidCode ? <span className="red_wrong">Invalid Code</span>
    : ExpiredCode ? <span className="red_wrong">Code Expired. Click Re-send</span>
    : SomethingWrong ? <span className="red_wrong">Something went wrong. Please try again</span>
    : isSubmitted && code.length === 0 ? <span className="red_wrong">Code can't be empty</span>
    : isSubmitted && !/^[0-9]+$/.test(code) ? <span className="red_wrong">Code accepts only numbers</span>
    : isSubmitted && code.length < 6 ? <span className="red_wrong">Code must be 6 digits</span>
    : "Please type the code sent to " + email
  }
</p>



<button className="submit_auth" disabled={!Flag || loading}>
            {loading ? 'Verifying...' : 'Verify'}

            </button>
            <p className="ask_for_acc">Didn't receive? <span onClick={Resend} className="Resend_check">{ReSending}</span></p>
          </form>
        </div>
      </div>
    </div>
  );
}
