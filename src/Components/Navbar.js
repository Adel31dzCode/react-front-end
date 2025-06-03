import react, { useState } from "react";
import { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import Cookie from 'universal-cookie';
import axiosClient from './../Additions/AxiosClient';
import Loading from "./Loading";
import avatar from "../Img/img_default_avatar.jpg";



export default function Navbar() {

  const cookie = new Cookie();
  const token = cookie.get("Portfolio_AccessToken");
  const [UserData, SetUserData] = useState([]);
  const [IsLoading, SetIsLoading] = useState(false);



  const navRef = useRef(null);
  const navHelperRef = useRef(null);
  const burger1Ref = useRef(null);
  const burger2Ref = useRef(null);
  const burger3Ref = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setMenuOpen(prev => !prev);
  };
  useEffect(() => {
    const nav = navRef.current;
    const nav_helper = navHelperRef.current;

    if (menuOpen) {
      nav_helper.classList.add("ActiveNav");
      burger1Ref.current.classList.add("ActiveBrgr1");
      burger2Ref.current.classList.add("ActiveBrgr2");
      burger3Ref.current.classList.add("ActiveBrgr3");
      nav.classList.add("scrolled");
    } else {
      nav_helper.classList.remove("ActiveNav");
      burger1Ref.current.classList.remove("ActiveBrgr1");
      burger2Ref.current.classList.remove("ActiveBrgr2");
      burger3Ref.current.classList.remove("ActiveBrgr3");
    }
  }, [menuOpen]);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navRef.current.classList.add("scrolled");
      } else {
        navRef.current.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (token) {
          SetIsLoading(true);
          const res = await axiosClient.get("/currentUser"); // صحح المسار إذا لزم
          console.log(res.data);      // البيانات الفعلية
          SetUserData(res.data);      // تخزين البيانات في الحالة
        }
      } catch (error) {
        SetIsLoading(false);
        console.error("Error fetching user:", error);
      }
      SetIsLoading(false);

    };
  
    fetchUser();
  }, [token]); // لاحظ أنه يجب وضع token في dependencies
  




    return (
        <nav id="nav_interface" ref={navRef}>
        <svg
          className="icon-arrow"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          width={24}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
        <div id="navbar_helper" ref={navHelperRef}>
          <ul id="ul_nav_interface">
            <a href="">
              <li className="link_nav_interface current-nav">
                <i className="fa-solid fa-house" /> Home
              </li>
            </a>
            <a href="#third_sec_interface">
              <li className="link_nav_interface ">
                <i className="fa-solid fa-atom" /> Skills
              </li>
            </a>
            <a href="">
              <li className="link_nav_interface ">
                <i className="fa-solid fa-gears" /> Dashboard
              </li>
            </a>
            <a href="">
              <li className="link_nav_interface ">
                <i className="fa-solid fa-comments" /> Contact
              </li>
            </a>
          </ul>

          {UserData && UserData.name ?
  <ul id="ul_logged_nav">
    <img className="avatar_user_nav" src={avatar}/>
    <span>Adel31_dz  <i className="fa-solid fa-chevron-down"></i></span>

    <ul id="sub_menu_nav">
      <li><i className="fa-solid fa-address-card"></i>  Profile</li>
      <li><i className="fa-solid fa-right-from-bracket"></i>   Log Out</li>
    </ul>
  </ul>

:


  <ul id="ul_auth_interface">
    <Link to={"/login"} className="auth_log">Login</Link>
    <Link to={"/register"} className="auth_log">Register</Link>
  </ul>
}



        </div>
        <div id="burger_menu_nav" onClick={toggleBurgerMenu}>
          <span className="part_burger_nav_one" ref={burger1Ref}/>
          <span className="part_burger_nav_two" ref={burger2Ref}/>
          <span className="part_burger_nav_three" ref={burger3Ref}/>
        </div>

        {IsLoading && <Loading />}

      </nav>



    )
}