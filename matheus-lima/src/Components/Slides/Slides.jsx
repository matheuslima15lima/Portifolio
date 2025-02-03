import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./Slides.css"; // Importando o CSS próprio
import { Title } from "../Title/Title";

export const Slides = () => {
  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "JavaScript", icon: "📜" },
    { name: "C#", icon: "🎮" },
    { name: "SQL Server", icon: "🗄️" },
    { name: "HTML & CSS", icon: "🎨" },
  ];

  return (
    <div className="slide-container">
      <Title>Habilidades</Title>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper-container"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="skill-card">
              <span className="skill-icon">{skill.icon}</span>
              <p className="skill-name">{skill.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
