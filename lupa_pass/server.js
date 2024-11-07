const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
require("dotenv").config();
const port = 3000;

// Gunakan body-parser untuk menangani request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Variabel untuk menyimpan OTP sementara
let storedOtp = "";
let userEmail = "";

// Setup transport untuk nodemailer (Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER, // Ambil dari variabel lingkungan .env
    pass: process.env.GMAIL_PASS, // Gunakan App Password jika otentikasi dua faktor aktif
  },
});

// Route untuk menampilkan halaman utama (index.html)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Route untuk menangani permintaan reset password
app.post("/forgot-password", (req, res) => {
  const { email } = req.body;
  userEmail = email; // Simpan email pengguna untuk pengiriman OTP nanti

  // Generate OTP acak
  storedOtp = Math.floor(10000 + Math.random() * 90000); // OTP 5 digit

  // Kirim OTP ke email pengguna menggunakan nodemailer
  const mailOptions = {
    from: process.env.GMAIL_USER, // Ganti dengan email Anda
    to: userEmail,
    subject: "OTP untuk Reset Kata Sandi",
    text: `Kode OTP Anda adalah: ${storedOtp}`, // Isi email dengan OTP
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log("Error:", err);
      res.status(500).send("Gagal mengirim OTP. Silakan coba lagi.");
    } else {
      console.log("OTP sent: " + info.response);
      res.redirect("/otp.html"); // Arahkan ke halaman OTP
    }
  });
});

// Route untuk menampilkan halaman OTP (otp.html)
app.get("/otp.html", (req, res) => {
  res.sendFile(path.join(__dirname, "otp.html"));
});

// Route untuk menangani verifikasi OTP
app.post("/verify-otp", (req, res) => {
  const { otp1, otp2, otp3, otp4, otp5 } = req.body;
  const enteredOtp = otp1 + otp2 + otp3 + otp4 + otp5; // Gabungkan OTP yang dimasukkan

  // Verifikasi OTP yang dimasukkan dengan yang disimpan
  if (enteredOtp === storedOtp.toString()) {
    res.redirect("/atur.html"); // Arahkan ke halaman reset kata sandi jika OTP valid
  } else {
    res.status(400).send("OTP yang Anda masukkan salah!");
  }
});

// Route untuk menampilkan halaman reset password (atur.html)
app.get("/atur.html", (req, res) => {
  res.sendFile(path.join(__dirname, "atur.html"));
});

// Route untuk menangani permintaan reset password
app.post("/reset-password", (req, res) => {
  const { newPassword, confirmPassword } = req.body;

  // Cek apakah kata sandi baru dan konfirmasi kata sandi cocok
  if (newPassword === confirmPassword) {
    // Di sini, Anda akan menyimpan password baru ke database
    console.log("Kata sandi berhasil diubah!");
    res.send("Kata sandi berhasil diubah!");
  } else {
    res.status(400).send("Kata sandi dan konfirmasi kata sandi tidak cocok!");
  }
});

// Menjalankan server pada port yang sudah ditentukan
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
