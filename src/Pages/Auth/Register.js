
import '../../Style/Register.css'
import google_icon from '../../Img/google-icon.png';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from './../../Components/Loading';
import axios from 'axios';
import { API, RegisterApi, EmailSend } from './../../Additions/API';
import Cookie  from 'universal-cookie';
import { Link, useNavigate } from 'react-router-dom';


export default function Register() {

    useEffect(() => {
        const animations = document.querySelectorAll('animateTransform');
        animations.forEach(anim => {
          anim.beginElement();
        });
      }, []);

      const [Form, SetForm] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      });


      const cookie = new Cookie();
      const [Flag, SetFlag] = useState(false);
      const [ErrorEmailDublacated, SetErrorEmailDublacated] = useState(false);
      const [IsSubmitted, SetIsSubmitted] = useState(false);
      const [IsLoading, SetIsLoading] = useState(false);
      const navigate = useNavigate();


      function HandleValues(e) {
        const { name, value} = e.target;
        SetForm({...Form, [name]: value});
      }

      useEffect(()=> {
        if (Form.name.length <= 16 &&
            Form.name.length >= 6 &&
            Form.email.length >= 12 &&
            Form.email.length <= 28 &&
            /\S+@\S+\.\S+/.test(Form.email) &&
            Form.password.length >= 8 &&
            Form.password.length <= 18 &&
            Form.password_confirmation == Form.password) {
            SetFlag(true);
        } else {
            SetFlag(false);
        }
      }, [Form]);

      
      async function Submitted(e) {
        e.preventDefault();
        SetIsLoading(true);
        SetIsSubmitted(true);
      
        if (Flag) {
          try {
            // خطوة: إرسال كود التحقق إلى الإيميل
            const res = await axios.post(`${API}${EmailSend}`, {
              email: Form.email,
            });
      
            SetIsLoading(false);
      
            // الخطوة التالية: نوجّه المستخدم إلى صفحة التحقق من الكود
            navigate("/checkVerification", { state: { formData: Form } });
      
          } catch (error) {
            console.log(error);
      
            if (error.status === 401) {
              SetErrorEmailDublacated(true);
            }
      
            SetIsLoading(false);
          }
        } else {
          SetIsLoading(false);
        }
      }

      useEffect(() => {
        document.title = "Register | Adel31_dz's Portfolio";
      }, []);
      
    return (

        <div id="body_auth">

{IsLoading && <Loading />}

        <a href={"/"}>
            <svg className="logo-auth" fill="none"  stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
        </a>




        <div className="center-auth-page">
            <div id="rotate_machine">
                <div id="mask_color_1"></div>
                <div id="mask_color_2"></div>
            </div>

            <div id="continer_saver_auth">
                <h1 className="title_auth">Register</h1>
                <p className="describe_registering">
                    Create Your Own Account Now, In My App, This Info Will Be Saved In Databaes Which It Can Be controlled In All Directions
                </p>


                <form className="form_auth" onSubmit={Submitted}>
                    <div id="dvider_auth_inputs">
                        <div className="child_divider_auth">
                        <label>
                            <input type="text"  name="name" placeholder=" " onChange={HandleValues} value={Form.name}/>
                            <span>Username:</span>
                        </label>
                        <p className="exp_auth">
                        {
            IsSubmitted == true && 
            (Form.name.length > 16 || Form.name.length < 6)

      ? (<span className="red_wrong">Name Must Be Between 6-16 Character</span>)

      : "Rules: Not Under 8 Letters"}

                            </p>
                    </div>
                    <div className="child_divider_auth">
                        <label>
                            <input type="text" name="email"  placeholder=" " onChange={HandleValues} value={Form.email}/>
                            <span>Email:</span>
                        </label>
                        <p className="exp_auth">
                        {
            IsSubmitted == true && 
            (Form.email.length < 12 ||
                Form.email.length > 28 ||
                !/\S+@\S+\.\S+/.test(Form.email))

      ?  (<span className="red_wrong">Email Must Be Valid And Between 12-28 Character</span>)
      
        : ErrorEmailDublacated ? <span className="red_wrong">Email Is Used Before In This App</span> : "Rules: Must Be Valid And Never Used In This App"}
                            
                            
                            
                            </p>
                    </div>
                    </div>
                    <label>
                        <input type="password" name='password'  placeholder=" " onChange={HandleValues} value={Form.password}/>
                        <span>Password:</span>
                    </label>
                    <p className="exp_auth">
                        
                {IsSubmitted == true && 
                (Form.password.length < 8 ||
                Form.password.length > 18)

      ? (<span className="red_wrong">Password Must Be Between 08-22 Character</span>)
      
      : "Rules: More Than 8 Letters, Less Than 22, Make It Hard And Difficult"}
                      
                        
                        </p>
                
                    <label>
                        <input type="password" name="password_confirmation"  placeholder=" " onChange={HandleValues} value={Form.password_confirmation}/>
                        <span>Password Confirmation:</span>
                    </label>
                    <p className="exp_auth">
                        
                        {IsSubmitted == true && 
                        Form.password_confirmation !== Form.password

      ? (<span className="red_wrong">Password Confirmation Are As Not As Password</span>)
      
      : "Type Same Password Below"}
                 
                        
                        </p>
                
                    <button className="submit_auth">Create Account</button>
                    <p className="ask_for_acc">You Have An Account? <a href={"/login"}>Log In</a></p>
                </form>
                
                <p className="or_auth">OR</p>

                <button id="google_auth"  onClick={() => {
  window.location.href = `${API}auth/google/redirect`;
}}><img src={google_icon} alt="Google Icon" className="google-icon-auth" /> Sign Up With Google</button>
                <p></p>
            </div>


        </div>


    </div>




    );
}