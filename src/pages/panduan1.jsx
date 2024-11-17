import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import NavbarMobile from "../components/NavbarMobile";

function panduan1() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Header End */}

      {/* Main Content */}
      <div className="main-content">
        <div
          className="main-search"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
          <input
            type="text"
            placeholder="Apa yang ingin kamu cari?"
            style={{ marginTop: "30px" }}
          />
          <button type="button">
            <img src="assets/Modify Button.png" alt="Modify" />
          </button>
        </div>
        <div
          className="wrapper-main-content-panduan-dan-artikel-secondary wrapper-main-content-panduan-dan-artikel wrapper-main-content-panduan-dan-artikel-2"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
          <div className="wrapper-main-content-panduan-dan-artikel-secondary-content-card wrapper-main-content-panduan-dan-artikel-secondary-content-card-2">
            <div className="wrapper-card-main-content-panduan-dan-artikel-secondary">
              <div
                className="card-main-content-panduan-dan-artikel-secondary"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/assets/artikel 1.png')`,
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
              </div>
              <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-content">
                <p className="deskripsi-content-sumber">
                  Sumber : Amarine Group
                </p>
                <p className="deskripsi-content-deskripsi">
                  Inovasi dalam Penangkapan Ikan untuk Masa Depan yang
                  Berkelanjutan
                </p>
                <a href="panduana2">Baca Selengkapnya</a>
              </div>
            </div>
            <div className="wrapper-card-main-content-panduan-dan-artikel-secondary">
              <div
                className="card-main-content-panduan-dan-artikel-secondary"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/assets/artikel 2.png')`,
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
              </div>
              <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-content">
                <p className="deskripsi-content-sumber">
                  Sumber : Kementrian Kelautan & Perikanan
                </p>
                <p className="deskripsi-content-deskripsi">
                  Muro, Tradisi Merawat Ekosistem Laut yang Berkelanjutan di
                  Lembata
                </p>
                <a href="panduan1">Baca Selengkapnya</a>
              </div>
            </div>
            <div className="wrapper-card-main-content-panduan-dan-artikel-secondary">
              <div
                className="card-main-content-panduan-dan-artikel-secondary"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/assets/artikel 3.png')`,
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
              </div>
              <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-content">
                <p className="deskripsi-content-sumber">Sumber : Kompas.com</p>
                <p className="deskripsi-content-deskripsi">
                  Tanpa BBM, Kapal Nelayan Inovasi Mahasiswa ITS Ramah
                  Lingkungan
                </p>
                <a href="panduan1">Baca Selengkapnya</a>
              </div>
            </div>
            <div className="wrapper-card-main-content-panduan-dan-artikel-secondary">
              <div
                className="card-main-content-panduan-dan-artikel-secondary"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/assets/artikel 4.jpg')`,
                }}
              >
                <span>02 Oktober 2024</span>
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
              </div>
              <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-content">
                <p className="deskripsi-content-sumber">
                  Sumber : Kementrian Kelautan & Perikanan
                </p>
                <p className="deskripsi-content-deskripsi">
                  Muro, Tradisi Merawat Ekosistem Laut yang Berkelanjutan di
                  Lembata
                </p>
                <a href="panduan1">Baca Selengkapnya</a>
              </div>
            </div>
            <div className="wrapper-card-main-content-panduan-dan-artikel-secondary">
              <div
                className="card-main-content-panduan-dan-artikel-secondary"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/assets/artikel 5.jpg')`,
                }}
              >
                <span>06 Oktober 2024</span>
                <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi">
                  <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-wrapper">
                    <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-kategori">
                      Inovasi
                    </div>
                    <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-kategori">
                      Nelayan
                    </div>
                  </div>
                  <p>Inovasi dalam Penangkapan</p>
                </div>
              </div>
              <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-content">
                <p className="deskripsi-content-sumber">
                  Sumber : Kementrian Kelautan & Perikanan
                </p>
                <p className="deskripsi-content-deskripsi">
                  Muro, Tradisi Merawat Ekosistem Laut yang Berkelanjutan di
                  Lembata
                </p>
                <a href="panduan1">Baca Selengkapnya</a>
              </div>
            </div>
            <div className="wrapper-card-main-content-panduan-dan-artikel-secondary">
              <div
                className="card-main-content-panduan-dan-artikel-secondary"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/assets/artikel 6.jpg')`,
                }}
              >
                <span>02 Oktober 2024</span>
                <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi">
                  <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-wrapper">
                    <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-kategori">
                      Inovasi
                    </div>
                    <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-kategori">
                      Nelayan
                    </div>
                  </div>
                  <p>Inovasi dalam Penangkapan</p>
                </div>
              </div>
              <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-content">
                <p className="deskripsi-content-sumber">
                  Sumber : Kementrian Kelautan & Perikanan
                </p>
                <p className="deskripsi-content-deskripsi">
                  Inovasi dalam Penangkapan Ikan untuk Masa Depan yang
                  Berkelanjutan
                </p>
                <a href="panduan1">Baca Selengkapnya</a>
              </div>
            </div>
          </div>
          <button className="selengkapnya-panduan-dan-artikel">
            Selengkapnya
          </button>
        </div>
      </div>
      {/* Main Content End */}

      {/* Footer */}
      <Footer />
      {/* Footer End */}

      {/* Navbar Mobile */}
      <NavbarMobile />
      {/* Navbar Mobile End*/}
    </div>
  );
}

export default panduan1;
