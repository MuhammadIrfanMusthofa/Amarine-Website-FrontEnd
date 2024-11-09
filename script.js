var popup = document.getElementById("popup-hapus");
var berhasilPopup = document.getElementById("popup-berhasil-hapus");
var berhasilSimpanPopup = document.getElementById("popup-berhasil-simpan");

function kembaliKeDetail() {
  setTimeout(function () {
    window.location.href = "tambahhasiltangkapan.html";
  }, 3000);
}

function tampilkanPopup() {
  popup.className = "popup-hapus-tampil";
}

function sembunyikanPopup() {
  popup.className = "popup-hidden-hapus";
}

function berhasilHapusPopup() {
  berhasilPopup.className = "popup-berhasil-hapus";
  popup.className = "popup-hidden-hapus";
  kembaliKeDetail();
  berhasilPopup.addEventListener("click", function () {
    window.location.href = "tambahhasiltangkapan.html";
  });
}

function tutupPopupWelcome() {
  document.querySelector(".popup-welcome").style.display = "none";
}

function tampilkanPopupBerhasil(event) {
  event.preventDefault();
  berhasilSimpanPopup.className = "popup-hapus-tampil";
  kembaliKeDetail();
  berhasilSimpanPopup.addEventListener("click", function () {
    window.location.href = "tambahhasiltangkapan.html";
  });
}

function tampilkanPopupBerhasilLogin(event) {
  event.preventDefault();
  berhasilSimpanPopup.className = "popup-hapus-tampil";

  setTimeout(function () {
    window.location.href = "login.html";
  }, 3000);

  berhasilSimpanPopup.addEventListener("click", function () {
    window.location.href = "login.html";
  });
}

function toggleFavorite(event, element) {
  event.preventDefault();
  if (element.getAttribute("src") === "assets/favorite.svg") {
    element.setAttribute("src", "assets/favorite-active.svg");
  } else {
    element.setAttribute("src", "assets/favorite.svg");
  }
}

function toggleFavorite2(event, element) {
  event.preventDefault();
  if (element.getAttribute("src") === "assets/favorite2.svg") {
    element.setAttribute("src", "assets/favorite-active.svg");
  } else {
    element.setAttribute("src", "assets/favorite2.svg");
  }
}

document
  .querySelectorAll(".main-content-tentang-kami-section-kedua-isi button")
  .forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none"; // Menutup konten
      } else {
        content.style.display = "block"; // Membuka konten
      }
    });
  });

document.querySelector(".extend-bar-lima").addEventListener("click", function () {
    const container = document.querySelector(
      ".main-content-tentang-kami-section-kedua-isi"
    );

    const content = document.querySelector(".isi-extend-bar-lima");
    content.style.display =
      content.style.display === "block" ? "block" : "none";
    if (content.style.display === "block") {
      container.style.paddingBottom = "30px";
    } else {
      container.style.paddingBottom = "0";
    }
  });

function togglePassword(passwordId) {
  const passwordInput = document.getElementById(passwordId);
  const openEyeIcon = document.getElementById(`open-eye-${passwordId}`);
  const closeEyeIcon = document.getElementById(`close-eye-${passwordId}`);

  // Toggle the input type between password and text
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";

  // Toggle visibility of the eye icons
  openEyeIcon.classList.toggle("d-none");
  closeEyeIcon.classList.toggle("d-none");
}

function toggleIngat() {
  const ingat = document.getElementById("ingat-btn");
  ingat.classList.toggle("active");
}

function moveToNext(currentInput, nextInputId) {
  // Pastikan hanya satu digit yang dimasukkan
  if (currentInput.value.length === 1) {
    document.getElementById(nextInputId).focus(); // Pindah ke input berikutnya
  }
}

document.addEventListener('DOMContentLoaded', function () {
  if (!localStorage.getItem('hasVisited')) {
    AOS.init({
      once: true, // Hanya 1x animasi untuk setiap elemen
    });
    
    // Tandai bahwa pengunjung sudah mengunjungi halaman
    localStorage.setItem('hasVisited', 'true');
  } else {
    // Nonaktifkan AOS jika sudah pernah mengunjungi
    document.body.classList.add('aos-disable');
  }
});
