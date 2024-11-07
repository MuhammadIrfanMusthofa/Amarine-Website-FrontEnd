function validateLoginForm(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (!email || !password) {
        alert("Email dan kata sandi harus diisi.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Format email tidak valid.");
        return false;
    }

    alert("Login berhasil!");
    return true;
}

function validateRegisterForm(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById("register-email").value;
    const fullName = document.getElementById("register-fullname").value;
    const phone = document.getElementById("register-phone").value;
    const password = document.getElementById("register-password").value;
    const termsAccepted = document.getElementById("terms").checked;

    if (!email || !fullName || !phone || !password) {
        alert("Semua kolom harus diisi.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Format email tidak valid.");
        return false;
    }

    if (!termsAccepted) {
        alert("Anda harus menyetujui syarat dan ketentuan.");
        return false;
    }

    alert("Registrasi berhasil!");
    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function forgotPassword() {
    alert("Silakan periksa email Anda untuk mereset password.");
}