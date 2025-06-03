import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // ✅ استيراد Navigation
import "swiper/css";
import "swiper/css/navigation"; // ✅ استيراد CSS للأسهم

import slideShowImg1 from "../Img/test_card.jpeg";
import ImgPortfolio from "../Img/portfolio-3-img-607x562.jpg";
import "../Style/HomeStyle.css";

export default function SlideShow() {
  const cards = [
    { img: slideShowImg1, title: "Samsung A15", desc: "New Phone is Selling" },
    { img: ImgPortfolio, title: "Samsung A35", desc: "New Phone is Selling" },
    { img: slideShowImg1, title: "Samsung A35", desc: "New Phone is Selling" },
    { img: ImgPortfolio, title: "Samsung A35", desc: "New Phone is Selling" },
    { img: slideShowImg1, title: "Samsung A35", desc: "New Phone is Selling" },
  ];

  return (
    <Swiper
      modules={[Navigation]} // ✅ تفعيل الموديول
      navigation // ✅ تفعيل الأسهم
      spaceBetween={60}
      slidesPerView={3}
      loop={true}
    >
      {cards.map(({ img, title, desc }, index) => (
        <SwiperSlide key={index}>
          <article className="card_interface">
            <div className="image_continer_interface">
              <img src={img} alt={title} />
            </div>
            <article className="card_interface_details">
              <div className="flex_fourth_interface">
                <div className="continer_datails_interface">
                  <h1>{title}</h1>
                  <p>{desc}</p>
                </div>
                <div className="play_fourth_interface">
                  <i className="fa-solid fa-play" />
                </div>
              </div>
            </article>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
