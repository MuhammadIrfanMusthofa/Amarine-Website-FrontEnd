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
          <div className="wrapper-tabel-nelayan">
            <table className="tabel-nelayan">
              <thead>
                <tr>
                  <td>Nama</td>
                  <td>No Telepon</td>
                  <td>Email</td>
                  <td>Tanggal Lahir</td>
                  <td>Alamat</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                  <button
                      onClick={() => script.tampilkanPopupNelayan()}
                      className="link-avatar"
                    >
                    <div className="content-tabel-nelayan">
                      <img src="assets/pak bahrul.png" alt="" />
                      <span>Pak Bahrul</span>
                    </div>
                    </button>
                  </td>
                  <td>081389082249</td>
                  <td>bahrulkece@gmail.com</td>
                  <td>21 Oktober 1984</td>
                  <td>Batam, Batu Merah</td>
                </tr>
                <tr>
                  <td>
                    <div className="content-tabel-nelayan">
                      <img src="assets/gambar profil.jpg" alt="" />
                      <span>Pak Bambang</span>
                    </div>
                  </td>
                  <td>081323456789</td>
                  <td>bambang@gmail.com</td>
                  <td>10 November 1970</td>
                  <td>Batam, Batu Merah</td>
                </tr>
                <tr>
                  <td>
                    <div className="content-tabel-nelayan">
                      <img src="assets/gambar profil.jpg" alt="" />
                      <span>Pak Iwan</span>
                    </div>
                  </td>
                  <td>081323456987</td>
                  <td>Iwanoke.@gmail.com</td>
                  <td>15 Januari 1987</td>
                  <td>Batam, Batu Merah</td>
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
