import React from 'react';
import logo from "../Img/pexels-blitzboy-1040945-Photoroom (3).png"
import icon1 from "../Icons/undraw_developer-avatar_f6ac.svg";
import icon2 from "../Icons/undraw_building-a-website_1wrp.svg";
import icon3 from "../Icons/undraw_personal-email_hfut.svg";
import icon4 from "../Icons/undraw_people-search_xpq4.svg";
import icon5 from "../Icons/undraw_accept-task_vzpn.svg";
import icon6 from "../Icons/undraw_metrics_5v8d.svg";

import Navbar from '../Components/Navbar';
import GlowingText from './../Components/GlowText';
import DoughnutChart from '../Components/DoughnutChart';
import MyLineChart from '../Components/MyLineChart';
import SlideShow from './../Components/SlideShow';
import "../Style/HomeStyle.css";
import { useEffect } from 'react';


export default function Home() {
  useEffect(() => {
    document.title = "Home | Adel31_dz's Portfolio";
  }, []);

  return (
    <div id='home_body'>
    <Navbar />

  <section id="sec_interface">
    <p id="portfolio_para_interface">Portfolio</p>
    <GlowingText />
    <div id="div_img_interface" data-aos="fade-in">
      <img src={logo} />
    </div>
    <div id="div_devider_content_interface">
      <div id="content-one">
        <h1 id="title_content_interface" data-aos="fade-up-right">
          Web Designer / Developer <br /> Full Stack{" "}
          <img
            className="icon_verticality_interface"
            src={icon1}
            height={32}
          />{" "}
          :
        </h1>
        <div id="flex_content_interface">
          <p className="chart_content_interface">
            {" "}
            <span className="color_interface">⁺</span> 50
            <br />
            <span className="resize_chart_interface">Website </span>
          </p>
          <p className="chart_content_interface">
            <span className="color_interface">⁺</span>5<br />
            <span className="resize_chart_interface">
              Years <span className="color_interface">Exp</span>
            </span>
          </p>
        </div>
        <p id="sub_title_content_interface" data-aos="fade-up-right">
          Freelancer{" "}
          <img
            style={{ padding: "0 10px" }}
            className="icon_verticality_interface"
            src={icon2}
            height={42}
          />
        </p>
        <p id="content_interface" data-aos="fade-up-right">
          Has Experience In: UI/UX Design, Back End Developing (Databases),
          Scripts Maker, Problem Solver
          <br /> <span className="color_interface">Available Now.</span>
        </p>
      </div>
      <div id="content-two">
        <h1 id="title_content_interface" data-aos="fade-up">
          Check Out <br /> My Skills Performence{" "}
          <img
            className="icon_verticality_interface"
            src={icon3}
            height={42}
          />{" "}
          :
        </h1>
        <a style={{ textDecoration: "none" }} href="#third_sec_interface">
          <button className="bookmarkBtn" data-aos="fade-up">
            <span className="IconContainer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </span>
            <p className="text">Scroll Down</p>
          </button>
        </a>
        <h1
          id="title_content_interface"
          data-aos="fade-up"
          className="padding_less_interface"
        >
          Contact Me In{" "}
          <img
            className="icon_verticality_interface"
            src={icon4}
            height={42}
          />{" "}
          :
        </h1>
        <div className="card" data-aos="fade-up">
          <a className="social-link1">
            <svg
              viewBox="0 0 16 16"
              className="bi bi-instagram"
              fill="currentColor"
              height={16}
              width={16}
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "white" }}
            >
              {" "}
              <path
                fill="white"
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
              />{" "}
            </svg>
          </a>
          <a className="social-link2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
            </svg>{" "}
          </a>
          <a className="social-link3">
            <svg
              viewBox="0 0 16 16"
              className="bi bi-discord"
              fill="currentColor"
              height={16}
              width={16}
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "white" }}
            >
              {" "}
              <path
                fill="white"
                d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
              />{" "}
            </svg>
          </a>
          <a className="social-link4">
            <svg
              viewBox="0 0 16 16"
              className="bi bi-whatsapp"
              fill="currentColor"
              height={16}
              width={16}
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "white" }}
            >
              {" "}
              <path
                fill="white"
                d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
              />{" "}
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section id="sec_interface_second">
    <div id="sider_one_interface" data-aos="fade-right">
      <p id="para_sec_interface">
        About <span className="background_class_interface">Me</span>{" "}
      </p>
      <h1 id="title_second_interface">My Skill Power:</h1>
      <p id="content_second_interface">
        I Started With HTML In 2020 Then I Moved To CSS Then Js With Full
        Projects Then I Went To Backend Field With PHP And Mysql Then Some
        Libries As React, Bootsrap, Laravel
      </p>
    </div>
    <div id="sider_two_interface" data-aos="fade-down">
      <DoughnutChart />
    </div>
  </section>
  <section id="third_sec_interface">
    <h1 id="title_third_interface" data-aos="fade-right">
      My <span className="color_interface">Progress </span>Skill:
    </h1>
    <MyLineChart />
  </section>
  <section id="fourth_sec_interface">
    <div id="sider_fourth_one">
      <p id="para_sec_interface" data-aos="fade-right">
        My <span className="background_class_interface">Projects :</span>{" "}
      </p>
      <h1 id="title_third_interface" data-aos="fade-right">
        My <span className="color_interface">Slide </span>Show:
      </h1>
      <p id="content_fourth_interface" data-aos="fade-right">
        I Started With HTML In 2020 Then I Moved To CSS Then Js With Full
        Projects Then I Went To Backend Field With PHP And Mysql Then Some
        Libries As React, Bootsrap, Laravel
      </p>
    </div>


    <div id="sider_fourth_two">

    <SlideShow />

</div>

  </section>
  <section id="statics_sec_interface">
    <div
      className="stats-container-interface"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <img
        className="svg_static_interface"
        src={icon5}
      />
      <img
        className="svg_static_interface_second"
        src={icon6}
      />
      <div className="stat-item">
        <div className="stat-content">
          <span className="number_static_interface">12K</span>
          <span className="text_static_interface">
            <span className="color_interface">
              Happy Customer <i className="fa-solid fa-face-smile" />
            </span>
          </span>
        </div>
      </div>
      <div className="stat-item">
        <div className="stat-content">
          <span className="number_static_interface">99</span>
          <span className="text_static_interface">
            <span className="color_interface">
              Business Plan <i className="fa-solid fa-briefcase" />
            </span>
          </span>
        </div>
      </div>
      <div className="stat-item">
        <div className="stat-content">
          <span className="number_static_interface">210</span>
          <span className="text_static_interface">
            <span className="color_interface">
              Complete Project <i className="fa-solid fa-bars-progress" />
            </span>
          </span>
        </div>
      </div>
      <div className="stat-item experience">
        <div className="stat-content">
          <span className="number_static_interface">10</span>
          <span className="text_static_interface">
            <span className="color_interface">
              Years Experience <i className="fa-solid fa-calendar-days" />
            </span>
          </span>
        </div>
      </div>
    </div>
  </section>
  <footer id="footer_interface">
    <div id="flex_fixer_footer_interface">
      <div id="container_one_footer">
        <div id="continer_combon_para_interface">
          <p className="cammon_para_web_interface_one" data-aos="fade-right">
            Let's
          </p>
          <p
            className="cammon_para_web_interface_two color_interface"
            data-aos="fade-up"
          >
            Build
          </p>
          <p className="cammon_para_web_interface_three" data-aos="fade-right">
            Together
          </p>
        </div>
        <div id="flex_footer_interface">
          <div className="sub_continer_footer_interface_one">
            <ul id="links_mission_footer">
              <li className="links_missions_footer" data-aos="fade-right">
                Developping Websites
              </li>
              <li className="links_missions_footer" data-aos="fade-right">
                Graphics Design
              </li>
              <li className="links_missions_footer" data-aos="fade-right">
                Unreal Engine
              </li>
            </ul>
          </div>{" "}
          {/* Close Continer Part 1 */}
          <div className="sub_continer_footer_interface_two">
            <div className="continer_details_contact_footer">
              <p className="title_footer" data-aos="fade-right">
                Contact
              </p>
              <p className="result_footer" data-aos="fade-right">
                Adelhamlil7@gmail.com
              </p>
            </div>
            <div className="ontiner_details_contact_footer">
              <p className="title_soial_media_footer">Or I Prefer In:</p>
              <div className="card1">
                <a className="social-link11">
                  <svg
                    viewBox="0 0 16 16"
                    className="bi bi-instagram"
                    fill="currentColor"
                    height={16}
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "white" }}
                  >
                    {" "}
                    <path
                      fill="white"
                      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                    />{" "}
                  </svg>
                </a>
                <a className="social-link22">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                  </svg>
                </a>
                <a className="social-link33">
                  <svg
                    viewBox="0 0 16 16"
                    className="bi bi-discord"
                    fill="currentColor"
                    height={16}
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "white" }}
                  >
                    {" "}
                    <path
                      fill="white"
                      d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
                    />{" "}
                  </svg>
                </a>
                <a className="social-link44">
                  <svg
                    viewBox="0 0 16 16"
                    className="bi bi-whatsapp"
                    fill="currentColor"
                    height={16}
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "white" }}
                  >
                    {" "}
                    <path
                      fill="white"
                      d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                    />{" "}
                  </svg>
                </a>
              </div>
            </div>
          </div>{" "}
          {/* Close Continer Part 2 */}
        </div>{" "}
        {/* Close Continer Of 2 Parts */}
      </div>{" "}
      {/* Close Continer Part 1 */}
      <div id="container_two_footer">
        <h1 id="title_contact_db">
          Or
          <br /> Contact:
        </h1>
        <form className="form-footer" data-aos="fade-right">
          <label>
            <span>Name:</span>
            <input required="" placeholder="" type="text" className="input" />
          </label>
          <label>
            <span>Email:</span>
            <input required="" placeholder="" type="text" className="input" />
          </label>
          <label>
            <span>Messege:</span>
            <textarea maxLength={255} defaultValue={""} />
            <p>0/255</p>
          </label>
          <button id="submit_footer_interface">Send</button>
        </form>
      </div>{" "}
      {/* Close Continer Part 2 */}
    </div>
    <div id="footer-end">
      Website By <span className="color_interface"> Adel31_dz</span>
    </div>
  </footer>
  {/* Splide JS */}
</div>

  );
}
