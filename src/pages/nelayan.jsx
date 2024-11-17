import React from "react";

import * as script from "../script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavbarMobile from "../components/NavbarMobile";

function nelayan() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Header End */}

      {/* Main Content */}
      <div className="main-content container-fluid">
        <div
          className="wrapper-main-content"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
          <div className="main-title">
            <p>Informasi Nelayan</p>
          </div>
          <div className="third-content third-content-informasi-nelayan">
            <table>
              <thead>
                <tr>
                  <th>Nelayan</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <button
                      onClick={() => script.tampilkanPopupNelayan()}
                      className="link-avatar"
                    >
                      <img src="assets/pak bahrul.png" alt="Gambar Profil" />{" "}
                      Pak Bahrul
                    </button>
                  </td>
                  <td>
                    <a href="laporandetail"> Detail </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className="link-avatar">
                      <img src="assets/gambar profil.jpg" alt="Gambar Profil" />
                      Pak Bambang
                    </button>
                  </td>

                  <td>
                    <a href="/"> Detail </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className="link-avatar">
                      <img src="assets/gambar profil.jpg" alt="Gambar Profil" />
                      Pak Iwan
                    </button>
                  </td>
                  <td>
                    <a href="/"> Detail </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className="link-avatar">
                      <img src="assets/gambar profil.jpg" alt="Gambar Profil" />
                      Pak Agung
                    </button>
                  </td>
                  <td>
                    <a href="/"> Detail </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className="link-avatar">
                      <img src="assets/gambar profil.jpg" alt="Gambar Profil" />
                      Pak Djumadil
                    </button>
                  </td>
                  <td>
                    <a href="/"> Detail </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className="link-avatar">
                      <img src="assets/gambar profil.jpg" alt="Gambar Profil" />
                      Pak Widodo
                    </button>
                  </td>
                  <td>
                    <a href="/"> Detail </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className="link-avatar">
                      <img src="assets/gambar profil.jpg" alt="Gambar Profil" />
                      Pak Joko
                    </button>
                  </td>
                  <td>
                    <a href="/"> Detail </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className="link-avatar">
                      <img src="assets/gambar profil.jpg" alt="Gambar Profil" />
                      Pak Heru
                    </button>
                  </td>
                  <td>
                    <a href="/"> Detail </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className="link-avatar">
                      <img src="assets/gambar profil.jpg" alt="Gambar Profil" />
                      Pak Pengepul
                    </button>
                  </td>
                  <td>
                    <a href="/"> Detail </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Main Content End */}

      {/* Footer */}
      <Footer />
      {/* Footer End */}

      {/* Popup */}
      <div className="wrapper-avatar wrapper-avatar-nelayan">
        <div className="profile-card">
          <img src="assets/pak bahrul.png" alt="Profile" />
          <h2>Pak Bahrul</h2>

          <p>Nomor Telepon</p>
          <div className="info-box">081389083349</div>

          <p>Email</p>
          <div className="info-box">bahrulkece@gmail.com</div>

          <p>Tanggal Lahir</p>
          <div className="info-box">21 Oktober 1984</div>

          <p>Alamat</p>
          <div className="info-box">Batu Merah</div>
        </div>
      </div>
      {/* Popup End */}

      {/* Navbar Mobile */}
      <NavbarMobile />
      {/* Navbar Mobile End*/}
    </div>
  );
}

export default nelayan;
