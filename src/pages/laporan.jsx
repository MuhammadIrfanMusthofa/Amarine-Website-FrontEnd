import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

function laporan() {
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
            <p>Laporan Hasil Nelayan</p>
            <div className="date-title ms-auto">
              <button type="button" href="laporan">
                <p>
                  14 Oktober 2024
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2em"
                    height="1.2em"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        stroke="black"
                        stroke-width="1.5"
                        d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"
                      />
                      <path
                        stroke="black"
                        stroke-linecap="round"
                        stroke-width="1.5"
                        d="M7 4V2.5M17 4V2.5M2.5 9h19"
                      />
                      <path
                        fill="black"
                        d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
                      />
                    </g>
                  </svg>
                </p>
              </button>
            </div>
          </div>
          <div className="secondary-title">
            <div className="secondary-main-title">
              <p>Total Kuantitas</p>
              <p className="ms-auto">429 Kg</p>
            </div>
            <div className="secondary-wrapper-jual">
              <a href="laporan"> Jual Hasil Tangkapan </a>
            </div>
          </div>
          <div className="third-content">
            <table>
              <thead>
                <tr>
                  <th>Nelayan</th>
                  <th>Jumlah Kuantitas (Kg)</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="assets/gambar profil.jpg" alt="Gambar Profil" />{" "}
                    Pak Bahrul
                  </td>
                  <td>50</td>
                  <td>
                    <a href="laporandetail"> Detail </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="assets/gambar profil.jpg" alt="Gambar Profil" />{" "}
                    Pak Bambang
                  </td>
                  <td>44</td>
                  <td>
                    <a href="laporan"> Detail </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="assets/gambar profil.jpg" alt="Gambar Profil" />{" "}
                    Pak Iwan
                  </td>
                  <td>38</td>
                  <td>
                    <a href="laporan"> Detail </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="assets/gambar profil.jpg" alt="Gambar Profil" />{" "}
                    Pak Agung
                  </td>
                  <td>67</td>
                  <td>
                    <a href="laporan"> Detail </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="assets/gambar profil.jpg" alt="Gambar Profil" />{" "}
                    Pak Djumadil
                  </td>
                  <td>41</td>
                  <td>
                    <a href="laporan"> Detail </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="assets/gambar profil.jpg" alt="Gambar Profil" />{" "}
                    Pak Widodo
                  </td>
                  <td>59</td>
                  <td>
                    <a href="laporan"> Detail </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="assets/gambar profil.jpg" alt="Gambar Profil" />{" "}
                    Pak Joko
                  </td>
                  <td>32</td>
                  <td>
                    <a href="laporan"> Detail </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="assets/gambar profil.jpg" alt="Gambar Profil" />{" "}
                    Pak Heru
                  </td>
                  <td>45</td>
                  <td>
                    <a href="laporan"> Detail </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="assets/gambar profil.jpg" alt="Gambar Profil" />{" "}
                    Pak Pengepul
                  </td>
                  <td>42</td>
                  <td>
                    <a href="laporan"> Detail </a>
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

      {/* Navbar Mobile */}
      <div className="wrapper-navbar-bottom d-none">
        <a href="laporan">
          <img src="assets/laporan icon active.svg" alt="Laporan" />
        </a>
        <a href="catatannelayan1">
          <img src="assets/catatan nelayan icon.svg" alt="Catatan Nelayan" />
        </a>
        <a href="catatanpengepul1">
          <img src="assets/catatan pengepul icon.svg" alt="Catatan Pengepul" />
        </a>
        <a href="stok">
          <img src="assets/stok icon.svg" alt="Stok" />
        </a>
      </div>
      {/* Navbar Mobile End*/}
    </div>
  );
}

export default laporan;
