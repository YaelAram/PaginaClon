const field = document.querySelector("md-outlined-text-field");

document.querySelector("form").addEventListener("submit", (evt) => {
  evt.preventDefault();

  localStorage.setItem("gmail", field.value);
  window.location.href = "/signin/password";
});
