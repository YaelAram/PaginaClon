const campo = document.querySelector("md-outlined-text-field");

document.addEventListener("DOMContentLoaded", () => {
  const gmail = localStorage.getItem("gmail") ?? "";

  if (!gmail) return window.location.href = "/signin/gmail";
  document.querySelector('md-assist-chip').setAttribute('label', gmail);
});

document.querySelector("md-checkbox").addEventListener("change", (evt) => {
  const valor = evt.target.checked;

  if (valor) campo.type = "text";
  else campo.type = "password";
});

document.querySelector("form").addEventListener("submit", (evt) => {
  evt.preventDefault();

  localStorage.setItem("password", campo.value);
  window.location.href = "/signin/otp";
});
