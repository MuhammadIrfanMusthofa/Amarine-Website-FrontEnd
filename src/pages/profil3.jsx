import React from "react";

import * as script from "../script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PopupLogout from "../components/PopupLogout";
import NavbarMobile from "../components/NavbarMobile";

function profil3() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Header End */}

      {/* Main Content */}
      <div className="main-content">
        <div
          className="wrapper-main-content-tentang-kami"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
          <div className="main-content-profil-section-satu">
            <div className="main-content-profil-section-satu-background-image"></div>
            <div class="profil-info-section-satu">
              <img class="m-0" src="assets/pak bahrul.png" alt="Gambar" />
              <h3 class="profil-name">Pak Bahrul</h3>
            </div>
            <a href="profil1">
              <div className="link-profil-nav-satu ">
                <img src="assets/edit icon.svg" alt="" />
                Edit Profil
              </div>
            </a>
            <a href="profil2">
              <div className="link-profil-nav-dua">
                <img src="assets/key person icon.svg" alt="" />
                Ubah Kata Sandi
              </div>
            </a>
            <a href="profil3">
              <div className="link-profil-nav-tiga profil-nav-active">
                <img src="assets/setting icon.svg" alt="" />
                Pengaturan
              </div>
            </a>
            <div
              className="link-profil-nav-empat"
              onClick={() => script.tampilkanPopup()}
            >
              <img src="assets/logout icon.svg" alt="" />
              Keluar
            </div>
          </div>
          <div className="main-content-tentang-kami-section-kedua">
            <div className="main-content-profil-section-kedua-isi">
              <h2>Pengaturan</h2>
              <div className="wrapper-link-pengaturan">
                <a href="pengaturanlaporkanmasalah" className="link-pengaturan">
                  Laporkan Masalah
                  <i class="fas fa-angle-right ms-auto"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content End */}

      {/* Popup */}
      <PopupLogout />
      {/* Popup End */}

      {/* Footer */}
      <Footer />
      {/* Footer End */}

      {/* Navbar Mobile */}
      <NavbarMobile />
      {/* Navbar Mobile End*/}
    </div>
  );
}

export default profil3;
