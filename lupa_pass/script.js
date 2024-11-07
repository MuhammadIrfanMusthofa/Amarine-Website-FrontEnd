const otpInputs = document.querySelectorAll(".otp-digit");
otpInputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value.length === 1 && index < otpInputs.length - 1) {
      otpInputs[index + 1].focus();
    }
  });
});
