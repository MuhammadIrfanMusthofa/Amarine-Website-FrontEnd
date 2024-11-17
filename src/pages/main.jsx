import React from "react";

import HeaderLogin from "../components/HeaderLogin";
import FooterLogin from "../components/FooterLogin";

function main() {
  return (
    <div>
      {/* Header */}
      <HeaderLogin />
      {/* Header End */}

      {/* Main Content */}
      <div className="main-content">
        <div className="wrapper-main-content-beranda-primary">
          <div className="main-content-text-beranda">
            <h2>
              Tingkatkan kesejahteraan nelayan dengan sistem pengelolaan stok
              yang efisien, transparan, dan terintegrasi!
            </h2>
            <h3>
              Selamat datang di platform pengelolaan stok perikanan! Kami
              menghubungkan nelayan lokal dengan kemudahan dalam mengelola
              laporan, data stok, riwayat penangkapan, serta bergabung dalam
              komunitas nelayan. Dapatkan akses ke panduan informatif, fitur
              pelacakan stok yang akurat, dan dukungan untuk pengelolaan
              perikanan berkelanjutan.
            </h3>
          </div>
          <div className="main-content-image-beranda">
            <img src="assets/logo.png" alt="" />
          </div>
        </div>
        <div className="wrapper-main-content-panduan-dan-artikel-secondary">
          <div className="wrapper-main-content-panduan-dan-artikel-secondary-header">
            Panduan
          </div>
          <div className="wrapper-main-content-panduan-dan-artikel-secondary-content">
            <div
              className="wrapper-main-content-panduan-dan-artikel-secondary-content-card"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <a
                href="login"
                className="card-main-content-panduan-dan-artikel-secondary"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('assets/artikel 1.png')`,
                }}
              >
                <span>15 Oktober 2024</span>
                <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi">
                  <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-wrapper">
                    <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-kategori">
                      Inovasi
                    </div>
                    <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-kategori">
                      Tangkapan
                    </div>
                  </div>
                  <p>Inovasi dalam Penangkapan</p>
                </div>
              </a>
              <a
                href="login"
                className="card-main-content-panduan-dan-artikel-secondary"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('assets/artikel 2.png')`,
                }}
              >
                <span>18 Oktober 2024</span>
                <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi">
                  <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-wrapper">
                    <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-kategori">
                      Tradisi
                    </div>
                    <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-kategori">
                      Nelayan
                    </div>
                  </div>
                  <p>Tradisi & Modernisasi Nelayan</p>
                </div>
              </a>
              <a
                href="login"
                className="card-main-content-panduan-dan-artikel-secondary"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('assets/artikel 3.png')`,
                }}
              >
                <span>22 Oktober 2024</span>
                <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi">
                  <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-wrapper">
                    <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-kategori">
                      Inovasi
                    </div>
                    <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-kategori">
                      Nelayan
                    </div>
                  </div>
                  <p>Inovasi untuk Nelayan</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content End */}

      {/* Footer */}
      <FooterLogin />
      {/* Footer End */}

      {/* Navbar Mobile */}
      <div className="wrapper-navbar-bottom d-none">
        <a href="login">
          <img src="assets/laporan icon.svg" alt="Laporan" />
        </a>
        <a href="login">
          <img src="assets/catatan nelayan icon.svg" alt="Catatan Nelayan" />
        </a>
        <a href="login">
          <img src="assets/catatan pengepul icon.svg" alt="Catatan Pengepul" />
        </a>
        <a href="login">
          <img src="assets/stok icon.svg" alt="Stok" />
        </a>
      </div>
      {/* Navbar Mobile End*/}
    </div>
  );
}

export default main;
