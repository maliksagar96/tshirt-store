document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-include]").forEach((el) => {
    let file = el.getAttribute("data-include");
    fetch(file)
      .then((response) => response.text())
      .then((data) => {
        el.innerHTML = data;
      })
      .catch((err) => console.error("Include error:", err));
  });
});
