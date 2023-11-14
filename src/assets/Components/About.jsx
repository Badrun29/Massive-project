import React from "react";
import LogoBawah from "../img2.png";

const About = () => {
  return (
    <div className="hero min-sm-screen bg-base-200 h-auto pb-6 pt-6">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={LogoBawah} className="max-w-sm rounded-ld ml-7" />
        <div>
          <h1 className="text-5xl font-bold">
            Kenapa Menggunakan Website ini?
          </h1>
          <p className="py-6">
            Kami berkomitmen untuk menyediakan sarana yang efektif dan efisien
            bagi Anda untuk menyampaikan keluhan, memberikan saran, dan
            berinteraksi dengan pemerintah daerah. Dengan mengakses website ini,
            Anda dapat mengajukan pengaduan secara online, memantau status
            keluhan, dan berpartisipasi aktif dalam meningkatkan kualitas hidup
            di komunitas Anda. Keamanan dan kerahasiaan informasi Anda adalah
            prioritas kami, dan melalui platform ini, kami membuka jembatan
            komunikasi antara warga dan pemerintah untuk menciptakan lingkungan
            yang lebih transparan dan responsif. Mari bersama-sama membangun
            masyarakat yang lebih baik dengan memberikan suara Anda melalui
            pengaduan yang Anda layangkan di sini. Terima kasih atas partisipasi
            Anda dalam memajukan kualitas hidup bersama-sama!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
