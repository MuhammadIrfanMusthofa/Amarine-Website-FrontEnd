var popup = document.getElementById("popup-hapus");
var berhasilPopup = document.getElementById("popup-berhasil-hapus");
var berhasilSimpanPopup = document.getElementById("popup-berhasil-simpan");

function kembaliKeDetail() {
  setTimeout(function () {
    window.location.href = "index6.html";
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
    window.location.href = "index6.html";
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
    window.location.href = "index6.html";
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

const cards = document.querySelectorAll(
  ".card-main-content-panduan-dan-artikel-secondary"
);
if (cards.length == 3) {
  document.querySelector(".button-lainnya").style.display = "none";
}
let showMoreCounter = 0;

function showMoreCards() {
  showMoreCounter++;

  const start = showMoreCounter * 3;
  const end = start + 3;

  for (let i = start; i < end && i < cards.length; i++) {
    cards[i].style.display = "block";
  }

  if (end >= cards.length) {
    document.querySelector(".button-lainnya").style.display = "none";
  }
}

document
  .querySelectorAll(".main-content-tentang-kami-section-kedua-isi button")
  .forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";  // Menutup konten
      } else {
        content.style.display = "block";  // Membuka konten
      }
    });
  });

document
  .querySelector(".extend-bar-lima")
  .addEventListener("click", function () {
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
